#About this Repo

## ES6 JS FEATURES Useful for React

This repo is a collection of ES6 JS features that are useful for React.js & Node.js.

## Table of Contents

- [Arrow Functions](#arrow-functions)
- [Classes](#classes)
- [Destructuring](#destructuring)
- [Enhanced Object Literals](#enhanced-object-literals)
- [Modules](#modules)
- [Promises](#promises)
- [Rest and Spread](#rest-and-spread)
- [Template Literals](#template-literals)

## Arrow Functions

Arrow functions are a new way to write anonymous function expressions. They have a shorter syntax than function expressions and do not have their own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors.

```javascript
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };

// ES6 (implicit return)
const multiplyES6 = (x, y) => x * y;
```

## Classes

ES6 classes are a simple sugar over the prototype-based OO pattern. Having a single convenient declarative form makes class patterns easier to use, and encourages interoperability. Classes support prototype-based inheritance, super calls, instance and static methods and constructors.

```javascript   
// ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');

// ES6
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

## Destructuring

The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```javascript
// ES5
var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

// ES6
const { x, y, z } = { x: 3.6, y: 7.4, z: 6.54 };
```

## Enhanced Object Literals

Object literals are extended to support setting the prototype at construction, shorthand for foo: foo assignments, defining methods, making super calls, and computing property names with expressions. Together, these also bring object literals and class declarations closer together, and let object-based design benefit from some of the same conveniences.

```javascript
// ES5
var obj = {
  x: x,
  y: y
};

// ES6
const obj = { x, y };
```

## Modules

JavaScript modules are now native, and supported officially in Node.js and all major browsers. JavaScript modules are the most fundamental aspect of any modular system, since they are responsible for making sure that the pieces of your application are organized.

```javascript
// ES5
// file1.js
var multiply = function(x, y) {
  return x * y;
};
module.exports = multiply;

// file2.js
var multiply = require('./multiply');
console.log(multiply(2, 3));

// ES6
// file1.js
export const multiply = (x, y) => { return x * y };

// file2.js
import { multiply } from './multiply';
console.log(multiply(2, 3));
```

## Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation. Since most people are consumers of already-created promises, this guide will explain consumption of returned promises before explaining how to create them.

```javascript
// ES5
const getData = function() {
  fetch('https://api.github.com').then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
  });
};

// ES6
const getData = async function() {
  const response = await fetch('https://api.github.com');
  const data = await response.json();
  console.log(data);
};
```

## Rest and Spread

The rest parameter syntax allows us to represent an indefinite number of arguments as an array. The spread syntax allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

### Spread

```javascript
// ES5
function sum(x, y, z) {
  return x + y + z;
}
var numbers = [1, 2, 3];
console.log(sum.apply(null, numbers));

// ES6
const sum = (x, y, z) => { return x + y + z };
const numbers = [1, 2, 3];
console.log(sum(...numbers));   // spread
```
### Rest
    
    ```javascript
    // ES5
    function sum(x, y, z) {
      var a = arguments;
      return x + y + z;
    }
    console.log(sum(1, 2, 3, 4, 5));

    // ES6
    const sum = (...args) => { return args.reduce((a, b) => a + b, 0) };
    console.log(sum(1, 2, 3, 4, 5));
    ```


## Template Literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

```javascript
// ES5
var welcome = 'You have logged in as ' + first + ' ' + last + '.';
var db = 'http://' + host + ':' + port + '/' + database;

// ES6
const welcome = `You have logged in as ${first} ${last}.`;
const db = `http://${host}:${port}/${database}`;
```



# Learning-E6
