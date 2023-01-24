#!/usr/bin/env python3
""" 3-tasks.py """
wait_random = __import__('0-basic_async_syntax').wait_random
import asyncio


def task_wait_random(max_delay: int) -> asyncio.Task:
    """ 3-tasks.py """
    return asyncio.create_task(wait_random(max_delay))
