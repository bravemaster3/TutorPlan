#!/usr/bin/python3
""" This module contains a class (Student) which inherit from User
    Class.
"""
from models.user import User, Base
import os
from sqlalchemy.orm import relationship
import hashlib


class Student(User, Base):
    """A Student class that inherit from User"""
    __tablename__ = "students"
    courses_registered = relationship(
            "Course", secondary="registration",
            back_populates="students", viewonly=False
            )
    bookings = relationship(
            "Booking", backref="student",
            cascade="all, delete, delete-orphan"
            )
