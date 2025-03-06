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

// 19. match() - Finds matches using a regular expression
let text = "The rain in Spain stays mainly in the plain.";
let matches = text.match(/ain/g);
console.log(matches); // Output: ["ain", "ain", "ain", "ain"]

// 20. matchAll() - Returns all matches with detailed information
let matchIterator = text.matchAll(/ain/g);
console.log([...matchIterator]); // Output: Array of match details

// 21. search() - Searches for a pattern and returns the first match index
console.log(text.search(/Spain/)); // Output: 12

// 22. replace() with regex - Replace using a regex pattern
console.log(text.replace(/\bain\b/g, "XYZ")); // Output: "The rain in SpXYZ stays mainly in the plain."

// 23. padStart() - Pads the start of a string
console.log("5".padStart(3, "0")); // Output: "005"

// 24. padEnd() - Pads the end of a string
console.log("5".padEnd(3, "0")); // Output: "500"

// 25. localeCompare() - Compares two strings lexicographically
console.log("apple".localeCompare("banana")); // Output: -1 (apple < banana)

// 26. normalize() - Normalizes Unicode characters
let accented = "résumé";
console.log(accented.normalize("NFD")); // Output: "résumé"

// 27. Template Literals - Using backticks for multi-line strings and interpolation
let name = "Alice";
console.log(`Hello, ${name}!`); // Output: "Hello, Alice!"

// 28. String.raw - Prevents escape sequences in template literals
console.log(String.raw`Line1\nLine2`); // Output: "Line1\nLine2"

// ====== Title: String Reversal Methods ======

//Using split(), reverse(), and join() (Most Common & Simple)
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// Using a for Loop (Iterative Approach)
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("world")); // Output: "dlrow"

// Using Recursion (Elegant but Memory Intensive)
function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}
console.log(reverseString("recursion")); // Output: "noisrucer"
