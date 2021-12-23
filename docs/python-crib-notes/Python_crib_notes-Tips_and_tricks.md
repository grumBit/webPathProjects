# Tips and tricks <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Python Mutable Defaults Are The Source of All Evil](#python-mutable-defaults-are-the-source-of-all-evil)
  - [The problem](#the-problem)
  - [The fix](#the-fix)
<!-- /code_chunk_output -->

---

# [Python Mutable Defaults Are The Source of All Evil](https://florimond.dev/en/posts/2018/08/python-mutable-defaults-are-the-source-of-all-evil)

- **Mutable** defaults get changed at runtime when args are actually provided
- **Does not** apply to **immutable** defaults. E.g. `None`, `int`

## The problem

```python
>>> from typing import List, Optional
>>> def my_func(my_num: int = 5, my_list: Optional[List] = ['This default mutable list was created at start-up and a reference to it remains forever']):
...   my_list.append(my_num)
...   return my_list
...
>>> my_func()
['This default mutable list was created at start-up and a reference to it remains forever', 5]
>>> my_func(2, ['This passed-in list is now acted on, so the default is not used, but the default still exists'])
['This passed-in list is now acted on, so the default is not used, but the default still exists', 2]
>>> my_func(666)
['This default mutable list was created at start-up and a reference to it remains forever', 5, 666]
>>> my_func("The default is still there and growing! Arg!!!")
['This default mutable list was created at start-up and a reference to it remains forever', 5, 666, 'The default is still there and growing! Arg!!!']
```

## The fix

- NB: The `Optional[List]` typing isn't doing anything, it's just there to illustrate

```python
>>> from typing import List, Optional
>>> def my_func(my_num: int = 5, my_list: Optional[List] = None):
...   if my_list is None:
...     print("Here's the trick, `None` can't be mutated, so it doesn't matter what was done to it previously")
...     my_list = []
...   my_list.append(my_num)
...   return my_list
...
>>> my_func()
Here's the trick, `None` can't be mutated, so it doesn't matter what was done to it previously
[5]
>>> my_func(2, ['This passed-in list is now acted on, so the default is not used, but the default still exists'])
['This passed-in list is now acted on, so the default is not used, but the default still exists', 2]
>>> my_func(666)
Here's the trick, `None` can't be mutated, so it doesn't matter what was done to it previously
[666]
>>> my_func("The default is still there, but that's ok because it is `None`")
Here's the trick, `None` can't be mutated, so it doesn't matter what was done to it previously
["The default is still there, but that's ok because it is `None`"]
>>>
```
