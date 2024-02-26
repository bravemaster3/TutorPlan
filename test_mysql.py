#!/usr/bin/python3

from models.tutor import Tutor
from models.course import Course
from models.availability import Availability
from models.student import Student
from models.booking import Booking


print("I would love to share the demo of our TUTORPLAN website")

# create a Tutor
tutor = Tutor(first_name="Salau", last_name="Isiaq", email="olakunleisiaq50@gmail.com", password="13323", country="Nigeria")
tutor.save()

# create a Course
course = Course(title="Data analytics", tutor_id=tutor.id, duration=2)
course.save()

print(f'\nI am {tutor.first_name} {tutor.last_name} who live in {tutor.country}. I teaches {tutor.courses[0].title}. You can email me at {tutor.email} for more enquiries\n')

# create a Student
student1 = Student(first_name="Koffi", last_name="Nmoumi", email="koffi@gmail.com", password="3837363a", country="Sweden")
student1.save()

# link student1 with a course
course.students.append(student1)

print(f"\nI am {student1.first_name} {student1.last_name} who live in {student1.country}. I am learning {student1.courses_registered[0].title}\n")

# create a Availability
available = Availability(course_id=course.id, start_time="1:30", end_time="3:30")
available.save()

print(f"Hello guys! Here are the availability of {course.title}:")
for aval in course.availability:
    print(f"---------start_time => {aval.start_time}")
    print(f"---------end_time => {aval.end_time}")
    print(f"---------booked? => {aval.booked}\n")

# create a Booking
booking = Booking(student_id=student1.id, availability_id=available.id)
booking.save()
# update the available for the course that student1 just booked
available.booked = True
available.save()

# checking if the availability for a course has been booked
print(f"Hello guys! Here are the availability of {course.title}")
for aval in course.availability:
    print(f"---------start_time => {aval.start_time}")
    print(f"---------end_time => {aval.end_time}")
    print(f"---------booked? => {aval.booked}\n")

# checking the bookings made by student1
print(f"Booking made by {student1.first_name} {student1.last_name} are: ")
for book in student1.bookings:
    print(f"---------start_time => {book.availability.start_time}")
    print(f"---------end_time => {book.availability.end_time}")
    print(f"---------booked? => {book.availability.booked}\n")

# checking the appointment for a tutor
print(f"Appointment for Tutor {tutor.first_name} {tutor.last_name} are: ")
for aval in course.availability:
    if aval.booked:
        print(f"I have an appointment between {aval.start_time} and {aval.end_time}\n")
