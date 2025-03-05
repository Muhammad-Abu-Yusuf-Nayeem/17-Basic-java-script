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

//******************************************************************************************//

//Here are 5 practice problems using ==, !=, ===, and !== with if-else statements, along with solutions.

/*
Problem:
Write a function that takes two numbers and checks if they are loosely equal (==) or not equal (!=).
*/
function compareNumbers(a, b) {
  if (a == b) {
    console.log("The numbers are equal (==)");
  } else {
    console.log("The numbers are not equal (!=)");
  }
}

// Test cases
compareNumbers(5, "5"); // "The numbers are equal (==)" (type conversion happens)
compareNumbers(10, 20); // "The numbers are not equal (!=)"
compareNumbers(0, false); // "The numbers are equal (==)" (because false is treated as 0)

/*
2. Compare Data Types (Strict Equality === & Strict Inequality !==)
Problem:
Write a function that takes two values and checks if they are strictly equal (===) or strictly not equal (!==).
*/
function compareTypes(a, b) {
  if (a === b) {
    console.log("The values and types are exactly the same (===)");
  } else {
    console.log("The values or types are different (!==)");
  }
}

// Test cases
compareTypes(5, "5"); // "The values or types are different (!==)" (different types)
compareTypes(10, 10); // "The values and types are exactly the same (===)"
compareTypes(true, 1); // "The values or types are different (!==)" (true is not exactly 1)
compareTypes(null, undefined); // "The values or types are different (!==)"

/*
3. Check If a User is Logged In (Loose vs. Strict Equality)
Problem:
A function takes a user's login status (true, "true", or 1).

If the value loosely equals true (==), print "User is logged in".
If the value strictly equals true (===), print "User is strictly logged in".
Otherwise, print "User is not logged in".
*/

function checkLogin(status) {
  if (status === true) {
    console.log("User is strictly logged in (===)");
  } else if (status == true) {
    console.log("User is logged in (==) but with type conversion");
  } else {
    console.log("User is not logged in");
  }
}

// Test cases
checkLogin(true); // "User is strictly logged in (===)"
checkLogin("true"); // "User is not logged in"
checkLogin(1); // "User is logged in (==) but with type conversion"
checkLogin(false); // "User is not logged in"

/*
4. Compare Null and Undefined (== vs. ===)
Problem:
Write a function that takes two values and compares them to null using both loose (==) and strict (===) equality.
*/
function checkNull(value) {
  if (value == null) {
    console.log("The value is loosely null (==)");
  }
  if (value === null) {
    console.log("The value is strictly null (===)");
  } else {
    console.log("The value is not strictly null");
  }
}

// Test cases
checkNull(null); // "The value is loosely null (==)" and "The value is strictly null (===)"
checkNull(undefined); // "The value is loosely null (==)" but "The value is not strictly null"
checkNull(0); // "The value is not strictly null"

/*
5. Validate User Input (Strict vs Loose Equality)
Problem:
A function takes a user’s input (age).

If age loosely equals "18" (==), print "User is 18 (type conversion happened)".
If age strictly equals 18 (===), print "User is 18 (exact match)".
Otherwise, print "User is not 18".
 */
function checkAge(age) {
  if (age === 18) {
    console.log("User is 18 (exact match)");
  } else if (age == 18) {
    console.log("User is 18 (type conversion happened)");
  } else {
    console.log("User is not 18");
  }
}

// Test cases
checkAge(18); // "User is 18 (exact match)"
checkAge("18"); // "User is 18 (type conversion happened)"
checkAge(21); // "User is not 18"

/*
Key Takeaways:
Loose Equality (==) allows type conversion (5 == "5" is true).
Strict Equality (===) does not allow type conversion (5 === "5" is false).
Loose Inequality (!=) also allows type conversion.
Strict Inequality (!==) does not allow type conversion.

*/

/***************************************************************************
1. Check if a Number is Positive, Negative, or Zero (if-else)
Problem:
Write a function that takes a number and checks whether it is positive, negative, or zero.
*/
function checkNumber(num) {
  if (num > 0) {
    console.log("The number is positive");
  } else if (num < 0) {
    console.log("The number is negative");
  } else {
    console.log("The number is zero");
  }
}

// Test cases
checkNumber(10); // "The number is positive"
checkNumber(-5); // "The number is negative"
checkNumber(0); // "The number is zero"

