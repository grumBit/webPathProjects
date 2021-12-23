# Tips and tricks <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Python Mutable Defaults Are The Source of All Evil](#python-mutable-defaults-are-the-source-of-all-evil)
  - [Rule of thumb: Try to avoid using defaults **AT ALL**](#rule-of-thumb-try-to-avoid-using-defaults-at-all)
  - [The problem: Changes to defaults persist](#the-problem-changes-to-defaults-persist)
  - [Kludgy workaround to the problem: Make defaults = `None`](#kludgy-workaround-to-the-problem-make-defaults--none)
<!-- /code_chunk_output -->

---

# [Python Mutable Defaults Are The Source of All Evil](https://florimond.dev/en/posts/2018/08/python-mutable-defaults-are-the-source-of-all-evil)

- Each **mutable** default object is created once at start-up, and a reference to it is retained. So, if a mutable default is changed inside the function (e.g. `some_list.extend()`), and also if it is changed **outside** the function, the change is retained and will be there the next time the function is called and the defaultis used (i.e. that argument isn't passed in). This is unlike other languages which create a new object each time the function is called.
- **Does not** apply to **immutable** defaults. E.g. `None`, `int`

## Rule of thumb: Try to avoid using defaults **AT ALL**

## The problem: Changes to defaults persist

- NB: The `Optional[List]` typing isn't doing anything, it's just there to illustrate

```python
from typing import List, Optional
def my_func(my_num: int = 5, my_list: Optional[List] = ['This default mutable list was created at start-up and a reference to it remains for ever']):
  my_list.insert(0, my_num)
  return my_list

my_func()
# [5, 'This default mutable list was created at start-up and a reference to it remains for ever']

my_func(2, ['This passed-in list is now acted on and everythong looks good, so the default is not used, (but the default still exists)'])
# [2, 'This passed-in list is now acted on and everythong looks good, so the default is not used, (but the default still exists)']

my_func(666)
# [666, 5, 'This default mutable list was created at start-up and a reference to it remains for ever']

my_func("The default is still there and growing! Arg!!!")
# ['The default is still there and growing! Arg!!!', 666, 5, 'This default mutable list was created at start-up and a reference to it remains for ever']

the_returned_list = my_func()
print(the_returned_list)
# [5, 'The default is still there and growing! Arg!!!', 666, 5, 'This default mutable list was created at start-up and a reference to it remains for ever']

the_returned_list.insert(0, "Holy cow, even changes to the default OUTSIDE the function are retained!!!")
my_func()
# [5, 'Holy cow, even changes to the default OUTSIDE the function are retained!!!', 5, 'The default is still there and growing! Arg!!!', 666, 5, 'This default mutable list was created at start-up and a reference to it remains for ever']
```

## Kludgy workaround to the problem: Make defaults = `None`

```python
from typing import List, Optional
def my_func(my_num: int = 5, my_list: Optional[List] = None):
  if my_list is None:
    my_list = []
    print("Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously")
  my_list.insert(0, my_num)
  return my_list

my_func()
# Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously
# [5]

my_func(2, ['This passed-in list is now acted on, so the default is not used, but the default still exists'])
# [2, 'This passed-in list is now acted on, so the default is not used, but the default still exists']

my_func(666)
# Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously
# [666]

my_func("The default is still there, but that's ok because it is `None`")
# Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously
# ["The default is still there, but that's ok because it is `None`"]

the_returned_list = my_func()
# Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously
print(the_returned_list)
# [5]

the_returned_list.insert(0, "It doesn't matter if the returned list is mutated outside the function either")

my_func()
# Here's the kludgy work around, `None` can't be mutated, so it doesn't matter what was done to it previously
# [5]
```
