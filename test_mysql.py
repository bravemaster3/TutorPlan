#!/usr/bin/python3

from models.tutor import Tutor
from models.course import Course
from models.availability import Availability
from models.student import Student
from models.booking import Booking
from models import storage


print("I would love to share the demo of our TUTORPLAN website")

# create dumb names and emails
first_names = ["bello", "koffi", "isiaq", "balogun", "ogunde", "Amarachi", "Hassan", "Salau", "Bushura", "Adeshina", "Kuku", "Arowolo", "Adewunmi", "Bamidele"]

last_names = ["olakunle", "wasiu", "david", "mary", "patience", "aminat", "faridah", "zainab", "bukky", "khadijah", "ayomide", "paul", "lateef", "shina"]

emails = ["bello@gmail.com", "koffi@gmail.com", "isiaq@gmail.com", "balogun@gmail.com", "ogunde@gmail.com", "amarachi@gmail.com", "hassan@gmail.com", "salau@gmail.com", "bushura@gmail.com", "adeshina@gmail.com", "kuku@gmail.com", "arowolo@gmail.com", "adewunmi@gmail.com", "bamidele@gmail.com"]

for i in range(10):
    # create a Tutor
    tutor = Tutor(first_name=first_names[i], last_name=last_names[i], email=emails[i], password="13323", country="Nigeria", city="ogun", qualification="Degree")
    tutor.save()

    # create a Course
    course = Course(title="anp", tutor_id=tutor.id, duration=30, category="agric")
    course.save()

    print(f'\nI am {tutor.first_name} {tutor.last_name} who live in {tutor.country}. I teach {tutor.courses[0].title}. You can email me at {tutor.email} for more enquiries\n')

    # create a Student
    student1 = Student(first_name=first_names[i], last_name=last_names[i], email=emails[i], password="133acd23", country="Sweden", city="uganda")
    student1.save()

    # link student1 with a course
    course.students.append(student1)

    print(f"\nI am {student1.first_name} {student1.last_name} who live in {student1.country}. I am learning {student1.courses_registered[0].title}\n")

    # create a Availability
    available = Availability(course_id=course.id, start_time="1:00", end_time="3:00")
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

    print(storage.all(Course))
    print(storage.get("Availability", available.id))
    print(storage.count("Tutor"))
    print("\n..............END.................\n")
