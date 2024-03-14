#!/usr/bin/python3
"""This module contains a codes that run when the package
     is imported.
"""
import os

if os.getenv("TUTORPLAN_TYPE_STORAGE") == "db":
    from models.engine.db_storage import DBStorage
    storage = DBStorage()
    storage.reload()
else:
    from models.engine.file_storage import FileStorage
    storage = FileStorage()
    storage.reload()
