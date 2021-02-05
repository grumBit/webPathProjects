# Variables and Types<!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
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
- [Types](#types)
  - [Return string of `type(var)`](#return-string-of-typevar)
  - [Test type using `isinstance(var, class)`](#test-type-using-isinstancevar-class)
  - [Implicit type conversion](#implicit-type-conversion)
    - [BEWARE - existing vars type can change](#beware---existing-vars-type-can-change)
  - [Explicit type conversion functions](#explicit-type-conversion-functions)
    - [To float `float()`](#to-float-float)
    - [To integer `int()`](#to-integer-int)
    - [To string `str()`](#to-string-str)
    - [List to Set `set([1,2,3])`](#list-to-set-set123)
    - [List to Dict `dict([[1,2],[3,4]])` - note pairs](#list-to-dict-dict1234---note-pairs)
<!-- /code_chunk_output -->

---

# Variables

## Mutable variables `[a-z|A-Z]` `[a-z|A-Z|0-9|_]* = literal`

- Never use special symbols like !, @, #, $, %, etc.
- Don't start a variable name with a digit.

## Immutable / constant variables `[A-Z]` `[A-Z|_]* = literal`

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

## Multiple parallel assignment `var1 , var2 = literal1, literal2`

## Multiple serial assignment `var1 = var2 = var3 = literal`

## Variable name scopes

### Function `enclosing` sets name scopes

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

### `enclosed` variable access is immutable by default

- By default, a function can access, but not mutate, all variables instantiated by it's `enclosing` function**s** (note the plural).

### Mutability can be enabled by `global var` and `nonlocal var`

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

### Function nesting extends `enclosing`

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

### `enclosed` variables can be masked by children

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

### WARNING: Beware of accidental name scoping errors
  
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

### Sharing global variables across Python modules

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

# Types

## Return string of `type(var)`

```python
print_type(5)
print_type(2.0)
print_type(1+2j)
print_type("A string")
print_type(f"A formatted string")
print_type(b"A byte string")
print_type(r"A raw string")
print_type([1,2,3])
print_type((1,2))
print_type({'a':'apple', 'b':'ball', 'c':'cat'})
print_type({'a', 'e', 'i' , 'o', 'u'})

# <class 'int'> is the type of '5'
# <class 'float'> is the type of '2.0'
# <class 'complex'> is the type of '(1+2j)'
# <class 'str'> is the type of 'A string'
# <class 'str'> is the type of 'A formatted string'
# <class 'bytes'> is the type of 'b'A byte string''
# <class 'str'> is the type of 'A raw string'
# <class 'list'> is the type of '[1, 2, 3]'
# <class 'tuple'> is the type of '(1, 2)'
# <class 'dict'> is the type of '{'a': 'apple', 'b': 'ball', 'c': 'cat'}'
# <class 'set'> is the type of '{'u', 'a', 'e', 'i', 'o'}'
```

## Test type using `isinstance(var, class)`

```python
a = 1+2j
print(f"Is {a} a complex number?", isinstance(a, complex))
# (1+2j) is complex number? True
```

## Implicit type conversion

### BEWARE - existing vars type can change

```python
num_int = 123
num_flo = 1.23

print("datatype of num_int:",type(num_int))
print("datatype of num_flo:",type(num_flo))

num_int = num_int + num_flo

print("BEWARE: datatype of num_int changed to:",type((num_int)))

# datatype of num_int: <class 'int'>
# datatype of num_flo: <class 'float'>
# BEWARE: datatype of num_int changed to: <class 'float'>
```

## Explicit type conversion functions

### To float `float()`

### To integer `int()`

### To string `str()`

### List to Set `set([1,2,3])`

### List to Dict `dict([[1,2],[3,4]])` - note pairs
