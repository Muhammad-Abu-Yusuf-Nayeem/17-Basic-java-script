/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
let burger = 400;

if (burger >= 500) {
  console.log("coke free");
} else console.log("you have to pay 30 taka for coke");

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

function bmi(weight, height) {
  return bmiValue = weight / height ** 2;
}

let w = 45,
  a = 1.3;
if (bmi(w, a) < 18.5) {
  console.log("you are under weight");
} else if (bmi(w, a) >= 18.5 || bmi(w, a) <= 24.9) {
  console.log("you are normal");
} else {
  console.log("you are obese");
}
