# JavaScript Arithmetic Problems

This repository contains two JavaScript problems designed to practice fundamental arithmetic operations, including addition, subtraction, multiplication, division, modulus, exponentiation, rounding functions, absolute values, and floating-point precision handling.

## Problem 1: Compound Interest Calculation

### **Description**
A program that calculates the total amount after compound interest is applied, based on an initial investment, annual interest rate, and time in years. It includes rounding, modulus, and absolute value operations.

### **Formula**
\[
A = P \times (1 + R/100)^T
\]
- `P`: Initial investment  
- `R`: Annual interest rate (in percentage)  
- `T`: Number of years  
- `A`: Total amount after `T` years  

### **Features**
- Calculates **compound interest**  
- Uses **toFixed(2)** to manage floating-point precision  
- Computes the **remainder** when `A` is divided by `P`  
- Uses **Math.sign()** to check interest sign  
- Prevents floating-point issues using `parseFloat()`

#### **Run the Program**
```bash
node compound_interest.js
