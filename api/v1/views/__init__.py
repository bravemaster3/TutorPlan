#!/usr/bin/python3
"""This is the blueprint of the Tutorplan website RestFul API"""
from flask import Blueprint

# create a blueprint
app_views = Blueprint("app_views", __name__, url_prefix="/api/v1")

# import all files that uses the blueprint
from api.v1.views.index import *
from api.v1.views.courses import *
from api.v1.views.tutors import *
from api.v1.views.students import *
from api.v1.views.bookings import *
from api.v1.views.availability import *
from api.v1.views.user_login import *

