document.addEventListener("DOMContentLoaded", () => {
  const bookBtn = document.getElementById("book-btn");

  bookBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // This is a REAL Calendly link used for testing
    Calendly.initPopupWidget({
      url: "https://calendly.com/davidarakkal99/30min",
    });

    return false;
  });
});
