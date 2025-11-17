import { calculateExpression } from "./calculate.js";
import { updateScreen, setScreen } from "./screen.js";

export function setupKeyboard() {
  const res = document.getElementById("result");

  document.addEventListener("keydown", (e) => {
    e.preventDefault();

    if (!isNaN(e.key)) {
      updateScreen(e.key);
    }

    if (["+", "-", "*", "/"].includes(e.key)) {
      updateScreen(e.key);
    }

    if (e.key === ".") {
      updateScreen(".");
    }

    if (e.key === "Enter") {
      const result = calculateExpression(res.value);
      setScreen(result);
    }

    if (e.key === "Backspace") {
      res.value = res.value.slice(0, -1);
    }
  });
}
