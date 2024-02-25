#!/usr/bin/python3

from models.tutor import Tutor
from models.course import Course
from models.availability import Availability


tutor = Tutor(first_name="koffi", last_name="koffi", email="koffi@gmail.com", password="13323", country="California")
tutor.save()
course = Course(title="Debugging", tutor_id=tutor.id, duration=2)
course.save()
print("This course is for isiaq ----", end="")
print(tutor.courses)
available = Availability(course_id=course.id, start_time="1:30", end_time="3:30")
available.save()
print("This is a course availability ---", end="")
print(course.availability)

