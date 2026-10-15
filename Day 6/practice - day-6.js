// Task 1 — Transform API data
const products = [
  { id: 1, name: "Laptop", price: 75000, inStock: true },
  { id: 2, name: "Mouse", price: 1500, inStock: true },
  { id: 3, name: "Keyboard", price: 3000, inStock: false },
  { id: 4, name: "Headphones", price: 2500, inStock: true },
  { id: 5, name: "Monitor", price: 25000, inStock: false },
];

const availableProducts = products
  .filter((product) => product.inStock && product.price < 10000)
  .map((product) => product.name);

console.log(availableProducts);

/* ======================================================================= */

//Day 6 — Task 2: Calculate the total cart price

const cart = [
  { name: "Mouse", price: 1500, quantity: 2 },
  { name: "Keyboard", price: 3000, quantity: 1 },
  { name: "Headphones", price: 2500, quantity: 2 },
];

const totalCartPrice = cart.reduce((total, product) => {
  const { price, quantity } = product;
  return total + price * quantity;
}, 0);

console.log(totalCartPrice);
/* ======================================================================= */

async function getUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  return users;
}

const result = getUsers();
console.log(result);
/* ======================================================================= */
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

console.log(4);
/* ======================================================================= */
async function getUserNames() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    const users =await response.json();

    const names = users.map((user) => user.name);

    console.log(names);
  } catch (error) {
    console.log("Failed to fetch users");
  }
}

getUserNames();
