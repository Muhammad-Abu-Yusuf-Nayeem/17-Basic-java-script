// 1. Boolean(value) - Converts a value to a boolean
console.log("Boolean(value) - Convert value to boolean:");
console.log(Boolean(1)); // Output: true (non-zero number is truthy)
console.log(Boolean(0)); // Output: false (zero is falsy)

// 2. valueOf() - Returns the primitive value of a Boolean object
console.log("\nvalueOf() - Get the primitive value of a Boolean object:");
let boolObj = new Boolean(true);
console.log(boolObj.valueOf()); // Output: true

// 3. toString() - Converts a Boolean value to a string ("true" or "false")
console.log("\ntoString() - Convert Boolean value to string:");
let bool = false;
console.log(bool.toString()); // Output: "false"

// 4. !! (Double NOT operator) - Converts a value to a boolean
console.log("\n!! (Double NOT operator) - Convert value to boolean:");
console.log(!!"text"); // Output: true (non-empty string is truthy)
console.log(!!0); // Output: false (zero is falsy)

// 5. && (Logical AND) - Returns true if both operands are true
console.log("\n&& (Logical AND) - Both operands must be true:");
console.log(true && false); // Output: false (because false is one of the operands)
console.log(true && true); // Output: true (both operands are true)

// 6. || (Logical OR) - Returns true if at least one operand is true
console.log("\n|| (Logical OR) - At least one operand must be true:");
console.log(true || false); // Output: true (because true is one of the operands)
console.log(false || false); // Output: false (both operands are false)

// 7. ! (Logical NOT) - Inverts the boolean value
console.log("\n! (Logical NOT) - Invert the boolean value:");
console.log(!true); // Output: false (inverts true to false)
console.log(!false); // Output: true (inverts false to true)

// 8. Array.prototype.every() - Tests if all elements pass the provided test
console.log("\nArray.prototype.every() - Test if all elements pass the test:");
let numbers = [1, 2, 3, 4];
console.log(numbers.every((num) => num > 0)); // Output: true (all elements are greater than 0)
console.log(numbers.every((num) => num > 3)); // Output: false (not all elements are greater than 3)

// 9. Array.prototype.some() - Tests if at least one element passes the provided test
console.log(
  "\nArray.prototype.some() - Test if at least one element passes the test:"
);
console.log(numbers.some((num) => num > 3)); // Output: true (some elements are greater than 3)
console.log(numbers.some((num) => num > 5)); // Output: false (no elements are greater than 5)
