#!/usr/bin/python3
""" This module contains the test cases for the ParentModel class """
from models.parent_model import ParentModel
import unittest
import datetime


class Test_ParentModel(unittest.TestCase):
    """ the class for testing the ParentModel class """
    def __init__(self, *args, **kwargs):
        """init constructor"""
        super().__init__(*args, **kwargs)
        self.name = "ParentModel"
        self.value = ParentModel

    def setUp(self):
        """A method to execute at the beginning every test"""
        pass

    def tearDown(self):
        """A method to execute at the end every test"""
        try:
            os.remove("file.json")
        except Exception:
            pass

    def test_create_obj(self):
        """Test if an object is created"""
        obj = self.value()
        self.assertEqual(obj.__class__, self.value)

    def test_id(self):
        """Test if the id of an object is a string"""
        obj = self.value()
        self.assertEqual(type(obj.id), str)

    def test_dates(self):
        """Test if the updated_at and created_at is a datetime obj"""
        obj = self.value()
        self.assertEqual(type(obj.created_at), datetime.datetime)
        self.assertEqual(type(obj.updated_at), datetime.datetime)

    def test_unique_id(self):
        """Test if an id of an object is unique"""
        obj = self.value()
        obj1 = self.value()
        self.assertNotEqual(obj.id, obj1)

    def test_to_dict(self):
        """Test the to_dict method of an object"""
        obj = self.value()
        self.assertEqual(type(obj.to_dict()), dict)

    def test_create_with_dict(self):
        """Test if you can create a new object with another obj.to_dict()"""
        obj = self.value()
        obj1 = self.value(**obj.to_dict())
        self.assertNotEqual(obj, obj1)
        self.assertEqual(obj.to_dict(), obj1.to_dict())
