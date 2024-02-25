#!/usr/bin/python3
""" This module contains a class (Tutor) which inherit from User
    Class.
"""
from models.user import User, Base
from sqlalchemy.orm import relationship, backref
import os


class Tutor(User, Base):
    """A Tutor class that inherit from User"""
    __tablename__ = "tutors"
    if os.getenv('TUTORPLAN_TYPE_STORAGE') == 'db':
        courses = relationship("Course", backref=backref("tutor"))
