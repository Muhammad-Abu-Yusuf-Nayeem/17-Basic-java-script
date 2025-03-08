// 🟢 🟢 🟢 🟢 🟢 Beginner Level
// Using if-else conditions to apply multi-layer discount

// Step 1: Create a shopping list
let shoppingList = [
  { item: "Apple", price: 30, quantity: 2 },
  { item: "Milk", price: 50, quantity: 1 },
  { item: "Bread", price: 40, quantity: 1 },
  { item: "Eggs", price: 10, quantity: 12 },
  { item: "Chicken", price: 120, quantity: 1 }
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
      discount += (total - 250) * 0.10; // 10% for (total - 250)
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

const calculateTotalIntermediate = shoppingList => 
  shoppingList.reduce((sum, { price, quantity }) => sum + (price * quantity), 0);

const applyDiscountIntermediate = total => {
  let discount = 0;
  if (total > 150) discount += Math.min(total, 250) - 150 * 0.05; // 5% for 150 to 250
  if (total > 250) discount += Math.min(total, 400) - 250 * 0.10; // 10% for 250 to 400

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

const applyDiscountPro = total => {
  const discount = (total > 150 ? Math.min(100, total - 150) * 0.05 : 0) +
                   (total > 250 ? Math.min(150, total - 250) * 0.10 : 0);
  return { total, discount, finalPrice: total - discount };
};

let totalPricePro = calculateTotalIntermediate(shoppingList);
let resultPro = applyDiscountPro(totalPricePro);

console.log("\n🔴 Pro Level:");
console.log(resultPro);
