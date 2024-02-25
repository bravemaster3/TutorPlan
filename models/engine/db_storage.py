#!/usr/bin/python3
"""This module defines the class to manage database storage for the
    TutorPlan website
"""
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from models.parent_model import Base
from models.course import Course
from models.tutor import Tutor

ValidClasses = [Course, Tutor]


class DBStorage():
    """This class is use to handle the MYSQL database for the
        TutorPlan website.

        Private class attributes:
            __engine: set to None
            __session: set to None

        Public instance methods:
            __init__:
            reload:
            new:
            save:
            delete:
            all:
    """
    __engine = None
    __session = None

    def __init__(self):
        """create an instance of engine with self.__engine and link it to
            the MYSQL database
            dialect: mysql
            driver: mysqldb
        """
        # retrive all environment variables that is neccessary to connect to the
        # tutorplan mysql server
        USER = os.getenv("TUTORPLAN_MYSQL_USER")
        PASSWD = os.getenv("TUTORPLAN_MYSQL_PWD")
        HOST = os.getenv("TUTORPLAN_MYSQL_HOST")
        DB_NAME = os.getenv("TUTORPLAN_MYSQL_DB")
        # create an instance of create_engine that link to the tutorplan mysql server
        self.__engine = create_engine('mysql+mysqldb://{}:{}@{}/{}'.format(USER, PASSWD, HOST, DB_NAME), pool_pre_ping=True)

        # drop all tables if the TUTORPLAN_ENV is "test"
        if os.getenv("TUTORPLAN_ENV") == "test":
            Base.metadata.drop_all(self.__engine)

    def reload(self):
        """Create all tables in the database and enable the self.__session"""
        Base.metadata.create_all(self.__engine)
        session_factory = sessionmaker(bind=self.__engine, expire_on_commit=False)
        self.__session = scoped_session(session_factory)

    def new(self, obj):
        """add an object to the database"""
        self.__session.add(obj)

    def save(self):
        """commit all updates to the database with the current session"""
        self.__session.commit()

    def delete(self, obj=None):
        """delete an object from the database if obj is not None"""
        if obj:
            self.__session.delete(obj)

    def all(self, cls=None):
        """return all objects of each classes otherwise return objects that belongs
            to cls if it's not None
        """
        objs_dict = {}
        if cls in ValidClasses:
            for obj in self.__session.query(cls).all():
                 key = "{}.{}".format(obj.__class__.__name__, obj.id)
                 objs_dict[key] = obj
        else:
            for table in Base.registry._class_registry.values():
                if hasattr(table, "__table__"):
                    for obj in self.session.query(table).all():
                         key = "{}.{}".format(obj.__class__.__name__, obj.id)
                         objs_dict[key] = obj
        return objs_dict

    def close(self):
        """close the current session"""
        self.__session.remove()

