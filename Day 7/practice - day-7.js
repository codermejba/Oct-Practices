//Day 7

//Task 1 — JavaScript warm-up

const products1 = [
  { id: 1, name: "Laptop", price: 75000, inStock: true },
  { id: 2, name: "Mouse", price: 1500, inStock: true },
  { id: 3, name: "Keyboard", price: 3000, inStock: false },
  { id: 4, name: "Headphones", price: 2500, inStock: true },
  { id: 5, name: "Monitor", price: 25000, inStock: false },
];

//Use filter() and map() to return the names of products that are in stock and cost less than ৳5,000.

const filteredProduct = products1
  .filter((product) => product.inStock && product.price < 5000)
  .map((product) => product.name);

console.log(filteredProduct);

/* ================================================================================================== */
// Task 2: Reduce
const cart = [
  { name: "Mouse", price: 1500, quantity: 2 },
  { name: "Keyboard", price: 3000, quantity: 1 },
  { name: "Headphones", price: 2500, quantity: 2 },
];

//Use reduce() to calculate the total cost of all items.

const totalCost = cart.reduce(
  (total, product) => total + product.price * product.quantity,
  0
);

console.log(totalCost);

/* ================================================================================================== */

//Final challenge — Mini Shopping Cart

const products = [
  { id: 1, name: "Mouse", price: 1500, quantity: 2, inStock: true },
  { id: 2, name: "Keyboard", price: 3000, quantity: 1, inStock: false },
  { id: 3, name: "Headphones", price: 2500, quantity: 2, inStock: true },
  { id: 4, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
/* task
Write JavaScript that:
1. Keeps only products that are in stock.
2. Uses map() to create an array of product names.
3. Uses reduce() to calculate the total cost of the in-stock products, including their quantities. */

const stockProducts=products.filter((product)=> product.inStock)
const productsName=stockProducts.map((product)=>product.name)
const totalCostofStockProducts=stockProducts.reduce((total,product)=>total+product.price * product.quantity,0)

console.log(stockProducts,productsName,totalCostofStockProducts);
