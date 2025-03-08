// 📌 Step 1: Introduction to Functions
// A function is a reusable block of code that performs a specific task.

function sayHello() {
  console.log("Hello, world!");
}

sayHello(); // Calling the function -> Output: Hello, world!

// 📌 Step 2: Function Declaration and Calling
// The 'function' keyword is used to declare a function.

function greet() {
  console.log("Hello from the greet function!");
}

// Calling the function
greet(); // Output: Hello from the greet function!

// 📌 Step 3: Function Parameters and Arguments
// Functions can accept parameters (inputs) when called.

function greetPerson(name) {
  // 'name' is a parameter
  console.log("Hello, " + name + "!");
}

greetPerson("Ali"); // Output: Hello, Ali!
greetPerson("Aisha"); // Output: Hello, Aisha!

// 📌 Default Parameters
// If no argument is provided, the default value will be used.

function greetUser(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greetUser(); // Output: Welcome, Guest!
greetUser("Fatima"); // Output: Welcome, Fatima!

// 📌 Multiple Parameters
function addNumbers(a, b) {
  console.log("Sum:", a + b);
}

addNumbers(5, 3); // Output: Sum: 8

// 📌 Step 4: Return Statement
// The return statement sends a value back to the caller.

function multiply(x, y) {
  return x * y; // Returns the result instead of printing it
}

let result = multiply(4, 5);
console.log("Multiplication Result:", result); // Output: Multiplication Result: 20

// 📌 Step 5: Function Expressions
// A function can be stored in a variable.

const square = function (num) {
  return num * num;
};

console.log("Square of 6:", square(6)); // Output: Square of 6: 36

// 📌 Anonymous Functions (No function name)
const subtract = function (a, b) {
  return a - b;
};

console.log("Subtraction:", subtract(10, 3)); // Output: Subtraction: 7

// 📌 Step 6: Arrow Functions (ES6)
// A shorter way to write functions.

const divide = (a, b) => a / b;
console.log("Division:", divide(10, 2)); // Output: Division: 5

const greetArrow = (name) => "Hello, " + name;
console.log(greetArrow("Ali")); // Output: Hello, Ali

// 📌 Step 7: Callback Functions
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

// 📌 Step 8: Higher-Order Functions
// Functions that take other functions as arguments or return functions.

function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
console.log("Addition using Higher-Order Function:", calculate(5, 7, add)); // Output: 12

// 📌 Using map(), filter(), reduce()
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num);
console.log("Squared Numbers:", squaredNumbers); // Output: [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum using reduce:", sum); // Output: 15

// 📌 Step 9: Immediately Invoked Function Expression (IIFE)
// Runs immediately after declaration.

(function () {
  console.log("IIFE executed!");
})(); // Output: IIFE executed!

// 📌 Step 10: Function Scope & Closures

// Global and Local Scope
let globalVar = "I am global"; // Accessible everywhere

function localScopeExample() {
  let localVar = "I am local"; // Accessible only inside this function
  console.log(globalVar); // ✅ Accessible
  console.log(localVar); // ✅ Accessible
}

localScopeExample();
// console.log(localVar); // ❌ ERROR! localVar is not defined outside.

// 📌 Closures: A function inside another function that remembers variables

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
