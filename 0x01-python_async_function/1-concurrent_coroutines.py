#!/usr/bin/env python3
""" 1-concurrent_coroutines.py """
import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ 1-concurrent_coroutines.py """
    list = []
    for i in range(n):
        list.append(wait_random(max_delay))
    return [await i for i in asyncio.as_completed(list)]
