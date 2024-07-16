let navBar = document.body.getElementsByTagName("nav")[0];

const accentColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--accent")
  .trim();
const fontColor = getComputedStyle(document.documentElement)
  .getPropertyValue("--text-color-dark")
  .trim();

window.addEventListener("scroll", () => {
  if (
    window.scrollY <=
    window.innerHeight - (window.innerWidth <= 900 ? 70 : 100)
  ) {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  else {
    document
      .getElementById(event.target.id.split("-")[0])
      .scrollIntoView({ behavior: "smooth" });
  }
}

for (let button of navBar.getElementsByTagName("button"))
  button.onclick = scrollToSection;
