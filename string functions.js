// 1. charAt(index) - Returns the character at a specified index
console.log("charAt(index) - Get character at specified index:");
let str = "Hello, World!";
console.log(str.charAt(0)); // Output: H

// 2. charCodeAt(index) - Returns the Unicode value of the character at the specified index
console.log("\ncharCodeAt(index) - Get Unicode value of character:");
console.log(str.charCodeAt(0)); // Output: 72 (Unicode value of 'H')

// 3. concat(string2, string3, ..., stringN) - Concatenates two or more strings
console.log("\nconcat() - Combine two strings:");
let str2 = " How are you?";
console.log(str.concat(str2)); // Output: Hello, World! How are you?

// 4. includes(searchString, position) - Checks if a string contains a specified substring
console.log("\nincludes() - Check if string contains a substring:");
console.log(str.includes("World")); // Output: true

// 5. indexOf(searchValue, fromIndex) - Returns the index of the first occurrence of a substring
console.log("\nindexOf() - Get index of the first occurrence of a substring:");
console.log(str.indexOf("World")); // Output: 7

// 6. lastIndexOf(searchValue, fromIndex) - Returns the index of the last occurrence of a substring
console.log(
  "\nlastIndexOf() - Get index of the last occurrence of a substring:"
);
console.log(str.lastIndexOf("o")); // Output: 8

// 7. localeCompare(compareString) - Compares two strings in the current locale
console.log("\nlocaleCompare() - Compare two strings in the locale:");
console.log("apple".localeCompare("banana")); // Output: -1 (apple is less than banana)

// 8. match(regex) - Matches a string with a regular expression
console.log("\nmatch() - Match string with a regex:");
console.log(str.match(/o/g)); // Output: [ 'o', 'o' ] (all occurrences of 'o')

// 9. normalize([form]) - Returns the Unicode Normalization Form of a string
console.log("\nnormalize() - Normalize string to Unicode form:");
let str3 = "A\u030A"; // 'A' followed by an accent character
console.log(str3.normalize()); // Output: "Å"

// 10. repeat(count) - Repeats the string a specified number of times
console.log("\nrepeat() - Repeat the string multiple times:");
console.log("Hi! ".repeat(3)); // Output: Hi! Hi! Hi!

// 11. replace(searchValue, newValue) - Replaces a substring with a new substring
console.log("\nreplace() - Replace substring with new substring:");
console.log(str.replace("World", "Everyone")); // Output: Hello, Everyone!

// 12. search(regex) - Searches for a match between a regular expression and a string
console.log("\nsearch() - Search for a match with regex:");
console.log(str.search("World")); // Output: 7 (index of match)

// 13. slice(startIndex, endIndex) - Extracts a part of the string
console.log("\nslice() - Extract a part of the string:");
console.log(str.slice(0, 5)); // Output: Hello

// 14. split(separator, limit) - Splits the string into an array of substrings
console.log("\nsplit() - Split string into substrings:");
console.log(str.split(", ")); // Output: [ 'Hello', 'World!' ]

// 15. startsWith(searchString, position) - Checks if the string starts with the specified substring
console.log("\nstartsWith() - Check if string starts with substring:");
console.log(str.startsWith("Hello")); // Output: true

// 16. substring(startIndex, endIndex) - Returns a part of the string
console.log("\nsubstring() - Get part of the string:");
console.log(str.substring(0, 5)); // Output: Hello

// 17. toLowerCase() - Converts string to lowercase
console.log("\ntoLowerCase() - Convert string to lowercase:");
console.log(str.toLowerCase()); // Output: hello, world!

// 18. toUpperCase() - Converts string to uppercase
console.log("\ntoUpperCase() - Convert string to uppercase:");
console.log(str.toUpperCase()); // Output: HELLO, WORLD!

// 19. trim() - Removes whitespace from both ends of a string
console.log("\ntrim() - Remove whitespace from both ends:");
let str4 = "   Hello, World!   ";
console.log(str4.trim()); // Output: Hello, World!

// 20. trimStart() (or trimLeft()) - Removes whitespace from the beginning
console.log("\ntrimStart() - Remove whitespace from the beginning:");
console.log(str4.trimStart()); // Output: Hello, World!

// 21. trimEnd() (or trimRight()) - Removes whitespace from the end
console.log("\ntrimEnd() - Remove whitespace from the end:");
console.log(str4.trimEnd()); // Output:    Hello, World!

// 22. valueOf() - Returns the primitive value of a string
console.log("\nvalueOf() - Get the primitive value of a string:");
console.log(str.valueOf()); // Output: Hello, World!
