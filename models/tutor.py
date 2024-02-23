#!/usr/bin/python3
""" This module contains a class (Tutor) which inherit from User
    Class.
"""
from models.user import User


class Tutor(User):
    """A Tutor class that inherit from User"""
    pass



if __name__ == "__main__":
    obj = Tutor()
    # print(obj)
    # print(str(type(obj)).split(".")[1].split("'")[0].strip())
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    obj.first_name = "salau"
    print(obj.to_dict())
