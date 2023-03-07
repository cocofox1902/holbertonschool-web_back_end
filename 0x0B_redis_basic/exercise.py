#!/usr/bin/env python3
""" exercise.py
"""
import redis
import uuid
from functools import wraps
from typing import Union, Callable


def count_calls(method: Callable) -> Callable:
    """ count_calls method
    """
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ wrapper method
        """
        self._redis.incr(key)
        return method(self, *args, **kwargs)
    return wrapper


def call_history(method: Callable) -> Callable:
    """ call_history method
    """
    inputs = method.__qualname__ + ":inputs"
    outputs = method.__qualname__ + ":outputs"

    @wraps(method)
    def wrapper(self, *args, **kwargs):
        """ wrapper method
        """
        self._redis.rpush(inputs, str(args))
        value = method(self, *args, **kwargs)
        self._redis.rpush(outputs, value)
        return value
    return wrapper


def replay(method: Callable) -> None:
    """ replay method
    """
    inputs = method.__qualname__ + ":inputs"
    outputs = method.__qualname__ + ":outputs"
    count = method.__qualname__

    r = redis.Redis()
    count = r.get(count).decode('utf-8')
    print("{} was called {} times:".format(method.__qualname__, count))
    inputs = r.lrange(inputs, 0, -1)
    outputs = r.lrange(outputs, 0, -1)
    for i, o in zip(inputs, outputs):
        print("{}(*{}) -> {}".format(method.__qualname__, i.decode('utf-8'),
                                     o.decode('utf-8')))


class Cache:
    """ Cache class
    """
    def __init__(self) -> None:
        """ __init__ method
        """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
    def store(self, data: Union[str, bytes, int, float]) -> str:
        """ store method
        """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key, fn=None) -> str:
        """ get method
        """
        data = self._redis.get(key)
        if fn:
            return fn(data)
        return data

    def get_str(self, data) -> str:
        """ get_str method
        """
        return data.decode('utf-8')

    def get_int(self, data) -> int:
        """ get_int method
        """
        return int.from_bytes(data, 'big')
