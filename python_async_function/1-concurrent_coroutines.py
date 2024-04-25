#!/usr/bin/env python3
"""
Import wait_random from the previous python file that you’ve written and write an async routine called wait_n that takes in 2 int arguments (in this order): n and max_delay. You will spawn wait_random n times with the specified max_delay.

wait_n should return the list of all the delays (float values). The list of the delays should be in ascending order without using sort() because of concurrency.
"""

import asyncio
import random

async def wait_random(max_delay: int) -> float:
    """Return a random float between 0 and max_delay."""
    return random.uniform(0, max_delay)
