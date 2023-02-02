#!/usr/bin/env python3
""" encrypt_password.py """
import bcrypt


def hash_password(password: str) -> bytes:
    """ hash_password function """
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed_password


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ is_valid function """
    return bcrypt.checkpw(password.encode(), hashed_password)
