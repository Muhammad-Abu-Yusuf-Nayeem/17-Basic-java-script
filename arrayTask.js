// Declare an array with 5 fruit names
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Console log the element at index 3
console.log(fruits[3]); // Output: Orange

// Change the value of the element at index 2 to "Jambura"
fruits[2] = "Jambura";

// Console log the final array
console.log(fruits);

// Declare an array with 3 tourist destinations
let touristDestinations = ["Paris", "Bali", "Tokyo"];

// Add a new tourist destination
touristDestinations.push("New York");

// Add two more destinations
touristDestinations.push("Dubai", "Rome");

// Remove the last added destination (Rome)
touristDestinations.pop();

// Display the final array
console.log(touristDestinations);

// Create an array of books
let books = [
  "The Alchemist",
  "Clean Code",
  "JavaScript: The Good Parts",
  "Harry Potter",
  "Eloquent JavaScript",
];

// Check if the array includes a book related to JavaScript
if (
  books.includes("JavaScript: The Good Parts") ||
  books.includes("Eloquent JavaScript")
) {
  console.log("Yes! The array contains a JavaScript book.");
} else {
  console.log("No, there is no JavaScript book in the array.");
}

// Declare different variables
let numbers = [1, 2, 3, 4, 5]; // Array
let name = "John Doe"; // String
let person = { firstName: "Alice", lastName: "Smith" }; // Object
let isStudent = true; // Boolean
let hobbies = ["Reading", "Swimming", "Gaming"]; // Array

// Function to check if a variable is an array
function checkArray(variable, variableName) {
  if (Array.isArray(variable)) {
    console.log(`${variableName} is an array.`);
  } else {
    console.log(`${variableName} is NOT an array.`);
  }
}

// Check each variable
checkArray(numbers, "numbers");
checkArray(name, "name");
checkArray(person, "person");
checkArray(isStudent, "isStudent");
checkArray(hobbies, "hobbies");

// Create two arrays
fruits = ["Apple", "Banana", "Mango"];
let vegetables = ["Carrot", "Spinach", "Potato"];

// Combine the two arrays using concat
let combinedArray = fruits.concat(vegetables);

// Print the original arrays
console.log("Fruits Array:", fruits);
console.log("Vegetables Array:", vegetables);

// Print the combined array
console.log("Combined Array:", combinedArray);
