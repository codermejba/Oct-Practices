// Task 1 — Destructuring Object

const product = {
  name: "Laptop",
  price: 75000,
  brand: "Dell",
  inStock: true,
};

/* job:

Extract name
Extract price
Extract brand
Extract inStock
Print each value */

//Extracting
const { name, price, brand, inStock } = product;

//Print each value
console.log(name, price, brand, inStock);

/* ====================================================================================== */

// Task 2 — Destructuring Array

const colors = ["red", "green", "blue", "yellow"];

//Extracting
const [firstColor, secondColor, thirdColor] = colors;

//Print each value
console.log(firstColor, secondColor, thirdColor);

/* ====================================================================================== */

// Task 3 — Spread Operator

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];

const fullstack = [...frontend, ...backend];

console.log(fullstack);

/* ====================================================================================== */

// Task 4 — reduce()

const prices = [100, 250, 50, 400];

const totalPrice = prices.reduce((total, price) => {
  return total + price;
}, 0);

console.log(totalPrice);

/* ====================================================================================== */

// Task 5 — Real Developer Problem

const orders = [
  { product: "Laptop", price: 70000, quantity: 1 },
  { product: "Mouse", price: 1500, quantity: 2 },
  { product: "Keyboard", price: 3000, quantity: 1 },
];

const totalAmount = orders.reduce((total, currentValue) => {
  const { price, quantity } = currentValue;

  const result = total + price * quantity;

  return result;
}, 0);
console.log(totalAmount);
