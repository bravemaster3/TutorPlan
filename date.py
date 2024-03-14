#!/usr/bin/python3

from datetime import datetime, timedelta

obj = datetime.now()
obj_time = obj.time().strftime("%H:%M")
print(obj_time)
print(type(obj_time))
# i wish to add minutes to this before converting it back to str obj
new_time = (datetime.strptime(obj_time, "%H:%M") + timedelta(minutes=30)).time()
print(new_time)
print(type(new_time))
print(new_time.strftime("%H:%M"))
