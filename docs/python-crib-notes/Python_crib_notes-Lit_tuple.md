# Tuple <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Tuple `(x,y)` - Same as List, except immutable](#tuple-xy---same-as-list-except-immutable)
- [Tuple packing - `my_tuple = 3.6, 4.6, "dog"`](#tuple-packing---my_tuple--36-46-dog)
- [Tuple unpacking - `a, b, c = my_tuple`](#tuple-unpacking---a-b-c--my_tuple)
- [Interating over tuples - `for first_val, second_val in my_tuple_of_tuples`](#interating-over-tuples---for-first_val-second_val-in-my_tuple_of_tuples)
- [Single element tuple - `my_tuple = (arg,)` or `arg,`](#single-element-tuple---my_tuple--arg-or-arg)
- [`.count('value')` - Return number of matching tuple items](#countvalue---return-number-of-matching-tuple-items)
- [`.index('value')` - Index of first matching tuple item](#indexvalue---index-of-first-matching-tuple-item)
- [`'arg'` **`in`** `my_tuple` - membership test](#arg-in-my_tuple---membership-test)
- [Advantages of Tuple over List](#advantages-of-tuple-over-list)
<!-- /code_chunk_output -->

---

## Tuple `(x,y)` - Same as List, except immutable

## Tuple packing - `my_tuple = 3.6, 4.6, "dog"`

## Tuple unpacking - `a, b, c = my_tuple`

```python
my_tuple = 3, 4.6, "dog"        # Packing
print("Packed: my_tuple = ", my_tuple)

a, b, c = my_tuple              # Unpacking
print(f"Unpacked: a = {a}, b = {b}, c = {c}")

# Packed: my_tuple =  (3, 4.6, 'dog')
# Unpacked: a = 3, b = 4.6, c = dog
```

## Interating over tuples - `for first_val, second_val in my_tuple_of_tuples`

```python
my_tuple_of_tuples = ((1, 2), (3, 4), (5, 6))

# Basic iteration returns entire packed tuples:
for packed_tuple in my_tuple_of_tuples:
    print("packed_tuple = ", packed_tuple)

# Unpacking iteration returns values within tuples:
for first_value, second_value in my_tuple_of_tuples:
    print(f"Unpacked tuple: first_value = {first_value}, second_value = {second_value}")

# packed_tuple =  (1, 2)
# packed_tuple =  (3, 4)
# packed_tuple =  (5, 6)
# Unpacked tuple: first_value = 1, second_value = 2
# Unpacked tuple: first_value = 3, second_value = 4
# Unpacked tuple: first_value = 5, second_value = 6
```

## Single element tuple - `my_tuple = (arg,)` or `arg,`

```python
not_a_tuple = ("hello")           # Only 1 element, so is a string literal
parentheses_tuple = ("hello",)    # Note the comma
no_parentheses_tuple = "hello",   # Parentheses are optional

print("not_a_tuple's class = ", type(not_a_tuple))
print("parentheses_tuple's class = ", type(parentheses_tuple))
print("no_parentheses_tuple's class = ", type(no_parentheses_tuple))

# not_a_tuple's class =  <class 'str'>
# parentheses_tuple's class =  <class 'tuple'>
# no_parentheses_tuple's class =  <class 'tuple'>
```

## `.count('value')` - Return number of matching tuple items

## `.index('value')` - Index of first matching tuple item

## `'arg'` **`in`** `my_tuple` - membership test

## Advantages of Tuple over List

- Since tuples are quite similar to lists, both of them are used in similar situations as well.
- However, there are certain advantages of implementing a tuple over a list. Below listed are some of the main advantages:
  - We generally use tuple for heterogeneous (different) datatypes and list for homogeneous (similar) datatypes.
  - Since tuples are immutable, iterating through tuple is faster than with list. So there is a slight performance boost.
  - Tuples that contain immutable elements (and some Built-in functions) be used as a key for a dictionary. With lists, this is not possible.
  - If you have data that doesn't change, implementing it as tuple will guarantee that it remains write-protected.
