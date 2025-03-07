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

// Task 1: Reverse an array without using reverse()
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

const colors = ["red", "blue", "green", "yellow", "orange"];
console.log(reverseArray(colors)); // Output: ['orange', 'yellow', 'green', 'blue', 'red']

// Task 2: Get even numbers from an array
function getEvenNumbers(arr) {
  let evenNumbers = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    }
  }
  return evenNumbers;
}

const numbers = [12, 98, 5, 41, 23, 78, 46];
console.log(getEvenNumbers(numbers)); // Output: [12, 98, 78, 46]

// Task 3: Concatenate all elements of an array into a single string
function concatenateArray(arr) {
  let result = "";
  for (let element of arr) {
    result += element;
  }
  return result;
}

var names = ["Tom", "Tim", "Tin", "Tik"];
console.log(concatenateArray(names)); // Output: 'TomTimTinTik'

// Task 4: Reverse the words in a sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

const statement = "I am a hard working person";
console.log(reverseWords(statement)); // Output: 'person working hard a am I'
