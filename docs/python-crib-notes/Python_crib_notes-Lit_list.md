# List `[x,y]` <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Basics](#basics)
  - [`+` - Concatenate](#---concatenate)
  - [`*` - Repeat](#---repeat)
  - [**`in`** - Membership test `'arg'` **`in`** `my_list`](#in---membership-test-arg-in-my_list)
  - [Adding to](#adding-to)
    - [`.append()` - Append an item](#append---append-an-item)
    - [`.extend()` - Append many items](#extend---append-many-items)
    - [`.insert(index, item)` - Insert item at index](#insertindex-item---insert-item-at-index)
  - [Removing from](#removing-from)
    - [`my_list[3:5] = []` - Delete many items at slice](#my_list35-----delete-many-items-at-slice)
    - [`.clear()` - Remove all items](#clear---remove-all-items)
    - [`del my_list[index]` - Delete item at index](#del-my_listindex---delete-item-at-index)
    - [`.pop()` - Return and remove from list last item](#pop---return-and-remove-from-list-last-item)
    - [`.remove('value')` - Remove matching item](#removevalue---remove-matching-item)
  - [Misc](#misc)
    - [`.copy()` - Returns a shallow copy of the list](#copy---returns-a-shallow-copy-of-the-list)
    - [`.count('value')` - Return number of matching items](#countvalue---return-number-of-matching-items)
    - [`.index('value')` - Index of first matching item](#indexvalue---index-of-first-matching-item)
    - [`.reverse()` - Reverse the order of items in the list](#reverse---reverse-the-order-of-items-in-the-list)
    - [`.sort()` - Sort items in ascending order](#sort---sort-items-in-ascending-order)
- [Flatten `nested = [[a,b],[c,d]]` to `[a,b,c,d]`](#flatten-nested--abcd-to-abcd)
  - [Method 1 - `reduce(iconcat,nested,[],)`](#method-1---reduceiconcatnested)
  - [Method 2 - `[ l for ll in nested for l in ll]`](#method-2----l-for-ll-in-nested-for-l-in-ll)
- [Comprehensions `[ expression for item in iterable ]`](#comprehensions--expression-for-item-in-iterable-)
  - [`for` - `[ expression for item in list]`](#for----expression-for-item-in-list)
  - [Nested **loops**](#nested-loops)
    - [Accessing nested lists - `[inner for outer in myNestedList for inner in outer]`](#accessing-nested-lists---inner-for-outer-in-mynestedlist-for-inner-in-outer)
    - [Two independent input lists - `[ expression for item_1 in list_1 for item_2 in list_2 ]`](#two-independent-input-lists----expression-for-item_1-in-list_1-for-item_2-in-list_2-)
  - [Nested **comprehensions** - `[[inner comprehension] outer comprehension]`](#nested-comprehensions---inner-comprehension-outer-comprehension)
  - [`if` selection - `[ expression for item in list if cond ]`](#if-selection----expression-for-item-in-list-if-cond-)
  - [Nested `if` selection - `[ expression for item in list if cond_1 if cond_2]`](#nested-if-selection----expression-for-item-in-list-if-cond_1-if-cond_2)
  - [`if ... else` expression - `[ value_1 if cond else value_2 for item in list ]`](#if--else-expression----value_1-if-cond-else-value_2-for-item-in-list-)
  - [List comprehension vs. lambda functions](#list-comprehension-vs-lambda-functions)
<!-- /code_chunk_output -->

---

## Basics

```python
my_list = [ 'Zoro', "yay!", 42]
print(my_list)
# [ 'Zoro', "yay!", 42]
```

### `+` - Concatenate

```python
nested_list = [["1st", "inner", "list"], ["2nd", "inner", "list"]]
print(nested_list)
# [['1st', 'inner', 'list'], ['2nd', 'inner', 'list']]
```

### `*` - Repeat

```python
print( "Double my list: ", 2 * my_list)
# Double my list:  [0, 'yay!', 42, 0, 'yay!', 42]
```

### **`in`** - Membership test `'arg'` **`in`** `my_list`

```python
print('Zoro' in my_list)
# True
```

- test if an item exists in a list or not, using the keyword `in`

### Adding to

#### `.append()` - Append an item

```python
my_list.append("An appended item")
print(my_list)
# ['Zoro', 'yay!', 42, 'Appended item']
```

#### `.extend()` - Append many items

```python
my_list.extend(["Many", "appended", 'items'])
print(my_list)
# ['Zoro', 'yay!', 42, 'An appended item', 'Many', 'appended', 'items']
```

#### `.insert(index, item)` - Insert item at index

```python
my_list.insert(5, 'unusual')
print(my_list)
# ['Zoro', 'yay!', 42, 'An appended item', 'Many', 'unusual', 'appended', 'items']
```

### Removing from

#### `my_list[3:5] = []` - Delete many items at slice

```python
my_list[3:6] = []
print(my_list)
# ['Zoro', 'yay!', 'An appended item', 'items']
```

#### `.clear()` - Remove all items

```python
my_list.clear()
print(my_list)
# []
```

#### `del my_list[index]` - Delete item at index

```python
del my_list[2]
print(my_list)
# ['Zoro', 'yay!', 'An appended item', 'Many', 'unusual', 'appended', 'items']
```

#### `.pop()` - Return and remove from list last item

```python
print(my_list.pop())
print(my_list)
# yay!
# ['Zoro', 'items']
```

#### `.remove('value')` - Remove matching item

```python
my_list.remove('An appended item')
print(my_list)
# ['Zoro', 'yay!', 'items']
```

### Misc

#### `.copy()` - Returns a shallow copy of the list

#### `.count('value')` - Return number of matching items

```python
print(my_list.count('Zoro'))
# 1
```

#### `.index('value')` - Index of first matching item

```python
print(my_list.index('Zoro'))
# 0
```

#### `.reverse()` - Reverse the order of items in the list

```python
my_list.reverse()
print(my_list)
# ['items', 'yay!', 'Zoro']
```

#### `.sort()` - Sort items in ascending order

```python
my_list.sort()
print(my_list)
# ['Zoro', 'items', 'yay!']
```

## Flatten `nested = [[a,b],[c,d]]` to `[a,b,c,d]`

### Method 1 - `reduce(iconcat,nested,[],)`

```python
from functools import reduce
from operator import iconcat

nested = [['a','b'],['c','d']]
flattened = reduce(iconcat,nested,[],)
print("Nested:", nested, " Flattened: ", flattened)

# Nested: [['a', 'b'], ['c', 'd']]  Flattened:  ['a', 'b', 'c', 'd']
```

### Method 2 - `[ l for ll in nested for l in ll]`

```python
nested = [['a','b'],['c','d']]
flattened = [ l for ll in nested for l in ll]

print("Nested:", nested, " Flattened: ", flattened)

# Nested: [['a', 'b'], ['c', 'd']]  Flattened:  ['a', 'b', 'c', 'd']
```

## Comprehensions `[ expression for item in iterable ]`

- NB: In examples below, `list` could've been any iterable

- A simple list comprehension is comprised of;
  - A `for` loop with an `item` and `iterable`
  - An `expression`
  - As the loop iterates;
    - The `expression` is called and can access the current `item`
    - The `expression` returns a `value`
    - The comprehension appends the `value` to a new `list`
  - When the loop ends, the comprehension returns the `list`

### `for` - `[ expression for item in list]`

```python
print("Powers of 2 from 0 to 19: ", [2 ** x for x in range(11)])

print("Powers of 2 from 0 to 19: ",  # Same as above, but commented  for clarity
  [                 # Start comprehension
    2 ** x          # Expression that uses item and returns a value, which is appended to a list
    for             # Loop
      x             # Item
    in
      range(11)     # Iterable
  ]                 # When loop ends, comprehension returns a list of returned expression values
)

# Powers of 2 from 0 to 19:  [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
```

### Nested **loops**

#### Accessing nested lists - `[inner for outer in myNestedList for inner in outer]`

```python
# Allow conditional construction of list literals using for and if clauses. They nest in the same way traditional for loops and if statements nest.

nestedList = [[1, 2, 3], [4, 5, 6], [7, 8]]
print("Using nested comprehensions: ", [inner for outer in nestedList for inner in outer])

print("Using traditional nested loops: ", end="")
for outer in nestedList:
    for inner in outer:
        print(inner, end=", ")
```

#### Two independent input lists - `[ expression for item_1 in list_1 for item_2 in list_2 ]`

```python

print("Nested loops:",
  [x+y for x in ['Python ','C '] for y in ['Language','Programming']]
  )

print("Nested loops:",   # Same as above, but commented for clarity
  [
    x+y                                   # expression
    for y in ['Language','Programming']   # outer loop - working through in-line list
      for x in ['Python ','C ']           # inner loop - working through in-line list
  ]
)

# Nested loops: ['Python Language', 'Python Programming', 'C Language', 'C Programming']
```

### Nested **comprehensions** - `[[inner comprehension] outer comprehension]`

- Fundamentally, the outer's `expression` **is** the inner `comprehension`.
- In more detail;

  - The inner comprehension;
    - Returns a list each time it executes
    - Is executed multiple times by the outer comprehension
    - Is the outer comprehension's expression
    - Can be provided variables by the outer expression
  - The outer comprehension;
    - Returns a nested list of lists
    - The inner lists are produced by the outer's expression
    - The outer's expression is the inner comprehension

- **Note:** The nested `for` loops in nested comprehensions don’t work like normal nested loops. In the example below, `for i in range(len(matrix[0]))` is executed before `for matrix_row in matrix`. Hence a value is assigned to `i` before `matrix_row[i]` is appended to the inner comprehensions return list.

```python
matrix = [[1, 2, 3, 4],
          [6, 7, 8, 9]]

print("Input :        matrix =",matrix)

# NB: In all exverions amples below, 'i' is simultaneously
# "transposed_row_index" AND "matrix_column_index"

# Version 1 : Transposes matrix using 2 comprehensions
#    - Inner comprehension builds each transposed row list
#    - Outer comprehension builds the transposed matrix list-of-lists
print("Version 1: transposed =", [[ matrix_row[i] for matrix_row in matrix ] for i in range(len(matrix[0]))])

# Version 2: Same as version 1, but broken out for explanations
print("Version 2: transposed =",
  [
    [                         # outer expression - which is itself is the inner comprehension! Returns a transposed row list
      matrix_row[i]           # inner expression - returns a transposed value, using variable provided by outer comprehension
      for                     # inner loop       - steps through matrix rows
        matrix_row            # inner item       - a row from the matrix
      in
        matrix               # inner list       - list of matrix rows
    ]
    for                      # outer loop       - steps through transposed rows
      i                      # outer item       - a matrix column number, which is used by the inner comprehension
    in
      range(len(matrix[0]))  # outer list       - list of column numbers
  ]
)

# Version 3: Transposes matrix using mix of 1 for-loop and 1 list comprehension
#    - Comprehension builds each transposed row list
#    - Loop builds the transposed matrix list-of-lists
transposed = []
for i in range(len(matrix[0])):              # outer loop  - steps through transposed rows
    transposed_row = [matrix_row[i] for matrix_row in matrix] # - builds each transposed row list
    transposed.append(transposed_row)                         # - builds transposed matrix list-of-lists
print("Version 3: transposed =", transposed)

# Version 4: Transposes matrix using old-school nested for-loops
#    - Innner loop builds each transposed row list
#    - Outer loop builds the transposed matrix list-of-lists
transposed = []
for i in range(len(matrix[0])):              # outer loop  - steps through transposed rows
    transposed_row = []

    for matrix_row in matrix:                # innner loop - steps thtough transposed values
        transposed_row.append(matrix_row[i]) #             - builds each transposed row list
    transposed.append(transposed_row)        #             - builds transposed matrix list-of-lists
print("Version 4: transposed =", transposed)

# Input :        matrix = [[1, 2, 3, 4], [6, 7, 8, 9]]
# Version 1: transposed = [[1, 6], [2, 7], [3, 8], [4, 9]]
# Version 2: transposed = [[1, 6], [2, 7], [3, 8], [4, 9]]
# Version 3: transposed = [[1, 6], [2, 7], [3, 8], [4, 9]]
# Version 4: transposed = [[1, 6], [2, 7], [3, 8], [4, 9]]

```

### `if` selection - `[ expression for item in list if cond ]`

```python
print("Powers of 2 from 6 to 10: ",
  [2 ** x for x in range(11) if x > 5 ]
  )
print("Odd numbers up to 20: ",
  [x for x in range(20) if x % 2 == 1 ]
  )

# Powers of 2 from 6 to 10:  [64, 128, 256, 512, 1024]
# Odd numbers up to 20:  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
```

### Nested `if` selection - `[ expression for item in list if cond_1 if cond_2]`

```python
print("Numbers divisible by both 2 & 5:",
  [y for y in range(100) if y % 2 == 0 if y % 5 == 0]
  )

# Numbers divisible by both 2 & 5: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

### `if ... else` expression - `[ value_1 if cond else value_2 for item in list ]`

```python
print("Checking numbers from 0 to 9.\nIf i is divisible by 2, then Even is appended to list.\nIf not, Odd is appended:\n",
  ["Even" if i%2==0 else "Odd" for i in range(10)]
  )

# Checking numbers from 0 to 9.
# If i is divisible by 2, then Even is appended to list.
# If not, Odd is appended:
# ['Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd']
```

### List comprehension vs. lambda functions

- Sometimes lambda functions and some Built-in functions can create and modify lists to produce the same result as list comprehensions, sometimes in less lines of code. e.g.

```python
print("List comprehension:", [ letter for letter in 'human' ])
print("Lambda function:", list(map(lambda x: x, 'human')))

# List comprehension: ['h', 'u', 'm', 'a', 'n']
# Lambda function: ['h', 'u', 'm', 'a', 'n']
```
