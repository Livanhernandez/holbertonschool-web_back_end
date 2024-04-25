#!/usr/bin/env python3
"""
From the previous file, import wait_n 
"""
import time
import asyncio
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n
    """
    start = time.time()
    asyncio.run(wait_n(n, max_delay))
    end = time.time()

    elpased_time = end - start

    return float((elpased_time) / n)
