# Control Flow and Iteration <!-- omit in toc -->

Back to main [Python crib notes](./Python_crib_notes.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Control flow](#control-flow)
  - [`if` test expression `:` ... `elif` test expression `:` ... `else:`](#if-test-expression---elif-test-expression---else)
  - [`if` var `in`](#if-var-in)
- [Iteration](#iteration)
  - [`for` item `in` sequence `:`](#for-item-in-sequence)
  - [`for` i `in` `range(`start`,` end`,` step`):`](#for-i-in-rangestart-end-step)
  - [`for` x `in (`x `for` x `in` xyz `if` x `not in` a`):`](#for-x-in-x-for-x-in-xyz-if-x-not-in-a)
    - [↑ Combines `for` with expression using generator function](#%e2%86%91-combines-for-with-expression-using-generator-function)
  - [`while` test expression`:`](#while-test-expression)
  - [`break` out of the innermost loop](#break-out-of-the-innermost-loop)
  - [`continue` to next iteration of current loop](#continue-to-next-iteration-of-current-loop)
  - [`else:` executes at un-broken termination of loop](#else-executes-at-un-broken-termination-of-loop)
  - [`*args`, `**kwargs`, `*` and `**`](#args-kwargs--and)
    - [def func(`*args`): - **tuple** packing operator](#def-funcargs---tuple-packing-operator)
      - [Example](#example)
    - [def func(`**kwargs`): - keyword **dict** packing operator)](#def-funckwargs---keyword-dict-packing-operator)
    - [def func(`a`, `b`, `*args`, `**kwargs` ): - required order of arguments](#def-funca-b-args-kwargs----required-order-of-arguments)
      - [Example - NB: Iterate using kwargs.values()](#example---nb-iterate-using-kwargsvalues)
    - [`*` iterable and `**` dict unpacking operators](#iterable-and--dict-unpacking-operators)
      - [Examples](#examples)
- [Generator functions](#generator-functions)
  - [Simple generator functions with `yield` and loops](#simple-generator-functions-with-yield-and-loops)
  - [Generator expression `(expression for item in iterable`)](#generator-expression-expression-for-item-in-iterable)
  - [Can represent infinite stream without taking up memory](#can-represent-infinite-stream-without-taking-up-memory)
  - [Pipelining generator expressions](#pipelining-generator-expressions)
- [`zip(*iterables)` - parallel iteration of iterables](#zipiterables---parallel-iteration-of-iterables)
  - [WARNING: zip returns `iterator` (not `iterable`) => can't iterate twice](#warning-zip-returns-iterator-not-iterable--cant-iterate-twice)
  - [Zipping, Un-zipping and Parallel List iteration](#zipping-un-zipping-and-parallel-list-iteration)
  - [Sorting in parallel](#sorting-in-parallel)
  - [Calculating in parallel](#calculating-in-parallel)
  - [Parallel dictionary iteration](#parallel-dictionary-iteration)
  - [Dictionary building and updating](#dictionary-building-and-updating)
    <!-- /code_chunk_output -->

---

# Control flow

## `if` test expression `:` ... `elif` test expression `:` ... `else:`

- For test expressions;
  - Non-zero values are interpreted as `True`.
  - `None` and `0` are interpreted as False

```python
x = int(input("Enter an integer: "))
if x < 0:
    x = 0
    print('Negative changed to zero')
elif x == 0:
    print('Zero')
elif x == 1:
    print('Single')
else:
    print('More')
```

## `if` var `in`

# Iteration

## `for` item `in` sequence `:`

```python
words = ['iterating', 'over', 'a', 'sequence']
for w in words:
    print(w, end=" ")
# iterating over a sequence
```

## `for` i `in` `range(`start`,` end`,` step`):`

```python
for i in range(13, 20, 2):
    print(i, end=" ")
# 13 15 17 19

my_list = list(range(20, 13, -2))
print(my_list)
# [20, 18, 16, 14]
```

## `for` x `in (`x `for` x `in` xyz `if` x `not in` a`):`

### ↑ Combines `for` with expression using generator function

- NB: See generator function notes below

e.g.;

```python
a = [2,3,4,5,6,7,8,9,0]
xyz = [0,12,4,6,242,7,9]

# Using combined for with generator allows single line;
for x in (x for x in xyz if x not in a):
    print(x, end=' ')
# Outputs: 12 242

# Compared with traditional if inside of for;
for x in xyz:
    if x not in a:
        print(x, end=' ')
# Outputs: 12 242

# Combined can be used with list comprehension;
myList =[ x for x in (x for x in xyz if x not in a) ]
print(myList)
# Outputs: [12, 242]
```

## `while` test expression`:`

```python
while True:
    print("infinite loop")
```

## `break` out of the innermost loop

```python
for outer_word in ["Breaking", "out", "of", "innermost", "loop"]:
    print(outer_word, end="")
    for inner_word in [" ", "DON'T", "PRINT", "ME"]:
        print(inner_word, end="")
        break
# Breaking out of innermost loop
```

## `continue` to next iteration of current loop

```python
for word in ["'continue'","skips","rest","of","lines"]:
    print(word, end=" ")
    continue
    print("I'm always skipped!")
# 'continue' skips rest of lines
```

## `else:` executes at un-broken termination of loop

```python
for word in ["'else'","executes at un-broken termination of"]:
    print(word, end=" ")
else:
    print("loop")
# 'else' executes at un-broken termination of loop

words=["But","not","when","the","loop","breaks"]
while len(words) > 0:
    print(words[0], end=' ')
    words=words[1:]
    if len(words) == 0:
        break
else:
    print("Damn that break!")
# But not when the loop breaks
```

## `*args`, `**kwargs`, `*` and `**`

### def func(`*args`): - **tuple** packing operator

- Combines any number of positional arguments into a single argument that is an iterable, immutable, tuple.

- NB: The argument name can be any variable name, not just `args`.

#### Example

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

### def func(`**kwargs`): - keyword **dict** packing operator)

- Combines any number of keyword (or named) positional arguments into a single argument that is an iterable, dictionary.

- NB: The name can be any variable name, not just `kwargs`.

### def func(`a`, `b`, `*args`, `**kwargs` ): - required order of arguments

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

#### Example - NB: Iterate using kwargs.values()

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

### `*` iterable and `**` dict unpacking operators

- Unpacks contents of iterables and dictionaries as individual arguments to pass into functions

#### Examples

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

# Generator functions

- A generator function;
  - Contains one or more yield statements.
  - When called, it returns an iterator object, but does not start execution immediately.
  - Methods like **iter**() and **next**() are implemented automatically => can iterate through the items using next().
  - On yielding, the function is paused and the control is transferred to the caller.
  - Local variables and their states are remembered between successive calls.
  - When the function terminates, StopIteration is raised automatically on further calls.

## Simple generator functions with `yield` and loops

```python
def rev_str(my_str):
    length = len(my_str)
    for i in range(length - 1,-1,-1):
        yield my_str[i]


for char in rev_str("hello"):
     print(char, "- ", end="")

# o - l - l - e - h -
```

- Comparison of DIY iterator class vs. compact generator function;

```python
class PowTwoIterClass:
    def __init__(self, max = 0):
        self.max = max
    def __iter__(self):
        self.n = 0
        return self
    def __next__(self):
        if self.n > self.max:
            raise StopIteration
        result = 2 ** self.n
        self.n += 1
        return result

def powTwoGenFunc(max = 0):
    n = 0
    while n <= max:
        yield 2 ** n
        n += 1

print("Using iterator class: ", end="")

for n in PowTwoIterClass(4):
  print(n, end=", ")

print("\nUsing generator function: ", end="")

for n in powTwoGenFunc(4):
  print(n, end=", ")


# Using iterator class: 1, 2, 4, 8, 16,
# Using generator function: 1, 2, 4, 8, 16,
```

## Generator expression `(expression for item in iterable`)

- Similar to list comprehensions, except while list comprehensions produce an entire list, generator expressions produce one item at a time.

- They are lazy; Producing items only when asked for. => Are much more memory efficient than an equivalent list comprehension.

- Can be used inside function calls. When used in such a way, the round parentheses can be dropped.

- Comparison of list comprehension vs. generator expression;

```python
def whatsThatIGot(obj):
    print(f"I got a {type(obj)}, which contains: ", end="")

    for item in obj:
        print(item, end=", ")
    print()

my_list = [1, 3, 6, 10]

whatsThatIGot([ x**2 for x in my_list]) # List comprehension
whatsThatIGot((x**2 for x in my_list))  # Generator expression
whatsThatIGot(x**2 for x in my_list)    # Generator expression sans parentheses

# I got a <class 'list'>, which contains: 1, 9, 36, 100,
# I got a <class 'generator'>, which contains: 1, 9, 36, 100,
# I got a <class 'generator'>, which contains: 1, 9, 36, 100,
```

- Comparing practical use of List comprehension vs. generator expression;

```python
my_list = [1, 3, 6, 10]

print("Summed List comprehension =", sum([ x**2 for x in my_list]))
print("Summed Generator expression =", sum((x**2 for x in my_list)))
print("Summed Generator expression sans brackets =", sum(x**2 for x in my_list))

# Summed List comprehension = 146
# Summed Generator expression = 146
# Summed Generator expression sans brackets = 146
```

## Can represent infinite stream without taking up memory

```python
def all_pow_twos():
    n = 0
    while True:
        yield (2 ** n)
        n += 1

gen_func_stream = all_pow_twos()
for i in range(14):
    print(gen_func_stream.__next__(), end=", ")

# 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192,
```

## Pipelining generator expressions

- Generators can be used to pipeline a series of operations;

```python
from random import randint

# Write a file with the quantity of pizzas sold per hour in the 5 column
with open('sales.log', mode = 'w',encoding = 'utf-8') as file:
    for i in range(randint(500, 1000)):
        file.write(f"Qty {randint(0, 9)} Price {randint(10, 16)}.99\n")

# Sum the quantity of pizzas sold, ignoring and 'N/A' values.
with open('sales.log') as file:
    quantity_col = (line[4] for line in file)
    per_hour = (int(x) for x in quantity_col if x != 'N/A')
    print("Total number of pizzas sold = ",sum(per_hour))

# Total number of pizzas sold =  3061
```

# `zip(*iterables)` - parallel iteration of iterables

- "Returns an iterator of tuples, where the i-th tuple contains the i-th element from each of the argument sequences or iterables. The iterator stops when the shortest input iterable is exhausted. With a single iterable argument, it returns an iterator of 1-tuples. With no arguments, it returns an empty iterator. ([Source](https://docs.python.org/3/library/functions.html#zip))"

- See here for really good explanation

## WARNING: zip returns `iterator` (not `iterable`) => can't iterate twice

- Once the zip returned `iterator` has been iterated over, it can't be re-used.
- E.g.;

```python
zipped = zip([1,2], ["a","b"])
print(f"zipped content = {list(zipped)} - Returned iterator used to make list")
print(f"zipped content = {list(zipped)} - List is empty as iterator was already used")

# zipped content = [(1, 'a'), (2, 'b')]  - Returned iterator used to make list
# zipped content = [] - List is empty as iterator already used
```

## Zipping, Un-zipping and Parallel List iteration

```python
numbers = [1, 2, 3]
letters = ['a', 'b', 'c']
operators = ['*', '/', '+']

print("Zipping:")
zipped = zip(numbers, letters, operators)
print(f"  zipped = {zipped}")
print(f"  zipped type = {type(zipped)}")
zipped_content = list(zipped) # Warning: 'zipped' iterator has been used & is now defunct, so don't use it again!
print(f"  zipped content = {zipped_content}")

print("\nUn-zipping:")
uz_numbers, uz_letters, uz_operators = list(zip(*zipped_content))
print("  uz_numbers = ", uz_numbers ,", uz_letters = ", uz_letters ,", uz_operators = ", uz_operators)

print("\nParallel List iteration:")
for l, n, o in zip(letters, numbers, operators):
    print(f'  Letter: {l}, Number: {n}, Operator: {o}')

# Zipping:
#   zipped = <zip object at 0x10e01d0f0>
#   zipped type = <class 'zip'>
#   zipped content = [(1, 'a', '*'), (2, 'b', '/'), (3, 'c', '+')]

# Un-zipping:
#   uz_numbers =  (1, 2, 3) , uz_letters =  ('a', 'b', 'c') , uz_operators =  ('*', '/', '+')

# Parallel List iteration:
#   Letter: a, Number: 1, Operator: *
#   Letter: b, Number: 2, Operator: /
#   Letter: c, Number: 3, Operator: +
```

## Sorting in parallel

```python
letters = ['b', 'a', 'd', 'c']
numbers = [2, 4, 3, 1]
print(sorted(zip(letters, numbers)) , " - Letters 1st in tuple")
print(sorted(zip(numbers, letters)) , " - Numbers 1st in tuple")

#  [('a', 4), ('b', 2), ('c', 1), ('d', 3)]  - Letters 1st in tuple
#  [(1, 'c'), (2, 'b'), (3, 'd'), (4, 'a')]  - Numbers 1st in tuple
```

## Calculating in parallel

```python
sales = [52000.00, 51000.00, 48000.00]
prod_cost = [46800.00, 45900.00, 43200.00]
for sales, costs in zip(sales, prod_cost):
    print(f'Profit: {sales - costs}')

# Profit: 5200.0
# Profit: 5100.0
# Profit: 4800.0
```

## Parallel dictionary iteration

```python
dict_one = {'first_name': 'John', 'last_name': 'Smith', 'job': 'Python Nube'}
dict_two = {'first_name': 'Jane', 'last_name': 'Doe', 'job': 'Community Manager'}
for (key_1, val_1), (key_2, val_2) in zip(dict_one.items(), dict_two.items()):
    print(f"{key_1}: {val_1}            {key_2}: {val_2}")

# first_name: John            first_name: Jane
# last_name: Smith            last_name: Doe
# job: Python Nube            job: Community Manager
```

## Dictionary building and updating

```python

print("\nDictionary building:")
fields = ['name', 'last_name', 'age', 'job']
values = ['John', 'Doe', '45', 'Python Developer']
a_dict = dict(zip(fields, values))
print("  a_dict =", a_dict)

print("\nDictionary updating:")
fields = ['job', 'age']
new_values = ['Python Consultant', '46']
a_dict.update(zip(fields, new_values))
print("  a_dict =", a_dict)

# Dictionary building:
#   a_dict = {'name': 'John', 'last_name': 'Doe', 'age': '45', 'job': 'Python Developer'}

# Dictionary updating:
#   a_dict = {'name': 'John', 'last_name': 'Doe', 'age': '46', 'job': 'Python Consultant'}
```
