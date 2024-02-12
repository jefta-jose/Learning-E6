// OBJECTS IN JS
// 1. Object Literal
// 2. Object Constructor
// 3. Array of Objects
// what is an obj : An object is a collection of properties, and a property is an association between a name (or key) and a value.

//  Object
// property : key : value
// method : inbuilt function
// function : user defined function


// 1. Object Literal

let person = {
    name: "John",
    age: 30,
    hobbies: ["Reading", "Coding", "Travelling"],
    address: {
        city: "Bangalore",
        state: "Karnataka"
    },
    greet: function () {
        console.log("Hello World");
    }
}

// console.log(person.name);
// console.log(person.hobbies[1]);

// 2. Object Constructor
let person2 = new Object(); // empty object
person2.name = "John";  // dot notation
person2.age = 30;
person2.hobbies = ["Reading", "Coding", "Travelling"];
person2.address = {
    city: "Bangalore",
    state: "Karnataka"
};
person2.greet = function () {
    return "Hello World";
}
// console.log()

// console.log(person2.address.city);
// console.log(person2.hobbies[2]);
// console.log(person2.greet());

// 3. Array of Objects

let people = [
    {
        name: "John",
        age: 30,
        hobbies: ["Reading", "Coding", "Travelling"],
        address: {
            city: "Bangalore",
            state: "Karnataka"
        },
        greet: function () {
            return "Hello World";
        }
    },
    {
        name: "Jane",
        age: 25,
        hobbies: ["Reading", "Coding", "Travelling"],
        address: {
            city: "Bangalore",
            state: "Karnataka"
        },
        greet: function () {
            return "Hello World";
        }
    },
    {
        name: "Jack",
        age: 35,
        hobbies: ["Reading", "Coding", "Travelling"],
        address: {
            city: "Bangalore",
            state: "Karnataka"
        },
        greet: function () {
            return "Hello World";
        }
    }
];

console.log(people.length);

// LOOP THROUGH AN ARRAY OF OBJECTS
//  1. foreach : The forEach() method calls a function once for each element in an array, in order.

people.forEach(function (person) {
    console.log(person.name);
    console.log(person.greet());
    console.log(person.hobbies[1]);
    console.log("---------")
});

// 2. for... of  loop
for (let person of people) {
    console.log(person.name);
    console.log(person.greet());  //
    console.log(person.hobbies[1]);
    console.log("---------")
}

// 3. for... in loop : The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.
for (let person in people) {
    console.log(person.name);
    person.greet(); // undefined
    console.log(person.hobbies[1]);
    console.log("---------")
}

// 4.map : The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

people.map((person) => {
    console.log(person.name);
    console.log(person.greet());
    console.log(person.hobbies[1]);
    console.log("-----map----")
})

people.map(function (person) {
    console.log(person.name);
    console.log(person.greet());
    console.log(person.hobbies[1]);
    console.log("-----map----")
});


// 5. map : The map() method creates a new array with the results of calling a function for every array element.
Object.keys(persons2).map(function (element) {
    console.log(persons2[element].firstName);
});

// 6. Object.values() : returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
Object.values(persons2).map(function (element) {
    console.log(element.firstName);
});

// 7. Object.entries() : returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
Object.entries(persons2).map(function (element) {
    console.log(element[1].firstName);
});

// 8. Object.getOwnPropertyNames() : returns an array of all properties (enumerable or not) found directly upon a given object.
Object.getOwnPropertyNames(persons2).map(function (element) {
    console.log(persons2[element].firstName);
});
