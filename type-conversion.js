// TYPE CONVERSION IN JS
// 1. Number()
// 2. String()
// 3. Boolean()

// 1. Number() : converts to a Number, or returns NaN if cannot be converted
let y = "3.14";
let x = Number(y);
console.log(typeof y);
console.log(typeof x);
console.log(Number("10.20"));
console.log(Number("10,20"));
console.log(Number("10 20"));
console.log(Number("10years"));
console.log(Number(true));
console.log(Number(false));
console.log(Number("true"));
console.log(Number("false"));
console.log(Number("Sai"));
console.log(Number("10 20 30 40 50"));
console.log(Number("10,20,30,40,50"));
console.log(Number("10years20days"));
console.log(Number("10.20years20days"));

// 2. String() : converts to a String
console.log(String(10));
console.log(String(10.20));
console.log(String(true));
console.log(String(false));
console.log(String("Sai"));
console.log(String("10 20 30 40 50"));
console.log(String("10,20,30,40,50"));
console.log(String("10years20days"));
console.log(String("10.20years20days"));
console.log(String("10.20years20days"));

// 3. Boolean(): converts to a Boolean, returns false if it cannot be converted
console.log(Boolean(10));
console.log(Boolean(10.20));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean("Sai"));
console.log(Boolean("10 20 30 40 50"));
console.log(Boolean("10,20,30,40,50"));
console.log(Boolean("10years20days"));
console.log(Boolean("10.20years20days"));
console.log(Boolean("10.20years20days"));
