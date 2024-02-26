#!/usr/bin/python3
""" This module contains a class (Availability) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel, Base
import datetime
from sqlalchemy import Column, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
import os


class Availability(ParentModel, Base):
    """An Availability class that inherit from ParentModel
        has the following attributes

    Class field attr:
        course_id: a string
        day: datetime
        start_time: a string
        end_time: a string
        booked: boolean
    """
    if os.getenv("TUTORPLAN_TYPE_STORAGE") == "db":
        __tablename__ = "availability"
        course_id = Column(String(60), ForeignKey("courses.id"), nullable=False)
        day = Column(DateTime, default=datetime.datetime.utcnow)
        start_time = Column(String(30), nullable=False)
        end_time = Column(String(30), nullable=False)
        booked = Column(Boolean, default=False)
        booking = relationship("Booking", uselist=False, backref="availability", cascade="all, delete, delete-orphan")
    else:
        course_id = ""
        day = datetime.datetime.now().date()
        start_time = ""
        end_time = ""
        booked = False

