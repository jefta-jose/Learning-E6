// console.log('Hello World😂😂😂😂😂');
//COMMENTS IN JS
//single line comment
/*multi
line
comment*/
//VARIABLES IN JS

const age = 30; //number 
var isMarried = true; //boolean
console.log(name);

// var is a global variable
// let is a block level variable
// What is Hoisting:Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

//  DISPLAYING OUTPUT IN JS
const newArr = [1, 2, 3, 4, 5];
console.table(arr);
console.log(arr[0])

//Initializing a variable
let myName; // declared but not initialized
myName = "John Doe"; //initialized
console.log(typeof myName); //string
console.log(typeof isMarried); //boolean

// IDENTIFIERS IN JS : Identifiers are the names given to variables, functions, classes, etc. in JavaScript. Identifiers are the user-defined names consisting of a sequence of characters (a-z, A-Z, 0-9, $, and _) that are used to identify variables, functions, classes, etc. in the program.

// RULES FOR NAMING IDENTIFIERS
// 1. The first character must be a letter or an underscore (_).
// 2. You can’t use reserved words as identifiers.
// 3. You can’t use special symbols in identifiers, except for the dollar sign ($) and the underscore (_).
// 4. Identifiers are case-sensitive.
// 5. Identifiers can be of any length.


let firstNameDad = "John"; //camelCase
let FirstName = "John"; //PascalCase
let first_name = "John"; //snake_case

//Naming Conventions
// 1. camelCase
// 2. PascalCase
// 3. snake_case
// 4. kebab-case

// DATA TYPES IN JS
// 1. Primitive Data Types
// 2. Non-Primitive Data Types

// Primitive Data Types
// 1. Number
let num = 10;
console.log(typeof num); //number
console.log(num);

// 2. String
let name = "John Doe";
let lastName = 'John Doe';
console.log(typeof name);
console.log(typeof lastName);

// 3. Boolean
let isMarried = true;
console.log(typeof isMarried);
console.log(isMarried);

// 5. Undefined : A variable that has not been assigned a value is of type undefined.
let kevin;
console.log(kevin)
console.log(typeof kevin);

// 6. Null : 
let Simon = null;
console.log(Simon);
console.log(typeof Simon);

// Non-Primitive Data Types
// 1. Object
let person = {
    name: "John Doe",
    age: 30,
    isMarried: true
}

console.log(`My name is ${person["name"]} and I am ${person["age"]} years old.`);

// 2. Array
let arr = [1, 2, 3, 4, 5];  //es6 syntax
const arr2 = new Array(1, 2, 3, 4, 5);  //es5 syntax constructor

arr.forEach((item) => {
    console.log(item);
})

// OPERATORS IN JS
//  1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (ternary) Operator


// OPERATORS IN JS
//  1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. String Operators
// 7. Conditional (ternary) Operator

// 1. Arithmetic Operators code examples
let a = 10;
let b = 20;
console.log(`the value of {a} + {b} is ${a + b}`);  //addition operator
console.log(`the value of {a} - {b} is ${a - b}`); //subtraction operator
console.log(`the value of {a} * {b} is ${a * b}`); //multiplication operator
console.log(`the value of {a} / {b} is ${a / b}`); //division operator
console.log(`the value of {a} % {b} is ${a % b}`); //modulus operator : remainder of a/b
console.log(`the value of {a} ** {b} is ${a ** b}`); //exponentiation operator : 10^20=10
console.log(`the value of {a} ++ is ${a++}`);  //increment operator
// console.log(a); //11
console.log(`the value of {a} -- is ${a--}`);  //decrement operator
console.log(`the value of {++a} is ${++a}`); //pre increment operator
console.log(`the value of {--a} is ${--a}`); //pre decrement operator

// 2. Assignment Operators code examples
let x1 = 10;
let y1 = 20;
let z1 = 30;
x1 += y1; // x1 = x1+y1
console.log(x1);
x1 -= y1; // x1 = x1-y1
console.log(x1);
x1 *= y1; // x1 = x1*y1
console.log(x1);
x1 /= y1; // x1 = x1/y1
console.log(x1);
x1 %= y1; // x1 = x1%y1
console.log(x1);
x1 **= y1; // x1 = x1**y1 
console.log(x1);

// 3. Comparison Operators code examples
let x2 = 10;
let y2 = 20;
console.log(x2 == y2); //false
console.log(x2 != y2); //true
console.log(x2 > y2); //false
console.log(x2 < y2); //true
console.log(x2 >= y2); //false
console.log(x2 <= y2); //true

// 4. Logical Operators code examples
let x3 = 10;
let y3 = 20;
console.log(x3 == y3 && x3 < y3); //false
console.log(x3 == y3 || x3 < y3); //true
console.log(!(x3 == y3)); //true

// 5. Bitwise Operators code examples
let x4 = 10;
let y4 = 20;
console.log(x4 & y4); //0
console.log(x4 | y4); //30
console.log(~x4); //-11
console.log(x4 ^ y4); //30
console.log(x4 << y4); //10485760
console.log(x4 >> y4); //0

// 6. String Operators code examples
let x5 = "Sai";
let y5 = "Kumar";
console.log(x5 + y5); //SaiKumar
console.log(x5 += y5); //SaiKumar


