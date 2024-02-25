#!/usr/bin/python3
""" This module contains a class (User) which Student and Tutor
    Class will inherit from
"""
from models.parent_model import ParentModel, Base
from sqlalchemy import Column, String
import os


class User(ParentModel):
    """A user class that inherit from ParentModel

    Class field attr:
        first_name: a string
        last_name: a string
        email: a string
        password: a string
        phone_number: a string
        country: a string
    """
    if os.getenv('TUTORPLAN_TYPE_STORAGE') == 'db':
        first_name = Column("first_name", String(128), nullable=True)
        last_name = Column("last_name", String(128), nullable=True)
        email = Column("email", String(128), nullable=False)
        password = Column("password", String(128), nullable=False)
        phone_number = Column("phone_number", String(128), nullable=True)
        country = Column("country", String(128), nullable=False)

    else:
        first_name = ""
        last_name = ""
        email = ""
        password = ""
        phone_number = ""
        country = ""