/*
2. Grade Calculator (else-if ladder)
Problem:
Write a function that takes a student’s marks and assigns a grade based on the following conditions:

90 - 100: "A"
80 - 89: "B"
70 - 79: "C"
60 - 69: "D"
Below 60: "F"
*/
function calculateGrade(marks) {
  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else if (marks >= 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

// Test cases
calculateGrade(95); // "Grade: A"
calculateGrade(85); // "Grade: B"
calculateGrade(72); // "Grade: C"
calculateGrade(65); // "Grade: D"
calculateGrade(50); // "Grade: F"

/*
3. Check Even or Odd and Divisibility by 5 (nested if-else)
Problem:
Write a function that checks if a number is even or odd, and if it's even, check whether it’s also divisible by 5.
*/
function checkEvenOddDivisible(num) {
  if (num % 2 === 0) {
    if (num % 5 === 0) {
      console.log("The number is even and divisible by 5");
    } else {
      console.log("The number is even but not divisible by 5");
    }
  } else {
    console.log("The number is odd");
  }
}

// Test cases
checkEvenOddDivisible(10); // "The number is even and divisible by 5"
checkEvenOddDivisible(8); // "The number is even but not divisible by 5"
checkEvenOddDivisible(7); // "The number is odd"

/*
4. Check Voting Eligibility (if-else)
Problem:
Write a function that checks if a person is eligible to vote.

A person can vote if they are 18 or older.
If they are under 18, print how many years are left until they can vote.
*/
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible to vote");
  } else {
    console.log("You can vote after " + (18 - age) + " years");
  }
}

// Test cases
checkVotingEligibility(20); // "You are eligible to vote"
checkVotingEligibility(15); // "You can vote after 3 years"

/*
5. Check Admission Eligibility (else-if ladder + nested if-else)
Problem:
A student is eligible for admission if:

Their marks are 60 or above.
If marks are between 50-59, they need to pass an additional test.
If marks are below 50, they are not eligible.
*/
function checkAdmission(marks, passedTest) {
  if (marks >= 60) {
    console.log("You are eligible for admission");
  } else if (marks >= 50) {
    if (passedTest) {
      console.log("You are eligible for admission after passing the test");
    } else {
      console.log("You need to pass the test to be eligible");
    }
  } else {
    console.log("You are not eligible for admission");
  }
}

// Test cases
checkAdmission(70, false); // "You are eligible for admission"
checkAdmission(55, true); // "You are eligible for admission after passing the test"
checkAdmission(55, false); // "You need to pass the test to be eligible"
checkAdmission(40, false); // "You are not eligible for admission"

/*
Summary of Concepts Used:
✅ if-else → Used in simple decision-making situations.
✅ else-if ladder → Used when multiple conditions need to be checked sequentially.
✅ nested if-else → Used when conditions depend on a previous condition.
*/

/*******************************************************************************************
 multiple conditional logical operators (&&, ||, !) in if statements along with solutions.
*/

/*
1. Check If a Person Can Donate Blood (&& Operator)
Problem:
A person can donate blood if they are at least 18 years old and weigh at least 50 kg.
Write a function that checks if a person is eligible to donate blood.
*/
function canDonateBlood(age, weight) {
  if (age >= 18 && weight >= 50) {
    console.log("You are eligible to donate blood");
  } else {
    console.log("You are not eligible to donate blood");
  }
}

// Test cases
canDonateBlood(20, 55); // "You are eligible to donate blood"
canDonateBlood(16, 60); // "You are not eligible to donate blood"
canDonateBlood(22, 45); // "You are not eligible to donate blood"

/*
2. Check If a Number is Within a Range (&& Operator)
Problem:
Write a function that checks if a number is between 10 and 50 (inclusive).
*/
function checkInRange(num) {
  if (num >= 10 && num <= 50) {
    console.log("The number is within the range 10-50");
  } else {
    console.log("The number is outside the range");
  }
}

// Test cases
checkInRange(25); // "The number is within the range 10-50"
checkInRange(9); // "The number is outside the range"
checkInRange(50); // "The number is within the range 10-50"

/*
3. Check If a Year is a Leap Year (&& and || Operator)
Problem:
A year is a leap year if:

It is divisible by 400 or
It is divisible by 4 but not divisible by 100
Write a function to check if a given year is a leap year.
*/
function isLeapYear(year) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// Test cases
isLeapYear(2024); // "2024 is a leap year"
isLeapYear(1900); // "1900 is not a leap year"
isLeapYear(2000); // "2000 is a leap year"
isLeapYear(2023); // "2023 is not a leap year"

/*
4. Check If a User Can Access a Page (|| Operator)
Problem:
A user can access a premium page if they are:

A subscriber OR
An admin
Write a function that checks if a user has access.
*/
function canAccessPage(isSubscriber, isAdmin) {
  if (isSubscriber || isAdmin) {
    console.log("You have access to the premium page");
  } else {
    console.log("You do not have access");
  }
}

// Test cases
canAccessPage(true, false); // "You have access to the premium page"
canAccessPage(false, true); // "You have access to the premium page"
canAccessPage(false, false); // "You do not have access"

/*
5. Check If a Number is Valid (! Operator)
Problem:
A function should check if a given number is valid (not null, not undefined, and not zero).
If the number is invalid, print "Invalid number".
*/

function isValidNumber(num) {
  if (!num) {
    console.log("Invalid number");
  } else {
    console.log("Valid number: " + num);
  }
}

// Test cases
isValidNumber(10); // "Valid number: 10"
isValidNumber(0); // "Invalid number"
isValidNumber(null); // "Invalid number"
isValidNumber(undefined); // "Invalid number"

