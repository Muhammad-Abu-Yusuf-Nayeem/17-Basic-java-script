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
console.log(reverseString("hello")); // Output: "ol
// eh"

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

/*
# Let's start learning JavaScript objects step by step
Author: Abu Yusuf
Date: 2025-03-06
*/

//************       Step 1: Understanding Objects in JavaScript       *********************************/
//In JavaScript, an object is a collection of key-value pairs. Each key is called a property, and the value can be of any data type (string, number, boolean, function, etc.).

//************        Step 2: Creating an Object      *********************************/
//There are multiple ways to create an object in JavaScript. The most common way is using object literals {}.
// Creating a simple object using an object literal
let person = {
  name: "Ali", // Property: 'name' with value 'Ali'
  age: 25, // Property: 'age' with value 25
  isStudent: true, // Property: 'isStudent' with value true (boolean)
};

console.log(person); // Output the whole object
console.log(person.name); // Accessing property 'name' => Output: Ali
console.log(person.age); // Accessing property 'age' => Output: 25
console.log(person.isStudent); // Output: true

//************       Step 3: Accessing Object Properties       *********************************/
/**
 * We can access object properties using:

Dot notation (object.property) – Recommended and easier to read.
Bracket notation (object["property"]) – Used when the key is dynamic or has special characters.
 */
console.log(person.name); // Dot notation
console.log(person["age"]); // Bracket notation

//************        Step 4: Adding & Modifying Properties      *********************************/
//We can add new properties or modify existing ones.

// Adding a new property
person.country = "Pakistan";

// Modifying an existing property
person.age = 26;

console.log(person); // The object now includes 'country' and updated 'age'

//************       Step 5: Deleting a Property       *********************************/
//We can remove a property using the delete keyword.
delete person.isStudent;

console.log(person); // 'isStudent' property is removed

//************       Step 6: Object Methods (Functions inside Objects)       *********************************/
//An object can have functions (methods) to perform actions.
car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  startEngine: function () {
    console.log("Engine started!");
  },
};

// Calling the method
car.startEngine(); // Output: Engine started!

//************       Step 7: Looping Through an Object       *********************************/
//We can use a for...in loop to iterate over object properties.
for (let key in person) {
  console.log(key + ": " + person[key]); // Logs each property and its value
}

//************         Step 8: Object Inside Object (Nested Objects)     *********************************/
//Objects can have other objects inside them.

student = {
  name: "Ahmed",
  details: {
    age: 20,
    course: "JavaScript",
    grade: "A",
  },
};

console.log(student.details.course); // Output: JavaScript

//************              *********************************/
// Find number of keys: Object.keys(obj).length
// Get all keys: Object.keys(obj)
// Access nested object: object.property.subproperty
// Common object methods:
// Object.keys(obj), Object.values(obj), Object.entries(obj)
// Object.assign(target, source), Object.create(prototype)
// Object.freeze(obj), Object.seal(obj)

// ==========================
// 1. Find the Number of Keys
// ==========================

// Creating an object
let person = {
  name: "Ali",
  age: 25,
  country: "Pakistan",
};

// Using Object.keys() to get an array of keys, then getting the length
let keyCount = Object.keys(person).length;

console.log("Number of keys:", keyCount);
// Output: 3

// ==========================
// 2. Get All Keys of an Object
// ==========================

let keys = Object.keys(person);

console.log("Keys in the object:", keys);
// Output: ["name", "age", "country"]

// ==========================
// 3. Accessing a Nested Object
// ==========================

let student = {
  name: "Ahmed",
  details: {
    age: 20,
    course: "JavaScript",
    grade: "A",
  },
};

// Accessing nested object properties using dot notation
console.log(student.details.course);
// Output: JavaScript

// Accessing nested object properties using bracket notation
console.log(student["details"]["grade"]);
// Output: A

// =================================
// 4. Built-in Methods for Objects
// =================================

// A. Get all keys of an object
console.log(Object.keys(student));
// Output: ["name", "details"]

// B. Get all values of an object
console.log(Object.values(student));
// Output: ["Ahmed", {age: 20, course: "JavaScript", grade: "A"}]

// C. Get both keys and values as pairs
console.log(Object.entries(student));
/* Output:
[
    ["name", "Ahmed"],
    ["details", {age: 20, course: "JavaScript", grade: "A"}]
]
*/

// D. Check if an object has a specific key
console.log(student.hasOwnProperty("name"));
// Output: true

console.log(student.hasOwnProperty("address"));
// Output: false

// ===================================
// 5. Merging Two Objects
// ===================================

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Merging obj1 and obj2 into a new object
let mergedObj = Object.assign({}, obj1, obj2);

console.log(mergedObj);
// Output: { a: 1, b: 2, c: 3, d: 4 }

// ===================================
// 6. Creating an Object with a Prototype
// ===================================

// Creating a prototype object
let car = {
  type: "sedan",
};

// Creating a new object based on the prototype
let myCar = Object.create(car);

console.log(myCar.type);
// Output: sedan

// ===================================
// 7. Preventing Object Modification
// ===================================

// A. Freezing an Object (Prevents any changes)
let user = { name: "Ali" };

Object.freeze(user);

user.name = "Ahmed"; // Change will not happen
console.log(user.name);
// Output: Ali

// B. Sealing an Object (Prevents adding/removing properties but allows modifications)
let product = { name: "Laptop", price: 1000 };

Object.seal(product);

product.price = 1200; // Allowed
product.brand = "HP"; // Not allowed (because it's a new property)
delete product.name; // Not allowed

console.log(product);
// Output: { name: "Laptop", price: 1200 }
