# Exceptions <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Catching - `try:` ... `except(AnException, ...):`](#catching---try--exceptanexception-)
- [Raising - `raise AnException(arg,...)`](#raising---raise-anexceptionarg)
- [Cleaning up - `try:` ... `finally:`](#cleaning-up---try--finally)
- [Custom exceptions - `class MyException(Exception):`](#custom-exceptions---class-myexceptionexception)
- [List of Built-in exceptions](#list-of-built-in-exceptions)
<!-- /code_chunk_output -->

---

# Catching - `try:` ... `except(AnException, ...):`

```python
    try:
       # do something
       pass
    except ValueError:
       # handle ValueError exception
       pass
    except (TypeError, ZeroDivisionError):
       # handle multiple exceptions
       # TypeError and ZeroDivisionError
       pass
    except:
       # handle all other exceptions
       pass
```

# Raising - `raise AnException(arg,...)`

```python
try:
    a = int(input("Enter a positive integer: "))
    if a <= 0:
        raise ValueError("That is not a positive number!")
except ValueError as ve:
    print(ve)

# Enter a positive integer: -2
# That is not a positive number!
```

# Cleaning up - `try:` ... `finally:`

```python
try:
    f = open("test.txt",encoding = 'utf-8')
    # perform file operations
finally:
    f.close()
```

# Custom exceptions - `class MyException(Exception):`

- class has to be derived from  `Exception`

```python
import random

# define Python user-defined exceptions
class GuessError(Exception):
    """Base class for other exceptions"""
    pass
class ValueTooSmallGuessError(GuessError):
    """Raised when the input value is too small"""
    pass
class ValueTooLargeGuessError(GuessError):
    """Raised when the input value is too large"""
    pass

number = random.randint(1, 100)
while True:
    try:
        i_num = int(input("Enter a number between 1 and 100: "))
        if i_num < number:
            raise ValueTooSmallGuessError
        elif i_num > number:
            raise ValueTooLargeGuessError
        break
    except ValueTooSmallGuessError:
        print("This value is too small, try again!\n")
    except ValueTooLargeGuessError:
        print("This value is too large, try again!\n")
    except ValueError:
        print("This value is not a number, try again!\n")
print("Congratulations! You guessed it correctly.")
```

# [List of Built-in exceptions](https://www.programiz.com/python-programming/exceptions)

Exception | Cause of Error
:-:|:-
AssertionError | Raised when assert statement fails.
AttributeError | Raised when attribute assignment or reference fails.
EOFError | Raised when the input() functions hits end-of-file condition.
FloatingPointError | Raised when a floating point operation fails.
GeneratorExit | Raise when a generator's close() method is called.
ImportError | Raised when the imported module is not found.
IndexError | Raised when index of a sequence is out of range.
KeyError | Raised when a key is not found in a dictionary.
KeyboardInterrupt | Raised when the user hits interrupt key (Ctrl+c or delete).
MemoryError | Raised when an operation runs out of memory.
NameError | Raised when a variable is not found in local or global scope.
NotImplementedError | Raised by abstract methods.
OSError | Raised when system operation causes system related error.
OverflowError | Raised when result of an arithmetic operation is too large to be represented.
ReferenceError | Raised when a weak reference proxy is used to access a garbage collected referent.
RuntimeError | Raised when an error does not fall under any other category.
StopIteration | Raised by next() function to indicate that there is no further item to be returned by iterator.
SyntaxError | Raised by parser when syntax error is encountered.
IndentationError | Raised when there is incorrect indentation.
TabError | Raised when indentation consists of inconsistent tabs and spaces.
SystemError | Raised when interpreter detects internal error.
SystemExit | Raised by sys.exit() function.
TypeError | Raised when a function or operation is applied to an object of incorrect type.
UnboundLocalError | Raised when a reference is made to a local variable in a function or method, but no value has been bound to that variable.
UnicodeError | Raised when a Unicode-related encoding or decoding error occurs.
UnicodeEncodeError | Raised when a Unicode-related error occurs during encoding.
UnicodeDecodeError | Raised when a Unicode-related error occurs during decoding.
UnicodeTranslateError | Raised when a Unicode-related error occurs during translating.
ValueError | Raised when a function gets argument of correct type but improper value.
ZeroDivisionError | Raised when second operand of division or modulo operation is zero.
