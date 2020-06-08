# I/O <!-- omit in toc -->

NB: Main Python crib notes notes are [here](./Python_crib_notes.md)

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [File Built-in - `f = open('filename', 'mode', encoding = 'utf-8')`](#file-built-in---f--openfilename-mode-encoding--utf-8)
  - [File Modes](#file-modes)
  - [Specifying text file encoding is recommended](#specifying-text-file-encoding-is-recommended)
  - [File methods](#file-methods)
- [Directory and File Management - `import os`](#directory-and-file-management---import-os)
  - [pwd - `os.getcwd()`](#pwd---osgetcwd)
  - [cd -`os.chdir('dirname')`](#cd--oschdirdirname)
  - [ls - `os.listdir('dirname')`](#ls---oslistdirdirname)
  - [mkdir - `os.mkdir('dirname')`](#mkdir---osmkdirdirname)
  - [mv - `os.rename('dirname','new_dirname')`](#mv---osrenamedirnamenewdirname)
  - [rm and rmdir - `os.remove('name')`](#rm-and-rmdir---osremovename)
- [Misc](#misc)
  - [`print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)` - defaults](#printobjects-sep--endn-filesysstdout-flushfalse---defaults)
  - [`input([optional_prompt])` - returns string from keyboard](#inputoptionalprompt---returns-string-from-keyboard)
  - [Use `eval(input("Enter maths:"))` to calc](#use-evalinput%22enter-maths%22-to-calc)
<!-- /code_chunk_output -->

---

# [File Built-in](https://www.programiz.com/python-programming/file-operation) - `f = open('filename', 'mode', encoding = 'utf-8')`

## File Modes

Mode | Description
:---:|:-----------
'r' | Open a file for reading. (default)
'w' | Open a file for writing. Creates a new file if it does not exist or truncates the file if it exists.
'x' | Open a file for exclusive creation. If the file already exists, the operation fails.
'a' | Open for appending at the end of the file without truncating it. Creates a new file if it does not exist.
't' | Open in text mode. (default)
'b' | Open in binary mode.
'+' | Open a file for updating (reading and writing)

## Specifying text file encoding is recommended

- When working with files in text mode, it is highly recommended to specify the encoding type.

```python
f = open("test.txt",mode = 'r',encoding = 'utf-8')
```

## File methods

Method | Description
:-----:|:-----------
close() | Close an open file. It has no effect if the file is already closed.
detach() | Separate the underlying binary buffer from the TextIOBase and return it.
fileno() | Return an integer number (file descriptor) of the file.
flush() | Flush the write buffer of the file stream.
isatty() | Return True if the file stream is interactive.
read(n) | Read atmost n characters form the file. Reads till end of file if it is negative or None.
readable() | Returns True if the file stream can be read from.
readline(n=-1) | Read and return one line from the file. Reads in at most n bytes if specified.
readlines(n=-1) | Read and return a list of lines from the file. Reads in at most n bytes/characters if specified.
seek(offset,from=SEEK_SET) | Change the file position to offset bytes, in reference to from (start, current, end).
seekable() | Returns True if the file stream supports random access.
tell() | Returns the current file location.
truncate(size=None) | Resize the file stream to size bytes. If size is not specified, resize to current location.
writable() | Returns True if the file stream can be written to.
write(s) | Write string s to the file and return the number of characters written.
writelines(lines) | Write a list of lines to the file.

# [Directory and File Management](https://www.programiz.com/python-programming/directory) - `import os`

## pwd - `os.getcwd()`

## cd -`os.chdir('dirname')`

## ls - `os.listdir('dirname')`

## mkdir - `os.mkdir('dirname')`

## mv - `os.rename('dirname','new_dirname')`

## rm and rmdir - `os.remove('name')`

# Misc

## `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)` - defaults

- `sep` = separator `string` b/w values
- `end` = `string` at end of line
- `file` = file like object to output to

## `input([optional_prompt])` - returns string from keyboard

## Use `eval(input("Enter maths:"))` to calc