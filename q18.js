// a) Scoping with let and var
if (true) {
  let x = 10;
  var y = 20;
}

console.log(y); // 20
console.log(x); // ReferenceError: x is not defined

// Explanation:
// 'var' is function-scoped, so y is accessible outside the block.
// 'let' is block-scoped, so x exists only inside the if block and throws an error outside.

// b) Optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); // "test@mail.com"
console.log(profile?.user?.details?.phone); // undefined (no error)

// c) Example where optional chaining prevents runtime error
const company = {
  name: "TechCorp",
  // no 'address' property
};

console.log(company?.address?.city); // undefined (instead of runtime error)