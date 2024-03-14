#!/usr/bin/python3
""" This module contains the test cases for the Course class """
from models.course import Course
from tests.test_models.test_parent_model import Test_ParentModel


class Test_Course(Test_ParentModel):
    """This class contains the testcases for the Course class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "Course"
        self.value = Course
