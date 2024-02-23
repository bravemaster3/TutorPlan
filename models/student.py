#!/usr/bin/python3
""" This module contains a class (Student) which inherit from User
    Class.
"""
from models.user import User


class Student(User):
    """A Student class that inherit from User"""
    pass



if __name__ == "__main__":
    obj = Student()
    print(f'My id is {obj.id}')
    print(f'I was created at {obj.created_at}')
    print(f'I was updated at {obj.updated_at}')
    obj.first_name = "Isiaq"
    print(obj.to_dict())
