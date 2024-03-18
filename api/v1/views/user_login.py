#!/usr/bin/python3
"""This module contains the api that validate if a tutor or a student
    exists before allowing to login to Tutorplan website
"""
from api.v1.views import app_views
from flask import jsonify, request, abort
from models import storage
from models.tutor import Tutor
from models.student import Student


@app_views.route(
        "/tutor/login/<email>/<passwd>",
        strict_slashes=False, methods=["GET"]
        )
def validate_tutor(email, passwd):
    """validate a tutor before allowing to login"""
    tutors = storage.all(Tutor)
    for tutor in tutors.values():
        if tutor.email == email and tutor.password == passwd:
            tutor_dict = tutor.to_dict()
            # del tutor_dict["password"]
            return jsonify(tutor_dict)
    abort(404, description="Not a valid tutor")


@app_views.route(
        "/student/login/<email>/<passwd>",
        strict_slashes=False, methods=["GET"]
        )
def validate_student(email, passwd):
    """validate a student before allowing to login"""
    students = storage.all(Student)
    for student in students.values():
        if student.email == email and student.password == passwd:
            student_dict = student.to_dict()
            # del student_dict["password"]
            return jsonify(student_dict)
    abort(404, description="Not a valid student")
