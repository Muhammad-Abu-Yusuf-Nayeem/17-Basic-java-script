// ✅✅    ✅✅    ✅✅📌 Step 1: Introduction to Functions
// A function is a reusable block of code that performs a specific task.

function sayHello() {
  console.log("Hello, world!");
}

sayHello(); // Calling the function -> Output: Hello, world!

// ✅✅    ✅✅    ✅✅📌 Step 2: Function Declaration and Calling
// The 'function' keyword is used to declare a function.

function greet() {
  console.log("Hello from the greet function!");
}

// Calling the function
greet(); // Output: Hello from the greet function!

// ✅✅    ✅✅    ✅✅📌 Step 3: Function Parameters and Arguments
// Functions can accept parameters (inputs) when called.

function greetPerson(name) {
  // 'name' is a parameter
  console.log("Hello, " + name + "!");
}

greetPerson("Ali"); // Output: Hello, Ali!
greetPerson("Aisha"); // Output: Hello, Aisha!

// ✅✅    ✅✅    ✅✅📌 Default Parameters
// If no argument is provided, the default value will be used.

function greetUser(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greetUser(); // Output: Welcome, Guest!
greetUser("Fatima"); // Output: Welcome, Fatima!

// ✅✅    ✅✅    ✅✅📌 Multiple Parameters
function addNumbers(a, b) {
  console.log("Sum:", a + b);
}

addNumbers(5, 3); // Output: Sum: 8

// ✅✅    ✅✅    ✅✅📌 Step 4: Return Statement
// The return statement sends a value back to the caller.

function multiply(x, y) {
  return x * y; // Returns the result instead of printing it
}

let result = multiply(4, 5);
console.log("Multiplication Result:", result); // Output: Multiplication Result: 20

// ✅✅    ✅✅    ✅✅📌 Step 5: Function Expressions
// A function can be stored in a variable.

const square = function (num) {
  return num * num;
};

console.log("Square of 6:", square(6)); // Output: Square of 6: 36

// ✅✅    ✅✅    ✅✅📌 Anonymous Functions (No function name)
const subtract = function (a, b) {
  return a - b;
};

console.log("Subtraction:", subtract(10, 3)); // Output: Subtraction: 7

// ✅✅    ✅✅    ✅✅📌 Step 6: Arrow Functions (ES6)
// A shorter way to write functions.

const divide = (a, b) => a / b;
console.log("Division:", divide(10, 2)); // Output: Division: 5

const greetArrow = (name) => "Hello, " + name;
console.log(greetArrow("Ali")); // Output: Hello, Ali

// ✅✅    ✅✅    ✅✅📌 Step 7: Callback Functions
// A function passed as an argument to another function.

function processUserInput(name, callback) {
  console.log("Processing for", name);
  callback();
}

function done() {
  console.log("Done processing!");
}

processUserInput("Ahmed", done);
// Output:
// Processing for Ahmed
// Done processing!

// ✅✅    ✅✅    ✅✅📌 Step 8: Higher-Order Functions
// Functions that take other functions as arguments or return functions.

function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log("Addition using Higher-Order Function:", calculate(5, 7, add)); // Output: 12

// ✅✅    ✅✅    ✅✅📌 Using map(), filter(), reduce()
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum); // Output: 15

// ✅✅    ✅✅    ✅✅📌 Step 9: Immediately Invoked Function Expression (IIFE)
// Runs immediately after declaration.

(function () {
  console.log("IIFE executed!");
})(); // Output: IIFE executed!

// ✅✅    ✅✅    ✅✅📌 Step 10: Function Scope & Closures

// Global and Local Scope
let globalVar = "I am global"; // Accessible everywhere

function localScopeExample() {
  let localVar = "I am local"; // Accessible only inside this function
  console.log(globalVar); // ✅ Accessible
  console.log(localVar); // ✅ Accessible
}

localScopeExample();
// console.log(localVar); // ❌ ERROR! localVar is not defined outside.

// ✅✅    ✅✅    ✅✅📌 Closures: A function inside another function that remembers variables

function counter() {
  let count = 0;

  return function () {
    count++; // It remembers count even after counter() execution
    console.log("Count:", count);
  };
}

const increment = counter();
increment(); // Output: Count: 1
increment(); // Output: Count: 2
increment(); // Output: Count: 3

/*
✅ Function Declaration → function name() { }
✅ Calling a Function → functionName();
✅ Parameters & Arguments → function greet(name) { }
✅ Default Parameters → function greet(name = "Guest") { }
✅ Return Statement → return result;
✅ Function Expressions → const add = function(a, b) { return a + b; };
✅ Arrow Functions → const add = (a, b) => a + b;
✅ Callback Functions → function process(callback) { callback(); }
✅ Higher-Order Functions → map(), filter(), reduce()
✅ IIFE → (function() { console.log("Run immediately!"); })();
✅ Scope & Closures → Functions can remember variables from their parent scope.
*/
//✅✅✅      ✅✅✅

// ✅✅✅ Task-1: Multiply Four Numbers ✅✅✅
// Function that takes four parameters, multiplies them, and returns the result
function multiplyFourNumbers(a, b, c, d) {
  return a * b * c * d;
}

// Test cases
console.log(multiplyFourNumbers(2, 3, 4, 5)); // Output: 120
console.log(multiplyFourNumbers(1, 2, 3, 4)); // Output: 24

// ✅✅✅ Task-2: Odd or Even Operation ✅✅✅
// If odd → multiply by 2, If even → divide by 2
function oddOrEvenOperation(num) {
  return num % 2 === 0 ? num / 2 : num * 2;
}

// Test cases
console.log(oddOrEvenOperation(5)); // Output: 10 (5 is odd, so 5*2)
console.log(oddOrEvenOperation(8)); // Output: 4 (8 is even, so 8/2)

// ✅✅✅ Task-3: Calculate Average ✅✅✅
// Function that calculates the average of an array of integers
function make_avg(arr) {
  if (arr.length === 0) return 0; // Avoid division by zero
  let sum = arr.reduce((acc, num) => acc + num, 0);
  return sum / arr.length;
}

// Test cases
console.log(make_avg([10, 20, 30, 40, 50])); // Output: 30
console.log(make_avg([5, 10, 15])); // Output: 10

// ✅✅✅ Task-4: Count Zeroes in a Binary String ✅✅✅
// Function that counts the number of '0's in a binary string
function count_zero(binaryString) {
  return binaryString.split("0").length - 1; // Count occurrences of '0'
}

// Test cases
console.log(count_zero("1010100")); // Output: 3
console.log(count_zero("1111")); // Output: 0
console.log(count_zero("00000")); // Output: 5

// ✅✅✅ Task-5: Check Odd or Even ✅✅✅
// Function that returns 'Even' if even, 'Odd' if odd
function odd_even(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// Test cases
console.log(odd_even(7)); // Output: Odd
console.log(odd_even(10)); // Output: Even

/*
1️⃣ multiplyFourNumbers(a, b, c, d) → Multiplies 4 numbers and returns the result.
2️⃣ oddOrEvenOperation(num) → Multiplies by 2 if odd, divides by 2 if even.
3️⃣ make_avg(arr) → Takes an array of integers and returns the average.
4️⃣ count_zero(binaryString) → Counts occurrences of '0' in a binary string.
5️⃣ odd_even(num) → Returns "Even" if even, "Odd" if odd.
*/
