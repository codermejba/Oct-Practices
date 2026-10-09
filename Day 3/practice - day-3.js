//Task 1 — Function Expression

/* function calculateTotal(price, quantity) {
  return price * quantity;
}
 */
const calculateTotal = function (price, quantity) {
  return price * quantity;
};

console.log(calculateTotal(1500, 2));

/* ================================================================= */

//Task 2: Callback Function

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});

console.log(doubledNumbers);

/* ================================================================= */

//Task 3: Write Your Own Higher-Order Function

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 5, add));

console.log(calculate(10, 5, sub));

/* ================================================================= */

//Task 4: Scope

const name = "Mejba"; // variable

function greet() {
  const message = "Hello"; // local variable

  console.log(name); // ✅ accessible
  console.log(message); // ✅ accessible
}

greet();

console.log(name); // ✅ accessible
//console.log(message);  // ❌ ReferenceError

/* ================================================================= */
//Task 5 — Block Scope

if (true) {
  let age = 27;
  const name = "Mejba";
  var role = "Developer";
}

//console.log(age);   // ❌ Error
//console.log(name);  // ❌ Error
console.log(role); // ✅ "Developer"

function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  //console.log(b);
}

test();
/* ================================================================= */

//Task 6: Arrow Functions

/* const calculateDiscount = function (price, discount) {
  return price - (price * discount) / 100;
};

console.log(calculateDiscount(1000, 20)); */

const calculateDiscount = (price, discount) => {
  return price - (price * discount) / 100;
};

console.log(calculateDiscount(1000, 20));

/* ================================================================= */

//Task 8: Practical Callback

const users = [
  { name: "Mejba", age: 27 },
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 30 },
  { name: "Hasan", age: 19 },
];

const olderUsers = users.filter((user) => user.age >= 25);

console.log(olderUsers);

//task — .map() + callback need the users name only in array

const nameOfUsers = users.map((user) => user.name);

console.log(nameOfUsers);

/* ================================================================= */

//Final practical challenge for Day 3

const products = [
  { name: "Laptop", price: 75000, inStock: true },
  { name: "Mouse", price: 1500, inStock: false },
  { name: "Keyboard", price: 3000, inStock: true },
  { name: "Monitor", price: 25000, inStock: true },
];

//Create a new array containing only the names of products that are in stock.

  const productsNameInStock = products
    .filter((product) => product.inStock)
    .map((product) => product.name);

  console.log(productsNameInStock);
