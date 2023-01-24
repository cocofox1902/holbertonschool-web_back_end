#!/usr/bin/env python3
""" 1-concurrent_coroutines.py """
wait_random = __import__('0-basic_async_syntax').wait_random
import asyncio


async def wait_n(n: int,max_delay: int):
    """ 1-concurrent_coroutines.py """
    list = []
    for i in range (n):
        list.append(wait_random(max_delay))
    return [await i for i in asyncio.as_completed(list)]
