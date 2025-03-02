let P = 1000; // Initial Investment
let R = 5; // Annual Interest Rate (%)
let T = 3; // Number of Years

// Calculate Total Amount (A) with Compound Interest Formula
let A = P * (1 + R / 100) ** T;

// Fix Floating-Point Precision Issues
A = parseFloat(A.toFixed(2));

console.log("Total Amount (A):", A);

// Calculate Interest Earned
let interest = Math.abs(A - P);
console.log("Interest Earned:", interest);

// Find Remainder when A is divided by P
let remainder = A % P;
console.log("Remainder when A is divided by P:", remainder);

// Check the Sign of Interest
let sign = Math.sign(interest);
console.log("Sign of Interest:", sign);
