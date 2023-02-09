#!/usr/bin/env python3
""" SessionAuth module2
"""
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
import os


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login():
    """ login method
    """
    email = request.form.get('email')
    password = request.form.get('password')
    if not email:
        return jsonify({"error": "email missing"}), 400
    if not password:
        return jsonify({"error": "password missing"}), 400
    users = User.search({"email": email})
    if not users:
        return jsonify({"error": "no user found for this email"}), 404
    for user in users:
        if not user.is_valid_password(password):
            return jsonify({"error": "wrong password"}), 401
        from api.v1.auth.session_auth import SessionAuth
        session_auth = SessionAuth()
        session_id = session_auth.create_session(user.id)
        session_name = os.getenv("SESSION_NAME")
        response = jsonify(user.to_json())
        response.set_cookie(session_name, session_id)
        return response


@app_views.route('/auth_session/logout',
                 methods=['DELETE'],
                 strict_slashes=False)
def logout():
    """ logout method
    """
    destroy_session = auth.destroy_session(request)
    if destroy_session:
        return jsonify({}), 200
    abort(404)
