let num1 = parseFloat(prompt("Enter the first number:"));

let num2 = parseFloat(prompt("Enter the second number:"));

let operator = prompt("Choose an operation (+, -, *, /):");

if (operator === "+") {
  result = num1 + num2;
} else if (operator === "-") {
  result = num1 - num2;
} else if (operator === "*") {
  result = num1 * num2;
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
  }
} else {
  result = "Invalid operator. Please choose +, -, *, or /.";
}