#!/usr/bin/python3

from models.tutor import Tutor
from models.course import Course
from models.availability import Availability
from models.student import Student
from models.booking import Booking
from models import storage
from datetime import datetime, timedelta
import random
from tzlocal import get_localzone
import hashlib


print("I would love to share the demo of our TUTORPLAN website")
"""
# create dumb names and emails
Tfirst_names = ["Bello", "Koffi", "Salau", "Balogun", "Ogunde", "Amarachi", "Hassan", "Bushura", "Patience", "Kuku", "Arowolo", "Adewunmi", "Oyelesi"]
Tlast_names = ["Imoleayo", "Dodji", "Isiaq", "Wasiu", "David", "Love", "Zainab", "Khadijat", "Otuke", "Olajuwon", "Murithador", "Abdulbasit", "Janet"]

Sfirst_names = ["Muhammed", "Arobieke", "Anigilaje", "Sulaimon", "Sanni", "Shangodipe", "Qamorudeen", "Cole", "Julien", "Utuedeye"]
Slast_names = ["Muhammed", "Salewa", "Ibrahim", "Mustapha", "Aminat", "Oluwaseun", "Hassanat", "Baido", "Barbier", "Lawrence"]

Temails = []
for name in Tfirst_names:
    email = name + "@gmail.com"
    Temails.append(email)

Semails = []
for name in Sfirst_names:
    email = name + "@gmail.com"
    Semails.append(email)

duration = list(range(20, 90, 5))
print(duration)

titles = ["Maths", "Piano", "Python", "Graphic Design", "Stylist", "Data analytics", "Branding", "Speak english like a pro", "C programming", "Arabic"]

categories = ["Education", "Music", "Programming", "Design", "Fashion", "Programming", "Design", "Language", "Programming", "Language"]

bios = []
for title in titles:
    bio = f"I teach {title}"
    bios.append(bio)

Tcountries = ["Morroco", "Nigeria", "Sweden", "Uganda", "USA", "Ghana", "Kenya", "Congo", "UK", "Japan", "China"]
Tcities = ["Casablanca", "Lagos", "Stockholm", "Kampala", "New York City", "Accra", "Nairobi", "Toronto", "London", "Tokyo", "Beijing"]

Scountries = ["France", "Australia", "Brazil", "Germany", "India", "Italy", "South Africa", "Argentina", "Russia", "Spain"]
Scities = ["Paris", "Sydney", "Rio de Janeiro", "Berlin", "Mumbai", "Rome", "Johannesburg", "Buenos Aires", "Moscow", "Madrid"]

academic_levels = ["high school", "University"]

for i in range(10):
    # create a Tutor
    hashed_password = hashlib.md5("13323".encode()).hexdigest()
    tutor = Tutor(first_name=Tfirst_names[i], last_name=Tlast_names[i], email=Temails[i], password=hashed_password, bio=bios[i], country=Tcountries[i], city=Tcities[i])
    tutor.save()

    # create a Course
    course = Course(title=titles[i], tutor_id=tutor.id, duration=duration[i], category=categories[i], academic_level=random.choice(academic_levels))
    course.save()

    print(f'\nI am {tutor.first_name} {tutor.last_name} who live in {tutor.country}. I teach {tutor.courses[0].title}. You can email me at {tutor.email} for more enquiries\n')

    # create a Student
    student1 = Student(first_name=Sfirst_names[i], last_name=Slast_names[i], email=Semails[i], password=hashed_password, country=Scountries[i], city=Scities[i])
    student1.save()

    # link student1 with a course
    course.students.append(student1)

    print(f"\nI am {student1.first_name} {student1.last_name} who live in {student1.country}. I am learning {student1.courses_registered[0].title}\n")

    # create a Availability
    local_timezone = get_localzone()
    delta = timedelta(minutes=duration[i])
    start_time = datetime.now(local_timezone)
    end_time = start_time + delta
    start_time = start_time.strftime("%Y-%m-%d %H:%M:%S")
    end_time = end_time.strftime("%Y-%m-%d %H:%M:%S")

    available = Availability(course_id=course.id, start_time=start_time, end_time=end_time)
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
    print(tutor.city)
    print("\n..............END.................\n")"""
