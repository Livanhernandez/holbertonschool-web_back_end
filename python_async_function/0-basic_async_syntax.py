#!/usr/bin/env python3
"""
Write an asynchronous
"""

import asyncio
import random


async def wait_random(max_delay: int = 10) -> float:
    """Waits for a random delay"""
    await asyncio.sleep(random.uniform(0, max_delay))
    return random.uniform(0, max_delay)
