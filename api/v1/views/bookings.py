#!/usr/bin/python3
"""This module contains the api for bookings in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.booking import Booking
from models.course import Course
from models.student import Student
from models.availability import Availability
import datetime


@app_views.route("/bookings", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_booking():
    """This function handles an api that get all bookings
        and create a booking
    """
    if request.method == "GET":
        bookings = storage.all(Booking)
        bookings_list = [booking.to_dict() for booking in bookings.values()]
        return jsonify(bookings_list)
    elif request.method == "POST":
        booking_attr = request.get_json()
        if not booking_attr:
            return abort(404, description="Not a json")
        must_have_attr = ["availability_ids", "student_id"]
        for attr in must_have_attr:
            if attr not in booking_attr.keys():
                abort(400, description="Missing " + attr)
        availability_ids = booking_attr.get("availability_ids")
        if not availability_ids or type(availability_ids) is not list:
            abort(400, description="Missing availability_ids")
        if not storage.get(Student, booking_attr.get("student_id")):
            abort(404, description="Invalid student_id")
        booking_list = []
        for availability_id in availability_ids:
            if not storage.get(Availability, availability_id):
                abort(404, description="Invalid availability_id")
            available = storage.get(Availability, availability_id)
            if available.booked:
                abort(400, description="It has already been booked")
            available.booked = True
            available.save()
            new_dict = {
                    "availability_id": availability_id,
                    "student_id": booking_attr.get("student_id")
                    }
            newBooking = Booking(**new_dict)
            newBooking.save()
            booking_list.append(newBooking.to_dict())
        return jsonify(booking_list), 201


@app_views.route(
        "/bookings/<student_id>/student",
        strict_slashes=False, methods=["GET"]
        )
def get_a_student_bookings(student_id):
    """This function handles an api that:
        Get all bookings of a student
    """
    student = storage.get(Student, student_id)
    if not student:
        abort(404)
    bookings_list = [booking.to_dict() for booking in student.bookings]
    return jsonify(bookings_list)


@app_views.route(
        "/bookings/<course_id>/course",
        strict_slashes=False, methods=["GET"]
        )
def get_a_course_bookings(course_id):
    """This function handles an api that:
        Get all bookings of a course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    booked_availability = []
    for aval in course.availability:
        if aval.booked:
            booked_availability.append(aval)
    bookings = []
    for aval in booked_availability:
        bookings.append(aval.booking.to_dict())
    return jsonify(bookings)


@app_views.route(
        "/bookings/<course_id>/course/<student_id>/student",
        strict_slashes=False, methods=["GET"]
        )
def post_delete_booking(student_id, course_id):
    """This function handle the api that:
        Get the bookings made by a student for a particular course
    """
    student = storage.get(Student, student_id)
    course = storage.get(Course, course_id)
    if not student or not course:
        abort(404)
    booked_availability = []
    for aval in course.availability:
        if aval.booked:
            booked_availability.append(aval)
    bookings = []
    for aval in booked_availability:
        if aval.booking.student_id == student_id:
            bookings.append(aval.booking.to_dict())
    return jsonify(bookings)


@app_views.route(
        "/bookings/<student_id>",
        strict_slashes=False, methods=["DELETE"]
        )
def delete_booking(student_id):
    """This function handle the api that:
        Delete the booking(s) of a student.
        Note: It makes the availablity booked available
            again if the appointment date has not been
            reached before the deletion
    """
    student = storage.get(Student, student_id)
    if not student:
        abort(404, description="Invalid student_id")
    booking_id_list = request.get_json()
    if "booking_ids" not in booking_id_list.keys():
        abort(400, description="Missing booking_ids")
    booking_ids = booking_id_list.get("booking_ids")
    for booking_id in booking_ids:
        booking = storage.get(Booking, booking_id)
        if not booking:
            abort(404, description="Invalid booking_id")
        if booking in student.bookings:
            for booking in student.bookings:
                if booking.id == booking_id:
                    break
            available = booking.availability
            present_date = datetime.datetime.now().date()
            if present_date < available.day.date():
                available.booked = False
                available.save()
            storage.delete(booking)
            storage.save()
        else:
            return jsonify({}), 200
    return jsonify({}), 201
