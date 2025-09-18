const stylesheet = document.getElementById("theme");
const button = document.getElementById("styleSwitch");

const savedTheme = localStorage.getItem("styleType");
if (savedTheme) {
  stylesheet.href = savedTheme;
}

button.addEventListener("click", () => {
  if (stylesheet.href.includes("default.css")) {
    stylesheet.href = "css/default2.css";
    localStorage.setItem("styleType", "css/default2.css");
  } else {
    stylesheet.href = "css/default.css";
    localStorage.setItem("styleType", "css/default.css");
  }
});