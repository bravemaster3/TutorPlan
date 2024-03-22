#!/usr/bin/python3
""" This module contains the test cases for the Availability class """
from models.availability import Availability
from tests.test_models.test_parent_model import Test_ParentModel


class Test_Availability(Test_ParentModel):
    """This class contains the testcases for the Availability class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "Availability"
        self.value = Availability
