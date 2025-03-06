// 1. length - Returns the length of a string
let str = "Hello, JavaScript!";
console.log(str.length); // Output: 18

// 2. toUpperCase() - Converts the string to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, JAVASCRIPT!"

// 3. toLowerCase() - Converts the string to lowercase
console.log(str.toLowerCase()); // Output: "hello, javascript!"

// 4. trim() - Removes whitespace from both ends of a string
let strWithSpaces = "   Hello!   ";
console.log(strWithSpaces.trim()); // Output: "Hello!"

// 5. includes() - Checks if a substring exists in a string (case-sensitive)
console.log(str.includes("JavaScript")); // Output: true

// 6. startsWith() - Checks if a string starts with a given substring
console.log(str.startsWith("Hello")); // Output: true

// 7. endsWith() - Checks if a string ends with a given substring
console.log(str.endsWith("!")); // Output: true
