// 1. Print odd numbers from 1 to 10
console.log("Odd numbers from 1 to 10:");
for (let i = 1; i <= 10; i += 2) {
    console.log(i);
}

// 2. Check if a character is a digit, alphabet, or special character
function checkCharacter(char) {
    if (char >= '0' && char <= '9') {
        return "Digit";
    } else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        return "Alphabet";
    } else {
        return "Special Character";
    }
}

console.log(checkCharacter('A')); // Alphabet
console.log(checkCharacter('9')); // Digit
console.log(checkCharacter('@')); // Special Character

// 3. Find the area of a triangle given base and height
function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log("Triangle Area:", triangleArea(10, 5)); // Example: base=10, height=5


// 1. Check if three angles form a valid triangle
function isValidTriangle(angle1, angle2, angle3) {
    return (angle1 + angle2 + angle3 === 180) && angle1 > 0 && angle2 > 0 && angle3 > 0;
}

console.log(isValidTriangle(60, 60, 60)); // true
console.log(isValidTriangle(90, 45, 45)); // true
console.log(isValidTriangle(0, 90, 90)); // false

// 2. Calculate grade based on marks
function calculateGrade(marks) {
    if (marks >= 90) return "A";
    else if (marks >= 80) return "B";
    else if (marks >= 70) return "C";
    else if (marks >= 60) return "D";
    else return "F";
}

console.log(calculateGrade(85)); // B
console.log(calculateGrade(72)); // C
console.log(calculateGrade(59)); // F

// 3. Check if a string contains a given substring
function hasSubstring(str, substr) {
    return str.includes(substr);
}

console.log(hasSubstring("Hello, world!", "world")); // true
console.log(hasSubstring("JavaScript", "Python")); // false

// 4. Calculate the distance between two points (x1, y1) and (x2, y2)
function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

console.log(distanceBetweenPoints(1, 2, 4, 6)); // 5
console.log(distanceBetweenPoints(0, 0, 3, 4)); // 5


// 1. Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius.toFixed(2); // Rounding to 2 decimal places
}

console.log(`Fahrenheit to Celsius: ${fahrenheitToCelsius(100)}°C`); // Example: 100°F

// 2. Find ASCII value of a character
function getASCII(char) {
    return char.charCodeAt(0);
}

console.log(`ASCII value of 'A': ${getASCII('A')}`); // Output: 65
console.log(`ASCII value of 'z': ${getASCII('z')}`); // Output: 122

// 3. Generate triangle pattern of * where n = 5
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(i));
    }
}

console.log("Triangle pattern:");
printTriangle(5);


// 1. Convert seconds to HH:MM:SS format
function convertSeconds(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

console.log(`Converted Time: ${convertSeconds(3761)}`); // Example: 01:01:01

// 2. Check if a year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(`Is 2024 a leap year? ${isLeapYear(2024)}`); // true
console.log(`Is 2023 a leap year? ${isLeapYear(2023)}`); // false

// 3. Find the minimum and maximum number from an array
function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}

let numbers = [10, 3, 55, 23, 78, 1, 99, 45];
let result = findMinMax(numbers);
console.log(`Minimum: ${result.min}, Maximum: ${result.max}`);


// 1. Reverse a 2-digit number
function reverseTwoDigitNumber(num) {
    if (num < 10 || num > 99) {
        return "Please enter a two-digit number";
    }
    let reversed = (num % 10) * 10 + Math.floor(num / 10);
    return reversed;
}

console.log(`Reversed: ${reverseTwoDigitNumber(42)}`); // 24

// 2. Swap two numbers (with a third variable)
function swapWithTemp(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return { a, b };
}

// 2. Swap two numbers (without a third variable)
function swapWithoutTemp(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return { a, b };
}

let swappedWithTemp = swapWithTemp(5, 10);
console.log(`Swapped with temp: a = ${swappedWithTemp.a}, b = ${swappedWithTemp.b}`);

let swappedWithoutTemp = swapWithoutTemp(5, 10);
console.log(`Swapped without temp: a = ${swappedWithoutTemp.a}, b = ${swappedWithoutTemp.b}`);

// 3. Convert uppercase to lowercase
function toLowerCase(ch) {
    return ch.toLowerCase();
}

console.log(`Lowercase of 'A': ${toLowerCase('A')}`); // a
console.log(`Lowercase of 'Z': ${toLowerCase('Z')}`); // z
