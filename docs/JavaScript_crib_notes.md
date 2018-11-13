Grum's JavaScript Crib Notes
============================

Contains summary langauge and interface info, with `code` examples and [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to Mozilla documentation.

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->
- [Variable Declarations](#variable-declarations)
  - [`let`, `const`, `var`(deprecated)](#let-const-vardeprecated)
  - [Variable scope](#variable-scope)
  - [`${varName}` Variable interpolation](#varname-variable-interpolation)
- [Operators](#operators)
  - [Common operator list](#common-operator-list)
    - [Link to operator precedence table](#link-to-operator-precedence-table)
- [Control Flow](#control-flow)
  - [if...else if...else](#ifelse-ifelse)
  - [ternary](#ternary)
  - [switch](#switch)
  - [throw and try...catch...finally](#throw-and-trycatchfinally)
  - [break and continue](#break-and-continue)
- [Iterations](#iterations)
  - [do...while](#dowhile)
  - [for](#for)
  - [for...in](#forin)
  - [for...of](#forof)
  - [while](#while)
- [Functions](#functions)
  - [Function declarations](#function-declarations)
    - [(Standard) Function declarations](#standard-function-declarations)
    - [Function Expression declarations (a.k.a. anomymous functions)](#function-expression-declarations-aka-anomymous-functions)
    - [Arrow function declarations (syntax sugar for function expressions)](#arrow-function-declarations-syntax-sugar-for-function-expressions)
    - [Concise body declarations (syntax sugar++)](#concise-body-declarations-syntax-sugar)
      - [`Zero parameters`](#zero-parameters)
      - [`One parameter`](#one-parameter)
      - [`Two or more parameters`](#two-or-more-parameters)
      - [`Single-line blocks`](#single-line-blocks)
  - [Iterators](#iterators)
    - [3 declaration styles](#3-declaration-styles)
      - [Arrow `=>` ES6 (preferred style)](#arrow--es6-preferred-style)
      - [Anonymous function declaration](#anonymous-function-declaration)
      - [Separate function declaration](#separate-function-declaration)
- [Arrays](#arrays)
  - [Notes](#notes)
    - [Support mixed types.](#support-mixed-types)
    - [Support nested arrays.](#support-nested-arrays)
    - [`const` restricts array re-assignment, but not contents assignment.](#const-restricts-array-re-assignment-but-not-contents-assignment)
    - [Are pass-by-reference into functions, where they are mutable](#are-pass-by-reference-into-functions-where-they-are-mutable)
  - [Common properties and methods with code](#common-properties-and-methods-with-code)
    - [`.length -> int` - returns number of elements](#length---int---returns-number-of-elements)
    - [`.push(arg1, arg2, ...)` - append element(s)](#pusharg1-arg2----append-elements)
    - [`.pop() -> element` - remove and return last element](#pop---element---remove-and-return-last-element)
    - [`.join(optional_delimiter) -> String` - concatenate elements into string](#joinoptionaldelimiter---string---concatenate-elements-into-string)
    - [`.slice(optinal_begin, optional_end) -> new Array` - return portion of array](#sliceoptinalbegin-optionalend---new-array---return-portion-of-array)
    - [`.splice(args)` - remove existing elements and/or add new elements](#spliceargs---remove-existing-elements-andor-add-new-elements)
    - [`.shift()` - remove first element](#shift---remove-first-element)
    - [`.unshift(element1, element2, ....) -> new_length` - prepend elements](#unshiftelement1-element2----newlength---prepend-elements)
    - [`.concat(args) -> new Array` - merge two or more arrays](#concatargs---new-array---merge-two-or-more-arrays)
  - [Common iterators with example code](#common-iterators-with-example-code)
    - [`.forEach(function)` - iterate over each element](#foreachfunction---iterate-over-each-element)
    - [`.map(function) -> new Array` - return mapped elements](#mapfunction---new-array---return-mapped-elements)
    - [`.filter(function) -> new Array` - return matching elements](#filterfunction---new-array---return-matching-elements)
    - [`.findIndex(function) -> int` - return index of 1st matching element](#findindexfunction---int---return-index-of-1st-matching-element)
    - [`.reduce(function, optional_start_value) -> value` - return single accumulated value](#reducefunction-optionalstartvalue---value---return-single-accumulated-value)
    - [`.every(function)` -> boolean - returns true if all elements pass the provided test](#everyfunction---boolean---returns-true-if-all-elements-pass-the-provided-test)
    - [`.some(function)` -> boolean - returns true if any elements passes the provided test](#somefunction---boolean---returns-true-if-any-elements-passes-the-provided-test)
- [Objects](#objects)
  - [Notes](#notes-1)
    - [Support a mix of properties (including nested objects) and methods.](#support-a-mix-of-properties-including-nested-objects-and-methods)
    - [`const` restricts object re-assignment, but not contents assignment.](#const-restricts-object-re-assignment-but-not-contents-assignment)
    - [Are pass-by-reference into functions, where their properties are mutable.](#are-pass-by-reference-into-functions-where-their-properties-are-mutable)
  - [Declarations](#declarations)
  - [Properties](#properties)
    - [Declared as key-value pairs](#declared-as-key-value-pairs)
      - [Empty object - `let emptyObj = {};`](#empty-object---let-emptyobj)
      - [Non-empty - `let anObj = { 'keyStr' : 'A value', 'keyStr2' : 3.92 }`](#non-empty---let-anobj---keystr--a-value-keystr2--392)
    - [Access notation](#access-notation)
      - [Dot notation `objName.keyName`](#dot-notation-objnamekeyname)
      - [Bracket notation - `objName['keyName']`](#bracket-notation---objnamekeyname)
        - [With variables - `objName[varName]`](#with-variables---objnamevarname)
    - [Assignment - `objName[keyName] = 'New value'`](#assignment---objnamekeyname--new-value)
    - [Deletion - `delete objName[keyName]`](#deletion---delete-objnamekeyname)
  - [Methods](#methods)
    - [Declaration](#declaration)
      - [Preferred ES6 - `let anObj = { funcName () {}, funcName2 () {} }`](#preferred-es6---let-anobj---funcname---funcname2)
      - [Old - `let anObj = { funcName: function () {}, funcName2: function () {} }`](#old---let-anobj---funcname-function---funcname2-function)
    - [Invocation - `objName.funcName(args)`](#invocation---objnamefuncnameargs)
  - [Object nesting & chaining](#object-nesting--chaining)
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
- [Grum code snipets](#grum-code-snipets)
  - [`documentDirURL()` - Returns URL of directory containing the document](#documentdirurl---returns-url-of-directory-containing-the-document)
<!-- /code_chunk_output -->

---

# Variable Declarations

## [`let`, `const`, `var`(deprecated)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations)


  ```javascript
  let,  const         - variable and constant declaration. camelCase by convention
  var                - deprecated variable declaration
  ```

## Variable scope

- Global variables can be modified anywhere
- A block has access to all the variables available in the parent block (i.e. where the block was defined).
- Re-declaring a variable using the same name in a block will mask the parent's variable, until the block ends. **See warning in code re-quirk.** Eg.
    ```js
    const parentBlock = () => {
      // parent block

      let someVar = "This was declared and set in the parent block";

      console.log("In the parent block, someVar was set to: \"" + someVar + "\"");

      if (true) {
        // inner block

        console.log("WARNING: The parent's someVar is NEVER accessible within the inner block, " +
          "because someVar is going to be re-declared later in this block. " + 
          "If someVar is accessed prior to being re-declared, it will cause a ReferenceError.");

        let someVar = "This was re-declared and set within the inner block";
        console.log("Inner block has masked someVar, which is set to: \"" + someVar + "\"");
      }

      console.log("Back out in the parent block scope, someVar, is back to it's original value: \"" + someVar + "\"");
    };

    parentBlock();
    ```
## [`${varName}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_literals) Variable interpolation

- Use back-quotes for variable interpolation. Eg.
  ```js
  const str1 = 'some text';
  const num1 = 10;
  console.log(`This will interpolate ${str1} and the number ${num1}`);
  ```

# [Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators)

## Common operator list

| Operator | Linked Description|
| -------- |:----------------- |
| `;`                                        | statement terminator and [empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty) statement
| `=`                                        | [assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| `==` `!=`                                  | [equality, inequality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Equality_operators)
| `===` `!===`                               | [identity, non-identity](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Equality_operators)
| `<` `>` `<=` `>=`                          | [comparitors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Relational_operators)
| `&&`  `││`  `!`                            | [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Binary_logical_operators) (&& short-circuits on false)
| `+`  `=`  `*`  `/`  `%`  `**`              | [arithmetic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Arithmetic_operators) (% remainder, ** exponent)
| `+=`  `-=`  `*=`  `/=` `%=`                | [self assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| `++` `--`                                  | [increment, decrement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Increment_and_decrement) (prefix and postfix) 
| `[]` `{}`                                  | [array [*element0,...*]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [object {*property: value,...*}](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) initialisers/literals
| `[a, b] = [1, 2]` <br>**or**<br> `{a, b}  = {a:1, b:2}`| array content [destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to variables
| `0`  `""`  `''`  `null`  `undefined` `NaN` | falsy values (everything else truthy) (NaN is "Not a Number")
| `<<`  `>>`  `>>>`  `&`  `│`  `^`           | bitwise [shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Bitwise_shift_operators) and [logical](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Binary_bitwise_operators)
| `<<=`  `>>=`  `>>>=`  `&=`  `^=`  `│=`     | bitwise [self assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Assignment_operators)
| `typeof`                                   | [typeof *variable*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof) returns string with *variable's* type
| `instanceof`                               | [*object* instanceof *constructor*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) returns true or false
| `in`                                       | [*property* in *object*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) returns true or false
| `delete`                                   | [delete *object.property*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete) deletes property from object
| `,`                                        | [*expr1 , expr2, ...*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Comma_operator) evaluates each of its operands (from left to right) and returns the value of the last operand.
| `/ab+c/i`                                  | [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### [Link to operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table)

---

# [Control Flow](ht|ps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Control_flow)

## [if...else if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

  ```javascript
  if (cond) {                  // if then else
    ...
  } else if (cond) {
    ...
  } else {
    ...
  }
  ```

## [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

  ```javascript
  cond ? statement : statement // ternary conditional
  ```

## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

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

## [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw) and [try...catch...finally](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

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
## [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) and [continue](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)

---

# [Iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Iterations)

## [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

  ```javascript
  do {
    ...
  } while (condition)
  ```

## [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)

  ```javascript
  for (var i = 0; i < 9; i++) {
    str = str + i;
  }
  ```

## [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)

  ```javascript
  for (variable in object) { //iterates over all non-Symbol, enumerable properties of an object.
    ...
  } 
  ```

## [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
  ```javascript
  let iterable = [10, 20, 30];
  for (let value of iterable) {
    value += 1;
    console.log(value);
  } // 11, 21, 31
  ```

## [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
  ```javascript
  while (condition) {
    ...
  }
  ```

---


---

# [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

- are first class objects => have properties such as .length and .name and methods such as .toString()
- can be called and assigned ;
  ```js
  const announceThatIAmDoingImportantWork = () => {
      console.log("I’m doing very important work!");
  };

  const busy = announceThatIAmDoingImportantWork; // Note that ()'s are missing, so the function is not called

  busy(); // Outputs: I’m doing very important work!

  console.log(busy.name); // Outputs: announceThatIAmDoingImportantWork
  ```

- can be passed into higher-order fuctions as callback functions (NB: pass-by-reference);
  ```js
  const addTwo = num => num + 2;

  const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
  };

  console.log(checkConsistentOutput(addTwo, 10));  // Outputs 12
  ```
- 
## [Function declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Functions_and_classes)

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

### Concise body declarations (syntax sugar++)

#### `Zero parameters`
  ```javascript
  const func_name = () => {...};
  ```

#### `One parameter`
  ```javascript
  const func_name = parm1 => {...};
  ```

#### `Two or more parameters`
  ```javascript
  const func_name = (parm1, param2) => {...};
  ```

#### `Single-line blocks`
  - Note lack of {}.  Automatically returns what statement evalutes to.
  ```javascript
  const func_name = param1 => statement;
  ```
  - NB: Ternary conditional counts as single statement. E.g.;
    ```javascript
    const isCircleBig = radius => 2*radius* 3.14 > 1000 ? true : false ;
    ```

---

## [Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators#Iterators)

### 3 declaration styles

- 3 equivalent styles to use are;

#### Arrow `=>` ES6 (preferred style)

  ```js
  const groceries = ['mango', 'papaya', 'pineapple', 'apple'];
  groceries.forEach(groceryItem => {console.log(groceryItem)} );
  ```
#### Anonymous function declaration

  ```js
  const groceries = ['mango', 'papaya', 'pineapple', 'apple'];
  groceries.forEach(function(groceryItem) {console.log(groceryItem)} );
  ```
#### Separate function declaration

  ```js
  const groceries = ['mango', 'papaya', 'pineapple', 'apple'];
  function printGrocery(item) { console.log(item) };
  groceries.forEach(printGrocery);
  ```

---

# [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Notes

### Support mixed types.
- Includes functions and objects. E.g.;
  ```js
  const mixedArray = [ "string", 10, true, func = arg => {console.log(arg)}, obj = { 'key':'value'} ];

  console.log(mixedArray); // Output: Array(5) ["string", 10, true, , Object]
  func('yo'); //Output: yo
  ```

### Support nested arrays.
- E.g.;
  ```js
  const nestedArr = [[1], [2, 3]];

  console.log(nestedArr[1]); // Output: [2, 3]
  console.log(nestedArr[1][0]); // Output: 2
  ```

### `const` restricts array re-assignment, but not contents assignment.
-  E.g.;
  ```js
  const myArray = [ 'str1', 'str2' ];
  myArray[3] = 'Able to add element to const array'; //works
  myArray = [ 'Unable to re-assign with new (or existing) array' ]; //fails
  ```

### Are pass-by-reference into functions, where they are mutable
- **IMPORTANT**:
  -  The passed-in-reference is **always** a variable, (not a constant), regardless of the original variable's declaration.
  -  Re-assigining a different array to the passed-in-reference does not change original array's reference (i.e. has no impact outside the function).
-  E.g.;
  ```js
  const anArray = [ "A string", 3.92];

  const func = arr => {
    arr[0] = 'Elements of passed-in arrays can be changed';
    arr = ["The array reference can be replaced with a new array, but won't effect the original array"];
    arr[0] = 'And once the reference is to a different array, further changes apply to the new array only';
  }

  console.log(anArray[0]); // Output: A string
  func(anArray);
  console.log(anArray[0]); // Output: Elements of passed-in arrays can be changed
  ```

## Common [properties and methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) with code

- See heading link for full list.
  
### [`.length -> int`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length) - returns number of elements

  ```js
  const myArray = [ 'str1', 'str2' ];
  console.log(myArray.length); //Output: 2
  ```

### [`.push(arg1, arg2, ...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) - append element(s)

  ```js
  const myArray = [ 'str1', 'str2' ];
  myArray.push('str3', 'str4');
  console.log(myArray); //Output: Array(4) ["str1", "str2", "str3", "str4"]
  ```


### [`.pop() -> element`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)  - remove and return last element

  ```js
  const myArray = [ 'str1', 'str2', 'str3' ];
  const lastElement = myArray.pop()
  console.log(myArray); //Output : Array(2) ["str1", "str2"]
  console.log(lastElement); //Output: str3
  ```

### [`.join(optional_delimiter) -> String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join) - concatenate elements into string

### [`.slice(optinal_begin, optional_end) -> new Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) - return portion of array

### [`.splice(args)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - remove existing elements and/or add new elements

### [`.shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) - remove first element 

### [`.unshift(element1, element2, ....) -> new_length`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) - prepend elements

### [`.concat(args) -> new Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) - merge two or more arrays

## Common [iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods) with example code

- See linked heading for listing of all array iterators.

### [`.forEach(function)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Syntax) - iterate over each element

- Does not return anything
- E.g.;
  ```js
  const groceries = ['mango', 'papaya', 'pineapple', 'apple'];
  groceries.forEach(groceryItem => {console.log(groceryItem)} );
  ```

### [`.map(function) -> new Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) - return mapped elements

- Returns new array with the results of calling a provided callback function on every element in the calling array. E.g.;
  ```js
  const numbers = [1, 2, 3, 4, 5]; 

  const bigNumbers = numbers.map(number => { return number * 10; } );

  console.log(numbers); // Output: [1, 2, 3, 4, 5]
  console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
  ```

### [`.filter(function) -> new Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) - return matching elements

- Creates a new array with all elements that pass the test (i.e. return true) implemented by the provided function. E.g.
  ```js
  const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

  const shortWords = words.filter(word => { return word.length < 5; });

  console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
  console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
  ```
### [`.findIndex(function) -> int`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) - return index of 1st matching element

- Return the index of the first element that evaluates to true in the callback function.
- Returns -1 if no match
- E.g.;
  ```js
  const jumbledNums = [123, 25, 78, 5, 9]; 

  const lessThanTen = jumbledNums.findIndex(num => { return num < 10; } );

  console.log(lessThanTen); // Output: 3
  console.log(jumbledNums[3]); // Output: 5
  ```

### [`.reduce(function, optional_start_value) -> value`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) - return single accumulated value

- Returns a single value after iterating through the elements of an array, thereby reducing the array.
- If no 2nd argument provided, accumulator starts as first array element, and first iteration starts with 2nd array element. E.g.;
  ```js
  const numbers = [1, 2, 4, 10];

  const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue } ) ; // Note no 2nd argument provided

  console.log(summedNums) // Output: 17
  ```
- If 2nd argument provided, accumulator starts with 2nd argument, and 1st iteration starts with 1st array element E.g.;
  ```js
  const numbers = [1, 2, 4, 10];

  const summedNums = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue }, 1000 ) ; // Note 2nd argument '1000' provided

  console.log(summedNums) // Output: 1017
  ```
### [`.every(function)` -> boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) - returns true if all elements pass the provided test

### [`.some(function)` -> boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some) - returns true if any elements passes the provided test


---

# Objects

## Notes

### Support a mix of properties (including nested objects) and methods.
- E.g.;
  ```js
  let anObj = {
    'keyStr' : 'A value', // A property
    nestedObj : { 'aKeyName' : 'A value from a nested object' }, // A nested object 
    funcMeUp () { console.log("Me is well func'd bro") }  // A method.
    // Note the commas separating declarations
  }

  console.log(anObj.keyStr ); //Output: A value
  console.log(anObj.nestedObj.aKeyName); //Output: A value from a nested object
  anObj.funcMeUp() // Output: Me is well func'd bro
  ```

### `const` restricts object re-assignment, but not contents assignment.
-  E.g.;
  ```js
  const anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 }; 
  anObj.keyStr = 'A new value'; // Works
  anObj = { 'diffKey' : 'Aonther new value' }; // Fails
  ```

### Are pass-by-reference into functions, where their properties are mutable.

- **IMPORTANT**:
  -  The passed-in-reference is always a variable, (not a constant), regardless of the original variable's declaration.
  -  Re-assigining a differnt object to the passed-in-reference does not change the original object's reference (i.e. has no impact outside the function)
-  E.g.;
  ```js
  const anObj = { 'keyStr' : 'A value', 'keyStr2' : 3.92 };

  const func = obj => {
    obj.keyStr = 'Values of passed-in objects can be changed';
    obj = { 'keyStr' : "The object reference can be replaced with a new object, but won't effect the original object", 'keyStr2' : 3.92 };
    obj.keyStr = 'And once the reference is to a different object, further changes apply to the new object only';
  }

  console.log(anObj.keyStr); // Output: A value
  func(anObj);
  console.log(anObj.keyStr); // Output: Values of passed-in objects can be changed
  ```
  
## Declarations

## Properties

### Declared as key-value pairs
- Keys must be a string
- Values can be any data type, including functions & objects 

#### Empty object - `let emptyObj = {};`

#### Non-empty - `let anObj = { 'keyStr' : 'A value', 'keyStr2' : 3.92 }` 

- Note the properties are comma separated (as are methods).

### Access notation

#### Dot notation `objName.keyName`

- Can only be used if key has no numbers, spaces, or special characters in it. E.g.;
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };
  console.log(anObj.keyStr); // Works - Output: A value
  console.log(anObj.'key Str2'); // Fails - Syntax error
  ```
#### Bracket notation - `objName['keyName']`

- Required when key has numbers, spaces, or special characters in it. E.g.;
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };
  console.log(anObj['keyStr']); // Works - Output: A value
  console.log(anObj['key Str2']); // Works - Output: 3.92
  ```
##### With variables - `objName[varName]`

- Can use a variable containing the key name. E.g.;
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };

  const keyName='keyStr';
  console.log(anObj[keyName]); // Works - Output: A value

  const returnAnyProp = (objectName, propName) => objectName[propName];
  console.log(returnAnyProp(anObj, 'key Str2')); // Works - Output: 3.92
  ```

### Assignment - `objName[keyName] = 'New value'`

- If property exists, the value is updated. Otherwise, new property is added. E.g.;
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };

  anObj.keyStr = 'An updated value';
  anObj['key Str2'] = 42;
  anObj.newKeyStr = 'A new property';

  console.log(anObj.keyStr); // Output: An updated value
  console.log(anObj['key Str2']); // Output: 42
  console.log(anObj.newKeyStr); // Output: A new property
  ```
### Deletion - `delete objName[keyName]`

- Removes property from object. E.g.;
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };
  delete anObj.keyStr;
  console.log(anObj.keyStr); // Output: undefined
  ```

## Methods

### Declaration

#### Preferred ES6 - `let anObj = { funcName () {}, funcName2 () {} }`

- IMPORTANT method declarations are comma separated (as are properties).

  ```js
  let anObj = {

    funcMeUp () {
      console.log("Me is well func'd bro"); 
    },  // <- Note the comma separating method declarations

    funcMeSideways () {
      console.log("Ooof!"); 
    }

  }

  anObj.funcMeUp(); // Output: Me is well func'd bro
  anObj.funcMeSideways(); // Output: Ooof!
  ```

#### Old - `let anObj = { funcName: function () {}, funcName2: function () {} }`
- Don't use this, but be aware it may be used by older code.

### Invocation - `objName.funcName(args)`

## Object nesting & chaining

- Objects can be nested and then accessed through chaining. E.g.;
  ```js
  let anObj = {
    funcMeUp () {  // A method
      console.log("Me is well func'd bro"); 
    },  // <- Note the comma separating method declarations
    funcMeSideways () { // Another method
      console.log("Ooof!"); 
    },
    'keyStr' : 'A value', // A property
    'key Str2' : 3.92  // Another property
  }

  let parentObj = {
    'childObj1': anObj, // A nested object
    'childObj2':  {     // Another nested object
      prop1: 'Another value',  // A property
      arrayOfPeepObjs: [ {'name':'Bob'}, {'name':'Mary'}] // Any array of nested objects
    }
  }

  parentObj.childObj1.funcMeUp();  //Call a method, dot notation. Output: Me is well func'd bro
  console.log(parentObj); // Output: Object {childObj1: Object, childObj2: Object}
  console.log(parentObj.childObj1["key Str2"]); //Access a property, mixed notation. Output: 3.92
  console.log(parentObj['childObj2'].prop1); //Access a property, mixed notation. Output: Another value
  console.log(parentObj.childObj2.arrayOfPeepObjs[1].name); //Access a property, mixed notation. Output: Mary

  parentObj.childObj1.morePeepObjs=[ {'name':'Fred'}, {'name':'Alice'}];  //Add a property
  console.log(parentObj.childObj1['morePeepObjs'][0].name); //Access new property, mixed notation. Output: Fred
  ``` 

## Iterator - [`for...in  aka for (let var in obj) {...}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)


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

---

# Grum code snipets

## `documentDirURL()` - Returns URL of directory containing the document

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

