#!/usr/bin/python3

#from models.student import Student
#from models.tutor import Tutor
from models.parent_model import ParentModel


"""student1 = Student()
student1.first_name = "Salau"
print(student1)
student1.save()

tutor1 = Tutor()
tutor1.first_name = "Isiaq"
print(tutor1)
tutor1.save()
"""
obj = ParentModel()
obj.save()
print(f'My id is {obj.id}')
print(f'I was created at {obj.created_at}')
print(f'I was updated at {obj.updated_at}')
print(obj.to_dict())
obj1 = ParentModel(**obj.to_dict())
obj1.save()
print("-------------------------------------")
print("-------------------------------------\n")
print(f'My id is {obj1.id}')
print(f'I was created at {obj1.created_at}')
print(f'I was updated at {obj1.updated_at}')
print(obj1.to_dict())
print(obj is obj1)
print(obj == obj1)
print(obj.to_dict() == obj1.to_dict())
