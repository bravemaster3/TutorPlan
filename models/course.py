#!/usr/bin/python3
""" This module contains a class (Course) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel, Base
from sqlalchemy import Column, String, Float, Integer, ForeignKey, Table
from sqlalchemy.orm import relationship, backref
import os

registration = Table(
        "registration", Base.metadata,
        Column(
            "course_id", String(60),
            ForeignKey(
                "courses.id", onupdate='CASCADE',
                ondelete="CASCADE"
                ),
            primary_key=True
            ),
        Column(
            "student_id", String(60),
            ForeignKey(
                "students.id", onupdate="CASCADE",
                ondelete="CASCADE"
                ),
            primary_key=True
            )
        )


class Course(ParentModel, Base):
    """A Course class that inherit from ParentModel

    Class field attr:
        tutor_id: a string
        title: a string
        duration: an integer
        course_format: a string
        fee: a float
        description: a string
    """
    __tablename__ = "courses"
    title = Column("title", String(128), nullable=False)
    tutor_id = Column(
            "tutor_id", String(60),
            ForeignKey("tutors.id"), nullable=False
            )
    duration = Column("duration", Integer, nullable=False)
    course_type = Column("course_format", String(30), default="remote")
    fee = Column("fee", Float, default=20.33)
    description = Column("description", String(1024), nullable=True)
    category = Column("category", String(60), nullable=False)
    academic_level = Column("academic_level", String(128), nullable=True)
    availability = relationship(
            "Availability", backref=backref("course"),
            cascade="all, delete-orphan"
            )
    students = relationship("Student", secondary=registration, viewonly=False)
