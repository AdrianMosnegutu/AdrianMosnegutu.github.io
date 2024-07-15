function showMoreOrLess(event) {
  const paragraphs = event.target.parentNode.getElementsByTagName("p");

  if (event.target.innerHTML === "Show more...") {
    for (let paragraph of paragraphs) paragraph.style.display = "block";
    event.target.innerHTML = "Show less...";
  } else {
    for (let paragraph of paragraphs) paragraph.style.display = "none";
    paragraphs[0].style.display = "block";
    event.target.innerHTML = "Show more...";
  }
}

for (let project of document.getElementsByClassName("project")) {
  const showButton = project.children[0].getElementsByTagName("button")[0];
  const paragraphs = project.getElementsByTagName("p");

  for (let paragraph of paragraphs) paragraph.style.display = "none";
  paragraphs[0].style.display = "block";

  showButton.onclick = showMoreOrLess;
}
