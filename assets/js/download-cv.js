function downloadCV() {
  let downloadLink = document.createElement("a");
  downloadLink.href = "Mosnegutu_Adrian_CV.pdf";
  downloadLink.download = "MosnegutuAdrianCV.pdf";
  downloadLink.click();
}

document.getElementById("download-cv").onclick = downloadCV;
