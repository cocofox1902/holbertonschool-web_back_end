#!/usr/bin/env python3
""" SessionAuth module
"""
from api.v1.auth.auth import Auth
from uuid import uuid4
from models.user import User


class SessionAuth(Auth):
    """ SessionAuth class
    """
    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """ create_session method
        """
        if user_id is None:
            return None
        if not isinstance(user_id, str):
            return None
        session_id = str(uuid4())
        self.user_id_by_session_id[session_id] = user_id
        return session_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """ user_id_for_session_id method
        """
        if session_id is None:
            return None
        if not isinstance(session_id, str):
            return None
        return self.user_id_by_session_id.get(session_id)

    def current_user(self, request=None):
        """ current_user method
        """
        session_id = self.session_cookie(request)
        user_id = self.user_id_for_session_id(session_id)
        return User.get(user_id)

    def destroy_session(self, request=None):
        """ destroy_session method
        """
        if not request:
            return False
        session_cookie = self.session_cookie(request)
        if not session_cookie:
            return False
        user_id = self.user_id_for_session_id(session_cookie)
        if not user_id:
            return False
        self.user_id_by_session_id.pop(session_cookie)
        return True