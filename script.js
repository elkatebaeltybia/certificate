const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");

if (name) {
  document.getElementById("name").textContent = decodeURIComponent(name);
}

document.getElementById("downloadBtn").addEventListener("click", () => {
  html2canvas(document.getElementById("certificate")).then(canvas => {
    const link = document.createElement("a");
    link.download = `${name || 'certificate'}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});
