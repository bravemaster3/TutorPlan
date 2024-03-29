#!/usr/bin/python3
""" This module contains a class (Tutor) which inherit from User
    Class.
"""
from models.user import User, Base
from sqlalchemy.orm import relationship, backref
import os
from sqlalchemy import Column, String


class Tutor(User, Base):
    """A Tutor class that inherit from User"""
    __tablename__ = "tutors"
    bio = Column("bio", String(1024), nullable=True)
    courses = relationship(
            "Course", backref=backref("tutor"),
            cascade="all, delete-orphan"
            )
