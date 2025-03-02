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

````bash
node compound_interest.js

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


# Salary Calculator

This program calculates the **net salary** of an employee after applying **bonuses and deductions** based on their basic salary. It demonstrates the use of **arithmetic operations, conditional (ternary) operators, rounding functions, and floating-point precision handling**.

## **Salary Calculation Breakdown**

### **Bonus Calculation:**
- If **basic salary > 50,000**, bonus = **10%** of salary
- Otherwise, bonus = **5%** of salary

### **Deductions Applied:**
- **Tax = 8%** of **(basic salary + bonus)**
- **Health Insurance = 2000**

### **Final Net Salary Formula:**
\[
\text{Net Salary} = (\text{Basic Salary} + \text{Bonus}) - \text{Deductions}
\]
If `Net Salary < 0`, it is set to **0** to prevent negative salaries.

## **Features of this Program**
✔ Uses a **ternary operator (`? :`)** to determine the bonus
✔ Calculates **tax (8%)** on total income before deductions
✔ Applies a fixed **health insurance deduction**
✔ Uses **Math.max(0, netSalary)** to prevent negative salaries
✔ Uses **Math.round()** to round the final salary

## **Example Output (For Basic Salary = 60,000)**
```bash
Bonus Amount: 6000
Total Deductions: 6560
Net Salary before Rounding: 59440
Final Net Salary: 59440

````
