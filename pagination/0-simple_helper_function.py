#!/usr/bin/env python3
"""
Write a function named index_range that takes two integer 
"""


def index_range(page, page_size):
    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
