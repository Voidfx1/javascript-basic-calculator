export function changeTheme() {
  const lightTheme = "styles/light.css";
  const darkTheme = "styles/dark.css";
  const sunIcon = "assets/SunIcon.svg";
  const moonIcon = "assets/MoonIcon.svg";

  const themeIcon = document.getElementById("theme-icon");
  const toast = document.getElementById("toast");
  const theme = document.getElementById("theme");

  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);

  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Dark Mode 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Light Mode ☀️";
  }
}
