// Salary Calculator Program

// Input: Basic Salary
let basicSalary = 60000; // Example input

// Calculate Bonus (10% if salary > 50,000, otherwise 5%)
let bonus = basicSalary > 50000 ? basicSalary * 0.1 : basicSalary * 0.05;
console.log("Bonus Amount:", bonus);

// Calculate Deductions: Tax (8% of salary + bonus) and Health Insurance (2000)
let tax = (basicSalary + bonus) * 0.08;
let healthInsurance = 2000;
let totalDeductions = tax + healthInsurance;
console.log("Total Deductions:", totalDeductions);

// Calculate Net Salary
let netSalary = basicSalary + bonus - totalDeductions;

// Ensure net salary is non-negative
netSalary = Math.max(0, netSalary);
console.log("Net Salary before Rounding:", netSalary);

// Round the Net Salary
netSalary = Math.round(netSalary);
console.log("Final Net Salary:", netSalary);
