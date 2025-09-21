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
  const nameElement = document.getElementById("name");

  // fallback: set initial size in pixels instead of vw
  let currentSize = 30; // default px
  nameElement.style.fontSize = currentSize + "px";

  function increaseFont() {
    currentSize += 2;
    nameElement.style.fontSize = currentSize + "px";
  }

  function decreaseFont() {
    currentSize -= 2;
    if (currentSize < 10) currentSize = 10; // minimum
    nameElement.style.fontSize = currentSize + "px";
  }

  // Expose functions to buttons
  window.increaseFont = increaseFont;
  window.decreaseFont = decreaseFont;

