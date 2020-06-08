# Literals <!-- omit in toc -->

Back to main [Python crib notes](./Python_crib_notes.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Numerics and their limits](#numerics-and-their-limits)
  - [float vs. Decimal](#float-vs-decimal)
    - [WARNING: Use `Decimal` class to avoid `float` literal rounding errors](#warning-use-decimal-class-to-avoid-float-literal-rounding-errors)
  - [See also `math`, `fractions` and `random` modules](#see-also-math-fractions-and-random-modules)
- [String](#string)
  - [Quoting and manipulation examples](#quoting-and-manipulation-examples)
  - [Formatting](#formatting)
    - [`'hi {} from {}'.format(x,y)`](#hi--from-formatxy)
    - [`'hi {b} from {a}'.format(a=" ",b=" ")`](#hi-b-from-aformata%22-%22b%22-%22)
    - [sprintf style - `'The value of x is %3.2f' %12.3456789`](#sprintf-style---the-value-of-x-is-32f-123456789)
- [Boolean `True | False`](#boolean-true--false)
- [Special literal `None`](#special-literal-none)
- [Collections](#collections)
  - [List `[x,y]`, operations and combined example](#list-xy-operations-and-combined-example)
    - [`+` - Concatenate](#concatenate)
    - [`*` - Repeat](#repeat)
    - [`.append()` - Append an item](#append---append-an-item)
    - [`.extend()` - Append many items](#extend---append-many-items)
    - [`.insert(index, item)` - Insert item at index](#insertindex-item---insert-item-at-index)
    - [`del my_list[index]` - Delete item at index](#del-mylistindex---delete-item-at-index)
    - [`my_list[3:5] = []` - Delete many items at slice](#mylist35-----delete-many-items-at-slice)
    - [`.remove('value')` - Remove matching item](#removevalue---remove-matching-item)
    - [`.count('value')` - Return number of matching items](#countvalue---return-number-of-matching-items)
    - [`.index('value')` - Index of first matching item](#indexvalue---index-of-first-matching-item)
    - [`.reverse()` - Reverse the order of items in the list](#reverse---reverse-the-order-of-items-in-the-list)
    - [`.sort()` - Sort items in ascending order](#sort---sort-items-in-ascending-order)
    - [`.copy()` - Returns a shallow copy of the list](#copy---returns-a-shallow-copy-of-the-list)
    - [`'arg'` **`in`** `my_list` - membership test](#arg-in-mylist---membership-test)
    - [`.pop()` - Return and remove from list last item](#pop---return-and-remove-from-list-last-item)
    - [`.clear()` - Remove all items](#clear---remove-all-items)
    - [List comprehensions `[ expression for item in iterable ]`](#list-comprehensions--expression-for-item-in-iterable)
      - [`for` - `[ expression for item in list]`](#for----expression-for-item-in-list)
      - [Nested **loops**](#nested-loops)
        - [Accessing nested lists - `[inner for outer in myNestedList for inner in outer]`](#accessing-nested-lists---inner-for-outer-in-mynestedlist-for-inner-in-outer)
        - [Two independent input lists - `[ expression for item_1 in list_1 for item_2 in list_2 ]`](#two-independent-input-lists----expression-for-item1-in-list1-for-item2-in-list2)
      - [Nested **comprehensions** - `[[inner comprehension] outer comprehension]`](#nested-comprehensions---inner-comprehension-outer-comprehension)
      - [`if` selection - `[ expression for item in list if cond ]`](#if-selection----expression-for-item-in-list-if-cond)
      - [Nested `if` selection - `[ expression for item in list if cond_1 if cond_2]`](#nested-if-selection----expression-for-item-in-list-if-cond1-if-cond2)
      - [`if ... else` expression - `[ value_1 if cond else value_2 for item in list ]`](#if--else-expression----value1-if-cond-else-value2-for-item-in-list)
      - [List comprehension vs. lambda functions](#list-comprehension-vs-lambda-functions)
  - [Sequence](#sequence)
  - [Array module - alternative to List](#array-module---alternative-to-list)
  - [NumPy module arrays for matrices](#numpy-module-arrays-for-matrices)
  - [Tuple `(x,y)` - Same as List, except immutable](#tuple-xy---same-as-list-except-immutable)
    - [Tuple packing - `my_tuple = 3.6, 4.6, "dog"`](#tuple-packing---mytuple--36-46-%22dog%22)
    - [Tuple unpacking - `a, b, c = my_tuple`](#tuple-unpacking---a-b-c--mytuple)
    - [Interating over tuples - `for first_val, second_val in my_tuple_of_tuples`](#interating-over-tuples---for-firstval-secondval-in-mytupleoftuples)
    - [Single element tuple - `my_tuple = (arg,)` or `arg,`](#single-element-tuple---mytuple--arg-or-arg)
    - [`.count('value')` - Return number of matching tuple items](#countvalue---return-number-of-matching-tuple-items)
    - [`.index('value')` - Index of first matching tuple item](#indexvalue---index-of-first-matching-tuple-item)
    - [`'arg'` **`in`** `my_tuple` - membership test](#arg-in-mytuple---membership-test)
    - [Advantages of Tuple over List](#advantages-of-tuple-over-list)
  - [Dict `{key1:'val1',key2:'val2'}`](#dict-key1val1key2val2)
    - [Summary of Dictionary methods](#summary-of-dictionary-methods)
    - [Summary of Built-in functions with Dictionary](#summary-of-built-in-functions-with-dictionary)
    - [Examples](#examples)
      - [Various creates](#various-creates)
      - [Access item - `my_dict[key]`](#access-item---mydictkey)
      - [Update and add item - `my_dict[key] = value](#update-and-add-item---mydictkey--value)
      - [Delete items - `.pop(key)`, `del my_dict[key]`, `.clear()`](#delete-items---popkey-del-mydictkey-clear)
      - [Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`](#dictionary-comprehension---mydict--key-value-for-key-in-range-if)
        - [Basic example](#basic-example)
        - [Example with `if`](#example-with-if)
      - [Membership test - `key in my_dict`](#membership-test---key-in-mydict)
    - [Nested dictionaries](#nested-dictionaries)
      - [Create a Nested Dictionary](#create-a-nested-dictionary)
      - [Access elements of a **Nested** Dictionary](#access-elements-of-a-nested-dictionary)
      - [Add a nested element to a Dictionary](#add-a-nested-element-to-a-dictionary)
      - [Add another nested dictionary to a dictionary](#add-another-nested-dictionary-to-a-dictionary)
      - [Delete **elements** from a **nested** Dictionary](#delete-elements-from-a-nested-dictionary)
      - [Delete a nested dictionary from dictionary](#delete-a-nested-dictionary-from-dictionary)
      - [Iterate Through a Nested Dictionary](#iterate-through-a-nested-dictionary)
  - [Set `{x,y}` - Unordered collection of unique items](#set-xy---unordered-collection-of-unique-items)
    - [`.add(item)` - add item](#additem---add-item)
    - [`.update(items)` - add items](#updateitems---add-items)
    - [`.discard(item)` - if it exists, remove matching item](#discarditem---if-it-exists-remove-matching-item)
    - [`.remove(item)` - remove match item. Exception if not found](#removeitem---remove-match-item-exception-if-not-found)
    - [`.clear()` - remove all items](#clear---remove-all-items-1)
    - [`.pop()` - randomly remove an item](#pop---randomly-remove-an-item)
    - [Set operations - all return sets](#set-operations---all-return-sets)
      - [Union - `SET_X.union(SET_Y, SET_Z`) or `SET_X | SET_Y | SET_Z`](#union---setxunionsety-setz-or-setx--sety--setz)
      - [Intersection - `SET_X.intersetion(SET_Y, SET_Z)` or `SET_X & SET_Y & SET_Z`](#intersection---setxintersetionsety-setz-or-setx--sety--setz)
      - [Difference - `SET_X.difference(SET_Y` or `SET_X - SET_Y`](#difference---setxdifferencesety-or-setx---sety)
      - [Symmeteric difference - `SET_X.symmetric_difference(SET_Y` or `SET_X ^ SET_Y`](#symmeteric-difference---setxsymmetricdifferencesety-or-setx--sety)
    - [All set functions](#all-set-functions)
      - [Built-in Functions with Set](#built-in-functions-with-set)
  - [Frozenset - `frozenset([1, 2, 3, 4])` - immutable set](#frozenset---frozenset1-2-3-4---immutable-set)
    <!-- /code_chunk_output -->

---

## Numerics and their limits

- Integers (and some Built-in functions) be of any length, it is only limited by the memory available.

- A floating point number is accurate up to 17 decimal places. Integer and floating points are separated by decimal points. 1 is integer, 1.0 is floating point number.

- Complex numbers are written in the form, x + yj, where x is the real part and y is the imaginary part.

```python
a = 0b1010 #Binary Literals
b = 100 #Decimal Literal
c = 0o310 #Octal Literal
d = 0x12c #Hexadecimal Literal

#Float Literal
float_1 = 10.5
float_2 = 1.5e2

#Complex Literal
x = 3.14j

print(a, b, c, d)
print(float_1, float_2)
print(x, x.imag, x.real)

#10 100 200 300
#10.5 150.0
#3.14j 3.14 0.0
```

```python
>>> a = 1234567890123456789
>>> a
1234567890123456789
>>> b = 0.1234567890123456789
>>> b
0.12345678901234568 # Note b was truncated
>>> c = 1+2j
>>> c
(1+2j)
```

### float vs. Decimal

#### WARNING: Use `Decimal` class to avoid `float` literal rounding errors

```python
from decimal import Decimal as D

print("Float's idea of 1.1 + 2.2 is", 1.1 + 2.2)
print("Decimal's idea of 1.1 + 2.2 is", D('1.1') + D('2.2'))

print("With float, 1.1 + 2.2 == 3.3 is", 1.1 + 2.2 == 3.3, "<- !!!WARNING!!!")
print("With decimal, 1.1 + 2.2 == 3.3 is", D('1.1') + D('2.2') == D('3.3'))

# Float's idea of 1.1 + 2.2 is 3.3000000000000003
# Decimal's idea of 1.1 + 2.2 is 3.3
# With float, 1.1 + 2.2 == 3.3 is False <- !!!WARNING!!!
# With decimal, 1.1 + 2.2 == 3.3 is True
```

- **WARNING:** Instantiating `Decimals` with `float` literals (e.g. `decimal.Decimal(1.2)` will introduce `float` literal rounding errors. Instead, instantiate using quoted string literals (e.g. `decimal.Decimal('1.2')`

```python
from decimal import Decimal as D

print("D('1.1') + D('2.2') == D(1.1) + D(2.2) is", D('1.1') + D('2.2') == D(1.1) + D(2.2), " <- !!!WARNING!!!")

# D('1.1') + D('2.2') == D(1.1) + D(2.2) is False  <- !!!WARNING!!!
```

### See also `math`, `fractions` and `random` modules

## String

```python
strings = "This is Python"
char = "C"
multiline_str = """This is a multiline string with more than
one line code."""
unicode = u"\u00dcnic\u00f6de"
raw_str = r"raw \n string"

print(strings)
print(char)
print(multiline_str)
print(unicode)
print(raw_str)

This is Python
C
This is a multiline string with more than
one line code.
Ünicöde
raw \n string
```

### Quoting and manipulation examples

```python
print("Strings separated by white space "
    'are concatenated.' ''' Including triple quoted,
    which may have embedded line returns and whitespace.''')
# Strings separated by white space are concatenated. Including triple quoted,
#    which may have embedded line returns  and whitespace.

print("Concatenation usefully splits "
    "long strings onto multiple lines.")
# Concatenation usefully splits long string literals onto multiple lines.

print("""\
The backslash above usefully makes the content all on the same line
""")
# The backslash above usefully makes the content all on the same line

print(3 * "I'm tripled " + ", and I'm concatenated.")
# I'm tripled I'm tripled I'm tripled , and I'm concatenated.

this_string_variable = 'This string variable'
print( this_string_variable + " (and some Built-in functions) be concatented with this string literal.")
# This string variable (and some Built-in functions) be concatented with this string literal.

word = 'Py'
word += 'thon'    # 'Python' Concatenation, then re-assignment, NOT string mutation
print(word[0])    # 'P' 1st character
print(word[2])    # '3' 6th character
print(word[-1])   # 'n' last character
print(word[-2])   # 'o' 2nd-last character
print(word[-6])   # 'P' 1st character
print(word[0:2])  # 'Py'characters from position 0 (included) to 2 (excluded)
print(word[::2])  # 'Pto' every second character
print(word[2:99]) # 'thon' out of range slice indexes are handled gracefully
print(len(word))  # '6' String length

# These all invalid;
# word[99]        - IndexError: string index out of range
# word[0] = 'J'   - Strings immutability ->
#                   TypeError: 'str' object does not support item assignment

print( f"{word}'s f-string") # 'Python's f-string'
```

### Formatting

#### `'hi {} from {}'.format(x,y)`

#### `'hi {b} from {a}'.format(a=" ",b=" ")`

#### sprintf style - `'The value of x is %3.2f' %12.3456789`

## Boolean `True | False`

```python
x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)

# x is True
# y is False
# a: 5
# b: 10
```

## Special literal `None`

- Specifies that a field is not created.

```python
var = None

print(f"var = ", var)

if var is None:
  print("Var is not defined")

# var =  None
# Var is not defined
```

## Collections

```python
fruits = ["apple", "mango", "orange"] #list
numbers = (1, 2, 3) #tuple
alphabets = {'a':'apple', 'b':'ball', 'c':'cat'} #dictionary
vowels = {'a', 'e', 'i' , 'o', 'u'} #set

print(fruits)
print(numbers)
print(alphabets)
print(vowels)

# ['apple', 'mango', 'orange']
# (1, 2, 3)
# {'a': 'apple', 'b': 'ball', 'c': 'cat'}
# {'e', 'a', 'o', 'i', 'u'}
```

### List `[x,y]`, operations and combined example

```python
my_list = [ 'Zoro', "yay!", 42]
print(my_list)
# [ 'Zoro', "yay!", 42]
```

#### `+` - Concatenate

```python
nested_list = [["1st", "inner", "list"], ["2nd", "inner", "list"]]
print(nested_list)
# [['1st', 'inner', 'list'], ['2nd', 'inner', 'list']]
```

#### `*` - Repeat

```python
print( "Double my list: ", 2 * my_list)
# Double my list:  [0, 'yay!', 42, 0, 'yay!', 42]
```

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

#### `del my_list[index]` - Delete item at index

```python
del my_list[2]
print(my_list)
# ['Zoro', 'yay!', 'An appended item', 'Many', 'unusual', 'appended', 'items']
```

#### `my_list[3:5] = []` - Delete many items at slice

```python
my_list[3:6] = []
print(my_list)
# ['Zoro', 'yay!', 'An appended item', 'items']
```

#### `.remove('value')` - Remove matching item

```python
my_list.remove('An appended item')
print(my_list)
# ['Zoro', 'yay!', 'items']
```

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

#### `.copy()` - Returns a shallow copy of the list

#### `'arg'` **`in`** `my_list` - membership test

```python
print('Zoro' in my_list)
# True
```

- test if an item exists in a list or not, using the keyword `in`

#### `.pop()` - Return and remove from list last item

```python
print(my_list.pop())
print(my_list)
# yay!
# ['Zoro', 'items']
```

#### `.clear()` - Remove all items

```python
my_list.clear()
print(my_list)
# []
```

#### List comprehensions `[ expression for item in iterable ]`

- NB: In examples below, `list` could've been any iterable

- A simple list comprehension is comprised of;
  - A `for` loop with an `item` and `iterable`
  - An `expression`
  - As the loop iterates;
    - The `expression` is called and can access the current `item`
    - The `expression` returns a `value`
    - The comprehension appends the `value` to a new `list`
  - When the loop ends, the comprehension returns the `list`

##### `for` - `[ expression for item in list]`

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

##### Nested **loops**

###### Accessing nested lists - `[inner for outer in myNestedList for inner in outer]`

```python
# Allow conditional construction of list literals using for and if clauses. They nest in the same way traditional for loops and if statements nest.

nestedList = [[1, 2, 3], [4, 5, 6], [7, 8]]
print("Using nested comprehensions: ", [inner for outer in nestedList for inner in outer])

print("Using traditional nested loops: ", end="")
for outer in nestedList:
    for inner in outer:
        print(inner, end=", ")
```

###### Two independent input lists - `[ expression for item_1 in list_1 for item_2 in list_2 ]`

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

##### Nested **comprehensions** - `[[inner comprehension] outer comprehension]`

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

##### `if` selection - `[ expression for item in list if cond ]`

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

##### Nested `if` selection - `[ expression for item in list if cond_1 if cond_2]`

```python
print("Numbers divisible by both 2 & 5:",
  [y for y in range(100) if y % 2 == 0 if y % 5 == 0]
  )

# Numbers divisible by both 2 & 5: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
```

##### `if ... else` expression - `[ value_1 if cond else value_2 for item in list ]`

```python
print("Checking numbers from 0 to 9.\nIf i is divisible by 2, then Even is appended to list.\nIf not, Odd is appended:\n",
  ["Even" if i%2==0 else "Odd" for i in range(10)]
  )

# Checking numbers from 0 to 9.
# If i is divisible by 2, then Even is appended to list.
# If not, Odd is appended:
# ['Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd', 'Even', 'Odd']
```

##### List comprehension vs. lambda functions

- Sometimes lambda functions and some Built-in functions can create and modify lists to produce the same result as list comprehensions, sometimes in less lines of code. e.g.

```python
print("List comprehension:", [ letter for letter in 'human' ])
print("Lambda function:", list(map(lambda x: x, 'human')))

# List comprehension: ['h', 'u', 'm', 'a', 'n']
# Lambda function: ['h', 'u', 'm', 'a', 'n']
```

### Sequence

- Sequence is an abstract class that only requires implementation for create and append and is a base class for other Python collections
- See [SequenceFile.py](SequenceFile.py) and [SequenceFileTest.py](SequenceFileTest.py) for an extending Sequence example that creates a filed-back store. It implements the required;
  - `__init__`
  - `__getitem__` - Example of the hard part. Note it's recursive handling of slice argument
  - `__len__`
  - `append`

### [Array module](https://www.programiz.com/python-programming/array) - alternative to List

- May be needed to interface with C code, otherwise avoid

### [NumPy module](https://www.programiz.com/python-programming/matrix) arrays for matrices

### Tuple `(x,y)` - Same as List, except immutable

#### Tuple packing - `my_tuple = 3.6, 4.6, "dog"`

#### Tuple unpacking - `a, b, c = my_tuple`

```python
my_tuple = 3, 4.6, "dog"        # Packing
print("Packed: my_tuple = ", my_tuple)

a, b, c = my_tuple              # Unpacking
print(f"Unpacked: a = {a}, b = {b}, c = {c}")

# Packed: my_tuple =  (3, 4.6, 'dog')
# Unpacked: a = 3, b = 4.6, c = dog
```

#### Interating over tuples - `for first_val, second_val in my_tuple_of_tuples`

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

#### Single element tuple - `my_tuple = (arg,)` or `arg,`

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

#### `.count('value')` - Return number of matching tuple items

#### `.index('value')` - Index of first matching tuple item

#### `'arg'` **`in`** `my_tuple` - membership test

#### Advantages of Tuple over List

- Since tuples are quite similar to lists, both of them are used in similar situations as well.
- However, there are certain advantages of implementing a tuple over a list. Below listed are some of the main advantages:
  - We generally use tuple for heterogeneous (different) datatypes and list for homogeneous (similar) datatypes.
  - Since tuples are immutable, iterating through tuple is faster than with list. So there is a slight performance boost.
  - Tuples that contain immutable elements (and some Built-in functions) be used as a key for a dictionary. With lists, this is not possible.
  - If you have data that doesn't change, implementing it as tuple will guarantee that it remains write-protected.

### Dict `{key1:'val1',key2:'val2'}`

- Keys must be of immutable type (string, number or tuple)
- Good for large amounts of data.
- Dictionaries are optimized for retrieving data.
- Dictionaries are **ordered collections**

#### Summary of Dictionary methods

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

#### Summary of Built-in functions with Dictionary

| Function | Description                                                                                 |
| :------: | :------------------------------------------------------------------------------------------ |
|  all()   | Return True if all keys of the dictionary are true (or if the dictionary is empty).         |
|  any()   | Return True if any key of the dictionary is true. If the dictionary is empty, return False. |
|  len()   | Return the length (the number of items) in the dictionary.                                  |
|  cmp()   | Compares items of two dictionaries.                                                         |
| sorted() | Return a new sorted list of keys in the dictionary.                                         |

#### Examples

##### Various creates

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

##### Access item - `my_dict[key]`

```python
my_dict = {'name':'Jack', 'age': 26}
print(my_dict['name'])
print(my_dict.get('age'))

# Jack
# 26
```

##### Update and add item - `my_dict[key] = value

```python
my_dict = {'name':'Jack', 'age': 26}
my_dict['age'] = 27 # update value
my_dict['address'] = 'Downtown' # add item
print(my_dict)

# {'name': 'Jack', 'age': 27, 'address': 'Downtown'}
```

##### Delete items - `.pop(key)`, `del my_dict[key]`, `.clear()`

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

##### Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`

- Same concept as List comprehension, but returns dictionary instead.

- A simple dictionary comprehension is comprised of;
  - A `for` loop with an `key` and `iterable`
  - An `expression`
  - As the loop iterates;
    - The `expression` is called and creates a `value`.
    - The `expression` returns a `key` : `value` pair
    - The comprehension adds the `key` : `value` pair to a new `dict`
  - When the loop ends, the comprehension returns the `dict`

###### Basic example

```python
print("Comprehension squares:    ", {x: x*x for x in range(6)})

squares = {}
for x in range(6):
  squares[x] = x*x
print("Traditional squares:", squares)

# Comprehension squares:     {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
# Traditional squares: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

###### Example with `if`

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

##### Membership test - `key in my_dict`

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

#### Nested dictionaries

- Nested dictionary is an unordered collection of dictionary
- Slicing Nested Dictionary is not possible.
- Can shrink or grow nested dictionary as needed.
- Like Dictionary, it also has key and value.
- Dictionary are accessed using key.

##### Create a Nested Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}

print("People:",people)
# People: {1: {'name': 'John', 'age': '27', 'sex': 'Male'}, 2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}
```

##### Access elements of a **Nested** Dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}

print(f"Person '1':", people[1])
print(f"Person '1's name is {people[1]['name']}, age is {people[1]['age']}, sex is {people[1]['sex']}")
# Person '1': {'name': 'John', 'age': '27', 'sex': 'Male'}
# Person '1's name is John, age is 27, sex is Male
```

##### Add a nested element to a Dictionary

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

##### Add another nested dictionary to a dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female', 'married': 'No'}}

people[4] = {'name': 'Peter', 'age': '29', 'sex': 'Male', 'married': 'Yes'}
print(people[4])

#{'name': 'Peter', 'age': '29', 'sex': 'Male', 'married': 'Yes'}
```

##### Delete **elements** from a **nested** Dictionary

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

##### Delete a nested dictionary from dictionary

```python
people = {1: {'name': 'John', 'age': '27', 'sex': 'Male'},
          2: {'name': 'Marie', 'age': '22', 'sex': 'Female'},
          3: {'name': 'Luna', 'age': '24', 'sex': 'Female'},
          4: {'name': 'Peter', 'age': '29', 'sex': 'Male'}}

del people[3], people[4]
print(people)
# {1: {'name': 'John', 'age': '27', 'sex': 'Male'}, 2: {'name': 'Marie', 'age': '22', 'sex': 'Female'}}
```

##### Iterate Through a Nested Dictionary

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

### Set `{x,y}` - Unordered collection of unique items

- A set is an unordered collection of items
- Can have hetrogenous itmes
- Every element is unique (no duplicates)
- Every element must be immutable (which cannot be changed).
  - NB: T set itself is mutable. Can add or remove items from it.

#### `.add(item)` - add item

#### `.update(items)` - add items

#### `.discard(item)` - if it exists, remove matching item

#### `.remove(item)` - remove match item. Exception if not found

#### `.clear()` - remove all items

#### `.pop()` - randomly remove an item

#### Set operations - all return sets

##### Union - `SET_X.union(SET_Y, SET_Z`) or `SET_X | SET_Y | SET_Z`

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

##### Intersection - `SET_X.intersetion(SET_Y, SET_Z)` or `SET_X & SET_Y & SET_Z`

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

##### Difference - `SET_X.difference(SET_Y` or `SET_X - SET_Y`

- Returns set of elements that are only in the first set.

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print(A - B)
print(A.difference(B))

# {1, 2, 3}
```

##### Symmeteric difference - `SET_X.symmetric_difference(SET_Y` or `SET_X ^ SET_Y`

- Returns set of elements in both A and B except those that are common in both.

```python
A = {1, 2, 3, 4, 5}
B = {4, 5, 6, 7, 8}

print(A ^ B)
print(A.symmetric_difference(B))

# {1, 2, 3, 6, 7, 8}
```

#### All set functions

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

##### Built-in Functions with Set

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

### Frozenset - `frozenset([1, 2, 3, 4])` - immutable set

- Same as set, except (and some Built-in functions)'t be changed.
