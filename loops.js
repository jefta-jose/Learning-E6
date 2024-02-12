// LOOPS IN JS
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. foreach loop
// 5. for...in loop
// 6. for...of loop
// 7. break statement
// 8. continue statement

// 1. for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// 0 1 2 3 4 5 6 7 8 9

for (let i = 0; i < 10; i++) {
    // console.log(i)
}
// console.log("exit");

//9 8 7 6 5 4 3 2 1 0

for (let y = 9; y >= 0; y--) {
    // console.log(y)
}

// example 3
// *
// **
// ***
// ****
// *****
// ******

for (let z = 1; z <= 6; z++) {
    // console.log("*".repeat(z))            // L1 T,
}

//ASSIGNMENT

// example 4
// ******
// *****
// ****
// ***
// **
// *

// example 5
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *

// example 6
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// example 7
//*******
//      *
//      *
//      *
//      *
//      *
//      *
//      *

// example 8
//*******
//*
//*
//*
//*
//*
//*

// 2. while loop : the condition will be checked first & then the code will be executed
// while (condition) {
//     // code to be executed
//  increment/decrement
// }

// 0 1 2 3 4 5 6 7 8 9
let i = 0;
console.log("start")
while (i < 10) {
    console.log(i)
    console.log("continue")
    i++;
}
console.log("end")

//ASSIGNMENT //generate six random numbers between 1 and 49

// 3. do...while loop : the condition will be  exec at least one time
// do {
//     // code to be executed
// }
// while (condition);

// 0 1 2 3 4 5 6 7 8 9
let j = 2000;
console.log("start")
do {
    console.log(j)
    console.log("continue")
    j++;
} while (j < 10);

//4. break statement : stop the loop

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);  // 0 1 2 3 4
}
console.log("exit")

//5. continue statement : skip the current iteration
for (let i = 0; i < 10; i++) {
    if (i == 8) {
        console.log(`${i} is skipped`)
        continue;
    }
    console.log(i);  // 0 1 2 3 4 6 7 8 9
}
console.log("exit")