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

  // 🔹 Font size controls
  let nameElement = document.getElementById("name");
  let currentSize = parseFloat(window.getComputedStyle(nameElement).fontSize);

  function increaseFont() {
    currentSize += 50; // increase by 2px
    nameElement.style.fontSize = currentSize + "px";
  }

  function decreaseFont() {
    currentSize -= 50; // decrease by 2px
    if (currentSize < 10) currentSize = 10; // minimum font size
    nameElement.style.fontSize = currentSize + "px";
  }

