let navBar = document.body.getElementsByTagName("nav")[0];

const accentColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--accent")
  .trim();
const fontColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--text-color-dark")
  .trim();

window.addEventListener("scroll", () => {
  if (window.scrollY <= 0) {
    navBar.style.background = "transparent";
    navBar.style.color = "white";
    navBar.style.boxShadow = "none";

    for (let link of navBar.getElementsByTagName("button"))
      link.style.color = "white";
    for (let link of navBar.getElementsByTagName("i"))
      link.style.color = "white";
  } else {
    navBar.style.background = "white";
    navBar.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";

    for (let link of navBar.getElementsByTagName("button"))
      link.style.color = fontColor;
    for (let link of navBar.getElementsByTagName("i"))
      link.style.color = fontColor;
  }
});

function scrollToSection(event) {
  if (event.target.id === "logo")
    document
      .getElementsByTagName("header")[0]
      .scrollIntoView({ behavior: "smooth" });
  else {
    document
      .getElementById(event.target.innerHTML.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  }
}

for (let button of navBar.getElementsByTagName("button")) {
  button.onclick = scrollToSection;
}
