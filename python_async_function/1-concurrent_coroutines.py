#!/usr/bin/env python3
"""
Import wait_random from the previous python file
that you’ve written and write an async routine called wait_n
"""

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Return a list of all the delays
    """
    list_of_delays = []
    for i in range(n):
        list_of_delays.append(await wait_random(max_delay))
    return list_of_delays
