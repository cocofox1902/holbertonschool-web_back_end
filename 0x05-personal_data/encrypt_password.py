#!/usr/bin/env python3
""" encrypt_password.py """
import bcrypt


def hash_password(password: str) -> bytes:
    hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
    return hashed_password


def is_valid(hashed_password: bytes, password: str) -> bool:
    return bcrypt.checkpw(password.encode(), hashed_password)
