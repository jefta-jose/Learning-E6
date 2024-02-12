//DATES IN JS
// 1. Date Object
// 2. Date Methods
// 3. Date Formats

// 1. Date Object
let date = new Date();
console.log(date);

// 2. Date Methods
console.log(date.getFullYear()); //2024
console.log(date.getMonth()); //0-11 0=jan, 1=feb, 2=march, 3=april, 4=may, 5=june, 6=july, 7=aug, 8=sep, 9=oct, 10=nov, 11=dec
console.log(date.getDate()); //1-31
console.log(date.getDay()); //0-6 0=sunday, 1=monday, 2=tuesday, 3=wednesday, 4=thursday, 5=friday, 6=saturday
console.log(date.getHours());  // 0-23
console.log(date.getMinutes()); // 0-59
console.log(date.getSeconds()); // 0-59
console.log(date.getMilliseconds());
console.log(date.getTime()); //milliseconds since 1 jan 1970

// 3. Date Formats
console.log(date.toDateString()); //Sun Jan 05 2024
console.log(date.toTimeString()); // 11:45:23 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString()); // 1/5/2024
console.log(date.toLocaleTimeString()); // 11:45:23 AM