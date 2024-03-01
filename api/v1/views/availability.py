#!/usr/bin/python3
"""This module contains the api for availability in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.course import Course
from models.availability import Availability
from datetime import datetime, timedelta


@app_views.route("/availability", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_availability():
    """This function handles an api that get all availability
        and create a availability
    """
    if request.method == "GET":
        availability = storage.all(Availability)
        availability_list = [availability.to_dict() for availability in availability.values()]
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
        duration = course.duration
        end_time = (datetime.strptime(start_time, "%H:%M") + timedelta(minutes=duration)).time()
        end_time = end_time.strftime("%H:%M")
        availability_attr["end_time"] = end_time
        newAvailability = Availability(**availability_attr)
        newAvailability.save()
        return jsonify(newAvailability.to_dict()), 201

@app_views.route("/availability/<course_id>/booked", strict_slashes=False, methods=["GET"])
def get_booked_availability(course_id):
    """This function handles an api that:
        Get all booked availability of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    booked_availability = [available.to_dict() for available in course.availability if available.booked]
    return jsonify(booked_availability)

@app_views.route("/availability/<course_id>/unbooked", strict_slashes=False, methods=["GET"])
def get_unbooked_availability(course_id):
    """This function handles an api that:
        Get all unbooked availability of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    unbooked_availability = [available.to_dict() for available in course.availability if not available.booked]
    return jsonify(unbooked_availability)

@app_views.route("/availability/<availability_id>/course/<course_id>", strict_slashes=False, methods=["DELETE"])
def delete_course_availability(availability_id, course_id):
    """This function handles an api that
        Delete the availability of a course if it has not been booked.
    """
    availability = storage.get(Availability, availability_id)
    course = storage.get(Course, course_id)
    if not availability or not course:
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
        return jsonify({}), 201
