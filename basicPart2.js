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
