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




// 8. slice(start, end) - Extracts a section of a string
let sliced = str.slice(7, 17);
console.log(sliced); // Output: "JavaScript"

// 9. substring(start, end) - Similar to slice but cannot accept negative indices
console.log(str.substring(7, 17)); // Output: "JavaScript"

// 10. replace() - Replaces a part of a string (only first occurrence)
let newStr = str.replace("JavaScript", "JS");
console.log(newStr); // Output: "Hello, JS!"

// 11. replaceAll() - Replaces all occurrences of a substring
let repeatedStr = "apple apple apple";
console.log(repeatedStr.replaceAll("apple", "orange")); // Output: "orange orange orange"

// 12. split() - Splits a string into an array
let words = str.split(" ");
console.log(words); // Output: ["Hello,", "JavaScript!"]

// 13. join() - Joins an array into a string
let joinedString = words.join(" - ");
console.log(joinedString); // Output: "Hello,-JavaScript!"

// 14. charAt() - Returns the character at a given position
console.log(str.charAt(7)); // Output: "J"

// 15. indexOf() - Finds the first occurrence of a substring
console.log(str.indexOf("JavaScript")); // Output: 7

// 16. lastIndexOf() - Finds the last occurrence of a substring
let phrase = "The quick brown fox jumps over the lazy dog";
console.log(phrase.lastIndexOf("o")); // Output: 42

// 17. repeat() - Repeats a string a specified number of times
console.log("Ha".repeat(3)); // Output: "HaHaHa"

// 18. concat() - Joins two or more strings
let str1 = "Hello";
let str2 = "World";
console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"
