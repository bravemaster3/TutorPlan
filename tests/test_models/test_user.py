#!/usr/bin/python3
""" This module contains the test cases for the User class """
from models.user import User
from tests.test_models.test_parent_model import Test_ParentModel


class Test_User(Test_ParentModel):
    """This class contains the testcases for the User class"""
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "User"
        self.value = User
