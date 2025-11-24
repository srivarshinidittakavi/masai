// 1. Template Literals + Expressions
console.log(`5 + 7 = ${5 + 7}`);
console.log(`Line1
Line2
Line3`);
const firstName = "John", lastName = "Doe";
console.log(`${firstName} ${lastName}`);

// 2. Arrow Functions & this
const square = n => n * n;
console.log(square(5));

const obj = {
  value: 50,
  test: () => console.log(this.value) // undefined because arrow functions don't bind their own 'this'
};
obj.test();

const obj2 = {
  value: 50,
  test: function() { console.log(this.value); }
};
obj2.test();

// 3. Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(10, 20, 5));

// 4. Destructuring & Optional Chaining
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand);

const info = {};
console.log(info?.user?.details); // undefined

// 5. Scoping (let/var/const)
for (var i = 0; i < 3; i++) {}
console.log(i); // 3

for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError

// const is used for values that should not be reassigned to ensure immutability of the binding.

// 6. Ternary Operator – Practice
let kmph = 70;
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed);

let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

let num = -5;
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative");

// 7. Spread, Rest & Arrays
const nums = [1, 2, 3];
const nums2 = [...nums, 4, 5];
console.log(nums2);

const arrA = ["x", "y"];
const arrB = ["z"];
const combined = [...arrA, ...arrB];
console.log(combined);

const printNames = (...names) => names;
console.log(printNames("A", "B", "C"));

// 8. Object Destructuring & Shorthand
const user = { id: 101, status: "active" };
const { id, status } = user;
console.log(id, status);

const id2 = 101;
const role = "admin";
const user2 = { id2, role };
console.log(user2);

const name = "Sam";
const person = {
  name,
  greet() { return `Hello ${this.name}`; }
};
console.log(person.greet());

// 9. Template Literals (More Practice)
console.log(`Today's date is ${new Date().toDateString()}`);
const NAME = "Alex", SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);

// 10. Arrow Function Shorthands
const add = (x, y) => x + y;
console.log(add(2, 3));

const isAdult = age => age >= 18;
console.log(isAdult(17));

const double = n => n * 2;
console.log(double(4));

// 11. Spread Operator (Arrays & Objects)
const arrClone = [...[1, 2, 3]];
console.log(arrClone);

const arrWith100 = [100, ...[1, 2, 3]];
console.log(arrWith100);

const obj1 = { a: 1, b: 2 };
const obj_2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj_2 };
console.log(mergedObj);

// 12. Optional Chaining (More Practice)
const user3 = {
  name: "Alex",
  address: { city: "Bangalore" }
};
console.log(user3?.address?.city);

console.log(user3?.job?.title); // undefined

const company = {};
console.log(company?.department?.manager); // undefined, no runtime error