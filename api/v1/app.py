#!/usr/bin/python3
"""This is the entry point of the Restful API"""
from flask import Flask, jsonify
from models import storage
from api.v1.views import app_views
import os

app = Flask(__name__)
app.register_blueprint(app_views)


@app.teardown_appcontext
def close_session(exception):
    """close session after each request"""
    storage.close()

@app.errorhandler(404)
def page_not_found(error):
    """return 404 error when a page is not found"""
    return jsonify({"error": "***Not Found***"})


if __name__ == "__main__":
    HOST = os.getenv("TUTORPLAN_API_HOST", "0.0.0.0")
    PORT = os.getenv("TUTORPLAN_API_PORT", 5000)
    app.run(host=HOST, port=PORT, threaded=True)
