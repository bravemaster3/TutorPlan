#!/usr/bin/python3
""" This module contains a class (Course) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel


class Course(ParentModel):
    """A Course class that inherit from ParentModel

    Class field attr:
        tutor_id: a string
        title: a string
        duration: an integer
        course_format: a string
        fee: a float
        description: a string
    """
    tutor_id = ""
    title = ""
    duration = ""
    course_format = ""
    fee = 20.33
    description = ""


if __name__ == "__main__":
    obj = Course()
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    obj.title = "Agriculture"
    print(obj.to_dict())
