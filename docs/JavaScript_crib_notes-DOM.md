Grum's JavaScript Crib Notes - DOM
==================================

Contains summary langauge and interface info, with `code` examples and [links](https://developer.mozilla.org/en-US/docs/Web/JavaScript) to Mozilla documentation.
Back to [JavaScript language](JavaScript_crib_notes.md) main doc

**Contents**

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

* [Interfacing with the DOM (Document Object Model)](#interfacing-with-the-dom-document-object-modelhttpsdevelopermozillaorgen-usdocswebapidocument_object_model)
		* [`document` keyword](#document-keyword)
	* [Basic properties and methods](#basic-properties-and-methods)
		* [Element](#elementhttpsdevelopermozillaorgen-usdocswebapielement)
			* [`.innerHTML`](#innerhtmlhttpsdevelopermozillaorgen-usdocswebapielementinnerhtml)
			* [`.querySelector(selectors)`](#queryselectorselectorshttpsdevelopermozillaorgen-usdocswebapielementqueryselector)
		* [Document](#documenthttpsdevelopermozillaorgen-usdocswebapidocument)
			* [`.getElementById('id')`](#getelementbyididhttpsdevelopermozillaorgen-usdocswebapidocumentgetelementbyid)
			* [`.createElement(tagName, options)`](#createelementtagname-optionshttpsdevelopermozillaorgen-usdocswebapidocumentcreateelement)
		* [Global Attribute](#global-attributehttpsdevelopermozillaorgen-usdocswebhtmlglobal_attributes)
			* [.style](#stylehttpsdevelopermozillaorgen-usdocswebhtmlglobal_attributesstyle)
		* [Node](#nodehttpsdevelopermozillaorgen-usdocswebapinode)
			* [.appendChild](#appendchildhttpsdevelopermozillaorgen-usdocswebapinodeappendchild)
			* [.removeChild(child)](#removechildchildhttpsdevelopermozillaorgen-usdocswebapinoderemovechild)
		* [HTMLElement](#htmlelementhttpsdevelopermozillaorgen-usdocswebapihtmlelement)
			* [.hidden - see link for usecases](#hiddenhttpsdevelopermozillaorgen-usdocswebapihtmlelementhidden-see-link-for-usecases)
		* [GlobalEventHandlers](#globaleventhandlershttpsdevelopermozillaorgen-usdocswebapiglobaleventhandlers)
			* [.onclick](#onclickhttpsdevelopermozillaorgen-usdocswebapiglobaleventhandlersonclick)
			* [.parentNode](#parentnodehttpsdevelopermozillaorgen-usdocswebapinodeparentnode)
		* [ParentNode](#parentnodehttpsdevelopermozillaorgen-usdocswebapiparentnode)
			* [.children](#childrenhttpsdevelopermozillaorgen-usdocswebapiparentnodechildren)
* [Grum code snipets](#grum-code-snipets)
	* [`documentDirURL()` - Returns URL of directory containing the document](#documentdirurl-returns-url-of-directory-containing-the-document)

<!-- /code_chunk_output -->

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

#### [`.style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) - CSS for element
  - Contains CSS styling declarations to be applied to the element. E.g.;
    ```javascript
    document.body.style.backgroundColor = "#201F2E";
    ```

### [Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)

#### [`.appendChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)

  - Adds a node to the end of the list of children of a specified parent node. E.g.; see [`.createElement()`](#getelementbyidid).


#### [`.removeChild(child)`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild)

  - removes a child node from the DOM. Returns removed node. E.g.;
    ```javascript
    let elementToRemove = document.getElementById('myElementId');
    let parent = elementToRemove.parentNode;
    parent.removeChild(elementToRemove);
    ```

### [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)

#### [`.hidden`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden) - see link for usecases

  - Boolen property that applies to all presentation modes. Not the same as CSS `display` E.g.;
    ```javascript
    document.getElementById("myElementId").hidden = true;
    ```

### [GlobalEventHandlers](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)

#### [`.onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)

  - Example that will toggle "button" b/w red and blue;
    ```javascript
    let element = document.querySelector("button");

    function turnButtonRed (){
      element.style.backgroundColor = "red";
      element.style.color = "white";
      element.innerHTML = "Red Button";
      element.onclick = turnButtonBlue;  /* Note this swaps to other, blue, function*/
    }

    function turnButtonBlue (){
      element.style.backgroundColor = "blue";
      element.style.color = "white";
      element.innerHTML = "Blue Button";
      element.onclick = turnButtonRed; /* Note this swaps back to other, red, function*/
    }

    element.onclick = turnButtonRed;
    ```

#### [`.parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode)

  - Returns the parent of the specified node. E.g.;
    ```javascript
    let child = document.getElementById('myElementId');
    let parent = child.parentNode;
    ```

### [ParentNode](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode)

#### [`.children`](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/children)

  - Returns a live [HTMLCollection](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) containing all of the child elements. E.g.;
    ```javascript
    for (var i = 0; i < body.children.length; i++) {
        console.log(body.children[i].tagName);
    }    
    ```

---

# Events

## Event Handler Registration

- The DOM element being interacted with is the _event target_
- An event handler function is registered as a property attached to _event target_

### _event names_
- _event names_  have the prefix _`on`_, followed by the event type. (e.g. `onclick`)
- E.g.;
  ```js
  let eventTarget = document.getElementById('targetElement');


  let eventHandlerFunction = function(event) {
    // this block of code will run
    event.target.style.backgroundColor = 'red';
    event.target.innerHTML="Grum Waz Ere";
  }

  eventTarget.onclick = eventHandlerFunction;
  ```
  - Note the named event handler function.  This is best-practice as anonymous functions are less readable and reusable

### [_event types_](https://developer.mozilla.org/en-US/docs/Web/Events)
- See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/Events) for the many possible event types that exist.

- Some interesting pointer ones;

| event type | Fire when |
| ---------- |:--------- |
| click | A pointing device button (ANY button; soon to be primary button only) has been pressed and released on an element. |
| mouseover | A pointing device is moved onto the element that has the listener attached or onto one of its children. |
| mousedown | A pointing device button is pressed on an element. |
| mouseup | A pointing device button is released over an element. |
| mouseout | A pointing device is moved off the element that has the listener attached or off one of its children. |


### `.addEventListener(){ "event type" , eventHandlerunction}`
  - alternative to using _event names_ above
  - allows adding multiple listener functions on the same event type
  - The following is equivalent to the _event names_ example above;
  ```js
  let eventTarget = document.getElementById('targetElement');


  let eventHandlerFunction = function(event) {
    // this block of code will run
    event.target.style.backgroundColor = 'red';
    event.target.innerHTML="Grum Waz Ere";

  }

  eventTarget.addEventListener ( 'click', eventHandlerFunction);
  ```

### `.removeEventListener(){ "event type" , eventHandlerunction}`
- Needs to identify which function to remove from the event target, as each event type can have multiple event listner functions, => the event handler function passed to the `.removeEventListener()` method **must** be the same function as the corresponding `.addEventListener()`.
- Example follows on from one above for `.addEventListener`
  ```js
  eventTarget.removeEventListener ( 'click', eventHandlerFunction);
  ```

## Event Properties

### `.target` - element that triggered event

### [`.type`](https://developer.mozilla.org/en-US/docs/Web/Events) - triggered event type

### `.timeStamp` - milliseconds since document loaded and event triggered

- e.g.;
  ```js
  let eventTarget = document.getElementById('targetElement');

  let eventHandlerFunction = function(event) {
    console.log(`.target = ${event.target}, .type = ${event.type}, .timeStamp = ${event.timeStamp}`);  
    // outputs: .target = [object HTMLButtonElement], .type = click, .timeStamp = 434205
  }

  eventTarget.addEventListener ( 'click', eventHandlerFunction);
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

