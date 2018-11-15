Grum's JavaScript Crib Notes - Arrays
=====================================

Contains summary langauge and interface info, with `code` examples and [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to Mozilla documentation.
Back to [JavaScript language](JavaScript_crib_notes.md) main doc

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

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
  - [Iterators](#iterators)
    - [3 declaration styles](#3-declaration-styles)
      - [Arrow `=>` ES6 (preferred style)](#arrow--es6-preferred-style)
      - [Anonymous function declaration](#anonymous-function-declaration)
      - [Separate function declaration](#separate-function-declaration)
  - [Common iterators with example code](#common-iterators-with-example-code)
    - [`.forEach(function)` - iterate over each element](#foreachfunction---iterate-over-each-element)
    - [`.map(function) -> new Array` - return mapped elements](#mapfunction---new-array---return-mapped-elements)
    - [`.filter(function) -> new Array` - return matching elements](#filterfunction---new-array---return-matching-elements)
    - [`.findIndex(function) -> int` - return index of 1st matching element](#findindexfunction---int---return-index-of-1st-matching-element)
    - [`.reduce(function, optional_start_value) -> value` - return single accumulated value](#reducefunction-optionalstartvalue---value---return-single-accumulated-value)
    - [`.every(function)` -> boolean - returns true if all elements pass the provided test](#everyfunction---boolean---returns-true-if-all-elements-pass-the-provided-test)
    - [`.some(function)` -> boolean - returns true if any elements passes the provided test](#somefunction---boolean---returns-true-if-any-elements-passes-the-provided-test)

<!-- /code_chunk_output -->

---

# [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

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

---

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
