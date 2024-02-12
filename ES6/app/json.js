import data from './data/data.json' assert { type: "json" };

//LOOPING THROUGH JSON DATA
export const loopJson = () => {
    data && data.forEach((item) => {
        console.table(item);
    });
};

export const deleteData = (id) => {
    console.log(data);
    data && data.forEach((item, index) => {
        if (item.id == id) {
            data.splice(index, 1) //
        }
    });
    console.log(data);
};

// ADD DATA TO JSON FILE
export const addData = (position, dataToBeAdded) => {
    const { name, age, married } = dataToBeAdded;
    if (position === 'beginning') {
        let id = 1;
        data.unshift({ id, name, age, married });
        data && data.forEach((item, index) => {
            if (index > 0) {
                item.id = index + 1;
            };
        })
        console.log(data)

    } else if (position === 'end') {
        let id = data.length + 1;
        console.log(data)
        data.push({
            id: id,
            name: name,
            age: age,
            married: married
        });
        console.log(data)
    } else {
        console.log("position is invalid please enter beginning or end")
    }

}