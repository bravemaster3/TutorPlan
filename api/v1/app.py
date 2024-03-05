#!/usr/bin/python3
"""This is the entry point of the Restful API"""
from flask import Flask, jsonify
from models import storage
from api.v1.views import app_views
import os
from flask_cors import CORS
from flask_swagger_ui import get_swaggerui_blueprint

app = Flask(__name__)
app.register_blueprint(app_views)

cors = CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

app.config['JSONIFY_PRETTYPRINT_REGULAR'] = True
SWAGGER_URL="/swagger"
API_URL="/static/swagger.json"

swagger_ui_blueprint = get_swaggerui_blueprint(
    SWAGGER_URL,
    API_URL,
    config={
        'app_name': 'Access API'
    }
)
app.register_blueprint(swagger_ui_blueprint, url_prefix=SWAGGER_URL)


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
