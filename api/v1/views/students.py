#!/usr/bin/python3
"""This module contains the api for student in the tutorplan website"""
from api.v1.views import app_views
from flask import jsonify, abort, request
from models import storage
from models.student import Student
from models.course import Course


@app_views.route("/students", strict_slashes=False, methods=["GET", "POST"])
def get_and_post_student():
    """This function handles an api that get all students
        and create a student
    """
    students = storage.all(Student)
    if request.method == "GET":
        # students = storage.all(Student)
        students_list = [student.to_dict() for student in students.values()]
        return jsonify(students_list)
    elif request.method == "POST":
        student_attr = request.get_json()
        if not student_attr:
            return abort(404, description="Not a json")
        must_have_attr = ["email", "password", "country"]
        for attr in must_have_attr:
            if attr not in student_attr.keys():
                abort(400, description="Missing " + attr)
        # handle the case where the email already exists
        for student in students.values():
            if student.email == student_attr["email"]:
                return abort(409, description="Email already exists")
        newStudent = Student(**student_attr)
        newStudent.save()
        return jsonify(newStudent.to_dict()), 201


@app_views.route(
        "/students/<student_id>",
        strict_slashes=False,
        methods=["GET", "PUT", "DELETE"]
        )
def get_put_delete_student(student_id):
    """This function handles an api that:
        Get a partcular student that belongs to the student id
        Update a particular student that belongs to the student id
        Delete a partcular student that belongs to the student id
    """
    student = storage.get(Student, student_id)
    if not student:
        abort(404)
    if request.method == "GET":
        return jsonify(student.to_dict())
    elif request.method == "PUT":
        student_attr = request.get_json()
        if not student_attr:
            abort(404, description="Not a json")
        ignored_keys = ["id", "created_at", "updated_at", "email"]
        for key, value in student_attr.items():
            if key not in ignored_keys:
                setattr(student, key, value)
        student.save()
        return jsonify(student.to_dict()), 200
    elif request.method == "DELETE":
        if not student.bookings:
            storage.delete(student)
            storage.save()
            return jsonify({}), 200
        else:
            abort(400, description="referenced by table(s)")


@app_views.route(
        "/students/<student_id>/courses",
        strict_slashes=False, methods=["GET"]
        )
def get_student_courses(student_id):
    """This function handles an api that:
        Get all courses that belong to the student id
    """
    student = storage.get(Student, student_id)
    if not student:
        abort(404)
    courses = [obj.to_dict() for obj in student.courses_registered]
    return jsonify(courses)


@app_views.route(
        "/students/<student_id>/courses/<course_id>",
        strict_slashes=False, methods=["POST", "DELETE"]
        )
def post_delete_student(student_id, course_id):
    """This function handle the api that:
        Post/Register a student under a course
        Delete/Remove a student from a course
    """
    student = storage.get(Student, student_id)
    course = storage.get(Course, course_id)
    if not student or not course:
        abort(404)
    if request.method == "POST":
        if student in course.students:
            return jsonify(student.to_dict()), 200
        else:
            course.students.append(student)
            course.save()
            return jsonify(student.to_dict()), 201
    if request.method == "DELETE":
        if student not in course.students:
            abort(404)
        else:
            course.students.remove(student)
            course.save()
            return jsonify({}), 200


@app_views.route("/students/<student_id>/tutors", strict_slashes=False, methods=["GET"])
def get_student_tutors(student_id):
    """This function handle the api that:
        Get all the tutors of a student
    """
    student = storage.get(Student, student_id)
    if not student:
        abort(404)
    courses_registered = student.courses_registered
    tutors = []
    for course in courses_registered:
        tutors.append(course.tutor.to_dict())
    return jsonify(tutors)
