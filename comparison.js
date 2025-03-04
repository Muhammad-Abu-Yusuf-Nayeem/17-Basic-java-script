//Check if a Number is in a Given Range
function isInRange(num) {
  return num >= 10 && num <= 50;
}

// Test cases
console.log(isInRange(25)); // true
console.log(isInRange(5)); // false
console.log(isInRange(50)); // true
console.log(isInRange(100)); // false

//Check if a Year is a Leap Year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Test cases
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false

//Validate a User's Login Credentials
function isValidLogin(username, password) {
  return username !== "" && password.length >= 6;
}

// Test cases
console.log(isValidLogin("user1", "secretpass")); // true
console.log(isValidLogin("", "password123")); // false
console.log(isValidLogin("user2", "12345")); // false
console.log(isValidLogin("admin", "admin123")); // true

//Determine if a Number is Positive and Even
function isPositiveEven(num) {
  return num > 0 && num % 2 === 0;
}

// Test cases
console.log(isPositiveEven(8)); // true
console.log(isPositiveEven(-4)); // false
console.log(isPositiveEven(7)); // false
console.log(isPositiveEven(0)); // false

//Here are 5 practice problems using if-else statements with various operators (+, -, *, /, %, <=, >=, ==, !=, &&, ||, !).
//Check if Two Numbers are Equal or Not
function checkEquality(a, b) {
  if (a == b) {
    console.log("Both numbers are equal");
  } else {
    console.log("Numbers are not equal");
  }
}

// Test cases
checkEquality(10, 10); // "Both numbers are equal"
checkEquality(5, 8); // "Numbers are not equal"

//Find if a Number is Odd or Even
function checkEvenOdd(num) {
  if (num % 2 == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

// Test cases
checkEvenOdd(12); // "Even Number"
checkEvenOdd(7); // "Odd Number"

//Find the Greatest of Three Numbers
function findLargest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a + " is the largest");
  } else if (b >= a && b >= c) {
    console.log(b + " is the largest");
  } else {
    console.log(c + " is the largest");
  }
}

// Test cases
findLargest(5, 10, 7); // "10 is the largest"
findLargest(15, 8, 12); // "15 is the largest"
findLargest(6, 6, 6); // "6 is the largest"

//Check if a Person Can Vote

//A person can vote if they are 18 or older.
//If they are under 18, they cannot vote.
function canVote(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You are not eligible to vote");
  }
}

// Test cases
canVote(20); // "You are eligible to vote"
canVote(16); // "You are not eligible to vote"

//Perform Basic Arithmetic Operations
//Write a function that takes two numbers and an operator (+, -, *, /, %) and performs the correct operation.
function calculate(num1, num2, operator) {
  if (operator == "+") {
    console.log("Result: " + (num1 + num2));
  } else if (operator == "-") {
    console.log("Result: " + (num1 - num2));
  } else if (operator == "*") {
    console.log("Result: " + num1 * num2);
  } else if (operator == "/") {
    if (num2 == 0) {
      console.log("Error: Division by zero");
    } else {
      console.log("Result: " + num1 / num2);
    }
  } else if (operator == "%") {
    console.log("Result: " + (num1 % num2));
  } else {
    console.log("Invalid operator");
  }
}

// Test cases
calculate(10, 5, "+"); // "Result: 15"
calculate(10, 5, "-"); // "Result: 5"
calculate(10, 5, "*"); // "Result: 50"
calculate(10, 5, "/"); // "Result: 2"
calculate(10, 5, "%"); // "Result: 0"
calculate(10, 0, "/"); // "Error: Division by zero"
calculate(10, 5, "&"); // "Invalid operator"
