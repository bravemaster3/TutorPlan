#!/usr/bin/python3
""" This module contains a class (User) which Student and Tutor
    Class will inherit from
"""
from models.parent_model import ParentModel


class User(ParentModel):
    """A user class that inherit from ParentModel

    Class field attr:
        first_name: a string
        last_name: a string
        email: a string
        password: a string
        phone_number: a string
        country: a string
    """
    first_name = ""
    last_name = ""
    email = ""
    password = ""
    phone_number = ""
    country = ""


if __name__ == "__main__":
    obj = User()
    # print(obj)
    # print(str(type(obj)).split(".")[1].split("'")[0].strip())
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    obj.first_name = "salau"
    print(obj.to_dict())
