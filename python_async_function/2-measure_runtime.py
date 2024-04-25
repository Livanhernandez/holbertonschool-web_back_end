#!/usr/bin/env python3
"""
From the previous file, import wait_n 
"""

from typing import List
from typing import Union
import time
import wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the total execution time for wait_n
    """
    start = time.time()
    wait_n.wait_n(n, max_delay)
    end = time.time()
    total_time = end - start
    return total_time / n
