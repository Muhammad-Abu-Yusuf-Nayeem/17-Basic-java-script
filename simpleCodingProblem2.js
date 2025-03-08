//🟢 🟢 🟢 🟢 🟢 🟢 Beginner Level
//Basic approach using loops and conditional statements.

// Task 1: Find max number from three given numbers
function findMaxOfThree(a, b, c) {
  if (a >= b && a >= c) return a;
  if (b >= a && b >= c) return b;
  return c;
}

// Task 2: Find max number from an array
function findMaxInArray(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

// Task 3: Calculate total quantity of wood needed
function totalWood(chairs, tables, beds) {
  let total = chairs * 3 + tables * 5 + beds * 10;
  return total;
}

//🟡 🟡 🟡 🟡 Intermediate Level
//Using built-in functions and concise logic.

// Task 1: Find max number from three given numbers using Math.max
const findMaxOfThree = (a, b, c) => Math.max(a, b, c);

// Task 2: Find max number from an array using spread operator
const findMaxInArray = (arr) => Math.max(...arr);

// Task 3: Calculate total wood quantity using an object
const totalWood = (chairs, tables, beds) => {
  const woodUnits = { chair: 3, table: 5, bed: 10 };
  return (
    chairs * woodUnits.chair + tables * woodUnits.table + beds * woodUnits.bed
  );
};

//🔴 🔴 🔴 🔴 🔴 Pro Level
//Optimized and functional approach.

// Task 1: One-liner using Math.max
const findMaxOfThree = (...nums) => Math.max(...nums);

// Task 2: Find max in an array using reduce
const findMaxInArray = (arr) =>
  arr.reduce((max, num) => (num > max ? num : max), arr[0]);

// Task 3: Calculate total wood quantity using reduce
const totalWood = (chairs, tables, beds) =>
  [chairs * 3, tables * 5, beds * 10].reduce((sum, wood) => sum + wood, 0);

//🟢 🟢 🟢 🟢 🟢 Beginner Level
//Using a for loop to find the cheapest mobile model.

// Step 1: Create an array of mobile objects
let mobiles = [
  { model: "Samsung Galaxy A12", camera: "48MP", price: 18000, color: "Black" },
  { model: "iPhone SE", camera: "12MP", price: 45000, color: "Red" },
  { model: "Xiaomi Redmi 9", camera: "13MP", price: 15000, color: "Blue" },
  { model: "Realme C15", camera: "13MP", price: 13000, color: "Silver" },
  { model: "OnePlus Nord", camera: "64MP", price: 30000, color: "Gray" },
];

// Step 2: Function to find the cheapest mobile
function findCheapestMobile(mobiles) {
  let cheapest = mobiles[0]; // Assume first mobile is cheapest
  for (let mobile of mobiles) {
    if (mobile.price < cheapest.price) {
      cheapest = mobile; // Update cheapest if current mobile has lower price
    }
  }
  return cheapest;
}

// Step 3: Call function and display result
console.log(findCheapestMobile(mobiles));

// 🟢 🟢 🟢 🟢 🟢 Beginner Level
// Using a for loop to calculate the total price of shopping list

// Step 1: Create an array of shopping items
let shoppingList = [
  { item: "Apple", price: 30, quantity: 2 },
  { item: "Milk", price: 50, quantity: 1 },
  { item: "Bread", price: 40, quantity: 1 },
  { item: "Eggs", price: 10, quantity: 12 },
];

// Step 2: Function to calculate total price
function calculateTotal(shoppingList) {
  let total = 0; // Initialize total price to 0
  for (let product of shoppingList) {
    total += product.price * product.quantity; // Multiply price by quantity and add to total
  }
  return total;
}

// Step 3: Call function and display result
console.log("Total Price (Beginner):", calculateTotal(shoppingList));

// 🟡 🟡 🟡 🟡 Intermediate Level
// Using Array.reduce() to calculate total price in a more functional way

const calculateTotalIntermediate = (shoppingList) =>
  shoppingList.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

// Call function and display result
console.log(
  "Total Price (Intermediate):",
  calculateTotalIntermediate(shoppingList)
);

// 🔴 🔴 🔴 🔴 Pro Level
// Using Object.entries(), map(), and reduce() for a dynamic approach

const calculateTotalPro = (shoppingList) =>
  Object.values(shoppingList)
    .map(({ price, quantity }) => price * quantity) // Multiply price by quantity
    .reduce((sum, val) => sum + val, 0); // Sum up all values

// Call function and display result
console.log("Total Price (Pro):", calculateTotalPro(shoppingList));

//the multi-layer discount system structured into Beginner, Intermediate, and Pro sections with proper comments.

// 🟢 🟢 🟢 🟢 🟢 Beginner Level
// Using if-else conditions to apply multi-layer discount

// Step 1: Create a shopping list
let shoppingList = [
  { item: "Apple", price: 30, quantity: 2 },
  { item: "Milk", price: 50, quantity: 1 },
  { item: "Bread", price: 40, quantity: 1 },
  { item: "Eggs", price: 10, quantity: 12 },
  { item: "Chicken", price: 120, quantity: 1 },
];

// Step 2: Function to calculate total price
function calculateTotal(shoppingList) {
  let total = 0;
  for (let product of shoppingList) {
    total += product.price * product.quantity;
  }
  return total;
}

// Step 3: Function to apply multi-layer discount
function applyDiscount(total) {
  let discount = 0;

  if (total > 150 && total <= 250) {
    discount += (total - 150) * 0.05; // 5% discount for amount over 150 up to 250
  } else if (total > 250 && total <= 400) {
    discount += (250 - 150) * 0.05; // 5% for first (250 - 150)
    discount += (total - 250) * 0.1; // 10% for (total - 250)
  }

  let finalPrice = total - discount;
  return { total, discount, finalPrice };
}

// Step 4: Calculate and print results
let totalPrice = calculateTotal(shoppingList);
let { total, discount, finalPrice } = applyDiscount(totalPrice);

console.log("🟢 Beginner Level:");
console.log("Total Price:", total);
console.log("Discount Applied:", discount);
console.log("Final Price after Discount:", finalPrice);

// 🟡 🟡 🟡 🟡 Intermediate Level
// Using reduce() for cleaner calculations and modular discount application

const calculateTotalIntermediate = (shoppingList) =>
  shoppingList.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

const applyDiscountIntermediate = (total) => {
  let discount = 0;
  if (total > 150) discount += Math.min(total, 250) - 150 * 0.05; // 5% for 150 to 250
  if (total > 250) discount += Math.min(total, 400) - 250 * 0.1; // 10% for 250 to 400

  return { total, discount, finalPrice: total - discount };
};

let totalPriceIntermediate = calculateTotalIntermediate(shoppingList);
let resultIntermediate = applyDiscountIntermediate(totalPriceIntermediate);

console.log("\n🟡 Intermediate Level:");
console.log("Total Price:", resultIntermediate.total);
console.log("Discount Applied:", resultIntermediate.discount);
console.log("Final Price after Discount:", resultIntermediate.finalPrice);

// 🔴 🔴 🔴 🔴 Pro Level
// Using a compact higher-order function approach with ternary operators

const applyDiscountPro = (total) => {
  const discount =
    (total > 150 ? Math.min(100, total - 150) * 0.05 : 0) +
    (total > 250 ? Math.min(150, total - 250) * 0.1 : 0);
  return { total, discount, finalPrice: total - discount };
};

let totalPricePro = calculateTotalIntermediate(shoppingList);
let resultPro = applyDiscountPro(totalPricePro);

console.log("\n🔴 Pro Level:");
console.log(resultPro);
