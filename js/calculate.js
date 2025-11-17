import { add } from "./add.js";
import { subtract } from "./subtract.js";
import { multiply } from "./multiply.js";
import { divide } from "./divide.js";

export function calculateExpression(expression) {
  let operator;

  if (expression.includes("+")) operator = "+";
  else if (expression.includes("-")) operator = "-";
  else if (expression.includes("*")) operator = "*";
  else if (expression.includes("/")) operator = "/";
  else return "";

  const parts = expression.split(operator);
  const a = parseFloat(parts[0]);
  const b = parseFloat(parts[1]);

  switch (operator) {
    case "+": return add(a, b);
    case "-": return subtract(a, b);
    case "*": return multiply(a, b);
    case "/": return divide(a, b);
  }
}
