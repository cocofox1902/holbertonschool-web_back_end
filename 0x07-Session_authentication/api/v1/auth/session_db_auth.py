# #!/usr/bin/env python3
# """ SessionDBAuth module
# """

# from api.v1.auth.session_exp_auth import SessionExpAuth


# class SessionDBAuth(SessionExpAuth):
#     """ SessionDBAuth class
#     """
#     def create_session(self, user_id=None):
#         """ create_session method
#         """
#         if not user_id:
#             return None
#         session_id = super().create_session(user_id)
#         if not session_id:
#             return None
#         from models.user_session import UserSession
#         user_session = UserSession(user_id=user_id, session_id=session_id)
#         user_session.save()
#         return session_id

#     def user_id_for_session_id(self, session_id=None):
#         """ user_id_for_session_id method
#         """
#         if not session_id:
#             return None
#         from models.user_session import UserSession
#         user_session = UserSession.search({'session_id': session_id})
#         if not user_session:
#             return None
#         return user_session[0].user_id

#     def destroy_session(self, request=None):
#         """ destroy_session method
#         """
#         if not request:
#             return False
#         session_id = self.session_cookie(request)
#         if not session_id:
#             return False
#         from models.user_session import UserSession
#         user_session = UserSession.search({'session_id': session_id})
#         if not user_session:
#             return False
#         user_session[0].remove()
#         return True
