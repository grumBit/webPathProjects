Grum's JavaScript Crib Notes - Objects & Classes
================================================

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
      - [ES6 vars shortcut - `let anObj = { var1, var2, var3 }`](#es6-vars-shortcut---let-anobj---var1-var2-var3)
    - [Access notation](#access-notation)
      - [Dot notation `objName.keyName`](#dot-notation-objnamekeyname)
      - [Bracket notation - `objName['keyName']`](#bracket-notation---objnamekeyname)
        - [With variables - `objName[varName]`](#with-variables---objnamevarname)
      - [ES6 Destructed Assignment - `[let|const] {keyName} = obj`](#es6-destructed-assignment---letconst-keyname--obj)
    - [Assignment - `objName[keyName] = 'New value'`](#assignment---objnamekeyname--new-value)
    - [Deletion - `delete objName[keyName]`](#deletion---delete-objnamekeyname)
  - [Methods](#methods)
    - [Declaration](#declaration)
      - [Preferred ES6 - `funcName(){...},`](#preferred-es6---funcname)
      - [Old - `funcName: function(){...},`](#old---funcname-function)
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
      - [ES6 Object Initialiser shortcut for setters](#es6-object-initialiser-shortcut-for-setters)
  - [Factory Functions](#factory-functions)
    - [Old long-hand](#old-long-hand)
    - [New ES6 Destructuring - Property Value Shorthand](#new-es6-destructuring---property-value-shorthand)
  - [Built-in Object Methods](#built-in-object-methods)
  - [Built-in Methods of the Object constructor](#built-in-methods-of-the-object-constructor)
  - [Grums Object traverser](#grums-object-traverser)
- [Classes](#classes)
  - [`class CaptialisedCamelCase {}` - naming convention](#class-captialisedcamelcase----naming-convention)
  - [`this` - refers to instance of class](#this---refers-to-instance-of-class)
  - [`constructor(args) {}` - always called on creation](#constructorargs----always-called-on-creation)
  - [Methods](#methods-1)
    - [`funcName(){...}` - standard declaration](#funcname---standard-declaration)
    - [Getters and Setters](#getters-and-setters)
      - [`get funcName(){...}`](#get-funcname)
      - [`set funcName(args){...}`](#set-funcnameargs)
    - [`instance.funcName(args)` - invocation](#instancefuncnameargs---invocation)
    - [Basic full example](#basic-full-example)
    - [`static funcName(args){}` - Class methods](#static-funcnameargs---class-methods)
  - [Inheritance](#inheritance)
    - [`class ChildClass extends ParentClass {}`](#class-childclass-extends-parentclass)
    - [`super(args)` - calls parent constructor](#superargs---calls-parent-constructor)
      - [`super` - must be called before `this` can be used](#super---must-be-called-before-this-can-be-used)
    - [Basic example](#basic-example)

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

#### ES6 vars shortcut - `let anObj = { var1, var2, var3 }`

- See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions) for details
- The variable names become the key names, and the variable contents become the values;
  - NB: Not compatible with Internet Explorer, which stopped being supported in 2016.

  ```js
  const var1 = 'A value';
  const var2 = 'A 2nd value';
  const var3 = 'A 3rd value';

  const anObj = { var1, var2, var3 };

  for (propertyName in anObj){
    console.log(`${propertyName} : ${anObj[propertyName]}`);
  }
  /* Output:
  var1 : A value
  var2 : A 2nd value
  var3 : A 3rd value
  */
  ```

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

#### ES6 Destructed Assignment - `[let|const] {keyName} = obj`
- Shorthand for extracting properties (of any type) into local variables
- E.g.
  ```js
  let anObj = { 'keyStr' : 'A value', 'key Str2' : 3.92 };

  const {keyStr} = anObj;

  console.log(keyStr);  // output: A Value
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
- A method is property with a function as its value. 

### Declaration

#### Preferred ES6 - `funcName(){...},`

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

#### Old - `funcName: function(){...},`
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

<a id="__for_in"></a>

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

- See [below](#__object_traverser) for example

### WARNING: Avoid adding, modifying or deleting properties other than the current
- This is due to the order of visiting being arbitrary (see [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Deleted_added_or_modified_properties) for details)

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

#### ES6 Object Initialiser shortcut for setters

- Can use the [ES6 Object Initialiser shortcut](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer) with setters to simplify the code;
  - NB: Not copmatible with Internet Explorer, which stopped being supported in 2016.
```js
const team = {

  _players : [
    {firstName:'Pablo', lastName:'Sanchez', age: 11},  // hardcoded just to compare to shortcut additions
    {firstName:'Ro', lastName:'Coster', age: 12},
    {firstName:'Finn', lastName:'Coster', age: 11}
  ],
  get players(){ return this._players },
  addPlayer(firstName, lastName, age){
    this.players.push({firstName, lastName, age}); // <- note lack of ':' and property names 
  },

};

team.addPlayer('Mick','Maloy',52);  //<- looking in debugger, these adds all wound up with correct key:value pairs
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
```

---

## Factory Functions

- Allow objects to be created en-masse (like constructors)

### Old long-hand
- E.g.
  ```js
  const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }

  const tinCan = robotFactory('P-500', true);

  tinCan.beep();
  ```

### New ES6 Destructuring - Property Value Shorthand
- Reduces the need to specify arg and property names.
- The example factory function below is equivalent to the long-hand above;
  ```js
  function robotFactory(model, mobile){
    return {
      model,  // Note lack of : model compared to above
      mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }

  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model) // output: P-501
  console.log(newRobot.mobile) //output: false
  ```
- This example includes destructuring with getters & setters;
  ```js
  function dogFactory(_name, _breed, _weight){   // Note args are prepended with _ to  avoid name colisions with getters
    if ( typeof _name != 'string' || typeof _breed != 'string' || typeof _weight != 'number' ){
      return undefined;
    }
    return {
      _name, // Note lack of : _name.
      _breed,
      _weight,

      get name(){return this._name},   // Note need to have _ on properties to avoid name colision with getter
      get breed(){return this._breed},
      get weight(){return this._weight},

      set name(name) { this._name = name },
      set breed(breed) { this._breed = breed },
      set weight(weight) { this._weight = weight },
      
      bark() {return 'ruff! ruff!'},
      eatTooManyTreats() {this._weight += 1}
    }
  }

  const dog = dogFactory('Joe', 'Pug', 27);
  dog.weight = 29;
  dog.eatTooManyTreats();

  console.log(dog); // output: Object {_name: "Joe", _breed: "Pug", _weight: 30, name: <accessor>, breed: <accessor>, …}
  ```

## Built-in Object Methods

- See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)

## Built-in Methods of the Object constructor

- See [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor)

<a -id="__object_traverser"></a>
## Grums Object traverser
- A useful bit of code I came up with for displaying the contents of any object;
  
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
                  console.log(`${indent}> ${propertyName} (${valueType})`);
  //                  propertyValue();  // <- could call function like this, but it's not safe without args to provide
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

# Classes

## `class CaptialisedCamelCase {}` - naming convention

## `this` - refers to instance of class

## `constructor(args) {}` - always called on creation
- Can define instance properties within constructor. E.g.;
  ```js
  class Surgeon {
    constructor(name, department) {
      this._name = name;  // <- Note _ to indicate private (not enforced)
      this._department = department;
    }
  }

  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

  console.log(surgeonCurry); //Output: Surgeon {name: "Curry", department: "Cardiovascular"}
  ```


## Methods
- Class method and getter syntax is the same as it is for objects **except you can not include commas between methods**.

### `funcName(){...}` - standard declaration


### Getters and Setters

#### `get funcName(){...}`
- As per Object getters, but no comma after.

#### `set funcName(args){...}`
- As per Object setters, but no comma after.

### `instance.funcName(args)` - invocation
- As per Object method invocation
- Except for getters abnd setter, opening and closing parentheses must be included.

### Basic full example
  ```js
  class Surgeon {
    constructor(name, department) {
      this._name = name;
      this._department = department;
      this._remainingVacationDays = 20;
    }
    
    get name(){
      return this._name;
    }
    
    get department(){
      return this._department;
    }
    
    get remainingVacationDays(){
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff){
      this._remainingVacationDays -= daysOff;
    }
  }

  const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
  const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

  console.log(surgeonCurry.name);
  surgeonCurry.takeVacationDays(3);
  console.log(surgeonCurry.remainingVacationDays);
  ```

### `static funcName(args){}` - Class methods
- Call using `ClassName.funcName(args)`

## Inheritance

### `class ChildClass extends ParentClass {}`

### `super(args)` - calls parent constructor

#### `super` - must be called before `this` can be used
- if not, JavaScript will throw a reference error.

### Basic example
```js
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  
  get certifications() {
    return this._certifications
  }
  
  addCertification(newCertification){
    this._certifications.push(newCertification);
  }
  
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
```