/**********************************************************************************************
The ternary operator (? :) is a shorthand for if-else statements.
Here are 5 practice problems using the ternary operator along with solutions.


✅ Ternary Operator Syntax:
(condition) ? "If True" : "If False";

✅ Nested Ternary Operators:
(condition1) ? "If True" : (condition2) ? "Else If True" : "Else Case";

*/

/*
1. Check if a Number is Even or Odd
Problem:
Write a function that checks if a number is even or odd using the ternary operator.
*/
function checkEvenOdd(num) {
  let result = num % 2 === 0 ? "Even" : "Odd";
  console.log(result);
}

// Test cases
checkEvenOdd(10); // "Even"
checkEvenOdd(7); // "Odd"

/*
2. Find the Greater of Two Numbers
Problem:
Write a function that takes two numbers and returns the greater number.
*/
function findGreater(a, b) {
  let greater = a > b ? a : b;
  console.log("Greater number is: " + greater);
}

// Test cases
findGreater(10, 20); // "Greater number is: 20"
findGreater(50, 25); // "Greater number is: 50"

/*
3. Check If a Person is Eligible to Vote
Problem:
A person can vote if they are 18 or older.
Write a function that checks if the person can vote.
*/
function canVote(age) {
  let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
  console.log(result);
}

// Test cases
canVote(20); // "Eligible to vote"
canVote(16); // "Not eligible to vote"

/*
4. Check If a Number is Positive, Negative, or Zero
Problem:
Write a function that checks whether a number is positive, negative, or zero.
*/
function checkNumber(num) {
  let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
  console.log(result);
}

// Test cases
checkNumber(10); // "Positive"
checkNumber(-5); // "Negative"
checkNumber(0); // "Zero"

/*
5. Check If a Year is a Leap Year
Problem:
A year is a leap year if:

It is divisible by 400, OR
It is divisible by 4 but not by 100.
*/
function isLeapYear(year) {
  let result =
    year % 400 === 0
      ? "Leap Year"
      : year % 4 === 0 && year % 100 !== 0
      ? "Leap Year"
      : "Not a Leap Year";
  console.log(result);
}

// Test cases
isLeapYear(2024); // "Leap Year"
isLeapYear(1900); // "Not a Leap Year"
isLeapYear(2000); // "Leap Year"
isLeapYear(2023); // "Not a Leap Year"

/********************************************************************************
Logical NOT (!) in JavaScript
The logical NOT (!) operator is used to invert the truthiness of a value.

If the value is truthy, ! makes it false.
If the value is falsy, ! makes it true.
*/

/*
Use Cases of Logical NOT (!)
1. Converting Any Value to Boolean (!!)
🔹 Use Case: Ensuring a value is true or false.
🔹 Why? In JavaScript, some values are truthy (like numbers, strings) and some are falsy (0, "", null, undefined, NaN).
🔹 Solution: Use !! to convert any value into a Boolean (true or false).
*/
console.log(!!"hello"); // true (Non-empty string is truthy)
console.log(!!0); // false (0 is falsy)
console.log(!!null); // false (null is falsy)
console.log(!!""); // false (Empty string is falsy)

/*
2. Checking If a Variable is Undefined or Null
🔹 Use Case: If a variable is undefined or null, execute fallback logic.

✅ Use case: Preventing actions when an input is empty.
*/

if (!user) {
  console.log("User is not defined");
} else {
  console.log("User exists");
}

/*
3. Preventing Code Execution for Falsy Values
🔹 Use Case: If a value is falsy (0, null, undefined, ""), prevent execution.

✅ Use case: Preventing actions when an input is empty.
*/
let input = "";

if (!input) {
  console.log("No input provided");
} else {
  console.log("Processing input...");
}

/*
4. Toggling Boolean Values
🔹 Use Case: Flip a boolean value (like switching between true and false).

✅ Use case: Toggling dark mode, switch buttons, or UI elements.
*/

let isDarkMode = false;
isDarkMode = !isDarkMode;
console.log(isDarkMode); // true

/*
5. Checking If an Array or String is Empty
🔹 Use Case: Ensure an array or string contains values before executing logic.

✅ Use case: Prevent processing empty arrays or strings.
*/
let arr = [];
if (!arr.length) {
  console.log("Array is empty");
}

let str = "";
if (!str.length) {
  console.log("String is empty");
}

/*
6. Preventing Execution If an Object Property is Missing
🔹 Use Case: Check if an object property exists before using it.

6. Preventing Execution If an Object Property is Missing
🔹 Use Case: Check if an object property exists before using it.
*/
let user = { name: "Alice" };
if (!user.age) {
  console.log("Age not provided");
}

/*
Summary
! flips true → false and false → true.
!! converts a value to a strict boolean.
Common Use Cases: ✅ Checking for null, undefined, empty strings, or missing values.
✅ Toggling booleans (e.g., dark mode switch).
✅ Ensuring an array or string is not empty.
✅ Preventing execution if an object property is missing.
*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/

/*

*/
