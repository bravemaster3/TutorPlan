#!/usr/bin/python3
"""This module contains a class called FileStorage which
    act a a file storage engine for the TutorPlan console
"""
import json
from models.course import Course
from models.tutor import Tutor
from models.student import Student
from models.availability import Availability
from models.booking import Booking
import os


class FileStorage():
    """This FileStorage contains several fields and
        methods attribute.

        Private class attr:
            file_path: a string
            objects: a dict

        Instance methods:
            new: add an object to the objects dict
            save: save all objects in objects dict to a file
            all: return the objects dict
            delete: delete an object from the objects dict
            reload: reload all objects from the file to objects dict
    """
    __file_path = "file.json"
    __objects = {}

    def new(self, obj):
        """add obj to the objects dict"""
        key = "{}.{}".format(obj.__class__.__name__, obj.id)
        self.__objects[key] = obj

    def save(self):
        """save alll objects in the objects dict to the file"""
        with open(self.__file_path, "w", encoding="utf-8") as file_obj:
            new_objects_dict = {}
            for key, value in self.__objects.items():
                new_objects_dict[key] = value.to_dict()
            json.dump(new_objects_dict, file_obj)

    def all(self, cls):
        """return the objects dict if cls is None otherwise
            return all instances of cls
        """
        if not cls:
            return self.__objects
        new_dict = {}
        for key, value in self.__objects.items():
            if cls == value.__class__:
                new_dict[key] = value
        return new_dict

    def delete(self, obj):
        """delete obj from objects dict"""
        key = "{}.{}".format(obj.__class__, obj.id)
        if self.__objects.get(key):
            del self.__objects[key]

    def reload(self):
        """reload all objects from the file to objects dict"""
        if os.path.exists(self.__file_path):
            with open(self.__file_path, "r", encoding="utf-8") as file_obj:
                all_objects = json.load(file_obj)
                for key, value in all_objects.items():
                    cls = eval(value.get("__class__"))
                    new_obj = cls(**value)
                    self.__objects[key] = new_obj
