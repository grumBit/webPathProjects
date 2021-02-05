# Classes and Objects <!-- omit in toc -->

[< Back](./Python_crib_notes.md)

---

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Grum mega-example](#grum-mega-example)
- [Classes - `class MyClass: ...`](#classes---class-myclass-)
  - [Built-in check for type - `if isinstance(my_obj, MyClass): ...`](#built-in-check-for-type---if-isinstancemy_obj-myclass-)
  - [Inheritance - `class MyClass(MyParentClass): ...`](#inheritance---class-myclassmyparentclass-)
    - [Built-in check for inheritance - `if issubclass(my_obj, MyClass): ...`](#built-in-check-for-inheritance---if-issubclassmy_obj-myclass-)
    - [Multiple inheritance - `class MyClass(MyParentClass, MyOtherParentClass): ...`](#multiple-inheritance---class-myclassmyparentclass-myotherparentclass-)
      - [Method Resolution Order](#method-resolution-order)
  - [Operator overloading](#operator-overloading)
    - [Operator Overloading Special Functions](#operator-overloading-special-functions)
    - [Comparison Operator Overloading](#comparison-operator-overloading)
  - [Class data attributes](#class-data-attributes)
    - [Defining - `my_class_attrib = value`](#defining---my_class_attrib--value)
      - [NB: Classes cannot have private attributes](#nb-classes-cannot-have-private-attributes)
    - [Accessing](#accessing)
      - [Via class - `MyClass.my_class_attrib`](#via-class---myclassmy_class_attrib)
      - [Via object - `my_obj.__class__.my_class_attrib`](#via-object---my_obj__class__my_class_attrib)
    - [Dymanic addition](#dymanic-addition)
      - [Via class - `MyClass.new_class_attrib = value`](#via-class---myclassnew_class_attrib--value)
      - [Via object - `my_obj.__class__.new_class_attrib = value`](#via-object---my_obj__class__new_class_attrib--value)
    - [Dynamic deletion](#dynamic-deletion)
      - [Via class - `del MyClass.my_class_attrib`](#via-class---del-myclassmy_class_attrib)
      - [Via object - `del my_obj.__class__.my_class_attrib`](#via-object---del-my_obj__class__my_class_attrib)
- [Objects - `my_obj = MyClass()`](#objects---my_obj--myclass)
  - [Object data attributes](#object-data-attributes)
    - [Class defined public - `def mypublicattrib(arg, ...): self.mypublicattrib = value`](#class-defined-public---def-mypublicattribarg--selfmypublicattrib--value)
    - [Class defined private - `def __myprivateattrib(arg, ...): self.mypublicattrib = value`](#class-defined-private---def-__myprivateattribarg--selfmypublicattrib--value)
      - [WARNING: Private attributes can be masked by dynamically added ones](#warning-private-attributes-can-be-masked-by-dynamically-added-ones)
    - [Dynamic addition - `my_obj.newAttrOnlyForThisObj = value`](#dynamic-addition---my_objnewattronlyforthisobj--value)
    - [Access - `my_obj.my_obj_attrib`](#access---my_objmy_obj_attrib)
    - [Dynamic deletion (excl private) - `del my_obj.my_obj_attrib`](#dynamic-deletion-excl-private---del-my_objmy_obj_attrib)
  - [Class functions (a.k.a) bound object methods](#class-functions-aka-bound-object-methods)
    - [Defining - `def my_method(self, arg, ...):`](#defining---def-my_methodself-arg-)
    - [Calling - `my_obj.my_method(arg, ...)`](#calling---my_objmy_methodarg-)
      - [NB: `self` - object itself is passed as the first argument](#nb-self---object-itself-is-passed-as-the-first-argument)

<!-- /code_chunk_output -->

---

# Grum mega-example

```python
class MyParentClass:
  
    def __init__(self):
        print("Parent's __init__ methods can be called using super().__init__() in the children's __init__")

    def parentMethod(self, callingClass):
        return f"Parent method was called by {callingClass}"

    def polymorphicMethod(self, callingClass):
        return f"DANGER WILL ROBINSON! This method should have been overriden by {callingClass}"

class MyClass(MyParentClass):

    myClassAttribute = "I am a class attribute"

    def __init__(self, my_pub_attr):
        super().__init__() # call super() function
        print("Children's __init__ are called when a class instance object is instantiated")
        self.__my_priv_attr = "I am a PRIVATE attribute (a.k.a. data object) of a class instance object"
        self.my_pub_attr = my_pub_attr

    def getterPriv(self):
        return self.__my_priv_attr

    def getterPub(self):
          return self.my_pub_attr

    def setterPriv(self, new_value):
        self.__my_priv_attr = new_value
        print("Private setter function called")

    def setterPub(self, new_value):
        self.__my_priv_attr = new_value
        print("Public setter function called")

    def polymorphicMethod(self, callingClass):
        return f"All good, this method was overriden by {callingClass}"

    def whoYouGonnaCall(self):
        return f"whoYouGonnaCall() was called by {self}"

print()
my_obj = MyClass("I am a PUBLIC attribute (a.k.a. data object) of a class instance object") # Instantiate a MyClass object
print()
print(f"Functions are defined on classes. E.g.: {MyClass.getterPriv}")
print(f"Method objects are bound to class instance objects. E.g.: {my_obj.getterPriv}")
print()
print(f"Class attributes can be accessed via the class object like this: MyClass.myClassAttribute = '{MyClass.myClassAttribute}'")
print(f"Class attributes can be accessed via instance objects like this: my_obj.__class__.myClassAttribute = '{my_obj.__class__.myClassAttribute}'")
print()
print(f"Public object attributes can be accessed like this: my_obj.my_pub_attr = '{my_obj.my_pub_attr}'")
print()
print(f"Inheritance works: {my_obj.parentMethod(MyClass)}")
print()
print(f"Polymorphism works: {my_obj.polymorphicMethod(MyClass)}")
print()
print(f"When an object calls its method, the object itself is passed as the first argument, so when {my_obj} called whoYouGonnaCall(), it replied: {my_obj.whoYouGonnaCall()}")

# Parent's __init__ methods can be called using super().__init__() in the children's __init__
# Children's __init__ are called when a class instance object is instantiated

# Functions are defined on classes. E.g.: <function MyClass.getterPriv at 0x108fe1dd0>
# Method objects are bound to class instance objects. E.g.: <bound method MyClass.getterPriv of <__main__.MyClass object at 0x108fecfd0>>

# Class attributes can be accessed via the class object like this: MyClass.myClassAttribute = 'I am a class attribute'
# Class attributes can be accessed via instance objects like this: my_obj.__class__.myClassAttribute = 'I am a class attribute'

# Public object attributes can be accessed like this: my_obj.my_pub_attr = 'I am a PUBLIC attribute (a.k.a. data object) of a class instance object'

# Inheritance works: Parent method was called by <class '__main__.MyClass'>

# Polymorphism works: All good, this method was overriden by <class '__main__.MyClass'>

# When an object calls its method, the object itself is passed as the first argument, so when <__main__.MyClass object at 0x108fecfd0> called whoYouGonnaCall(), it replied: whoYouGonnaCall() was called by <__main__.MyClass object at 0x108fecfd0>
```

# Classes - `class MyClass: ...`

- As soon as a class is defined, a new **class** object is created with the same name. This class object allows us to access the different attributes as well as to instantiate new objects of that class.

## Built-in check for type - `if isinstance(my_obj, MyClass): ...`

## Inheritance - `class MyClass(MyParentClass): ...`

### Built-in check for inheritance - `if issubclass(my_obj, MyClass): ...`

### Multiple inheritance - `class MyClass(MyParentClass, MyOtherParentClass): ...`

#### [Method Resolution Order](https://www.programiz.com/python-programming/multiple-inheritance)

## [Operator overloading](https://www.programiz.com/python-programming/operator-overloading)

### Operator Overloading Special Functions

- E.g.;

```python
class Point:
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y

    def __str__(self):
        return "({0},{1})".format(self.x,self.y)

    def __add__(self,other):
        x = self.x + other.x
        y = self.y + other.y
        return Point(x,y)
```

Operator | Expression | Internally
:-|:-:|:-
Addition | `p1 + p2` | `p1.__add__(p2)`
Subtraction | `p1 - p2` | `p1.__sub__(p2)`
Multiplication | `p1 * p2` | `p1.__mul__(p2)`
Power | `p1 ** p2` | `p1.__pow__(p2)`
Division | `p1 / p2` | `p1.__truediv__(p2)`
Floor Division | `p1 // p2` | `p1.__floordiv__(p2)`
Remainder (modulo) | `p1 % p2` | `p1.__mod__(p2)`
Bitwise Left Shift | `p1 << p2` | `p1.__lshift__(p2)`
Bitwise Right Shift | `p1 >> p2` | `p1.__rshift__(p2)`
Bitwise AND | `p1 & p2` | `p1.__and__(p2)`
Bitwise OR | `p1 | p2` | `p1.__or__(p2)`
Bitwise XOR | `p1 ^ p2` | `p1.__xor__(p2)`
Bitwise NOT | `~p1` | `p1.__invert__()`

### Comparison Operator Overloading

- E.g.;

```python
class Point:
    def __init__(self, x = 0, y = 0):
        self.x = x
        self.y = y

    def __str__(self):
        return "({0},{1})".format(self.x,self.y)

    def __lt__(self,other):
        self_mag = (self.x ** 2) + (self.y ** 2)
        other_mag = (other.x ** 2) + (other.y ** 2)
        return self_mag < other_mag
```

Operator | Expression | Internally
:-|:-:|:-
Less than | `p1 < p2` | `p1.__lt__(p2)`
Less than or equal to | `p1 <= p2` | `p1.__le__(p2)`
Equal to | `p1 == p2` | `p1.__eq__(p2)`
Not equal to | `p1 != p2` | `p1.__ne__(p2)`
Greater than | `p1 > p2` | `p1.__gt__(p2)`
Greater than or equal to | `p1 >= p2` | `p1.__ge__(p2)`

## Class data attributes

### Defining - `my_class_attrib = value`

#### NB: Classes cannot have private attributes

### Accessing

#### Via class - `MyClass.my_class_attrib`

#### Via object - `my_obj.__class__.my_class_attrib`

### Dymanic addition

- Attributes of a class can be dynamically added on the fly
- Each such attribute is visible to all object instances of the class

#### Via class - `MyClass.new_class_attrib = value`

#### Via object - `my_obj.__class__.new_class_attrib = value`

### Dynamic deletion

- Attributes of a class can be dynamically deleted on the fly
- Each such attribute is immediately noy available to all object instances of the class

#### Via class - `del MyClass.my_class_attrib`

#### Via object - `del my_obj.__class__.my_class_attrib`

# Objects - `my_obj = MyClass()`

## Object data attributes

### Class defined public - `def mypublicattrib(arg, ...): self.mypublicattrib = value`

### Class defined private - `def __myprivateattrib(arg, ...): self.mypublicattrib = value`

- Prepending `__` to the attrbute name (e.g.  `__myprivateattrib`) makes an attribute private.

#### WARNING: Private attributes can be masked by dynamically added ones

```python
class MyClass:

    def __init__(self):
        self.__myprivateattrib = "I was set during initialiser"
        print("\n__init__ called\n")

    def getter(self):
        return self.__myprivateattrib

    def setter(self, new_value):
        self.__myprivateattrib = new_value
        print("\nSetter function called\n")

my_obj = MyClass()
print(f"__myprivateattrib = '{my_obj.getter()}'  - Read via instance method.")

print("\nNB: Can't read directly as not yet set directly\n")

my_obj.__myprivateattrib = "I was set by direct access"
print("\nAttribte directly set\n")

print(f"__myprivateattrib = '{my_obj.__myprivateattrib}'    - Read directly.")
print(f"__myprivateattrib = '{my_obj.getter()}'  - Read via instance method.")

my_obj.setter("I was set via setter function")

print(f"__myprivateattrib = '{my_obj.__myprivateattrib}'    - Read directly.")
print(f"__myprivateattrib = '{my_obj.getter()}' - Read via instance method.")

# __init__ called

# __myprivateattrib = 'I was set during initialiser'  - Read via instance method.

# NB: Can't read directly as not yet set directly


# Attribte directly set

# __myprivateattrib = 'I was set by direct access'    - Read directly.
# __myprivateattrib = 'I was set during initialiser'  - Read via instance method.

# Setter function called

# __myprivateattrib = 'I was set by direct access'    - Read directly.
# __myprivateattrib = 'I was set via setter function' - Read via instance method.
```

### Dynamic addition - `my_obj.newAttrOnlyForThisObj = value`

- Attributes of an object can be dynamically added on the fly
- Each such attribute is only added to the specific object instance and will not effect any other object instances

### Access - `my_obj.my_obj_attrib`

### Dynamic deletion (excl private) - `del my_obj.my_obj_attrib`

## Class functions (a.k.a) bound object methods

### Defining - `def my_method(self, arg, ...):`

### Calling - `my_obj.my_method(arg, ...)`

#### NB: `self` - object itself is passed as the first argument

- When an object calls its method, the object itself is passed as the first argument.
