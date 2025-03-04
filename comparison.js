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

/*
 */

/*
 */

/*
 */

/*
 */
