#!/usr/bin/python3
""" This module contains the test cases for the Student class """
from models.student import Student
from models.user import User
from tests.test_models.test_parent_model import Test_ParentModel


class Test_Student(Test_ParentModel):
    """This class contains the testcases for the Student class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "Student"
        self.value = Student

    def test_parent_class(self):
        """Test if Student is a subclass of User"""
        self.assertTrue(issubclass(Student, User))
