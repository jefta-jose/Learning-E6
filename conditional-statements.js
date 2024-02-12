// CONDITIONAL STATEMENTS IN JS
// 1. if statement
// 2. if...else statement
// 3. if...else if...else statement
// 4. switch statement

// 1. if statement
// if (condition) {
//     // code to be executed if condition is true
// }

let x7 = 10;
let y7 = 20;

if (x7 < y7) {
    console.log("x7 is greater than y7"); // this will not be executed
}

// 2. if...else statement
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be executed if condition is false
}

if (x7 > y7) {
    console.log("x7 is greater than y7"); // this will not be executed
} else {
    console.log("x7 is not greater than y7"); // this will be executed
}

// 3. if...else if...else statement\

// if (condition1) {
//     // code to be executed if condition1 is true
// } else if (condition2) {
//     // code to be executed if condition2 is true
// } else {
//     // code to be executed if both condition1 and condition2 are false
// }


let x9 = 10;
let y9 = 20;

if (x9 < y9) {
    console.log("x9 is greater than y9"); // this will not be executed
}
else if (x9 < y9) {
    console.log("x9 is less than y9"); // this will not be executed
}
else {
    console.log("x9 is equal to y9"); // this will be executed
}

// 4. switch statement
// switch (expression) {
//     case value1:
//         // statement to be executed when result of expression matches value1
//         break;
//     case value2:
//         // statement to be executed when result of expression matches value2
//         break;
//     ...
//     case valueN:
//         // statement to be executed when result of expression matches valueN
//         break;
//     default:
//         // statement to be executed when none of the values match the value of the expression
// }

let day = 11112;

switch (day) {
    case 1:
        console.log("It is Sunday.");
        break;
    case 2:
        console.log("It is Monday.");
        break;
    case 3:
        console.log("It is Tuesday.");
        break;
    case 4:
        console.log("It is Wednesday.");
        break;
    case 5:
        console.log("It is Thursday.");
        break;
    case 6:
        console.log("It is Friday.");
        break;
    case 7:
        console.log("It is Saturday.");
        break;

    default:
        console.log("No such day exists!");
        break;
}
