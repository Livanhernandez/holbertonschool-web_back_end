#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into a new function task_wait_n. The code is nearly identical to wait_n except task_wait_random is being called.
"""
from typing import List
wait_n = __import__('1-concurrent_coroutines').wait_n

async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Return a list of floats of length n.
    """
    return await wait_n(n, max_delay)
