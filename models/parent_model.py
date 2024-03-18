#!/usr/bin/python3
"""This module contains a class(ParentModel) which all other classes
    will inherit from.
    """

import datetime
import uuid
import models
from sqlalchemy import Column, String, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()


class ParentModel():
    """The parent class for all other classes

        Instance field attributes:
            id: the unique id for an object
            created_at: the time when the object was created
            update_at: the time when the object was updated

        Instance methods:
            to_dict(): convert an object to a dictionary
            save(): save the object to the storage engine
            __str__: string implementation of an object
            save: save an object to a file
    """
    id = Column(String(60), nullable=False, unique=True, primary_key=True)
    created_at = Column(
            DateTime, nullable=False,
            default=datetime.datetime.utcnow()
            )
    updated_at = Column(
            DateTime, nullable=False,
            default=datetime.datetime.utcnow()
            )

    def __init__(self, *arg, **kwargs):
        """init constructor of an object"""
        self.id = str(uuid.uuid4())
        self.created_at = datetime.datetime.now()
        self.updated_at = self.created_at
        if kwargs:
            for key, value in kwargs.items():
                if key in ["created_at", "updated_at"]:
                    value = datetime.datetime.fromisoformat(value)
                if key not in ["__class__"]:
                    setattr(self, key, value)
        # models.storage.new(self)

    def __str__(self):
        """return the string implementation of an instance"""
        cls_name = self.__class__.__name__
        dict_copy = self.__dict__.copy()
        if dict_copy.get("_sa_instance_state"):
            del dict_copy["_sa_instance_state"]
        return '[{}] ({}) {}'.format(cls_name, self.id, dict_copy)

    def to_dict(self):
        """convert an instance of ParentModel to a dictionary
            object
        """
        dict_attr = self.__dict__.copy()
        if dict_attr.get("_sa_instance_state"):
            del dict_attr["_sa_instance_state"]
        if dict_attr.get("password"):
            del dict_attr["password"]
        obj_class_name = str(self.__class__.__name__)
        dict_attr.update({"__class__": obj_class_name})
        dict_attr["created_at"] = self.created_at.isoformat()
        dict_attr["updated_at"] = self.updated_at.isoformat()
        return dict_attr

    def save(self):
        """save an objects to a file"""
        self.updated_at = datetime.datetime.now()
        models.storage.new(self)
        models.storage.save()
