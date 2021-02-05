# String <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [str()](#str)
- [Quoting and manipulation examples](#quoting-and-manipulation-examples)
- [Formatting](#formatting)
  - [`'hi {} from {}'.format(x,y)`](#hi--from-formatxy)
  - [`'hi {b} from {a}'.format(a=" ",b=" ")`](#hi-b-from-aformata-b-)
  - [sprintf style - `'The value of x is %3.2f' %12.3456789`](#sprintf-style---the-value-of-x-is-32f-123456789)
<!-- /code_chunk_output -->

---

## str()

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

## Quoting and manipulation examples

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

## Formatting

### `'hi {} from {}'.format(x,y)`

### `'hi {b} from {a}'.format(a=" ",b=" ")`

### sprintf style - `'The value of x is %3.2f' %12.3456789`
