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

//🟡 Intermediate Level
const findCheapestMobile = (mobiles) =>
  mobiles.reduce(
    (cheapest, mobile) => (mobile.price < cheapest.price ? mobile : cheapest),
    mobiles[0]
  );

console.log(findCheapestMobile(mobiles));

//🔴 Pro Level
const findCheapestMobile = (mobiles) =>
  [...mobiles].sort((a, b) => a.price - b.price)[0];

console.log(findCheapestMobile(mobiles));
