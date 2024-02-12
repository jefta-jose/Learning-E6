// FUNCTIONS IN JS
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
// 4. Anonymous Function
// 5. Immediately Invoked Function Expression (IIFE)

// 1.What is a function?

//function declaration
function greet() {
    console.log("Hello World!");
}

greet(); // function call

// function  with parameters
function sum(a, b) {
    console.log(a + b);
}

sum(10, 20);
sum(20, 50);

// function with a return value
function sumOfTwoNumbers(a, b) {
    let sum = a + b;
    return sum;
}

console.log(sumOfTwoNumbers(10, 20));

// 2. Function Expression
//  what is an expression ? - An expression is any valid unit of code that resolves to a value.

let ResultOfSum = function (a, b) {
    return a + b;
}

console.table(ResultOfSum(10, 20));

// 3. Arrow Function : Arrow functions allow us to write shorter function syntax:

let ResultOfSumArrow = (a, b) => {
    return a + b;
}
console.table(ResultOfSumArrow(10, 20));

// 4.Immediately Invoked Function Expression (IIFE)

(function () {
    console.log("Hello World");
}
)();

// 5. Anonymous Function : A function without a name is called an anonymous function.

