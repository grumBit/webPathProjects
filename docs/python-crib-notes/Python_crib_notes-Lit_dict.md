# Dict <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Dict `{key1:'val1',key2:'val2'}`](#dict-key1val1key2val2)
  - [Table of Dictionary methods](#table-of-dictionary-methods)
  - [Table of Built-in functions with Dictionary](#table-of-built-in-functions-with-dictionary)
- [Examples](#examples)
  - [Various creates](#various-creates)
  - [Access item - `my_dict[key]`](#access-item---my_dictkey)
  - [Update and add item - `my_dict[key] = value](#update-and-add-item---my_dictkey--value)
  - [Delete items - `.pop(key)`, `del my_dict[key]`, `.clear()`](#delete-items---popkey-del-my_dictkey-clear)
  - [Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`](#dictionary-comprehension---my_dict--key-value-for-key-in-range-if-)
    - [Basic example](#basic-example)
    - [Example with `if`](#example-with-if)
  - [Membership test - `key in my_dict`](#membership-test---key-in-my_dict)
- [Nested dictionaries](#nested-dictionaries)
  - [Create a Nested Dictionary](#create-a-nested-dictionary)
  - [Access elements of a **Nested** Dictionary](#access-elements-of-a-nested-dictionary)
  - [Add a nested element to a Dictionary](#add-a-nested-element-to-a-dictionary)
  - [Add another nested dictionary to a dictionary](#add-another-nested-dictionary-to-a-dictionary)
  - [Delete **elements** from a **nested** Dictionary](#delete-elements-from-a-nested-dictionary)
  - [Delete a nested dictionary from dictionary](#delete-a-nested-dictionary-from-dictionary)
  - [Iterate Through a Nested Dictionary](#iterate-through-a-nested-dictionary)
<!-- /code_chunk_output -->

---

## Dict `{key1:'val1',key2:'val2'}`

- Keys must be of immutable type (string, number or tuple)
- Good for large amounts of data.
- Dictionaries are optimized for retrieving data.
- Dictionaries are **ordered collections**

### Table of Dictionary methods

|       Method        | Description                                                                                                                         |
| :-----------------: | :---------------------------------------------------------------------------------------------------------------------------------- |
|       clear()       | Remove all items form the dictionary.                                                                                               |
|       copy()        | Return a shallow copy of the dictionary.                                                                                            |
| fromkeys(seq[, v])  | Return a new dictionary with keys from seq and value equal to v (defaults to None).                                                 |
|    get(key[,d])     | Return the value of key. If key doesnot exit, return d (defaults to None).                                                          |
|       items()       | Return a new view of the dictionary's items (key, value).                                                                           |
|       keys()        | Return a new view of the dictionary's keys.                                                                                         |
|    pop(key[,d])     | Remove the item with key and return its value or d if key is not found. If d is not provided and key is not found, raises KeyError. |
|      popitem()      | Remove and return an arbitary item (key, value). Raises KeyError if the dictionary is empty.                                        |
| setdefault(key[,d]) | If key is in the dictionary, return its value. If not, insert key with a value of d and return d (defaults to None).                |
|   update([other])   | Update the dictionary with the key/value pairs from other, overwriting existing keys.                                               |
|      values()       | Return a new view of the dictionary's values                                                                                        |

### Table of Built-in functions with Dictionary

| Function | Description                                                                                 |
| :------: | :------------------------------------------------------------------------------------------ |
|  all()   | Return True if all keys of the dictionary are true (or if the dictionary is empty).         |
|  any()   | Return True if any key of the dictionary is true. If the dictionary is empty, return False. |
|  len()   | Return the length (the number of items) in the dictionary.                                  |
|  cmp()   | Compares items of two dictionaries.                                                         |
| sorted() | Return a new sorted list of keys in the dictionary.                                         |

## Examples

### Various creates

```python
# empty dictionary
my_dict = {}

# dictionary with integer keys
my_dict = {1: 'apple', 2: 'ball'}

# dictionary with mixed keys
my_dict = {'name': 'John', 1: [2, 4, 3]}

# using built-in function dict() to construct
my_dict = dict({1:'apple', 2:'ball'})

# from sequence having each item as a pair
my_dict = dict([(1,'apple'), (2,'ball')])
```

### Access item - `my_dict[key]`

```python
my_dict = {'name':'Jack', 'age': 26}
print(my_dict['name'])
print(my_dict.get('age'))

# Jack
# 26
```

### Update and add item - `my_dict[key] = value

```python
my_dict = {'name':'Jack', 'age': 26}
my_dict['age'] = 27 # update value
my_dict['address'] = 'Downtown' # add item
print(my_dict)

# {'name': 'Jack', 'age': 27, 'address': 'Downtown'}
```

### Delete items - `.pop(key)`, `del my_dict[key]`, `.clear()`

```python
squares = {1:1, 2:4, 3:9, 4:16, 5:25}
print("Initial squares dictionary: ", squares)
print(f"Popped item with key '4' and value '{squares.pop(4)}', leaving {squares}")
print(f"Removed random arbitrary item: {squares.popitem()}, leaving {squares}")

del squares[3]
print(f"Deleted item with key '3', leaving {squares}")

squares.clear()
print(f"Cleared all remaining items, leaving {squares}")

del squares
print(f"Delete the dictionary itself")

# Initial squares dictionary:  {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
# Popped item with key '4' and value '16', leaving {1: 1, 2: 4, 3: 9, 5: 25}
# Removed random arbitrary item: (5, 25), leaving {1: 1, 2: 4, 3: 9}
# Deleted item with key '3', leaving {1: 1, 2: 4}
# Cleared all remaining items, leaving {}
# Delete the dictionary itself
```

### Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`

- Same concept as List comprehension, but returns dictionary instead.

- A simple dictionary comprehension is comprised of;
  - A `for` loop with an `key` and `iterable`
  - An `expression`
  - As the loop iterates;
    - The `expression` is called and creates a `value`.
    - The `expression` returns a `key` : `value` pair
    - The comprehension adds the `key` : `value` pair to a new `dict`
  - When the loop ends, the comprehension returns the `dict`

#### Basic example

```python
print("Comprehension squares:    ", {x: x*x for x in range(6)})

squares = {}
for x in range(6):
  squares[x] = x*x
print("Traditional squares:", squares)

# Comprehension squares:     {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
# Traditional squares: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

#### Example with `if`

```python
print("Comprehension odd squares:    ", {x: x*x for x in range(11) if x%2 == 1})

odd_squares = {}
for x in range(11):
  if x%2 == 1:
    odd_squares[x] = x*x
print("Non-comprehension odd squares:", odd_squares)

# Comprehension odd squares:     {1: 1, 3: 9, 5: 25, 7: 49, 9: 81}
# Traditional odd squares: {1: 1, 3: 9, 5: 25, 7: 49, 9: 81}
```

### Membership test - `key in my_dict`

```python
squares = {1: 1, 3: 9, 5: 25, 7: 49, 9: 81}
print("squares = ", squares)

print("Does squares have an item with key '1'?:",1 in squares)
print("Does squares NOT have an item with key '2'?:",2 not in squares)
print("Mistakenly intended to find item with VALUE '49', but membership testing is on KEY only:", 49 in squares)

# squares =  {1: 1, 3: 9, 5: 25, 7: 49, 9: 81}
# Does squares have an item with key '1'?: True
# Does squares NOT have an item with key '2'?: True
# Mistakenly intended to find item with VALUE '49', but membership testing is on KEY only: False
```

## Nested dictionaries

- Nested dictionary is an unordered collection of dictionary
- Slicing Nested Dictionary is not possible.
- Can shrink or grow nested dictionary as needed.
- Like Dictionary, it also has key and value.
- Dictionary are accessed using key.

### Create a Nested Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}

print("People:",people)
# People: {1: {'name': 'John', 'age': '27', 'sex': 'Male'}, 2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}
```

### Access elements of a **Nested** Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}

print(f"Person '1':", people[1])
print(f"Person '1's name is {people[1]['name']}, age is {people[1]['age']}, sex is {people[1]['sex']}")
# Person '1': {'name': 'John', 'age': '27', 'sex': 'Male'}
# Person '1's name is John, age is 27, sex is Male
```

### Add a nested element to a Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}

people[3] = {} # create empty dictionary '3' inside the people dictionary

people[3]['name'] = 'Luna'
people[3]['age'] = '24'
people[3]['sex'] = 'Female'
people[3]['married'] = 'No'

print(people[3])

# {'name': 'Luna', 'age': '24', 'sex': 'Female', 'married': 'No'}
```

### Add another nested dictionary to a dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female', 'married': 'No'}}

people[4] = {'name': 'Peter', 'age': '29', 'sex': 'Male', 'married': 'Yes'}
print(people[4])

#{'name': 'Peter', 'age': '29', 'sex': 'Male', 'married': 'Yes'}
```

### Delete **elements** from a **nested** Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female', 'married': 'No'},
          4: {'name': 'Peter', 'age': '29', 'sex': 'Male', 'married': 'Yes'}}

del people[3]['married']
del people[4]['married']

print(people[3])
print(people[4])

# {'name': 'Luna', 'age': '24', 'sex': 'Female'}
# {'name': 'Peter', 'age': '29', 'sex': 'Male'}
```

### Delete a nested dictionary from dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female'},
          4: {'name': 'Peter', 'age': '29', 'sex': 'Male'}}

del people[3], people[4]
print(people)
# {1: {'name': 'John', 'age': '27', 'sex': 'Male'}, 2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}
```

### Iterate Through a Nested Dictionary

```python
people = {1: {'Name': 'John', 'Age': '27', 'Sex': 'Male'},
          2: {'Name': 'Marie', 'Age': '22', 'Sex': 'Female'}}

for p_id, p_info in people.items():
    print("\nPerson ID:", p_id)

    for key in p_info:
        print(key + ':', p_info[key])

# Person ID: 1
# Name: John
# Age: 27
# Sex: Male

# Person ID: 2
# Name: Marie
# Age: 22
# Sex: Female
```
