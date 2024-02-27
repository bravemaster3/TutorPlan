#!/usr/bin/python3

from datetime import datetime

obj = datetime.now()
obj_time = obj.time().strftime("%H:%M")
print(obj_time)
print(type(obj_time))
