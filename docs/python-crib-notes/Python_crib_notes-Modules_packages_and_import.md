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
  - [pyenv to manage python language versions](#pyenv-to-manage-python-language-versions)
    - [Install pyenv](#install-pyenv)
    - [Install specific python versions](#install-specific-python-versions)
    - [Set global python version](#set-global-python-version)
    - [Set local python version](#set-local-python-version)
  - [venv package management using pip-tools package versioning](#venv-package-management-using-pip-tools-package-versioning)
    - [Use existing virtual environment](#use-existing-virtual-environment)
    - [Create .venv dir and install versionsed packages](#create-venv-dir-and-install-versionsed-packages)
    - [Manage package versions in requirements.txt](#manage-package-versions-in-requirementstxt)
    - [Basic requirements.in and requirements.dev](#basic-requirementsin-and-requirementsdev)
  - [Creating PyPI packages](#creating-pypi-packages)
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

## pyenv to manage python language versions

### Install pyenv

- NB: On windows use pyenv-win

- If not installed, run;

```bash
curl -L https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash
```

- Then add the following to bash profile and start a new shell;

```bash
export PYENV_ROOT="$HOME/.pyenv"
command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
```

### Install specific python versions

- Find available verions;

```bash
pyenv install --list
```

- Install wanted versions;

```bash
pyenv install 3.11.0
pyenv install 3.7.15
```

### Set global python version

- Set the default version to be used when no local version has been set;

```bash
pyenv global 3.11.0
```

- NB: This sets the version in `~/.pyenv/version`

### Set local python version

- cd into a directory (e.g. a repo root) and run;

```bash
cd <repo root dir>
pyenv local 3.7.15
```

- This creates a `.python-version` file in the current directory. Whenever in this directory or it's subdirectories, the local version will apply

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
pip-sync requirements_dev.txt
echo "/.venv" >> .gitignore
```

### Manage package versions in requirements.txt

- To add a new package, first edit `requirements.in`
- To start versioning a new package AND/OR refresh all existing packages in `requirements.txt`, run;

  ```bash
  cd <some development dir>
  source .venv/bin/activate
  pip-compile requirements.in
  pip-compile requirements_dev.in
  ```

- To only start versioning new package or update only a specific existing package, run;

  ```bash
  cd <some development dir>
  source .venv/bin/activate
  pip-compile requirements.in -P <some new package OR some existing package>
  ```

### Basic requirements.in and requirements.dev

```bash
touch requirements.in
cat <<- EOF >> requirements_dev.in
-c requirements.txt
black
build
mypy
pylint
pytest
pytest-cov
EOF

cat <<-EOF >> .gitignore
__pycache__
/.mypy_cache
EOF
```

## Creating PyPI packages

- Working example of this here; [GitHub actions CI/CD and PyPI Python packaging](https://github.com/grumBit/python_packaging_example)
