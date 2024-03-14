#!/usr/bin/python3
"""This module contains the api that return the status of the
    Tutorplan restful api
"""
from api.v1.views import app_views
from flask import jsonify
from models import storage
from models.tutor import Tutor
from models.student import Student
from models.course import Course
from models.availability import Availability
from models.booking import Booking


@app_views.route("/status", strict_slashes=False)
def status():
    """return the status of the api"""
    return jsonify({"status": "OK"})

@app_views.route("/stats", strict_slashes=False)
def stats():
    """return the statistic of all classes"""
    classes_stat = {}
    classes = {
        "Course": Course, "Tutor": Tutor,
        "Availability": Availability, "Booking": Booking,
        "Student": Student
        }
    for key, value in classes.items():
        classes_stat[key] = storage.count(value)
    return jsonify(classes_stat)
