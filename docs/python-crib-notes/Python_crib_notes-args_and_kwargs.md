# `*args`, `**kwargs`, `*` and `**` <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [def func(`*args`): - **tuple** packing operator](#def-funcargs---tuple-packing-operator)
  - [Example](#example)
- [def func(`**kwargs`): - keyword **dict** packing operator)](#def-funckwargs---keyword-dict-packing-operator)
- [def func(`a`, `b`, `*args`, `**kwargs` ): - required order of arguments](#def-funca-b-args-kwargs----required-order-of-arguments)
  - [Example - NB: Iterate using kwargs.values()](#example---nb-iterate-using-kwargsvalues)
- [`*` iterable and `**` dict unpacking operators](#-iterable-and--dict-unpacking-operators)
  - [Examples](#examples)
<!-- /code_chunk_output -->

---

## def func(`*args`): - **tuple** packing operator

- Combines any number of positional arguments into a single argument that is an iterable, immutable, tuple.

- NB: The argument name can be any variable name, not just `args`.

### Example

```python
def my_sum(*integers):
    print("'integers' type =", type(integers))
    result = 0
    for x in integers:
        result += x
    return result

print("my_sum(1, 2, 3) =", my_sum(1, 2, 3))

# 'integers' type = <class 'tuple'>
# my_sum(1, 2, 3) = 6
```

## def func(`**kwargs`): - keyword **dict** packing operator)

- Combines any number of keyword (or named) positional arguments into a single argument that is an iterable, dictionary.

- NB: The name can be any variable name, not just `kwargs`.

## def func(`a`, `b`, `*args`, `**kwargs` ): - required order of arguments

- to create a function that takes a changeable number of both positional and named arguments, the required order of parameters is:

  - Standard arguments
  - `*args` arguments
  - `**kwargs` arguments

- E.g.;

```python
# correct_function_definition.py;
def my_function(a, b, *args, **kwargs):
    pass

# wrong_function_definition.py
def my_function(a, b, **kwargs, *args):
    pass
```

### Example - NB: Iterate using kwargs.values()

```python
def concatenate(**kwargs):
    result = ""
    # Iterating over the Python kwargs dictionary
    for arg in kwargs.values():  # NB: Without .values(), iterates through keys!
        result += arg
    return result

print(concatenate(a="Real", b="Python", c="Is", d="Great", e="!"))

# RealPythonIsGreat!
```

## `*` iterable and `**` dict unpacking operators

- Unpacks contents of iterables and dictionaries as individual arguments to pass into functions

### Examples

```python
l1 = [1, 2, 3]
l2 = [4, 5]
l3 = [6, 7, 8, 9]

print("\nBasic unpacking:")
print("print(l1) =", l1, "    - l1 printed when still packed")
print("print(*l1) =", *l1, "       - l1's unpacked content passed to print as multiple args")

def sum_3(a, b, c):
    return(a + b + c)

def sums(*args):
    result = 0
    for x in args:
        result += x
    return result

print("sum_3(*l1) =", sum_3(*l1), "           - Function sum_3(a, b, c) was passed it's 3 required args by unpacking l1")

print("sums(*l1, *l2, *l3) =", sums(*l1, *l2, *l3), " - Function sums(*args) was passed 3 unpacked lists")

a = [*"GFC"]
print("'a = [*\"GFC\"]'            - Unpacked iterable string into list: a =", a)

print("\nMerging:")

l4 = [*l1, *l2]
print("'l4 = [*l1, *l2]'         - Merged lists l1 and l2 into l4 =", l4)

d1 = {"A": 1, "B": 2}
d2 = {"C": 3, "D": 4}
d3 = {**d1, **d2}
print("'d3 = {**d1, **d2}'       - Merged dicts d1 and d2 into d3 =", d3)

print("\nVariable argument assignment:")

*a, = "GFC"
print("'*a, = \"GFC\"'             - Used comma for variable assignment: a =", a)

start, *body, end = l3
print("'start, *body, end = l3'  - Unpacked l3 into variable args: start =", start, ", body =", body, ", end =", end)

# Basic unpacking:
# print(l1) = [1, 2, 3]     - l1 printed when still packed
# print(*l1) = 1 2 3        - l1's unpacked content passed to print as multiple args
# sum_3(*l1) = 6            - Function sum_3(a, b, c) was passed it's 3 required args by unpacking l1
# sums(*l1, *l2, *l3) = 45  - Function sums(*args) was passed 3 unpacked lists
# 'a = [*"GFC"]'            - Unpacked iterable string into list: a = ['G', 'F', 'C']

# Merging:
# 'l4 = [*l1, *l2]'         - Merged lists l1 and l2 into l4 = [1, 2, 3, 4, 5]
# 'd3 = {**d1, **d2}'       - Merged dicts d1 and d2 into d3 = {'A': 1, 'B': 2, 'C': 3, 'D': 4}

# Variable argument assignment:
# '*a, = "GFC"'             - Used comma for variable assignment: a = ['G', 'F', 'C']
# 'start, *body, end = l3'  - Unpacked l3 into variable args: start = 6 , body = [7, 8] , end = 9
```
