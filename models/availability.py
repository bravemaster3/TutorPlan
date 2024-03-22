#!/usr/bin/python3
""" This module contains a class (Availability) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel, Base
import datetime
from sqlalchemy import Column, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
# from sqlalchemy.types import TIMESTAMP
import os
from tzlocal import get_localzone

start_def = datetime.datetime.now(
        get_localzone()
        ).strftime("%Y-%m-%d %H:%M %S")
end_def = datetime.datetime.now(
        get_localzone()
        ).strftime("%Y-%m-%d %H:%M %S")


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
    __tablename__ = "availability"
    course_id = Column(String(60), ForeignKey("courses.id"), nullable=False)
    day = Column(
            DateTime,
            default=datetime.datetime.now().date().strftime("%Y-%m-%d")
            )
    start_time = Column(
            DateTime,
            default=start_def
            )
    end_time = Column(
            DateTime,
            default=end_def
            )
    booked = Column(Boolean, default=False)
    booking = relationship(
            "Booking", uselist=False,
            backref="availability", cascade="all, delete, delete-orphan"
            )
