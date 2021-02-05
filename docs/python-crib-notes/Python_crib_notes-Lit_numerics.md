# Numerics <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Limits](#limits)
- [float vs. Decimal](#float-vs-decimal)
  - [WARNING: Use `Decimal` class to avoid `float` literal rounding errors](#warning-use-decimal-class-to-avoid-float-literal-rounding-errors)
- [See also `math`, `fractions` and `random` modules](#see-also-math-fractions-and-random-modules)
<!-- /code_chunk_output -->

---

## Limits

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

## float vs. Decimal

### WARNING: Use `Decimal` class to avoid `float` literal rounding errors

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

## See also `math`, `fractions` and `random` modules
