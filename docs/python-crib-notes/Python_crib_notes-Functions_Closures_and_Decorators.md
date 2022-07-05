# Functions, Closures and Decorators<!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Functions](#functions)
  - [Function definition `def a-z|A-Z*(arg1, arg2):`](#function-definition-def-a-za-zarg1-arg2)
  - [`return [expression_list]` - no expression returns `None`](#return-expression_list---no-expression-returns-none)
  - [Variable Function Arguments](#variable-function-arguments)
    - [Default arguments `f(mandatory_arg,` **`default_arg='default value'`**`)`](#default-arguments-fmandatory_arg-default_argdefault-value)
    - [Calling functions with keyword arguments `f( arg_1 = literal, ... ,arg_n = literal`](#calling-functions-with-keyword-arguments-f-arg_1--literal--arg_n--literal)
    - [Arbitrary number of arguments - `def f(*names):`](#arbitrary-number-of-arguments---def-fnames)
  - [Anonymous/Lambda Functions - `lambda args: expression`](#anonymouslambda-functions---lambda-args-expression)
    - [lambdas with filter and map](#lambdas-with-filter-and-map)
  - [Arguments are pass-by-value](#arguments-are-pass-by-value)
  - [Copy-assignment of functions `copied_f = f`](#copy-assignment-of-functions-copied_f--f)
- [Closures](#closures)
  - [Critreria to create closures](#critreria-to-create-closures)
  - [When to use closures](#when-to-use-closures)
  - [Statefull callbacks and TimeOutAlarm example](#statefull-callbacks-and-timeoutalarm-example)
- [Decorators `@my_decorator \n def my_func():`](#decorators-my_decorator-n-def-my_func)
  - [Boilerplate decorator](#boilerplate-decorator)
    - [Boilerplate explained with comments](#boilerplate-explained-with-comments)
  - [Background: Higher-order functions](#background-higher-order-functions)
  - [Background: Closures return functions](#background-closures-return-functions)
  - [Decorator basics and `@` syntax-sugar](#decorator-basics-and--syntax-sugar)
  - [Decorating Functions that have Parameters using `*args` & `**kwargs`](#decorating-functions-that-have-parameters-using-args--kwargs)
  - [Chaining Decorators](#chaining-decorators)
<!-- /code_chunk_output -->

---

# Functions

## Function definition `def [a-z|A-Z][a-z|A-Z|0-9|_]*(arg1, arg2):`

```python
def greeting( name = "mate" ):
    "docstring from optional 1st statement"
    print(f"Hi {name}.")

greeting()
# Hi mate.
```

## `return [expression_list]` - no expression returns `None`

## Variable Function Arguments

### Default arguments `f(mandatory_arg,` **`default_arg='default value'`**`)`

- Any number of arguments in a function can have a default value. But once there is a default argument, all the arguments to its right must also have default values. e.g.

```python
def greet(msg = "Good morning!", name):
  print("Hello",name + ', ' + msg)

# SyntaxError: non-default argument follows default argument
```

### Calling functions with keyword arguments `f( arg_1 = literal, ... ,arg_n = literal`

- Calling functions with keyword arguments allows the order (position) of the arguments to be changed.
- If all keyword arguments follow positional arguments, positional arguments can be mixed with keyword arguments during a function call.
  - If not, `SyntaxError: non-keyword arg after keyword arg`

### Arbitrary number of arguments - `def f(*names):`

```python
def greet(*names):
  """This function greets all
  the person in the names tuple."""

  # names is a tuple with arguments
  for name in names:
    print("Hello",name)

greet("Monica","Luke","Steve","John")

# Hello Monica
# Hello Luke
# Hello Steve
# Hello John
```

## Anonymous/Lambda Functions - `lambda args: expression`

- Lambda functions can have any number of arguments, but only one expression.
- The expression is evaluated and returned.
- Lambda functions can be used wherever function objects are required.
- Use lambda functions when a nameless function is needed for a short period of time.
- Often used as argument to higher-order functions (a function that takes in other functions as arguments).

### lambdas with filter and map

```python
random_numbers = [1, 5, 4, 6, 8, 11, 3, 12]

# Filter even items into a new list
even_numbers = list(filter(lambda x: (x%2 == 0) , random_numbers))

print(f"Even numbers: ", even_numbers)

# Double each item into a new list using map()
doubled_numbers = list(map(lambda x: x * 2 , random_numbers))

print(f"Doubled numbers: ", doubled_numbers)

# Even numbers:  [4, 6, 8, 12]
# Doubled numbers:  [2, 10, 8, 12, 16, 22, 6, 24]
```

## Arguments are pass-by-value

```python
def bar(bar_int, bar_list):
  print(f"In bar: bar_int = {bar_int}, bar_list = {bar_list}"
        " - As initially passed in from foo")

  bar_int, bar_list="4", [ "re-assigned","in", "bar   "]
  
  print(f"In bar: bar_int = {bar_int}, bar_list = {bar_list}"
        " - After being re-assigned in bar")

def foo(foo_int, foo_list):
  print(f"In foo: foo_int = {foo_int}, foo_list = {foo_list}"
        " - As initially passed in from global")

  bar(foo_int, foo_list)

  print(f"In foo: foo_int = {foo_int}, foo_list = {foo_list}"
        " - Still with original values => Values are passed by reference")

global_list=["list", "passed", "to", "foo"]
foo(1 , global_list)

# In foo: foo_int = 1, foo_list = ['list', 'passed', 'to', 'foo'] - As initially passed in from global
# In bar: bar_int = 1, bar_list = ['list', 'passed', 'to', 'foo'] - As initially passed in from foo
# In bar: bar_int = 4, bar_list = ['re-assigned', 'in', 'bar   '] - After being re-assigned in bar
# In foo: foo_int = 1, foo_list = ['list', 'passed', 'to', 'foo'] - Still with original values => Values are passed by reference
```

## Copy-assignment of functions `copied_f = f`

```python
def f(name_of_function_call, note=""):
  print(f"Initial  f() def called using '{name_of_function_call}()'. {note}")

assigned_f = f

f("f")

assigned_f("assigned_f", "Assigned from the initial f().")

def f(name_of_function_call, note=""):
  print(f"REPLACED f() def called using '{name_of_function_call}()'. {note}")

f("f")

assigned_f("assigned_f", "Behaves as per the initial f(), "
  "=> the assignment copied f(), not referred to f().")


# Initial  f() def called using 'f()'.
# Initial  f() def called using 'assigned_f()'. Assigned from the initial f().
# REPLACED f() def called using 'f()'.
# Initial  f() def called using 'assigned_f()'. Behaves as per the initial f(), => the assignment copied f(), not referred to f().
```

# Closures

- Closures enable some data (or state) to be attached to code, which can then be accessed later.
- E.g.;

```python
def print_msg(msg): # This is the outer enclosing function
    # NB: The arg 'msg' is a local variable of this function

    def printer(): # This is the nested function
        # NB: This nested-function can access 'msg' as a non-local variable
        print(msg)

    return printer  # Returning a closure, with it's local state

say_hi = print_msg( "Hello     - 'msg' from the 1st closure")
say_bye = print_msg("Farewell  - 'msg' from the 2nd closure")

say_hi()
say_bye()

# Hello     - 'msg' from the 1st closure
# Farewell  - 'msg' from the 2nd closure
```

## Critreria to create closures

The criteria that must be met to create a closure in Python are;

- Must have a nested function (function inside a function).
- The nested function must refer to a value defined in the enclosing function.
- The enclosing function must return the nested function.

## When to use closures

- Closures can avoid the use of global values and provides some form of data hiding.
- When there are few methods (one method in most cases) to be implemented in a class, closures can provide an alternate and more elegant solutions. But when the number of attributes and methods get larger, better implement a class.

- E.g.

```python
def make_multiplier_of(n):
    def multiplier(x):
        return x * n
    return multiplier

times3 = make_multiplier_of(3) # Multiplier of 3


times5 = make_multiplier_of(5) # Multiplier of 5

print("3 x 9 =", times3(9))
print("5 x 3 =", times5(3))
print("5 x ( 3 x 2 )) =", times5(times3(2)))

# 3 x 9 = 27
# 5 x 3 = 15
# 5 x ( 3 x 2 )) = 30
```

## Statefull callbacks and TimeOutAlarm example

- Closures can be used to enable lightweight state retention. If the state required is getting complicated, then it's probably better to define a class

- In the mega example below, the `TimeOutAble._create_signal_handler` function returns a statefull callback function. Note the use of `non-local` required to access the state within the callback function.

```python
import logging
import signal
from time import sleep

logging.basicConfig(
    format="%(asctime)s,%(msecs)d %(levelname)s [%(pathname)s:%(lineno)d - %(funcName)s() ] %(message)s",
    datefmt="%Y-%m-%d:%H:%M:%S",
    level=logging.DEBUG,
)
logger = logging.getLogger()


class TimedOutException(Exception):
    pass


class TimeOutAble:
    def timed_out(self):
        logger.debug(f"{self} didn't do any timeout handling when it timed out.")


class TimeOutAlarm:
    @classmethod
    def create_alarm(cls, timed: TimeOutAble, needs_to_finsh_within: int):
        signal.signal(signal.SIGALRM, cls._create_signal_handler(timed))
        signal.alarm(needs_to_finsh_within)
        logger.debug(f"{timed}'s timeout alarm signal set for {timed} in {needs_to_finsh_within} seconds")

    @classmethod
    def _create_signal_handler(cls, timed: TimeOutAble):
        timed = timed

        def _timed_out_alarm_signal_handler(signum, stack):
            nonlocal timed
            logger.debug(f"Timeout alarm signal received before {timed} finished working.Stack: {stack}")
            timed.timed_out()
            raise TimedOutException(stack)

        return _timed_out_alarm_signal_handler

    @classmethod
    def cancel_alarm(cls, timed: TimeOutAble):
        signal.alarm(0)
        logger.debug(f"Timeout alarm signal for {timed} cancelled")


class Worker(TimeOutAble):
    def __init__(self, identifier: str, what_i_do: str, break_needed: int):
        self.identifier = identifier
        self.what_i_do = what_i_do
        self.break_needed = break_needed

    def __str__(self):
        return self.identifier

    def timed_out(self):
        logger.info(f"Oh man! I didn't get done in time.")

    def do_work(self, a_number_of_times: int):
        while a_number_of_times:
            logger.info(
                f"I've been working hard at {self.what_i_do} and still have {a_number_of_times} more to do, but I need a {self.break_needed} second break"
            )
            a_number_of_times -= 1
            sleep(self.break_needed)
        logger.info(f"Phew! I got {self.what_i_do} done before I was timed out.")


def run_with_a_time_limit(worker: Worker, a_number_of_times: int, within: int):
    try:
        TimeOutAlarm.create_alarm(worker, within)
        worker.do_work(a_number_of_times=a_number_of_times)
        TimeOutAlarm.cancel_alarm(worker)
        logger.info(f"Great! {worker.identifier} got {worker.what_i_do} done in time.")
    except TimedOutException:
        logger.error(
            f"Hmmm... {worker.identifier} didn't get {worker.what_i_do} done in time. I need to decide what to do next."
        )


bob = Worker(identifier="Bob", what_i_do="stuff", break_needed=2)
run_with_a_time_limit(bob, 3, 5)
run_with_a_time_limit(bob, 3, 10)
```

# Decorators `@my_decorator \n def my_func():`

## Boilerplate decorator

```python
from functools import wraps, partial

def boilerplate_decorator(func=None, *, arg_1="some default", arg_2=5):
    if func is None:
        return partial(boilerplate_decorator, arg_1=arg_1, arg_2=arg_2)

    @wraps(func)
    def wrapper(*args, **kwargs):
        wrapper.counter += 1
        print(f"arg_1 = {arg_1}, arg_2 = {arg_2}, counter={wrapper.counter}")
        print("Doing something before")
        value = func(*args, **kwargs)
        print("Doing something after")
        return value

    wrapper.counter = 0
    return wrapper

# Example usages
@boilerplate_decorator(arg_1 = "some_value")
def my_sum(numbers):
    pass

@boilerplate_decorator()
def my_sum_2(numbers):
    pass

@boilerplate_decorator
def my_sum_3(numbers):
    pass
```

### Boilerplate explained with comments

```python
from functools import wraps, partial

def boilerplate_decorator(func=None, *, arg_1="some default", arg_2=5):       # Take in a function and it's args to decorate and some args to the decorator itself
    if func is None:
        return partial(boilerplate_decorator, arg_1=arg_1, arg_2=arg_2)       # Handle decoration without parenthesis. E.g. @boilerplate_decorator

    @wraps(func)                                                              # Retain identity of decorated function, which prevents func.__name__ and help(func) from returning "basic_boilerplate_decorator" stuff
    def wrapper(*args, **kwargs):                                             # Capture all arguments to decorated function
        wrapper.counter += 1                                                  # Alter a local state variable
        print(f"arg_1 = {arg_1}, arg_2 = {arg_2}, counter={wrapper.counter}") # Access both the args to the decorator and some local state variable
        print("Doing something before")                                       # Get the decorator to do some work done BEFORE running the decorated function
        value = func(*args, **kwargs)                                         # Call the decorated function with all it's arguments and caputure it's return value
        print("Doing something after")                                        # Get the decorator to do some work done AFTER running the decorated function
        return value                                                          # Pass back the decorated function's return value

    wrapper.counter = 0                                                       # Create and set a local state variable which can be altered
    return wrapper                                                            # Pass back the wrapped decorated function

# Example usages
@boilerplate_decorator(arg_1 = "some_value")
def my_sum(numbers) -> int:
    count=0
    for number in numbers:
        count += number
    return count

@boilerplate_decorator()
def my_sum_2(numbers) -> int:
    pass

@boilerplate_decorator
def my_sum_3(numbers) -> int:
    pass

print(f"sum = {my_sum([1, 2, 3])}")
print(f"sum = {my_sum([1, 2, 3])}")
print(f"The decorated function's identity is '{my_sum.__name__}'")
```

## Background: Higher-order functions

- A higher order function is a function that take other functions as arguments
- E.g.;

```python
def inc(x):
    return x + 1

def dec(x):
    return x - 1

def operate(func_arg, x):
    result = func_arg(x)
    return result

print("Operating on 3 with the inc function:", operate(inc,3))
print("Operating on 3 with the dec function:", operate(dec,3))

# Operating on 3 with the inc function: 4
# Operating on 3 with the dec function: 2
```

## Background: Closures return functions

- See [here](#closures)

## Decorator basics and `@` syntax-sugar

- Any object which implements the special method `__call__()` is termed callable
- A decorator is a callable that returns a callable.
- A decorator takes in a function, adds some functionality and returns it.
- The nature of the object that got decorated does not alter. But now, it looks different (since it got decorated).

- Atypical e.g.;

```python
def make_pretty(func):  # make_pretty is a decorator
    def inner():
        print("I got decorated")
        func()          # make_pretty calls func after adding some functionality
    return inner

def ordinary():
    print("I am ordinary")

ordinary()
pretty = make_pretty(ordinary)
pretty()

# I am ordinary
# I got decorated
# I am ordinary
```

- Typical e.g. where a function is decorated and then reassigned it to itself;

```python
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

def ordinary():
    print("I am ordinary")

ordinary = make_pretty(ordinary)  # 'ordinary' is decorated and then reassigned it to itself
ordinary()

# I got decorated
# I am ordinary
```

- `@` Syntax-sugar e.g.;

```python
def make_pretty(func):
    def inner():
        print("I got decorated")
        func()
    return inner

@make_pretty  # denotes 'ordinary' is to be decorated by make_pretty and reassigned it to itself
def ordinary():
    print("I am ordinary")

ordinary()

# I got decorated
# I am ordinary

```

## Decorating Functions that have Parameters using `*args` & `**kwargs`

- See also [*args, **kwargs, * and**](./Python_crib_notes-Control_flow_and_Iteration.md#args-kwargs--and).

- Basic illustrative e.g.;

```python
def make_pretty(func):
    def inner(ord_name):         # NB: Has 1 positional arg
        ord_name = ord_name.capitalize()
        print(f"{ord_name} had his name capitalized")
        func(ord_name)
    return inner

@make_pretty
def ordinary(name):          # NB: Also has 1 positional arg
    print(f"{name} thinks he is ordinary")

ordinary('bob')

# Bob had his name capitalized
# Bob thinks he is ordinary
```

- Generic e.g. that works for all decorators and function parameters;

```python
def works_for_all(func):
    def inner(*args, **kwargs):     # packs all arguments into 'args' tuple, and all keywords into 'kwargs' dictionary
        print("I can decorate any function")
        return func(*args, **kwargs) # unpacks 'args' to arguments and 'kwargs' to keywords
    return inner
```

## Chaining Decorators

- A function can be decorated multiple times with different (or same) decorators.

```python
def star(func):
    def inner(*args, **kwargs):
        print("*" * 30)
        func(*args, **kwargs)
        print("*" * 30)
    return inner

def percent(func):
    def inner(*args, **kwargs):
        print("%" * 30)
        func(*args, **kwargs)
        print("%" * 30)
    return inner

@star              # NB: Order of chaining is important
@percent
def printer(msg):
    print(msg)
printer("Hello")

# ******************************
# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# Hello
# %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
# ******************************
```
