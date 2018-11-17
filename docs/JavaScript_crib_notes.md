Grum's JavaScript Crib Notes
============================

Contains summary langauge and interface info, with `code` examples and [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to Mozilla documentation.

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->


<!-- code_chunk_output -->

- [Arrays (sub-doc)](#arrays-sub-doc)
- [Objects (sub-doc)](#objects-sub-doc)
- [Interfacing with the DOM (sub-doc)](#interfacing-with-the-dom-sub-doc)
- [Lodash module of super useful functions](#lodash-module-of-super-useful-functions)
- [Variable Declarations](#variable-declarations)
  - [`let`, `const`, `var`(deprecated)](#let-const-vardeprecated)
  - [Variable scope](#variable-scope)
  - [Variable interpolation - `${varName}`](#variable-interpolation---varname)
- [Operators](#operators)
  - [Common operator list](#common-operator-list)
  - [Precedence](#precedence)
- [Control Flow](#control-flow)
  - [if - `if (cond) {...} else if (cond) {...} else`](#if---if-cond--else-if-cond--else)
  - [ternary - `cond ? statement : statement`](#ternary---cond--statement--statement)
  - [switch - `switch (expr) { case val : ... break; default : ...}`](#switch---switch-expr--case-val---break-default)
  - [exceptions - `throw expr;` `try {...} catch {...} finally {...}`](#exceptions---throw-expr-try--catch--finally)
  - [break and continue](#break-and-continue)
- [Iterations](#iterations)
  - [do...while - `do {...} while (cond)`](#dowhile---do--while-cond)
  - [for - `for (let i = ... ; cond ; incr) {...}`](#for---for-let-i----cond--incr)
  - [for...in - `for (let prop in obj) {...}`](#forin---for-let-prop-in-obj)
  - [for...of - `for ( let val of iterable ) {...}`](#forof---for--let-val-of-iterable)
  - [while - `while (cond) {...}`](#while---while-cond)
- [Functions](#functions)
  - [Function declarations](#function-declarations)
    - [Standard - `function funcName(params){...}`](#standard---function-funcnameparams)
    - [Function Expression (anomymous) - `const funcName = function(params){...}`](#function-expression-anomymous---const-funcname--functionparams)
    - [Arrow - `const funcName = (params) => {...}`](#arrow---const-funcname--params)
    - [Concise body declarations](#concise-body-declarations)
      - [Zero parameters - `const funcName = () => {...}`](#zero-parameters---const-funcname)
      - [One parameter - `const funcName = parm1 => {...}`](#one-parameter---const-funcname--parm1)
      - [Two or more parameters - `const funcName = (parm1, param2) => {...}`](#two-or-more-parameters---const-funcname--parm1-param2)
      - [Single-line blocks - `const funcName = param1 => statement;`](#single-line-blocks---const-funcname--param1--statement)
- [Grum code snipets](#grum-code-snipets)
  - [`documentDirURL()` - Returns URL of directory containing the document](#documentdirurl---returns-url-of-directory-containing-the-document)

<!-- /code_chunk_output -->



---

# Arrays (sub-doc)

- See [here](JavaScript_crib_notes-Arrays.md)

# Objects (sub-doc)

- See [here](JavaScript_crib_notes-Objects.md)

# Interfacing with the DOM (sub-doc)

- See [here](JavaScript_crib_notes-DOM.md)

# Lodash module of super useful functions

- See [here](https://lodash.com/)

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
## [Variable interpolation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Template_literals) - `${varName}`

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

## Precedence
- See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

---

# [Control Flow](ht|ps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Control_flow)

## [if](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) - `if (cond) {...} else if (cond) {...} else`

  ```javascript
  if (cond) {                  // if then else
    ...
  } else if (cond) {
    ...
  } else {
    ...
  }
  ```

## [ternary](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) - `cond ? statement : statement`

  ```javascript
  cond ? statement : statement // ternary conditional
  ```

## [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) - `switch (expr) { case val : ... break; default : ...}`

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

## exceptions - [`throw expr;`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)  [`try {...} catch {...} finally {...}`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

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

## [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) - `do {...} while (cond)`

  ```javascript
  do {
    ...
  } while (condition)
  ```

## [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) - `for (let i = ... ; cond ; incr) {...}`

  ```javascript
  for (let i = 0; i < 9; i++) {
    str = str + i;
  }
  ```

## [for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) - `for (let prop in obj) {...}`

- See [my Objects notes on `for...in`](JavaScript_crib_notes-Objects.md#__for_in)

  ```javascript
  for (propertyName in object) { //iterates over all non-Symbol, enumerable properties of an object.
    ...
  } 
  ```

## [for...of](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) - `for ( let val of iterable ) {...}`
  ```javascript
  let iterable = [10, 20, 30];
  for (let value of iterable) {
    value += 1;
    console.log(value);
  } // 11, 21, 31
  ```

## [while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while) - `while (cond) {...}`
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

### [Standard](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) - `function funcName(params){...}`

  ```js
  function funcName(parm1 = <default_value> ,
                     param2) {
    ...
    return <value> ;          // NB: if no return, returns "undefined"
    ...
  }
  ```
- NB: "Hoisting" (declaring after invoation) is supported, but not recommended
- NB: When functions are called, parameters that are not passed in, and have no default, will be "undefined", rather than cause an error. 

### [Function Expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) (anomymous) - `const funcName = function(params){...}`
  ```js
  const funcName = function (parm1 , param2) {
    ...
   return <value> ;
  }

 console.log(funcName( 1, 2)); // Grum says WTF? Function effectively has a name, so how is it anomymous???
  ```

- WARNING: "Hoisting" (declaring after invoation) is NOT supported

### [Arrow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) - `const funcName = (params) => {...}`
  ```js
  const funcName = (parm1 , param2) => {...}
  ```

### Concise body declarations

#### Zero parameters - `const funcName = () => {...}`
  ```javascript
  const funcName = () => {...};
  ```

#### One parameter - `const funcName = parm1 => {...}`
  ```javascript
  const funcName = parm1 => {...};
  ```

#### Two or more parameters - `const funcName = (parm1, param2) => {...}`
  ```javascript
  const funcName = (parm1, param2) => {...};
  ```

#### Single-line blocks - `const funcName = param1 => statement;`
  - Note lack of {}.  Automatically returns what statement evalutes to.
  ```javascript
  const funcName = param1 => statement;
  ```
  - NB: Ternary conditional counts as single statement. E.g.;
    ```javascript
    const isCircleBig = radius => 2*radius* 3.14 > 1000 ? true : false ;
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

