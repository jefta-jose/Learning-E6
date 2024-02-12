// ARRAYS IN JS
// 1. Array Literal
// 2. Array Constructor
// 3. Array Prototype

// 1. Array Literal
let fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);

// 2. Array Constructor
let fruits2 = new Array("Apple", "Banana", "Orange");
// console.log(fruits2);

// 3. Array Prototype
let fruits3 = new Array();
fruits3[0] = "Banana";
fruits3[1] = "Orange";
fruits3[2] = "Apple";
// console.log(fruits3);

// Array methods
// 1. pop
// The pop() method removes the last element from an array:
let fruits10 = ["Apple", "Banana", "Orange"];

let lastFruit = fruits10.pop();
console.log(lastFruit); // Orange
console.log(fruits10); // ["Apple", "Banana"]

// 2. push
// The push() method adds a new element to an array (at the end):

let fruits11 = ["Apple", "Banana", "Orange"];

fruits11.push("Mango");
console.log(fruits11); // ["Apple", "Banana", "Orange", "Mango"]

// 3. shift
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

let fruits12 = ["Apple", "Banana", "Orange"];

let firstFruit = fruits12.shift();
console.log(firstFruit); // Apple
console.log(fruits12); // ["Banana", "Orange"]

// 4. unshift
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

let fruits13 = ["Apple", "Banana", "Orange"];

fruits13.unshift("Mango");
console.log(fruits13); // ["Mango", "Apple", "Banana", "Orange"]

// 5. indexOf   
// The indexOf() method searches an array for an element value and returns its position.

let fruits14 = ["Apple", "Banana", "Orange"];

let position = fruits14.indexOf("Banana");
console.log(position); // 1

// 6. lastIndexOf
// The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

let fruits15 = ["Apple", "Banana", "Orange", "Apple"];

let position2 = fruits15.lastIndexOf("Apple");
console.log(position2); // 3

// 7. includes
// The includes() method determines whether an array contains a specified element.

let fruits16 = ["Apple", "Banana", "Orange"];

let isInArray = fruits16.includes("Banana");
console.log(isInArray); // true

// 8. join
// The join() method returns the array as a string.
let fruits01 = ["Apple", "Banana", "Orange"];
let fruits17 = ["zabibu", "machungwa", "nanasi"];

let fruitsString = fruits17.join(fruits01);
console.log(fruitsString); // Apple,Banana,Orange   


// 9. filter
// The filter() method creates a new array with array elements that passes a test.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//ES5
let evenNumbers = numbers.filter(function (element) {
    return element % 2 == 0;
});
console.log(evenNumbers); // [2, 4, 6, 8]

//ES6
let evenNumbers2 = numbers.filter(element => element % 2 == 0);
console.log(evenNumbers2); // [2, 4, 6, 8]

// 10. map
// The map() method creates a new array with the results of calling a function for every array element.

let numbers2 = [1, 2, 3, 4, 5];
//ES5
let doubleNumbers = numbers2.map(function (element) {
    return element * 2;
});
console.log(doubleNumbers); // [2, 4, 6, 8, 10]

//ES6
let doubleNumbers2 = numbers2.map(element => element * 2);
console.log(doubleNumbers2); // [2, 4, 6, 8, 10]

// 11. reduce
// The reduce() method reduces the array to a single value.

let numbers3 = [1, 2, 3, 4, 5];
//ES5
let sum = numbers3.reduce(function (total, element) {
    return total + element;
});
console.log(sum); // 15

//ES6
let sum2 = numbers3.reduce((total, element) => total + element);
console.log(sum2); // 15

// 12. find
// The find() method returns the value of the first array element that passes a test function.

let numbers4 = [1, 2, 3, 4, 5];
//ES5
let firstEvenNumber = numbers4.find(function (element) {
    return element % 2 == 0;
});
console.log(firstEvenNumber); // 2

//ES6
let firstEvenNumber2 = numbers4.find(element => element % 2 == 0);
console.log(firstEvenNumber2); // 2

// 5. findIndex
// The findIndex() method returns the index of the first array element that passes a test function.

let numbers5 = [1, 2, 3, 4, 5];
//ES5
let firstEvenNumberIndex = numbers5.findIndex(function (element) {
    return element % 2 == 0;
});
console.log(firstEvenNumberIndex); // 1

//ES6
let firstEvenNumberIndex2 = numbers5.findIndex(element => element % 2 == 0);
console.log(firstEvenNumberIndex2); // 1

// 6. sort
// The sort() method sorts an array alphabetically.

let newFruits = ["Banana", "Orange", "Apple", "Mango"];
//ES5
newFruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//ES6
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]

//  sort with (compareFunction) ie (a,b) => a-b
// The sort() method sorts an array alphabetically.

let newFruits2 = ["Banana", "Orange", "Apple", "Mango"];
//ES6
newFruits2.sort((a, b) => a - b); // ascending order
console.log(newFruits2); // ["Apple", "Banana", "Mango", "Orange"]
newFruits2.sort((a, b) => b - a); // descending order   
console.log(newFruits2); // ["Orange", "Mango", "Banana", "Apple"]


// 7. reverse
// The reverse() method reverses the elements in an array.

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits3.reverse();
console.log(fruits2); // ["Mango", "Apple", "Orange", "Banana"]

// 8. concat
// The concat() method is used to join two or more arrays.

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let vegetables = ["Potato", "Tomato", "Onion", "Cabbage"];

let fruitsAndVegetables2 = fruits3.concat(vegetables);
console.log(fruitsAndVegetables2); // ["Banana", "Orange", "Apple", "Mango", "Potato", "Tomato", "Onion", "Cabbage"]

// 9. splice
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];

fruits4.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits4); // ["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango"]

