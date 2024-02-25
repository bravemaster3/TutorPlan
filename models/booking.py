#!/usr/bin/python3
""" This module contains a class (Booking) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel


class Booking(ParentModel):
    """A Booking class that inherit from ParentModel

    Class field attr:
        student_id: a string
        availability_id: a string
    """
    student_id = ""
    availability_id = ""
