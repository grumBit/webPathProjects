Grum's JavaScript Crib Notes
============================

Contains summary langauge and interface info, with `code` examples and links to Mozilla documentation.

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Declarations](#declarations)
- [Operators](#operators)
    - [Common operator list](#common-operator-list)
    - [Link to operator precedence table](#link-to-operator-precedence-table)
- [Control Flow](#control-flow)
    - [if...else if...else](#ifelse-ifelse)
    - [ternary](#ternary)
    - [switch](#switch)
    - [throw and try...catch...finally](#throw-and-trycatchfinally)
    - [break and continue](#break-and-continue)
- [Iterators](#iterators)
    - [do...while](#dowhile)
    - [for](#for)
    - [for...in](#forin)
    - [for...of](#forof)
    - [while](#while)
- [Functions](#functions)
    - [(Standard) Function declarations](#standard-function-declarations)
    - [Function Expression declarations (a.k.a. anomymous functions)](#function-expression-declarations-aka-anomymous-functions)
    - [Arrow function declarations (syntax sugar for function expressions)](#arrow-function-declarations-syntax-sugar-for-function-expressions)
      - [Concise body declarations (syntax sugar++)](#concise-body-declarations-syntax-sugar)
        - [`Zero parameters`](#zero-parameters)
        - [`One parameter`](#one-parameter)
        - [`Two or more parameters`](#two-or-more-parameters)
        - [`Single-line blocks`](#single-line-blocks)
- [Interfacing with the DOM (Document Object Model)](#interfacing-with-the-dom-document-object-model)
    - [`document` keyword](#document-keyword)
  - [Basic properties and methods](#basic-properties-and-methods)
    - [Element](#element)
      - [`.innerHTML`](#innerhtml)
      - [`.querySelector(selectors)`](#queryselectorselectors)
    - [Document](#document)
      - [`.getElementById('id')`](#getelementbyidid)
      - [`.createElement(tagName, options)`](#createelementtagname-options)
    - [Global Attribute](#global-attribute)
      - [.style](#style)
    - [Node](#node)
      - [.appendChild](#appendchild)
      - [.removeChild(child)](#removechildchild)
    - [HTMLElement](#htmlelement)
      - [.hidden - see link for usecases](#hidden---see-link-for-usecases)
    - [GlobalEventHandlers](#globaleventhandlers)
      - [.onclick](#onclick)
      - [.parentNode](#parentnode)
    - [ParentNode](#parentnode)
      - [.children](#children)
      - [[]()](#)
      - [[]()](#)
      - [[]()](#)
      - [[]()](#)
- [Grum code snipets](#grum-code-snipets)
    - [`documentDirURL()` - Returns URL of directory containing the document](#documentdirurl---returns-url-of-directory-containing-the-document)
<!-- /code_chunk_output -->

---

# [Declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)

  ```javascript
  let,  const         - variable and constant declaration. camelCase by convention
  var                - deprecated variable declaration
  ```

# [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators)
### Common operator list

| Operator | Description |
| -------- |:----------- |
| ` ;                                  ` | statement terminator and [empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty) statement
| ` =                                  ` | [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| ` ==  !=                             ` | [equality, inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Equality_operators)
| ` ===  !===                          ` | [identity, non-identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Equality_operators)
| ` <  >  <=  >=                       ` | [comparitors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Relational_operators)
| ` &&  ||  !                          ` | [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Binary_logical_operators) (&& short-circuits on false)
| ` +  =  *  /  %  **                  ` | [arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Arithmetic_operators) (% remainder, ** exponent)
| ` +=  -=  *=  /= %=                  ` | [self assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| ` ++ --                              ` | [increment, decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Increment_and_decrement) (prefix and postfix) 
| ` [] {}                              ` | [array [*element0,...*]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [object {*property: value,...*}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) initialisers/literals
| `[a, b] = [1, 2]` **or** <br> `{a, b}  = {a:1, b:2}`| array content [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to variables
| ` 0  ""  ''  null  undefined NaN     ` | falsy values (everything else truthy) (NaN is "Not a Number")
| ` <<  >>  >>>  &  |  ^               ` | bitwise [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Bitwise_shift_operators) and [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Binary_bitwise_operators)
| ` <<=  >>=  >>>=  &=  ^=  |=         ` | bitwise [self assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| ` typeof                             ` | [typeof *variable*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) returns string with *variable's* type
| ` instanceof                         ` | [*object* instanceof *constructor*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) returns true or false
| ` in                                 ` | [*property* in *object*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) returns true or false
| ` delete                             ` | [delete *object.property*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) deletes property from object
| ` ,                                  ` | [*expr1 , expr2, ...*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Comma_operator) evaluates each of its operands (from left to right) and returns the value of the last operand.
| ` /ab+c/i                            ` | [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### [Link to operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

---

# [Control Flow](ht|ps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Control_flow)

### [if...else if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

  ```javascript
  if (cond) {                  // if then else
    ...
  } else if (cond) {
    ...
  } else {
    ...
  }
  ```

### [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

  ```javascript
  cond ? statement : statement // ternary conditional
  ```

### [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

  ```javascript
  switch (expression) {         // switch
    case value :
      ...
      break;
    default :
      ...
      break;
  }
  ```

### [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) and [try...catch...finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
  ```javascript
  function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw "Parameter is not a number!";
    }
  }

  try {
      getRectArea(3, 'A');
  }
  catch(e) {
      console.log(e);
      // expected output: string object containing "Parameter is not a number!"
  }
  finally {
      closeMyFile(); // always close the resource
  }
  ```
### [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

---

# [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Iterations)

### [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
  ```javascript
  do {
    ...
  } while (condition)
  ```

### [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
  ```javascript
  for (var i = 0; i < 9; i++) {
    str = str + i;
  }
  ```

### [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
  ```javascript
  for (variable in object) { //iterates over all non-Symbol, enumerable properties of an object.
    ...
  } 
  ```

### [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  ```javascript
  let iterable = [10, 20, 30];
  for (let value of iterable) {
    value += 1;
    console.log(value);
  } // 11, 21, 31
  ```

### [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  ```javascript
  while (condition) {
    ...
  }
  ```

---

# [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Functions_and_classes)

### [(Standard) Function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)

  ```javascript
  function func_name(parm1 = <default_value> ,
                     param2) {
    ...
    return <value> ;          // NB: if no return, returns "undefined"
    ...
  }
  ```
- NB: "Hoisting" (declaring after invoation) is supported, but not recommended
- NB: When functions are called, parameters that are not passed in, and have no default, will be "undefined", rather than cause an error. 

### [Function Expression declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) (a.k.a. anomymous functions)
  ```javascript
  const func_name = function (parm1 , param2) {
    ...
   return <value> ;
  }

 console.log(func_name( 1, 2)); // Grum says WTF? Function effectively has a name, so how is it anomymous???
  ```

- WARNING: "Hoisting" (declaring after invoation) is NOT supported

### [Arrow function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (syntax sugar for function expressions)
  ```javascript
  const func_name = (parm1 , param2) => {...}
  ```

#### Concise body declarations (syntax sugar++)
##### `Zero parameters`
  ```javascript
  const func_name = () => {...};
  ```

##### `One parameter`
  ```javascript
  const func_name = parm1 => {...};
  ```

##### `Two or more parameters`
  ```javascript
  const func_name = (parm1, param2) => {...};
  ```

##### `Single-line blocks`
  - Note lack of {}.  Automatically returns what statement evalutes to.
  ```javascript
  const func_name = param1 => statement;
  ```
  - NB: Ternary conditional counts as single statement. E.g.;
    ```javascript
    const isCircleBig = radius => 2*radius* 3.14 > 1000 ? true : false ;
    ```
---
# Interfacing with the [DOM (Document Object Model)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

### `document` keyword
- JavaScript `document` keyword allows access to a HTML model instance. E.g.;
    ```javascript
    document.body.innerHTML = '<h2>This heading element will replace all the bodies existing inner HTML</h2>';
    ```

## Basic properties and methods

### [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

#### [`.innerHTML`](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
  - Assigning to the [.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) replaces everything between the elments tags. E.g.;
    ```javascript
    document.body.innerHTML = "<h2>This element replaces the bodie's inner HTML</h2>"
    ```
#### [`.querySelector(selectors)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
  - Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of CSS tag, class or id [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors). E.g.;
    ```javascript
    let firstH1ElementInBody = document.body.querySelector('h1');
    ```

### [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document)

#### [`.getElementById('id')`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)
  - Returns element matching ID. E.g.;
    ```javascript
    let myElement = document.body.getElementById('myId');
    ```
#### [`.createElement(tagName, options)`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
  - Creates the HTML element specified by tagName. E.g.;
    ```javascript
    let myNewListItem = document.createElement('li');
    myNewListItem.id = "myNewId";
    myNewListItem.innerHTML = "My New Text";
    document.getElementById('existingUlElementId').appendChild(myNewListItem);
    ```
### [Global Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
#### [.style](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)
  - Contains CSS styling declarations to be applied to the element. E.g.;
    ```javascript
    document.body.style.backgroundColor = "#201F2E";
    ```
### [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

#### [.appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
  - Adds a node to the end of the list of children of a specified parent node. E.g.; see [`.createElement()`](#getelementbyidid).


#### [.removeChild(child)](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)
  - removes a child node from the DOM. Returns removed node. E.g.;
    ```javascript
    let elementToRemove = document.getElementById('myElementId');
    document.getElementById('parentElementId').removeChild(elementToRemove);
    ```
### [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

#### [.hidden](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) - see link for usecases
  - Boolen property that applies to all presentation modes. Not the same as CSS `display` E.g.;
    ```javascript
    document.getElementById("myElementId").hidden = true;
    ```

### [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)

#### [.onclick](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
  - . E.g.;
    ```javascript
    let element = document.querySelector("button");

    function turnButtonRed (){
      element.style.backgroundColor = "red";
      element.style.color = "white";
      element.innerHTML = "Red Button";
      element.onclick = turnButtonBlue;
    }

    function turnButtonBlue (){
      element.style.backgroundColor = "blue";
      element.style.color = "white";
      element.innerHTML = "Blue Button";
      element.onclick = turnButtonRed;
    }

    element.onclick = turnButtonRed;
    ```

#### [.parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)
  - Returns the parent of the specified node. E.g.;
    ```javascript
    let child = document.getElementById('myElementId');
    let parent = child.parentNode;
    ```

### [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)

#### [.children](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)
  - Returns a live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) containing all of the child elements. E.g.;
    ```javascript
    for (var i = 0; i < body.children.length; i++) {
        console.log(body.children[i].tagName);
    }    
    ```

#### []()
  - . E.g.;
    ```javascript
    document.;
    ```

#### []()
  - . E.g.;
    ```javascript
    document.;
    ```

#### []()
  - . E.g.;
    ```javascript
    document.;
    ```

#### []()
  - . E.g.;
    ```javascript
    document.;
    ```
# Grum code snipets
### `documentDirURL()` - Returns URL of directory containing the document
```javascript
//Returns URL of directory containing the document
function documentDirURL() {
  const protocol = document.location.protocol;
  const host = document.location.host;
  const filePath = document.location.pathname.split( '/' );
  let dirPath = '';
  for ( let i = 0 ; i < filePath.length - 1; i++ ){
    if ( filePath[i] ) dirPath += '/' + filePath[i];
  }
  return protocol + '//' + host + dirPath;
}
```
---