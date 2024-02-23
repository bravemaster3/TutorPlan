#!/usr/bin/python3
""" This module contains a class (Availability) which inherit from
    ParentModel class.
"""
from models.parent_model import ParentModel
import datetime


class Availability(ParentModel):
    """An Availability class that inherit from ParentModel
        has the following attributes

    Class field attr:
        course_id: a string
        day: datetime
        start_time: a string
        end_time: a string
        booked: boolean
    """
    course_id = ""
    day = datetime.datetime.now().date()
    start_time = ""
    end_time = ""
    booked = False


if __name__ == "__main__":
    obj = Availability()
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    print(obj.day.isoformat())
    print(obj.to_dict())
