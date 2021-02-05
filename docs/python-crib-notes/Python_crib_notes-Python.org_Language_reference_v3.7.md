# [Python.org Language reference v3.7](https://docs.python.org/3.7/reference/index.html) <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Uses BNF (Backus–Naur Form) Notation](#uses-bnf-backusnaur-form-notation)
- [Lexical analysis](#lexical-analysis)
  - [Encoding declarations](#encoding-declarations)
  - [Line Structure and `NEWLINE` token generation](#line-structure-and-newline-token-generation)
  - [Indentation and `INDENT`, `DEDENT` token generation](#indentation-and-indent-dedent-token-generation)
  - [Other tokens](#other-tokens)
  - [Identifiers and keywords](#identifiers-and-keywords)
  - [Reserved keywords](#reserved-keywords)
  - [Reserved classes of identifiers](#reserved-classes-of-identifiers)
  - [Literals](#literals)
    - [String and Bytes literals](#string-and-bytes-literals)
      - [BNF definition](#bnf-definition)
      - [Prefixes](#prefixes)
      - [String and byte literal escape sequences](#string-and-byte-literal-escape-sequences)
      - [String literal only escape sequences](#string-literal-only-escape-sequences)
<!-- /code_chunk_output -->

---

# [Uses BNF (Backus–Naur Form) Notation](https://docs.python.org/3.7/reference/introduction.html#notation)

- Rules start with;

  `<name defined by the rule>` `::=`

- Rules syntax;

| Rule         | Description                         |
|:------------:|:-----------------                   |
| `|`          | Separates alternatives
| `( )`        | Grouping
| `*`          | 0 or more repetitions, and bind as tightly as possible
| `+`          | 1 or more repetitions, and bind as tightly as possible
| `[]`         | 0 or 1 occurrences (i.e. phrase is optional)
| `' '`        | Literal string
| ``          | White space separates tokens
| `...`        | For [lexical definitions](https://docs.python.org/3.7/reference/lexical_analysis.html), inclusive range of ASCII characters (e.g. "a"..."z")
| `<`phrase`>` | For [lexical definitions](https://docs.python.org/3.7/reference/lexical_analysis.html), informal description of the symbol defined

- Rules are normally contained on a single line
- Rules with many alternatives may be formatted alternatively with each line after the first beginning with a vertical bar.

- Example of 2 rules:
  
  ```bnf
  name      ::=  lc_letter (lc_letter | "_")*
  lc_letter ::=  "a"..."z"
  ```

  - Explanation;
    - Note that `lc_letter` defined on 2nd line is used to define `name`
    - `lc_letter` is any lower case letter
    - `name` must start with any lowercase letter and (and some Built-in functions) be followed by 0 or more lowercase letters or underscores

# [Lexical analysis](https://docs.python.org/3.7/reference/lexical_analysis.html)

## [Encoding declarations](https://docs.python.org/3.7/reference/lexical_analysis.html#encoding-declarations)

- When comment on 1st or 2nd line matches regexp `coding[=:]\s*([-\w.]+)`
- E.g.
  
  ```python
  # -*- coding: <encoding-name> -*-
  # vim:fileencoding=<encoding-name>
  ```

## [Line Structure and `NEWLINE` token generation](https://docs.python.org/3.7/reference/lexical_analysis.html#line-structure)

- Program is divided into `logical lines`
- A `logical line` is constructed and terminated by a parser generated `NEWLINE` token from one or more physical lines using these rules;
  - **`\`** at EOL **explicitly** joins lines. e.g.;

    ```python
    if 1900 < year < 2100 and 1 <= month <= 12 \
      and 1 <= day <= 31 and 0 <= hour < 24 \
      and 0 <= minute < 60 and 0 <= second < 60:   # Looks like a valid date
        return 1
    ```

  - Expressions within **`()`**, **`[]`** or **`{}`** **implicity** join lines. e.g.;

      ```python
      month_names = ['Januari', 'Februari', 'Maart',      # These are the
             'April',   'Mei',      'Juni',       # Dutch names
             'Juli',    'Augustus', 'September',  # for the months
             'Oktober', 'November', 'December']   # of the year
      ```

  - `#` to EOL is removed from `logical line`
    - NB: `\` at EOL does not continue a comment to next line

  - Lines with only white space are removed from `logical line`
  
## [Indentation and `INDENT`, `DEDENT` token generation](https://docs.python.org/3.7/reference/lexical_analysis.html#indentation)

- Each line's `indentation level` is computed using leading spaces and tabs;
  - First, tabs are replaced with b/w 1 to 8 spaces
    - NB: A `TabError` is raised if a file mixes tabs and spaces such that the meaning depends on the worth of a tab in spaces
    - WARNING: It is unwise to mix spaces and tabs due to varying text editor behaviours
  - The number of leading spaces is the indentation level of the line
  - Indentation does not split over lines with `\`. The number of spaces preceding the `\` is the indentation level.

- For each line, `INDENT` & `DEDENT` tokens are generated using the `indentation level` and a stack;
  - If the line's `indentation level` is;
    - `=` stack-top;
      - Nothing happens
    - `>` stack-top;
      - The line's `indentation level` is pushed onto the stack
      - Generate one `INDENT`
    - `<` stack-top;
      - NB: It _**must**_ occurs elsewhere on the stack;
      - Each higher level on the stack is popped off
      - For each popped level, generate a `DEDENT`
- Examples of indentation errors;
  
  ```python
   def perm(l):                       # error: first line indented
  for i in range(len(l)):             # error: not indented
      s = l[:i] + l[i+1:]
          p = perm(l[:i] + l[i+1:])   # error: unexpected indent
          for x in p:
                  r.append(l[i:i+1] + x)
              return r                # error: inconsistent dedent
  ```

## [Other tokens](https://docs.python.org/3.7/reference/lexical_analysis.html#other-tokens)

## [Identifiers and keywords](https://docs.python.org/3.7/reference/lexical_analysis.html#identifiers)

- Since Python v3.0, identifiers are unlimited in length. Case is significant. See [PEP 3131](https://www.python.org/dev/peps/pep-3131/) for allowed characters.

## [Reserved keywords](https://docs.python.org/3.7/reference/lexical_analysis.html#keywords)

```python
False      await      else       import     pass
None       break      except     in         raise
True       class      finally    is         return
and        continue   for        lambda     try
as         def        from       nonlocal   while
assert     del        global     not        with
async      elif       if         or         yield
```

## [Reserved classes of identifiers](https://docs.python.org/3.7/reference/lexical_analysis.html#reserved-classes-of-identifiers)

| Classs         | Description                         |
|:--------------:|:-----------------                   |
| `_*`           | Not imported by `from module import *`. See [import statement](https://docs.python.org/3.7/reference/simple_stmts.html#import)
| `__*__` .      | [System-defined names](https://docs.python.org/3.7/reference/datamodel.html#specialnames), which are defined by the interpreter and standard library. **WARNING**: Use as explicitly documented to avoid breakage without warning.
| `__*`          | Class-private names. Used for [name mangling](https://docs.python.org/3.7/reference/expressions.html#atom-identifiers) to help avoid name clashes between “private” attributes of base and derived classes.

## [Literals](https://docs.python.org/3.7/reference/lexical_analysis.html#literals)

### [String and Bytes literals](https://docs.python.org/3.7/reference/lexical_analysis.html#string-and-bytes-literals)

#### BNF definition

- String literals

  ```bnf
  stringliteral   ::=  [stringprefix](shortstring | longstring)
  stringprefix    ::=  "r" | "u" | "R" | "U" | "f" | "F"
                      | "fr" | "Fr" | "fR" | "FR" | "rf" | "rF" | "Rf" | "RF"
  shortstring     ::=  "'" shortstringitem* "'" | '"' shortstringitem* '"'
  longstring      ::=  "'''" longstringitem* "'''" | '"""' longstringitem* '"""'
  shortstringitem ::=  shortstringchar | stringescapeseq
  longstringitem  ::=  longstringchar | stringescapeseq
  shortstringchar ::=  <any source character except "\" or newline or the quote>
  longstringchar  ::=  <any source character except "\">
  stringescapeseq ::=  "\" <any source character>
  ```

- Byte literals

  ```bnf
  bytesliteral   ::=  bytesprefix(shortbytes | longbytes)
  bytesprefix    ::=  "b" | "B" | "br" | "Br" | "bR" | "BR" | "rb" | "rB" | "Rb" | "RB"
  shortbytes     ::=  "'" shortbytesitem* "'" | '"' shortbytesitem* '"'
  longbytes      ::=  "'''" longbytesitem* "'''" | '"""' longbytesitem* '"""'
  shortbytesitem ::=  shortbyteschar | bytesescapeseq
  longbytesitem  ::=  longbyteschar | bytesescapeseq
  shortbyteschar ::=  <any ASCII character except "\" or newline or the quote>
  longbyteschar  ::=  <any ASCII character except "\">
  bytesescapeseq ::=  "\" <any ASCII character>
  ```

#### Prefixes

| Prefix     | Description
|:----------:|:----------
| No prefix :| [str](https://docs.python.org/3.7/library/stdtypes.html#str) type literal.
| `f` `F`    | [f-string](https://docs.python.org/3.7/reference/lexical_analysis.html#f-strings) formatted string literal
| `b` `B`    | [byte](https://docs.python.org/3.7/library/stdtypes.html#bytes) type literal. ASCII characters only. Bytes >= 128 must be expressed with escapes.
| `r` `R`    | String or byte `raw string`. Backslashes are treated as literal characters

#### String and byte literal escape sequences

|Escape Sequence | Meaning
|:--------------:|:---------
| \newline       | Backslash and newline ignored
| \\             | Backslash (\)
| \'             | Single quote (')
| \"             | Double quote (")
| \a             | ASCII Bell (BEL)
| \b             | ASCII Backspace (BS)
| \f             | ASCII Formfeed (FF)
| \n             | ASCII Linefeed (LF)
| \r             | ASCII Carriage Return (CR)
| \t             | ASCII Horizontal Tab (TAB)
| \v             | ASCII Vertical Tab (VT)
| \ooo           | Character with octal value ooo _(1,3)_
| \xhh           | Character with hex value hh _(2,3)_

#### String literal only escape sequences

|Escape Sequence | Meaning
|:--------------:|:---------
| \N{name}       | Character named name in the Unicode database _(4)_
| \uxxxx         | Character with 16-bit hex value xxxx _(5)_
| \Uxxxxxxxx     | Character with 32-bit hex value xxxxxxxx _(6)_

- Notes:
  1. As in Standard C, up to three octal digits are accepted.
  2. Unlike in Standard C, exactly two hex digits are required.
  3. In a bytes literal, hexadecimal and octal escapes denote the byte with the given value. In a string literal, these escapes denote a Unicode character with the given value.
  4. Changed in version 3.3: Support for name aliases 1 has been added.
  5. Exactly four hex digits are required.
  6. Any Unicode character (and some Built-in functions) be encoded this way. Exactly eight hex digits are required.
