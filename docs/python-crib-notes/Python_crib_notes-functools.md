# functools <!-- omit in toc -->

NB: Main Python crib notes notes are [here](./Python_crib_notes.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [partial](#partial)

<!-- /code_chunk_output -->

---

# partial

## 'pipe-lined' sequence of function calls

A 'pipe-lined' sequence is where the returned value from one function is the argument passed to the next.

Sometimes a function in such a pipeline requires a single argument, but the function immediately upstream from it returns two values. In this scenario, functools.partial allow you to keep this function pipeline intact.

### Example of 'pipe-lined' sequence

Suppose you want to sort `data` by each data point's distance from some target:

```python

import random

# create some data
fnx = lambda: random.randint(0, 10)
data = [ (fnx(), fnx()) for c in range(10) ]
target = (2, 4)

import math
def euclid_dist(v1, v2):
    # Calculate distance from v1 to v2
    x1, y1 = v1
    x2, y2 = v2
    return math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
```

A nice way to do this would be to do this:

```python
data.sort(key=euclid_dist)
```

But this isn't possible as the sort method's key parameter only accepts functions that take a single argument.

Using `partial`, create a single argument function  `p_euclid_dist`, which passes that argument, and `target`, to `euclid_dist` function:

```python
from functools import partial

p_euclid_dist = partial(euclid_dist, target)

p_euclid_dist((3, 3))
# 1.4142135623730951
```

Now `data` can be sorted in order of distance from `target`:

```python

# Unsorted:
for p in data:
    print(round(p_euclid_dist(p), 3))
# 2.236
# 2.0
# 8.246
# 1.414
# 6.708
# 1.414
# 6.083
# 8.485
# 7.28
# 8.544

data.sort(key=p_euclid_dist)

# Sorted:
for p in data:
    print(round(p_euclid_dist(p), 3))
# 1.414
# 1.414
# 2.0
# 2.236
# 6.083
# 6.708
# 7.28
# 8.246
# 8.485
# 8.544
```

Or for instance, one of the function's arguments changes in an outer loop but is fixed during iteration in the inner loop. By using a partial, you don't have to pass in the additional parameter during iteration of the inner loop, because the modified (partial) function doesn't require it.

>>> from functools import partial

>>> def fnx(a, b, c):
      return a + b + c

>>> fnx(3, 4, 5)
      12

create a partial function (using keyword arg)

>>> pfnx = partial(fnx, a=12)

>>> pfnx(b=4, c=5)
     21

you can also create a partial function with a positional argument

>>> pfnx = partial(fnx, 12)

>>> pfnx(4, 5)
      21

but this will throw (e.g., creating partial with keyword argument then calling using positional arguments)

>>> pfnx = partial(fnx, a=12)

>>> pfnx(4, 5)
      Traceback (most recent call last):
      File "<pyshell#80>", line 1, in <module>
      pfnx(4, 5)
      TypeError: fnx() got multiple values for keyword argument 'a'

another use case: writing distributed code using python's multiprocessing library. A pool of processes is created using the Pool method:

>>> import multiprocessing as MP

>>> # create a process pool

>>> ppool = MP.Pool()

Pool has a map method, but it only takes a single iterable, so if you need to pass in a function with a longer parameter list, re-define the function as a partial, to fix all but one:

>>> ppool.map(pfnx, [4, 6, 7, 8])
