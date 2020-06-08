# Operators

Back to main [Python crib notes](./Python_crib_notes.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Arithmetic](#arithmetic)
- [Comparison](#comparison)
- [Logical](#logical)
- [Bitwise](#bitwise)
- [Assignment](#assignment)
- [Slicing `[::]`](#slicing)
  - [Syntax candy for `slice(start_point, end_point, step)`](#syntax-candy-for-slicestartpoint-endpoint-step)
- [Identity](#identity)
- [Membership](#membership)

<!-- /code_chunk_output -->

---

# Arithmetic


| Operator | Meaning | Example
|:--------:|:------- |:-----
| `+` | Add two operands or unary plus | x + y or +2
| `-` | Subtract right operand from the left or unary minus | x - y or -2
| `*` | Multiply two operands | x * y
| `/` | Divide left operand by the right one (always results into float) | x / y
| `%` | Modulus - remainder of the division of left operand by the right | x % y (remainder of x/y)
| `//` | Floor division - division that results into whole number adjusted to the left in the number line | x // y
| `**` | Exponent - left operand raised to the power of right | x**y (x to the power y)

# Comparison

| Operator | Meaning | Example
|:--------:|:------- |:-----
| `>` | Greater that - True if left operand is greater than the right | x > y
| `<` | Less that - True if left operand is less than the right | x < y
| `==` | Equal to - True if both operands are equal | x == y
| `!=` | Not equal to - True if operands are not equal | x != y
| `>==` | Greater than or equal to - True if left operand is greater than or equal to the right | x >= y
| `<=` | Less than or equal to - True if left operand is less than or equal to the right | x <= y

# Logical

| Operator | Meaning | Example
|:--------:|:------- |:-----
| `and` | True if both the operands are true | x `and` y
| `or`  | True if either of the operands is true | x `or` y
| `not` | True if operand is false (complements the operand) | `not` x

# Bitwise

| Operator | Meaning | Example
|:--------:|:------- |:-----
| `&`  | Bitwise AND | `x& y = 0 (0000 0000)`
| `|`  | Bitwise OR  | `x | y = 14 (0000 1110)`
| `~`  | Bitwise NOT | `~x = -11 (1111 0101)`
| `^`  | Bitwise XOR | `x ^ y = 14 (0000 1110)`
| `>>` | Bitwise right shift | `x>> 2 = 2 (0000 0010)`
| `<<` | Bitwise left shift | `x<< 2 = 40 (0010 1000)`

# Assignment

| Operator | Example | Equivatent to
|:--------:|:-------:|:-----
| `=`   | `x = 5`   | `x = 5`
| `+=`  | `x += 5`  | `x = x + 5`
| `-=`  | `x -= 5`  | `x = x - 5`
| `*=`  | `x *= 5`  | `x = x * 5`
| `/=`  | `x /= 5`  | `x = x / 5`
| `%=`  | `x %= 5`  | `x = x % 5`
| `//=` | `x //= 5` | `x = x // 5`
| `**=` | `x **= 5` | `x = x ** 5`
| `&=`  | `x &= 5`  | `x = x & 5`
| `|=`  | `x |= 5`  | `x = x | 5`
| `^=`  | `x ^= 5`  | `x = x ^ 5`
| `>>=` | `x >>= 5` | `x = x >> 5`
| `<<=` | `x <<= 5` | `x = x << 5`


# Slicing `[::]`

## Syntax candy for `slice(start_point, end_point, step)`

- All slice operations return a new list containing the requested elements

# Identity

| Operator | Meaning | Example
|:--------:|:------- |:-----
| is | True if the operands are identical (refer to the same object) | x is True
| is not | True if the operands are not identical (do not refer to the same object) | x is not True

# Membership

| Operator | Meaning | Example
|:--------:|:------- |:-----
| in | True if value/variable is found in the sequence | 5 in x
| not in | True if value/variable is not found in the sequence | 5 not in x
