#!/usr/bin/env python3
""" 2-measure_runtime.py """
wait_n = __import__('1-concurrent_coroutines').wait_n
import asyncio
import time


def measure_time(n: int ,max_delay: int) -> float:
    """ 2-measure_runtime.py """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()
    return end - start / n
