// Adds a subtle parallax movement to the blobs based on mouse position
document.addEventListener("mousemove", (e) => {
  // Calculate mouse position offset from center
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  const blobContainer = document.querySelector(".blob-container");

  // Move the container slightly in response to the mouse
  blobContainer.style.transform = `translate(${x}px, ${y}px)`;
});
