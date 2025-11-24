const isEven = n => n % 2 === 0;

let marks = 40;
let result = marks >= 35 ? "Pass" : "Fail";

const greet = name => `Hello, ${name ? name : "Guest"}`;

console.log(isEven(4));
console.log(isEven(7));
console.log(result);
console.log(greet("john"));
console.log(greet());