const steps = document.querySelectorAll(".form-step");
const nextButtons = document.querySelectorAll("[data-next]");
const prevButtons = document.querySelectorAll("[data-prev]");
const form = document.getElementById("multiStepForm");

let currentStep = 0;

// Set page URL hidden field
document.getElementById("pageUrl").value = window.location.href;

function showStep(index) {
  steps.forEach((step) => step.classList.remove("active"));
  steps[index].classList.add("active");
}

function validateStep(stepIndex) {
  const inputs = steps[stepIndex].querySelectorAll("input, select, textarea");
  for (let input of inputs) {
    if (!input.checkValidity()) {
      input.reportValidity();
      return false;
    }
  }
  return true;
}

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!validateStep(currentStep)) return;

    // Save business type to hidden field
    if (currentStep === 1) {
      const businessValue = document.getElementById("businessType").value;
      document.getElementById("businessTypeHidden").value = businessValue;
    }

    currentStep++;
    showStep(currentStep);
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentStep--;
    showStep(currentStep);
  });
});

// Optional submit handler
form.addEventListener("submit", (e) => {
  if (!validateStep(currentStep)) {
    e.preventDefault();
  }
});
