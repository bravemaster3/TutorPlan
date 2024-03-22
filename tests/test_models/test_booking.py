#!/usr/bin/python3
""" This module contains the test cases for the Booking class """
from models.booking import Booking
from tests.test_models.test_parent_model import Test_ParentModel


class Test_Booking(Test_ParentModel):
    """This class contains the testcases for the Booking class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "Booking"
        self.value = Booking
