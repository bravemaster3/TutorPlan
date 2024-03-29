#!/usr/bin/python3
"""This module contains the api for availability in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.course import Course
from models.availability import Availability
from models.student import Student
from datetime import datetime, timedelta
from models.tutor import Tutor


@app_views.route(
        "/availability", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_availability():
    """This function handles an api that get all availability
        and create a availability
    """
    if request.method == "GET":
        availability = storage.all(Availability)
        availability_list = []
        for availability in availability.values():
            availability_list.append(availability.to_dict())
        return jsonify(availability_list)
    elif request.method == "POST":
        availability_attr = request.get_json()
        if not availability_attr:
            return abort(404, description="Not a json")
        must_have_attr = ["course_id", "start_time", "day"]
        for attr in must_have_attr:
            if attr not in availability_attr.keys():
                abort(400, description="Missing " + attr)
        course = storage.get(Course, availability_attr.get("course_id"))
        if not course:
            abort(404, description="Invalid course_id")
        start_time = availability_attr.get("start_time")
        dur = course.duration
        end_time = datetime.fromisoformat(start_time) + timedelta(minutes=dur)
        end_time = end_time.strftime("%Y-%m-%d %H:%M:%S")
        availability_attr["end_time"] = end_time
        newAvailability = Availability(**availability_attr)
        newAvailability.save()
        return jsonify(newAvailability.to_dict()), 201


@app_views.route(
        "/availability/<availability_id>/available",
        strict_slashes=False, methods=["GET"]
        )
def get_availability(availability_id):
    """This function handles an api that:
        Get the availability that belongs to the availability_id
    """
    availability = storage.get(Availability, availability_id)
    if not availability:
        abort(404)
    return jsonify(availability.to_dict())


@app_views.route(
        "/availability/<course_id>/booked",
        strict_slashes=False, methods=["GET"]
        )
def get_booked_availability(course_id):
    """This function handles an api that:
        Get all booked availability of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    booked_availability = []
    for available in course.availability:
        if available.booked:
            booked_availability.append(available.to_dict())
    return jsonify(booked_availability)


@app_views.route(
        "/availability/<course_id>/unbooked",
        strict_slashes=False, methods=["GET"]
        )
def get_unbooked_availability(course_id):
    """This function handles an api that:
        Get all unbooked availability of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    unbooked_availability = []
    for available in course.availability:
        if not available.booked:
            unbooked_availability.append(available.to_dict())
    return jsonify(unbooked_availability)


@app_views.route(
        "/availability/<course_id>",
        strict_slashes=False, methods=["DELETE", "POST", "GET"]
        )
def delete_course_availability(course_id):
    """This function handles an api that
        Get all availabilities of a course
        Delete the availability or availabilities
            of a course if it has not been booked.
        Post the multiples availability of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    if request.method == "GET":
        availability_list = []
        for available in course.availability:
            availability_list.append(available.to_dict())
        return jsonify(availability_list)

    elif request.method == "DELETE":
        availability_ids = request.get_json()
        if not availability_ids:
            return abort(404, description="Not a json")
        if "availability_ids" not in availability_ids.keys():
            abort(400, description="Missing availability_ids")
        aval = availability_ids.get("availability_ids")
        if not aval or type(aval) is not list:
            abort(400, description="Empty list")
        for availability_id in aval:
            availability = storage.get(Availability, availability_id)
            if not availability:
                abort(404)
            if availability not in course.availability:
                return jsonify({}), 200
            for available in course.availability:
                if available.id == availability_id:
                    break
            if available.booking:
                abort(400, description="referenced by table(s)")
            else:
                storage.delete(available)
                storage.save()
                continue
        return jsonify({}), 201
    elif request.method == "POST":
        availability_attr = request.get_json()
        if not availability_attr:
            return abort(404, description="Not a json")
        must_have_attr = ["start_time", "day"]
        if not availability_attr.get("availability_attr"):
            abort(400, description="Missing availability_attr")
        availabilities = availability_attr.get("availability_attr")
        created_availabilities = []
        for aval_attr in availabilities:
            for attr in must_have_attr:
                if type(aval_attr) is not dict or attr not in aval_attr.keys():
                    abort(400, description="Missing " + attr)
            st_time = aval_attr.get("start_time")
            dur = course.duration
            end_time = datetime.fromisoformat(st_time) + timedelta(minutes=dur)
            end_time = end_time.strftime("%Y-%m-%d %H:%M:%S")
            aval_attr["end_time"] = end_time
            aval_attr["course_id"] = course.id
            newAvailability = Availability(**aval_attr)
            newAvailability.save()
            created_availabilities.append(newAvailability.to_dict())
        return jsonify(created_availabilities), 201


@app_views.route(
        "/availability/<tutor_id>/tutor",
        strict_slashes=False, methods=["GET"]
        )
def get_tutor_availabilities(tutor_id):
    """This function handles the api that
        Get all the availabilities of a tutor
    """
    tutor = storage.get(Tutor, tutor_id)
    if not tutor:
        abort(404)
    tutor_courses = tutor.courses
    availability_list = []
    for course in tutor_courses:
        for available in course.availability:
            availability_list.append(available.to_dict())
    return jsonify(availability_list)


@app_views.route(
        "/availability/<tutor_id>/completeTutorAval",
        strict_slashes=False, methods=["GET"]
        )
def get_booked_tutor_availability_with_some_details(tutor_id):
    """This function handles an api that:
        Get all booked availability of a tutor
        with some other details.
    """
    tutor = storage.get(Tutor, tutor_id)
    if not tutor:
        abort(404)
    full_aval_details = {}
    complete_tutor_availability = []
    tutor_courses = tutor.courses
    booked_availability_list = []
    for course in tutor_courses:
        for available in course.availability:
            if available.booked:
                booked_availability_list.append(available)
    for aval in booked_availability_list:
        details_dict = {}
        # adding availability details
        details_dict = aval.to_dict().copy()
        course_id = aval.course_id
        course = storage.get(Course, course_id)
        # adding course details
        course_dict = course.to_dict()
        if course_dict.get("availability"):
            del course_dict["availability"]
        details_dict["courseDetails"] = course_dict
        course_availability = course.availability
        temp_booked_aval = []
        # crosscheck this part probably i might later remove this for loop
        for available in course_availability:
            if available.booked:
                if available.id == aval.id:
                    # adding booking details
                    booking_dict = available.booking.to_dict()
                    details_dict["bookingDetails"] = booking_dict
                    break
        student_id = available.booking.student_id
        student = storage.get(Student, student_id)
        # adding student details
        details_dict["studentDetails"] = student.to_dict()
        complete_tutor_availability.append(details_dict)
    full_aval_details["availabilities"] = complete_tutor_availability
    return jsonify(full_aval_details)
