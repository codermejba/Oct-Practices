//Day 4 — JavaScript: Deeper Core Concepts

/* ================================================================================ */

//Task 1 — Closures

function closureExample() {
  const message = "Hello Mejba";

  function inner() {
    console.log(message);
  }

  inner();
}

closureExample();

/* 

Questions:

1. Why can inner() access message even though message was declared inside outer()?

2. What do you think closure means in JavaScript?

*/

/* ================================================================================ */
//Task 2 — Predict the output

function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();

counter();
counter();
counter();
/* ================================================================================ */

//Task 3: Scope Chain

const x = 10;

function scopeExample() {
  const y = 20;

  function inner() {
    const z = 30;

    console.log(x);
    console.log(y);
    console.log(z);
  }

  inner();
}

scopeExample();

/* 
  1. What are the three outputs?
  2. Why can inner() access all three variables?
*/

/* ================================================================================ */
//Task 4: Hoisting

console.log(n);

var n = 10;

/* 

Will it:

A) Print 10
B) Print undefined
C) Throw an error 

*/
function test() {
  if (true) {
    var x = 100;
  }

  console.log(x);
}

test();
/* ================================================================================ */

const products = [
  { name: "Laptop", price: 75000, inStock: true },
  { name: "Mouse", price: 1500, inStock: true },
  { name: "Keyboard", price: 3000, inStock: false },
  { name: "Monitor", price: 25000, inStock: true },
];

//Task: Get the names of all products that are in stock.

const stockProductsName = products
  .filter((product) => product.inStock)
  .map((product) => product.name);
console.log(stockProductsName);
