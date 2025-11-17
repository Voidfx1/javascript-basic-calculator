export function updateScreen(value) {
  const res = document.getElementById("result");
  res.value += value;
}

export function clearScreen() {
  const res = document.getElementById("result");
  res.value = "";
}

export function setScreen(value) {
  const res = document.getElementById("result");
  res.value = value;
}
