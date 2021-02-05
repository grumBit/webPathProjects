# Set <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Set `{x,y}` - Unordered collection of unique items](#set-xy---unordered-collection-of-unique-items)
  - [`.add(item)` - add item](#additem---add-item)
  - [`.update(items)` - add items](#updateitems---add-items)
  - [`.discard(item)` - if it exists, remove matching item](#discarditem---if-it-exists-remove-matching-item)
  - [`.remove(item)` - remove match item. Exception if not found](#removeitem---remove-match-item-exception-if-not-found)
  - [`.clear()` - remove all items](#clear---remove-all-items)
  - [`.pop()` - randomly remove an item](#pop---randomly-remove-an-item)
- [Set operations - all return sets](#set-operations---all-return-sets)
  - [Union - `SET_X.union(SET_Y, SET_Z`) or `SET_X | SET_Y | SET_Z`](#union---set_xunionset_y-set_z-or-set_x--set_y--set_z)
  - [Intersection - `SET_X.intersetion(SET_Y, SET_Z)` or `SET_X & SET_Y & SET_Z`](#intersection---set_xintersetionset_y-set_z-or-set_x--set_y--set_z)
  - [Difference - `SET_X.difference(SET_Y` or `SET_X - SET_Y`](#difference---set_xdifferenceset_y-or-set_x---set_y)
  - [Symmeteric difference - `SET_X.symmetric_difference(SET_Y` or `SET_X ^ SET_Y`](#symmeteric-difference---set_xsymmetric_differenceset_y-or-set_x--set_y)
- [Table of all set functions](#table-of-all-set-functions)
- [Table of built-in Functions with Set](#table-of-built-in-functions-with-set)
- [Frozenset - `frozenset([1, 2, 3, 4])` - immutable set](#frozenset---frozenset1-2-3-4---immutable-set)
<!-- /code_chunk_output -->

---

## Set `{x,y}` - Unordered collection of unique items

- A set is an unordered collection of items
- Can have hetrogenous itmes
- Every element is unique (no duplicates)
- Every element must be immutable (which cannot be changed).
  - NB: T set itself is mutable. Can add or remove items from it.

### `.add(item)` - add item

### `.update(items)` - add items

### `.discard(item)` - if it exists, remove matching item

### `.remove(item)` - remove match item. Exception if not found

### `.clear()` - remove all items

### `.pop()` - randomly remove an item

## Set operations - all return sets

### Union - `SET_X.union(SET_Y, SET_Z`) or `SET_X | SET_Y | SET_Z`

- Returns set of all elements from both sets

```python
A = {'a', 'c', 'd'}
B = {'c', 'd', 2 }
C= {1, 2, 3}

print('A u B =', A.union(B))
print('B u C =', B.union(C))
print('A u B u C =', A.union(B, C))

print('A u B =', A| B)
print('B u C =', B | C)
print('A u B u C =', A | B | C)

# A u B = {'a', 2, 'c', 'd'}
# B u C = {1, 2, 3, 'c', 'd'}
# A u B u C = {'a', 1, 2, 3, 'c', 'd'}
# A.union() =  {'a', 'c', 'd'}

# A u B = {'a', 2, 'c', 'd'}
# B u C = {1, 2, 3, 'c', 'd'}
# A u B u C = {'a', 1, 2, 3, 'c', 'd'}
```

### Intersection - `SET_X.intersetion(SET_Y, SET_Z)` or `SET_X & SET_Y & SET_Z`

- Returns set of elements that are common in both sets.

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}
C = {4, 9, 11}

print(A & B & C)
print(A.intersection(B, C))

# {4}
# {4}
```

### Difference - `SET_X.difference(SET_Y` or `SET_X - SET_Y`

- Returns set of elements that are only in the first set.

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print(A - B)
print(A.difference(B))

# {1, 2, 3}
```

### Symmeteric difference - `SET_X.symmetric_difference(SET_Y` or `SET_X ^ SET_Y`

- Returns set of elements in both A and B except those that are common in both.

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print(A ^ B)
print(A.symmetric_difference(B))

# {1, 2, 3, 6, 7, 8}
```

## Table of all set functions

|            Method             | Description                                                                                  |
| :---------------------------: | :------------------------------------------------------------------------------------------- |
|             add()             | Adds an element to the set                                                                   |
|            clear()            | Removes all elements from the set                                                            |
|            copy()             | Returns a copy of the set                                                                    |
|         difference()          | Returns the difference of two or more sets as a new set                                      |
|      difference_update()      | Removes all elements of another set from this set                                            |
|           discard()           | Removes an element from the set if it is a member. (Do nothing if the element is not in set) |
|        intersection()         | Returns the intersection of two sets as a new set                                            |
|     intersection_update()     | Updates the set with the intersection of itself and another                                  |
|         isdisjoint()          | Returns True if two sets have a null intersection                                            |
|          issubset()           | Returns True if another set contains this set                                                |
|         issuperset()          | Returns True if this set contains another set                                                |
|             pop()             | Removes and returns an arbitary set element. Raise KeyError if the set is empty              |
|           remove()            | Removes an element from the set. If the element is not a member, raise a KeyError            |
|    symmetric_difference()     | Returns the symmetric difference of two sets as a new set                                    |
| symmetric_difference_update() | Updates a set with the symmetric difference of itself and another                            |
|            union()            | Returns the union of sets in a new set                                                       |
|           update()            | Updates the set with the union of itself and others                                          |

## Table of built-in Functions with Set

|  Function   | Description                                                                                    |
| :---------: | :--------------------------------------------------------------------------------------------- |
|    all()    | Return True if all elements of the set are true (or if the set is empty).                      |
|    any()    | Return True if any element of the set is true. If the set is empty, return False.              |
| enumerate() | Return an enumerate object. It contains the index and value of all the items of set as a pair. |
|    len()    | Return the length (the number of items) in the set.                                            |
|    max()    | Return the largest item in the set.                                                            |
|    min()    | Return the smallest item in the set.                                                           |
|  sorted()   | Return a new sorted list from elements in the set(does not sort the set itself).               |
|    sum()    | Retrun the sum of all elements in the set.                                                     |

## Frozenset - `frozenset([1, 2, 3, 4])` - immutable set

- Same as set, except (and some Built-in functions) can't be changed.
