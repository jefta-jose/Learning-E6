//named export
const callBack = () => {
    function doHomeWork(subject, finishedHomeWork) {
        console.log(`Starting my ${subject} homework.`);
        setTimeout(() => finishedHomeWork(), 4000);
    }
    const finishedHomeWork = () => {
        console.log('I finished my homework');
    }
    doHomeWork('math', finishedHomeWork); // callback function
}

export default callBack; // default export