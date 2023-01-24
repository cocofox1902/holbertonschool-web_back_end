#!/usr/bin/env python3
""" 4-tasks.py """
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ 4-tasks.py """
    lists = [task_wait_random(max_delay) for _ in range(n)]
    return [await i for i in asyncio.as_completed(lists)]
