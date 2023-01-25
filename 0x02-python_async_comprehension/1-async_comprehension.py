#!/usr/bin/env python3
""" 2-measure_runtime.py """
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension():
    """ 2-measure_runtime.py """
    return [i async for i in async_generator()]
