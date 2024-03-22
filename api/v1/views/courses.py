#!/usr/bin/python3
"""This module contains the api for courses in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.tutor import Tutor
from models.course import Course


@app_views.route("/courses", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_course():
    """This function handles an api that get all courses
        and create a course
    """
    if request.method == "GET":
        courses = storage.all(Course)
        courses_list = [course.to_dict() for course in courses.values()]
        return jsonify(courses_list)
    elif request.method == "POST":
        course_attr = request.get_json()
        if not course_attr:
            return abort(404, description="Not a json")
        must_have_attr = [
                "tutor_id", "title",
                "duration", "fee", "course_type",
                "category"
                ]
        for attr in must_have_attr:
            if attr not in course_attr.keys():
                abort(400, description="Missing " + attr)
        if not storage.get(Tutor, course_attr.get("tutor_id")):
            abort(404, description="Invalid tutor_id")
        newCourse = Course(**course_attr)
        newCourse.save()
        return jsonify(newCourse.to_dict()), 201


@app_views.route(
        "/courses/<course_id>", strict_slashes=False,
        methods=["GET", "PUT", "DELETE"]
        )
def get_put_delete_course(course_id):
    """This function handles an api that:
        Get a partcular course that belongs to the course id
        Update a particular course that belongs to the course id
        Delete a partcular course that belongs to the course id
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    if request.method == "GET":
        return jsonify(course.to_dict())
    elif request.method == "PUT":
        course_attr = request.get_json()
        if not course_attr:
            abort(404, description="Not a json")
        ignored_keys = ["id", "created_at", "updated_at", "tutor_id"]
        for key, value in course_attr.items():
            if key not in ignored_keys:
                setattr(course, key, value)
        course.save()
        return jsonify(course.to_dict()), 200
    elif request.method == "DELETE":
        if not course.availability and not course.students:
            storage.delete(course)
            storage.save()
            return jsonify({}), 200
        else:
            abort(400, description="referenced by table(s)")


@app_views.route(
        "/courses/<course_id>/students",
        strict_slashes=False, methods=["GET"]
        )
def get_course_students(course_id):
    """This function handles an api that
        Get all students that belong to a partcular course
    """
    course = storage.get(Course, course_id)
    if not course:
        abort(404)
    students_list = [student.to_dict() for student in course.students]
    return jsonify(students_list)
