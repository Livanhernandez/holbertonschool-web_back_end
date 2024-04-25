#!/usr/bin/env python3
"""
Function element_lenght hat takes a list
    lst of strings as argument and returns a list
    of integers representing the lengths of the
    corresponding strings
"""
from typing import Iterable, List, Tuple


def element_lenght(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function element_lenght
    """
    return [(i, len(i)) for i in lst]
