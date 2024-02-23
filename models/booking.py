#!/usr/bin/python3
""" This module contains a class (Booking) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel


class Booking(ParentModel):
    """A Booking class that inherit from ParentModel

    Class field attr:
        student_id: a string
        availability_id: a string
    """
    student_id = ""
    availability_id = ""


if __name__ == "__main__":
    obj = Booking()
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    obj.title = "Agriculture"
    print(obj.to_dict())
