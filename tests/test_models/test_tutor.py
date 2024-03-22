#!/usr/bin/python3
""" This module contains the test cases for the Tutor class """
from models.tutor import Tutor
from models.user import User
from tests.test_models.test_parent_model import Test_ParentModel


class Test_Tutor(Test_ParentModel):
    """This class contains the testcases for the Tutor class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "Tutor"
        self.value = Tutor

    def test_parent_class(self):
        """Test if Student is a subclass of User"""
        self.assertTrue(issubclass(Tutor, User))
