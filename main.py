#!/usr/bin/python3

from models.student import Student
from models.tutor import Tutor

student1 = Student()
student1.first_name = "Salau"
print(student1)
student1.save()

tutor1 = Tutor()
tutor1.first_name = "Isiaq"
print(tutor1)
tutor1.save()
