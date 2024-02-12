// example of spread operator
export const spreadSum = (x, y, z) => {
    return x + z + y;
};

//example of spread operator: combining arrays
export const spreadArray = () => {
    const numbers = [1, 2, 3];
    const combinedNumbers = [...numbers, 4, 5, 6];
    console.log(combinedNumbers.reverse());
};


//example 3: of using spread operator with objects
export const spreadObject = () => {
    const person = {
        name: 'Max',
        location: 'USA',
        married: false
    };
    const newPerson = {
        ...person,
        age: 28
    };
    console.log(newPerson);
}