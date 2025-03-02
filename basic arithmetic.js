// 1. Program to take two numbers as input and print their sum
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("Sum:", sum); // Output the sum of the two numbers

// 2. Program to calculate and print the remainder when 15 is divided by 4
let dividend = 15;
let divisor = 4;
let remainder = dividend % divisor;
console.log("Remainder:", remainder); // Output the remainder

// 3. Program to find the square of a number using the exponentiation operator
let number = 16;
let square = number ** 2; // Using exponentiation operator (**)
console.log("Square:", square); // Output the squared value

// 4. Program to increment x by 1 and then print it
let x = 10;
x++; // Increment x by 1
console.log("Incremented x:", x); // Output the incremented value

// 5. Program to swap two numbers without using a third variable
let a = 18;
let b = 38;
a = a + b;
b = a - b;
a = a - b;
console.log("After swapping: a =", a, ", b =", b); // Output swapped values

// 6. Program to find the minimum of three numbers
let numA = 7;
let numB = 9;
let numC = 13;
let min = Math.min(numA, numB, numC); // Using Math.min()
console.log("Minimum number:", min); // Output the minimum value

// 7. Program to generate a random number within a given range (5 to 20)
let minRange = 5;
let maxRange = 20;
let randomNum =
  Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
console.log("Random number:", randomNum); // Output the random number
