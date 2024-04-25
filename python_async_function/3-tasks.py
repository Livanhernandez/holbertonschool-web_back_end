#!/usr/bin/env python3
"""
Import wait_random from 0-basic_async_syntax.
"""

import asyncio
import random

wait_random = __import__('0-basic_async_syntax').wait_random

async def task_wait_random(max_delay: int) -> asyncio.Task:
    """Return a task that waits a random amount of time."""
    delay = random.randint(0, max_delay)
    await wait_random(delay)
    return delay
