#!/usr/bin/env python3
""" SessionExpAuth module
"""

from api.v1.auth.session_auth import SessionAuth
import time

SESSION_DURATION = 0


class SessionExpAuth(SessionAuth):
    """ SessionExpAuth class
    """
    def __init__(self):
        """ Constructor
        """
        super().__init__()
        if SESSION_DURATION:
            self.session_duration = SESSION_DURATION
        else:
            self.session_duration = 0

    def create_session(self, user_id=None):
        """ Create session
        """
        session_id = super().create_session(user_id)
        if session_id:
            user_id = self.user_id_by_session_id.get(session_id)
            self.user_id_by_session_id[session_id] = {
                'user_id': user_id,
                'created_at': time.time()
            }
        return session_id

    def user_id_for_session_id(self, session_id=None):
        """ User ID for session ID
        """
        if session_id:
            session_dict = self.user_id_by_session_id.get(session_id)
            if session_dict:
                if self.session_duration <= 0:
                    return session_dict.get('user_id')
                if (time.time() - session_dict.get('created_at')) <= \
                        self.session_duration:
                    return session_dict.get('user_id')
        return None
