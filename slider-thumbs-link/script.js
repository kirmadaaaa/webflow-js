const slides = document.querySelectorAll(".slide");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => {
    const index = thumb.dataset.index;

    // Remove active states
    slides.forEach((slide) => slide.classList.remove("active"));
    thumbs.forEach((t) => t.classList.remove("active"));

    // Activate selected slide + thumb
    slides[index].classList.add("active");
    thumb.classList.add("active");
  });
});
