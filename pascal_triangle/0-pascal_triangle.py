#!/usr/bin/python3
"""Creates pascals triangle in code"""


def pascal_triangle(n):
    """Returns the triangle in a list format using the var n"""
    triangle = []

    for count in range(n):
        row = [1]

        if triangle:
            previous = triangle[-1]

            for index in range(len(previous) - 1):
                row.append(previous[index] + previous[index + 1])

            row.append(1)

        triangle.append(row)

    return triangle
