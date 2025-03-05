// 1. Write a loop 1 to 200. Use break to exit the loop once you find 100.
for (let i = 1; i <= 200; i++) {
  if (i === 100) {
    console.log("Found 100, exiting loop.");
    break;
  }
  console.log(i);
}

// 2. Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100.
let sum = 0;
let num = 1;
while (sum < 100) {
  sum += num;
  if (sum >= 100) {
    console.log("Sum reached or exceeded 100, exiting loop.");
    break;
  }
  num++;
}
console.log("Final sum:", sum);

// 3. Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.).
for (let i = 1; i <= 100; i++) {
  if (Math.sqrt(i) % 1 === 0) {
    // Check if number is a perfect square
    console.log("First square number found:", i);
    break;
  }
}

// 4. Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
for (let i = 1; i <= 40; i++) {
  if (i % 2 !== 0) {
    // Skip odd numbers
    continue;
  }
  console.log(i);
}

// 5. Display odd numbers from 55 to 85 and skip the numbers divisible by 5.
for (let i = 55; i <= 85; i++) {
  if (i % 2 === 0 || i % 5 === 0) {
    // Skip even and divisible by 5 numbers
    continue;
  }
  console.log(i);
}

// 6. Display the message "I will invest at least 6 hrs every single day for next 60 days!" 6 times.
for (let i = 0; i < 6; i++) {
  console.log(
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}

// 7. Find all the odd numbers from 61 to 100 (using for loop).
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 8. Find all the even numbers from 78 to 98 (using for loop).
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 9. Display the sum of all the odd numbers from 91 to 129.
let sumOdd = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 !== 0) {
    sumOdd += i;
  }
}
console.log("Sum of odd numbers from 91 to 129:", sumOdd);

// 10. Display the sum of all the even numbers from 51 to 85.
let sumEven = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log("Sum of even numbers from 51 to 85:", sumEven);

// 11. Generate a multiplication table for number 9.
let number = 9;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}

// 12. Implement a countdown timer that counts down from 81 to 65.
let countdown = 81;
while (countdown >= 65) {
  console.log(countdown);
  countdown--;
}

// 1. Find all the odd numbers from 61 to 100
let i = 61;
console.log("Odd numbers from 61 to 100:");
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// 2. Find all the even numbers from 78 to 98
let j = 78;
console.log("\nEven numbers from 78 to 98:");
while (j <= 98) {
  if (j % 2 === 0) {
    console.log(j);
  }
  j++;
}

// 3. Display sum of all the odd numbers from 91 to 129
let k = 91;
sumOdd = 0;
while (k <= 129) {
  if (k % 2 !== 0) {
    sumOdd += k;
  }
  k++;
}
console.log("\nSum of odd numbers from 91 to 129:", sumOdd);

// 4. Display sum of all the even numbers from 51 to 85
let l = 51;
sumEven = 0;
while (l <= 85) {
  if (l % 2 === 0) {
    sumEven += l;
  }
  l++;
}
console.log("\nSum of even numbers from 51 to 85:", sumEven);

// 5. Generate a multiplication table for number 9
let m = 1;
console.log("\nMultiplication table for 9:");
while (m <= 10) {
  console.log(`9 x ${m} = ${9 * m}`);
  m++;
}

// 6. Implement a countdown timer that counts down from 81 to 65
let n = 81;
console.log("\nCountdown from 81 to 65:");
while (n >= 65) {
  console.log(n);
  n--;
}
