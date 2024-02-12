//TYPES OF EXPORTS/IMPORTS
// NAME EXPORT/IMPORT
// DEFAULT EXPORT/IMPORT

// default import
// import callBack from './callback.js';
// callBack();

// named import
// import { callBack, callBack2 } from './callback.js';

// callBack();
// callBack2();

//CALLBACK FUNCTIONS : A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// import callBack from './callback.js';
// callBack();

// PROMISES : A promise is an object that may produce a single value some time in the future: either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). A promise may be in one of 3 possible states: fulfilled, rejected, or pending. Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
// States of a promise
// 1. pending => underlying ops has not yet completed
// 2.fulfilled => the ops has finished and the promise is fulfilled with a value
// 3.rejected => An error has occurred during the ops and promise is rejected with a reason. */

// import { promise1, promise2 } from './promises.js';

// promise1();
// promise2();

// ASYNC/AWAIT : The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result. But the syntax and structure of your code using async functions is much more like using standard synchronous functions.

// import { fetchOneData, fetchManyData } from './asyncawait.js';
// // fetchOneData(30);
// let todos = await fetchManyData();

// todos && todos.forEach((todo) => {
//     console.log(`------------------`);
//     console.log(todo.id);
//     console.log(todo.userId);
//     console.log(todo.title);
//     console.log(todo.completed);
//     console.log(`------------------`);
// });

//Destructuring : The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
// import { fetchManyData } from './destructuring.js';

// Destructuring();
// let newTodos = await fetchManyData();

// newTodos && newTodos.forEach((todo) => {
//     console.log(`------------------`);
//     console.log(todo.title);
//     console.log(todo.completed);
//     console.log(`------------------`);
// });

//REST OPERATOR : The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
// rest operator : ... (three dots)
// import { rest, rest2 } from './rest.js';
// rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// console.log(rest2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//SPREAD OPERATOR : The spread operator is a useful and quick syntax for adding items to arrays, combining arrays or objects, and spreading an array out into a function’s arguments.
// spread operator : ... (three dots)

// import { spreadSum, spreadArray, spreadObject } from './spread.js';
// const params = [1, 2, 3];
// console.log(spreadSum(...params));

// spreadArray();

// spreadObject();

//JSON : JSON is a syntax for storing and exchanging data. JSON is text, written with JavaScript object notation.
import { loopJson, deleteData, addData } from './json.js';

// loopJson();

// deleteData(1);

addData("sasafsaf", { name: "John", age: 30, married: true });
