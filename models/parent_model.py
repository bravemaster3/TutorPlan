#!/usr/bin/python3
"""This module contains a class(ParentModel) which all other classes
    will inherit from.
    """

import datetime
import uuid
import models


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
    def __init__(self, *arg, **kwargs):
        """init constructor of an object"""
        self.id = str(uuid.uuid4())
        self.created_at = datetime.datetime.now()
        self.updated_at = self.created_at
        models.storage.new(self)

    def __str__(self):
        """return the string implementation of an instance"""
        cls_name = self.__class__.__name__
        return '[{}] ({}) {}'.format(cls_name, self.id, self.__dict__)

    def to_dict(self):
        """convert an instance of ParentModel to a dictionary
            object
        """
        dict_attr = self.__dict__.copy()
        obj_class_name = self.__class__.__name__
        dict_attr.update({"__class__": obj_class_name})
        dict_attr["created_at"] = self.created_at.isoformat()
        dict_attr["updated_at"] = self.updated_at.isoformat()
        return dict_attr

    def save(self):
        """save an objects to a file"""
        models.storage.save()



if __name__ == "__main__":
    obj = ParentModel()
    # print(obj)
    # print(str(type(obj)).split(".")[1].split("'")[0].strip())
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    print(obj.to_dict())
