import { calculateExpression } from "./calculate.js";
import { updateScreen, clearScreen, setScreen } from "./screen.js";
import { changeTheme } from "./theme.js";
import { setupKeyboard } from "./keyboard.js";

// handle button input
window.inputValue = updateScreen;
window.clearScreen = clearScreen;

window.showResult = function () {
  const res = document.getElementById("result");
  const result = calculateExpression(res.value);
  setScreen(result);
};

// theme toggle
window.changeTheme = changeTheme;

// activate keyboard
setupKeyboard();
