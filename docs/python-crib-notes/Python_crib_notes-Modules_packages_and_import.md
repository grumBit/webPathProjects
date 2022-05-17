# Modules, packages and `import` <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Modules](#modules)
  - [Import module name only - `import module_filename`.py](#import-module-name-only---import-module_filenamepy)
  - [Import specific names - `from module_filename import name1, name2, ...`](#import-specific-names---from-module_filename-import-name1-name2-)
  - [Import the all names - `from module_filename import *`](#import-the-all-names---from-module_filename-import-)
  - [Rename module - `import module_filename as`](#rename-module---import-module_filename-as)
  - [Module import searching](#module-import-searching)
  - [Reload a module - `imp.reload(my_module)`](#reload-a-module---impreloadmy_module)
- [dir() built-in function](#dir-built-in-function)
  - [Names defined in a module - `dir(module_name)`](#names-defined-in-a-module---dirmodule_name)
  - [Names in current namespace - `dir()`](#names-in-current-namespace---dir)
- [Packages - folders must contain `__init__.py`](#packages---folders-must-contain-__init__py)
  - [Import package module - `import TopPackage.SubPackage1.module1`](#import-package-module---import-toppackagesubpackage1module1)
  - [Import package module - `from TopPackage.SubPackage1 import module1`](#import-package-module---from-toppackagesubpackage1-import-module1)
  - [Import package module function - `from TopPackage.SubPackage1.module1 import my_func`](#import-package-module-function---from-toppackagesubpackage1module1-import-my_func)
  - [Package import searching](#package-import-searching)
  - [venv package management using pip-tools package versioning](#venv-package-management-using-pip-tools-package-versioning)
    - [Use existing virtual environment](#use-existing-virtual-environment)
    - [Create .venv dir and install versionsed packages](#create-venv-dir-and-install-versionsed-packages)
    - [Manage package versions in requirements.txt](#manage-package-versions-in-requirementstxt)
<!-- /code_chunk_output -->

---

# Modules

- A module is a file containing Python statements and definitions
- Note that when importing a module, the interpreter **executes** the statements in the modules.  This is a bit like the shell `source` statement

## Import module name only - `import module_filename`.py

```python
# import standard module math

import math
print("The value of pi is", math.pi)
print("The value of tau is", math.tau)

```

## Import specific names - `from module_filename import name1, name2, ...`

```python
# import only pi from math module

from math import pi
print("The value of pi is", pi)
```

## Import the all names - `from module_filename import *`

```python
# import all names from the standard module math

from math import *
print("The value of pi is", pi)
print("The value of tau is", tau)
```

## Rename module - `import module_filename as`

```python
# import module by renaming it

import math as m
print("The value of pi is", m.pi)
```

## Module import searching

- Interpreter first looks for a built-in module, if not found then into a list of directories defined in `sys.path`. The search is in this order;
  - The current directory.
  - PYTHONPATH (an environment variable with a list of directory).
  - The installation-dependent default directory.

## Reload a module - `imp.reload(my_module)`

- Note that if a module is imported using the `import` statement more than once, it is not re-executed, hence `imp.reload(my_module)`

# dir() built-in function

## Names defined in a module - `dir(module_name)`

## Names in current namespace - `dir()`

# Packages - folders must contain `__init__.py`

- `__init__.py` must exist in each packare's folder.
- `__init__.py` (and some Built-in functions) be empty or contain initialisation code for the package
- Organised hierarchically into sub-packages. E.g.

  ```bash
  ./TopPackage
  ./TopPackage/__init__.py  
  ./TopPackage/SubPackage1/__init__.py
  ./TopPackage/SubPackage1/module1.py
  ./TopPackage/SubPackage2/__init__.py
  ./TopPackage/SubPackage2/module2.py
  ```

## Import package module - `import TopPackage.SubPackage1.module1`

- To call function `my_func` in `module1` module;

  ```python
  TopPackage.SubPackage1.module1.my_func()
  ```

## Import package module - `from TopPackage.SubPackage1 import module1`

- To call function `my_func` in `module1` module;

  ```python
  module1.my_func()
  ```

## Import package module function - `from TopPackage.SubPackage1.module1 import my_func`

- **WARNING:"** This method is not recommended. Using the full namespace avoids confusion and prevents two same identifier names from colliding.
- To call function `my_func` in `module1` module;

  ```python
  my_func()
  ```

## Package import searching

- While importing packages, Python looks in the list of directories defined in sys.path

## venv package management using pip-tools package versioning

### Use existing virtual environment

- (assumes the virtual environment has been created in `.venv` dir - see below)

```bash
cd <some development dir>
source .venv/bin/activate
python3
```

### Create .venv dir and install versionsed packages

- (assumes package versions are being managed in `requirements.txt` - see below)

```bash
cd <some development dir>
python3 -m venv .venv
source .venv/bin/activate
pip install pip==22.1 setuptools==60.10.0 wheel==0.37.1 pip-tools==6.6.1
pip-sync requirements.txt
```

### Manage package versions in requirements.txt

- To add a new package, first edit `requirements.in`
- To start versioning a new package AND/OR refresh all existing packages in `requirements.txt`, run;

  ```bash
  cd <some development dir>
  source .venv/bin/activate
  pip-complile requirements.in
  ```

- To only start versioning new package or update only a specific existing package, run;

  ```bash
  cd <some development dir>
  source .venv/bin/activate
  pip-complile requirements.in -P <some new package OR some existing package>
  ```
