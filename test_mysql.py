#!/usr/bin/python3

from models.tutor import Tutor

tutor = Tutor(email="salau@gmail.com", password="123", country="Nigeria")
tutor.save()
