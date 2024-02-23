#!/usr/bin/python3
"""This module contains a codes that run when the package
     is imported.
"""
from models.engine.file_storage import FileStorage

storage = FileStorage()
storage.reload()
