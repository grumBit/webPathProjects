# Quirky Python stuff <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [float vs. Decimal](#float-vs-decimal)
  - [WARNING: Use `Decimal` class to avoid `float` literal rounding errors](#warning-use-decimal-class-to-avoid-float-literal-rounding-errors)
- [`*` iterable and `**` dict unpacking operators](#-iterable-and--dict-unpacking-operators)
  - [Examples of unpacking](#examples-of-unpacking)
- [List comprehensions `[ expression for item in iterable ]`](#list-comprehensions--expression-for-item-in-iterable-)
  - [`for` - `[ expression for item in list]`](#for----expression-for-item-in-list)
  - [Nested **loops** - `[ expression for item_1 in list_1 for item_2 in list_2 ]`](#nested-loops----expression-for-item_1-in-list_1-for-item_2-in-list_2-)
  - [Nested **comprehensions** - `[[inner comprehension] outer comprehension]`](#nested-comprehensions---inner-comprehension-outer-comprehension)
  - [`if` selection - `[ expression for item in list if cond ]`](#if-selection----expression-for-item-in-list-if-cond-)
  - [Nested `if` selection - `[ expression for item in list if cond_1 if cond_2]`](#nested-if-selection----expression-for-item-in-list-if-cond_1-if-cond_2)
  - [`if ... else` expression - `[ value_1 if cond else value_2 for item in list ]`](#if--else-expression----value_1-if-cond-else-value_2-for-item-in-list-)
  - [List comprehension vs. lambda functions](#list-comprehension-vs-lambda-functions)
- [Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`](#dictionary-comprehension---my_dict--key-value-for-key-in-range-if-)
  - [Basic example](#basic-example)
  - [Example with `if`](#example-with-if)
- [Variables](#variables)
  - [Mutable variables `[a-z|A-Z]` `[a-z|A-Z|0-9|_]* = literal`](#mutable-variables-a-za-z-a-za-z0-9_--literal)
  - [Immutable / constant variables `[A-Z]` `[A-Z|_]* = literal`](#immutable--constant-variables-a-z-a-z_--literal)
  - [Multiple parallel assignment `var1 , var2 = literal1, literal2`](#multiple-parallel-assignment-var1--var2--literal1-literal2)
  - [Multiple serial assignment `var1 = var2 = var3 = literal`](#multiple-serial-assignment-var1--var2--var3--literal)
  - [Variable name scopes](#variable-name-scopes)
    - [Function `enclosing` sets name scopes](#function-enclosing-sets-name-scopes)
    - [`enclosed` variable access is immutable by default](#enclosed-variable-access-is-immutable-by-default)
    - [Mutability can be enabled by `global var` and `nonlocal var`](#mutability-can-be-enabled-by-global-var-and-nonlocal-var)
    - [Function nesting extends `enclosing`](#function-nesting-extends-enclosing)
    - [`enclosed` variables can be masked by children](#enclosed-variables-can-be-masked-by-children)
    - [WARNING: Beware of accidental name scoping errors](#warning-beware-of-accidental-name-scoping-errors)
    - [Sharing global variables across Python modules](#sharing-global-variables-across-python-modules)
<!-- /code_chunk_output -->

---

## float vs. Decimal

### WARNING: Use `Decimal` class to avoid `float` literal rounding errors

```python
from decimal import Decimal as D

print("Float's idea of 1.1 + 2.2 is", 1.1 + 2.2)
print("Decimal's idea of 1.1 + 2.2 is", D('1.1') + D('2.2'))

print("With float, 1.1 + 2.2 == 3.3 is", 1.1 + 2.2 == 3.3, "<- !!!WARNING!!!")
print("With decimall, 1.1 + 2.2 == 3.3 is", D('1.1') + D('2.2') == D('3.3'))

# Float's idea of 1.1 + 2.2 is 3.3000000000000003
# Decimal's idea of 1.1 + 2.2 is 3.3
# With float, 1.1 + 2.2 == 3.3 is False <- !!!WARNING!!!
# With decimal, 1.1 + 2.2 == 3.3 is True
```

- **WARNING:** Instantiating `Decimals` with `float` literals (e.g. `decimal.Decimal(1.2)` will introduce `float` literal rounding errors.  Instead, instantiate using quoted string literals (e.g. `decimal.Decimal('1.2')`

```python
from decimal import Decimal as D

print("D('1.1') + D('2.2') == D(1.1) + D(2.2) is", D('1.1') + D('2.2') == D(1.1) + D(2.2), " <- !!!WARNING!!!")

# D('1.1') + D('2.2') == D(1.1) + D(2.2) is False  <- !!!WARNING!!!
```

- Generally use Decimal in the following cases;

  - When making financial applications that need exact decimal representation.
  - When needing control of the level of precision is required.
  - When needing to implement the notion of significant decimal places.

## `*` iterable and `**` dict unpacking operators

- Unpacks contents of iterables and dictionaries as individual arguments to pass into functions

### Examples of unpacking

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

print("sums(*l1, *l1, *l1) =", sums(*l1, *l2, *l3), " - Function sums(*args) was passed 3 unpacked lists")

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
# sums(*l1, *l1, *l1) = 45  - Function sums(*args) was passed 3 unpacked lists
# 'a = [*"GFC"]'            - Unpacked iterable string into list: a = ['G', 'F', 'C']

# Merging:
# 'l4 = [*l1, *l2]'         - Merged lists l1 and l2 into l4 = [1, 2, 3, 4, 5]
# 'd3 = {**d1, **d2}'       - Merged dicts d1 and d2 into d3 = {'A': 1, 'B': 2, 'C': 3, 'D': 4}

# Variable argument assignment:
# '*a, = "GFC"'             - Used comma for variable assignment: a = ['G', 'F', 'C']
# 'start, *body, end = l3'  - Unpacked l3 into variable args: start = 6 , body = [7, 8] , end = 9
```

## List comprehensions `[ expression for item in iterable ]`

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

### Nested **loops** - `[ expression for item_1 in list_1 for item_2 in list_2 ]`

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

## Dictionary Comprehension - `my_dict = {key: value for key in range() if ...}`

- Same concept as List comprehension, but returns dictionary instead.

- A simple dictionary comprehension is comprised of;
  - A `for` loop with an `key` and `iterable`
  - An `expression`
  - As the loop iterates;
    - The `expression` is called and creates a `value`.
    - The `expression` returns a `key` : `value` pair
    - The comprehension adds the `key` : `value` pair to a new `dict`
  - When the loop ends, the comprehension returns the `dict`

### Basic example

```python
print("Comprehension squares:    ", {x: x*x for x in range(6)})

squares = {}
for x in range(6):
  squares[x] = x*x
print("Traditional squares:", squares)

# Comprehension squares:     {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
# Traditional squares: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### Example with `if`

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

## Variables

### Mutable variables `[a-z|A-Z]` `[a-z|A-Z|0-9|_]* = literal`

### Immutable / constant variables `[A-Z]` `[A-Z|_]* = literal`

- Name must be all upper case

- Predominantly constants are not user created. The `globals` or `constants` module is used.

- If user defined constants are needed, they are usually declared and assigned on a module. e.g.;

  - Typically create a module for constants. e.g. constant.py;

  ```python
    PI = 3.14
    GRAVITY = 9.8
  ```

  - Typical usage (e.g. in main.py)

  ```python
    import constant
    print(constant.PI)
    print(constant.GRAVITY)
    # 3.14
    # 9.8
  ```

### Multiple parallel assignment `var1 , var2 = literal1, literal2`

### Multiple serial assignment `var1 = var2 = var3 = literal`

### Variable name scopes

#### Function `enclosing` sets name scopes

- `Enclosing` is static and refers to **where** a function is defined in terms of indentation, not by which function it is **called by**. For example;

  - Compare snafu() being defined _within_ bar();

    ```python
    def foo():
      def bar():
        bar_str = "bar's string"
        def snafu():
          print(f"snafu() was defined within bar(),"
                f" so it is enclosed by bar(), and can access {bar_str}.")
        snafu()
      bar()
    foo()
    #snafu() was defined within bar(), so it is enclosed by bar(),
    # and can access bar's string.
    ```

  - With snafu() being defined _outside_ of bar();
  
    ```python
    def foo():
      def bar():
        bar_str = "bar's string"
        snafu()
      def snafu():
        print(f"snafu() was not defined within bar(),"
              f" so it is not enclosed by bar(), and cannot access {bar_str}.")
      bar()
    foo()
    # NameError: name 'bar_str' is not defined
    ```

#### `enclosed` variable access is immutable by default

- By default, a function can access, but not mutate, all variables instantiated by it's `enclosing` function**s** (note the plural).

#### Mutability can be enabled by `global var` and `nonlocal var`

- `global` enables a function to mutate a variable instantiated in the global scope.
- `nonlocal` enables a function to mutate a variable instantiated in an `enclosing` function.

  ```python
  def foo():
    def bar():
      var="bar() set me"
      print(f"    bar() - var = '{var}'  - bar() masking, but not changing, foo() var")
    def bun():
      nonlocal var
      var="bun() set me"
      print(f"    bun() - var = '{var}'  - used 'nonlocal var' to enable setting foo() var")
    def dee():
      global var
      var ="dee() set me"
      print(f"    dee() - var = '{var}'  - dee() used 'global var' to enable setting var at global scope")
    var="foo() set me"
    print(f"  foo()   - var = '{var}'  - foo() masking, but not changing global var")
    bar()
    print(f"  foo()   - var = '{var}'  - foo() var was unchanged by bar()")
    dee()
    print(f"  foo()   - var = '{var}'  - foo() var was unchanged by dee()")
    bun()
    print(f"  foo()   - var = '{var}'  - foo() var was changed by bun()")

  var="set globally"
  print(f"global    - var = '{var}'  - var initially set in global scope")
  foo()
  print(f"global    - var = '{var}'  - var in global scope was changed by dee()")
  # global    - var = 'set globally'  - var initially set in global scope
  #   foo()   - var = 'foo() set me'  - foo() masking, but not changing global var
  #     bar() - var = 'bar() set me'  - bar() masking, but not changing, foo() var
  #   foo()   - var = 'foo() set me'  - foo() var was unchanged by bar()
  #     dee() - var = 'dee() set me'  - dee() used 'global var' to enable setting var at global scope
  #   foo()   - var = 'foo() set me'  - foo() var was unchanged by dee()
  #     bun() - var = 'bun() set me'  - used 'nonlocal var' to enable setting foo() var
  #   foo()   - var = 'bun() set me'  - foo() var was changed by bun()
  # global    - var = 'dee() set me'  - var in global scope was changed by dee()
  ```

#### Function nesting extends `enclosing`

  ```python
  def foo():
    foo_str = "foo's string"
    def bar():
      def snafu():
        print(f"snafu() was defined within bar(), and hence foo(),"
              f" so it is enclosed by foo(), and can access {foo_str}.")
      snafu()
    bar()
  foo()
  # snafu() was defined within bar(), and hence foo(), so it is enclosed
  # by foo(), and can access foo's string.
  ```

#### `enclosed` variables can be masked by children

- An `enclosed` child function can mask an `enclosing` parent function's variable by defining another variable of the same name. e.g.

  ```python
  def foo():
    var = "foo set me"
    print(f"var = '{var}' - foo's initial assignment")
    def bar():
      var = "bar set me"
      print(f"var = '{var}' - bar new var is masking foo's var")
      def snafu():
        print(f"var = '{var}' - snafu is seeing bar's var")
      snafu()
    bar()
    print(f"var = '{var}' - foo's initial assignment still exists!")
  foo()
  # var = 'foo set me' - foo's initial assignment
  # var = 'bar set me' - bar is masking foo's var
  # var = 'bar set me' - snafu is seeing bar's var
  # var = 'foo set me' - foo's initial assignment still exists!
  ```

#### WARNING: Beware of accidental name scoping errors
  
```python
def foo():
  bar_str = "foo's variable that accidentally happens to have the same name!"
  def bar():
    bar_str = "bar's string"
    snafu()
  def snafu():
    print(f"WARNING: Although snafu() is not defined within bar(),"
          f" snafu() can access {bar_str}")
  bar()
foo()

#WARNING: Although snafu() is not defined within bar(), snafu() can access foo's variable that accidentally happens to have the same name!
```

#### Sharing global variables across Python modules

- Define variables in a config module (e.g. config.py)
- Import the config module in all the modules that need to access and modify the variables
- E.g.
  - Create a config.py file, to store global variables;

    ```python
    a = 0
    b = "empty"
    ```

  - Create a update.py file, to change global variables

    ```python
    import config
    config.a = 10
    config.b = "alphabet"
    ```

  - Create a main.py file, to test changes in value

    ```python
    import config
    import update
    print(config.a)
    print(config.b)
    ```
