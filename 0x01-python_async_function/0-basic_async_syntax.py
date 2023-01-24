#!/usr/bin/env python3
""" 0-basic_async_syntax.py """
from asyncio import sleep
import random

async def wait_random(max_delay: int = 10) -> float:
    """ 0-basic_async_syntax.py """
    delay = random.uniform(0, max_delay)
    await sleep(delay)
    return delay
