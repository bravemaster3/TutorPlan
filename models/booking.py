#!/usr/bin/python3
""" This module contains a class (Booking) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel, Base
from sqlalchemy import Column, String, ForeignKey
import os


class Booking(ParentModel, Base):
    """A Booking class that inherit from ParentModel

    Class field attr:
        student_id: a string
        availability_id: a string
    """
    __tablename__ = "bookings"
    student_id = Column(String(60), ForeignKey("students.id"), nullable=False)
    availability_id = Column(
            String(60), ForeignKey("availability.id"),
            nullable=False
            )
