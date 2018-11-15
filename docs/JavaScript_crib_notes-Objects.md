Grum's JavaScript Crib Notes - Objects
======================================

Contains summary langauge and interface info, with `code` examples and [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to Mozilla documentation.
Back to [JavaScript language](JavaScript_crib_notes.md) main doc

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Objects](#objects)
  - [Notes](#notes)
    - [Support a mix of properties (including nested objects) and methods.](#support-a-mix-of-properties-including-nested-objects-and-methods)
    - [`const` restricts object re-assignment, but not contents assignment.](#const-restricts-object-re-assignment-but-not-contents-assignment)
    - [Are pass-by-reference into functions, where their properties are mutable.](#are-pass-by-reference-into-functions-where-their-properties-are-mutable)
    - [`this` references the _calling object_](#this-references-the-calling-object)
      - [WARNING: Arrow functions bind `this` to the function itself (i.e. global scope)](#warning-arrow-functions-bind-this-to-the-function-itself-ie-global-scope)
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
  - [Iterator - `for...in` aka `for (let property_name in obj) {...}`](#iterator---forin-aka-for-let-propertyname-in-obj)
    - [WARNING: property_name is a `String`, not a reference](#warning-propertyname-is-a-string-not-a-reference)
      - [`typeof` can be used to determine a property value's type](#typeof-can-be-used-to-determine-a-property-values-type)
    - [WARNING: Avoid adding, modifying or deleting properties other than the current](#warning-avoid-adding-modifying-or-deleting-properties-other-than-the-current)
  - [Getters and setters](#getters-and-setters)
    - [Property privacy - By convention prepend name with `_`](#property-privacy---by-convention-prepend-name-with)
    - [**WARNING**: properties cannot share the same name as getters/setters](#warning-properties-cannot-share-the-same-name-as-getterssetters)
    - [`get funcName() {}` - Getters](#get-funcname----getters)
    - [`set funcName(args) {}` - Setters](#set-funcnameargs----setters)

<!-- /code_chunk_output -->

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

### `this` references the _calling object_
- Can use `this` to access an object's properties internally. E.g.;
  ```js
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };

  console.log(robot.provideInfo()); // Output: I am 1E78V2 and my current energy level is 100.
  ```

#### WARNING: Arrow functions bind `this` to the function itself (i.e. global scope)
- This is because arrow functons are anonymous
- Avoid using arrow functions when using `this` in an object method to prevent the following error;
  ```js
  const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: () => {  // <- Note arrow fuction 'breaks' `this` (compare to example above)
      return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
  };
  
  console.log(robot.provideInfo());  // Output: I am undefined and my current energy level is undefined.
  ```

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

## Iterator - [`for...in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)   aka `for (let property_name in obj) {...}`

### WARNING: property_name is a `String`, not a reference
- `for...in` interates over the properties, and provides **ONLY** a string containing each properties' name (i.e. key name). It is **NOT** a reference to contained data primatives, objects or functions.
- The string can then be use to access the property value via bracket notation.
- E.g.;
  ```js
  let anObj = {
      'keyStr' : 'A value', // A property
      'key Str2' : 3.92,  // Another property
      nestedObj: { 'keyStr3' : 'Another value', 'keyStr4' : [ 'Yo', 'Ho', 'Ho'] } // A nested object
    }

  for ( let propertyName in anObj.nestedObj ) {
      console.log(`${propertyName} : ${anObj.nestedObj[propertyName]}`); // Works
  }

  /* Output:
  keyStr3 : Another value
  keyStr4 : Yo,Ho,Ho
  */
  ```
  
#### `typeof` can be used to determine a property value's type
- E.g.;
  
  ```js
  let anObj = {
      aFunc () {  // A method
        console.log("funcs message!"); 
      },
      anotherFunc () { // Another method
        console.log("Another funcs message!"); 
      },
      'keyStr' : 'A value', // A property
      'key Str2' : 3.92,  // Another property

      childObj: { 'keyStr3' : 'Another value', 'keyStr4' : [ 'Yo', 'Ho', 'Ho'] } // A nested object

    }

  const traverseObj = (obj, indent) => {

      if ( typeof obj != 'object') return;
      if ( indent === undefined ) indent = '';

      for (propertyName in obj) {
          let propertyValue = obj[propertyName];

          let valueType = typeof propertyValue;
          switch (valueType) {
              case 'function' :
                  console.log(`${indent}> ${propertyName} (${valueType}) Calling...`);
                  propertyValue();
                  break;
              case 'object' :
                  console.log(`${indent}> ${propertyName} (${valueType})`);
                  traverseObj(propertyValue, indent + "    ");
                  break;
              default :
                  console.log(`${indent}> ${propertyName} (${valueType}) : ${propertyValue}`);
                  break;
          }
      }
  }

  traverseObj(anObj);

  /* Output:
  > aFunc (function) Calling...
  funcs message
  > anotherFunc (function) Calling...
  Another funcs message!
  > keyStr (string) : A value
  > key Str2 (number) : 3.92
  > childObj (object)
      > keyStr3 (string) : Another value
      > keyStr4 (object)
          > 0 (string) : Yo
          > 1 (string) : Ho
          > 2 (string) : Ho
  */
  ```

### WARNING: Avoid adding, modifying or deleting properties other than the current
- This is due to the order of visiting being arbitrary (see link for details)

## Getters and setters

### Property privacy - By convention prepend name with `_` 

### **WARNING**: properties cannot share the same name as getters/setters
- Prepend property name with `_` to workaround this.

### `get funcName() {}` - Getters
- Parentheses can be omitted when calling getter.
- E.g.;
  ```js
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number') {
        return 'My current energy level is ' + this._energyLevel
      } else {
        return "System malfunction: cannot retrieve energy level"
      }
    }
  };

  console.log(robot.energyLevel); // Output: 100     Note lack of parentheses looks like accessing property
  ```

### `set funcName(args) {}` - Setters
- Parentheses can be omitted when calling getter.
- E.g.;
  ```js
  const robot = {
      _model: '1E78V2',
      _energyLevel: 100,
      _numOfSensors: 15,
      get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
          return this._numOfSensors;
        } else {
          return 'Sensors are currently down.'
        }
      },
      set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0){
          this._numOfSensors = num;
        } else {
          console.log('Pass in a number that is greater than or equal to 0')
        }   
      } 
  };

  robot.numOfSensors = 100; // Note lack of parentheses looks like updating property
  console.log(robot.numOfSensors); //output: 100
  ```

---