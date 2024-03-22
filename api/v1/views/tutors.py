#!/usr/bin/python3
"""This module contains the api for tutors in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.tutor import Tutor


@app_views.route("/tutors", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_tutor():
    """This function handles an api that get all tutors
        and create a tutor
    """
    tutors = storage.all(Tutor)
    if request.method == "GET":
        # tutors = storage.all(Tutor)
        tutors_list = [tutor.to_dict() for tutor in tutors.values()]
        return jsonify(tutors_list)
    elif request.method == "POST":
        tutor_attr = request.get_json()
        if not tutor_attr:
            return abort(404, description="Not a json")
        must_have_attr = ["email", "password", "country"]
        for attr in must_have_attr:
            if attr not in tutor_attr.keys():
                abort(400, description="Missing " + attr)
        # handle the case where the email already exists
        for tutor in tutors.values():
            if tutor.email == tutor_attr["email"]:
                return abort(409, description="Email already exists")
        newTutor = Tutor(**tutor_attr)
        newTutor.save()
        return jsonify(newTutor.to_dict()), 201


@app_views.route(
        "/tutors/<tutor_id>", strict_slashes=False,
        methods=["GET", "PUT", "DELETE"]
        )
def get_put_delete_tutor(tutor_id):
    """This function handles an api that:
        Get a partcular tutor that belongs to the tutor id
        Update a particular tutor that belongs to the tutor id
        Delete a partcular tutor that belongs to the tutor id
    """
    tutor = storage.get(Tutor, tutor_id)
    if not tutor:
        abort(404)
    if request.method == "GET":
        return jsonify(tutor.to_dict())
    elif request.method == "PUT":
        tutor_attr = request.get_json()
        if not tutor_attr:
            abort(404, description="Not a json")
        ignored_keys = ["id", "created_at", "updated_at", "email"]
        for key, value in tutor_attr.items():
            if key not in ignored_keys:
                setattr(tutor, key, value)
        tutor.save()
        return jsonify(tutor.to_dict()), 200
    elif request.method == "DELETE":
        if not tutor.courses:
            storage.delete(tutor)
            storage.save()
            return jsonify({}), 200
        else:
            abort(400, description="referenced by table(s)")


@app_views.route(
        "/tutors/<tutor_id>/courses", strict_slashes=False,
        methods=["GET"]
        )
def get_tutor_courses(tutor_id):
    """This function handles an api that:
        Get all courses that belong to the tutor id
    """
    tutor = storage.get(Tutor, tutor_id)
    if not tutor:
        abort(404)
    courses = [obj.to_dict() for obj in tutor.courses]
    return jsonify(courses)


@app_views.route("/tutors/<tutor_id>/students", strict_slashes=False, methods=["GET"])
def get_tutor_students(tutor_id):
    """This function handle the api that:
        Get all the students of a tutor
    """
    tutor = storage.get(Tutor, tutor_id)
    if not tutor:
        abort(404)
    courses_owned = tutor.courses
    students = []
    for course in courses_owned:
        for student in course.students:
            students.append(student.to_dict())
    return jsonify(students)
