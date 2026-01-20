// 1. Ensure the dataLayer exists (Standard GTM Practice)
window.dataLayer = window.dataLayer || [];

document.getElementById("purchase-btn").addEventListener("click", () => {
  // 2. The "Push" - This sends data to GTM without reloading the page
  window.dataLayer.push({
    event: "purchase_completed", // The "Trigger" name
    transaction_id: "T12345",
    value: 99.0,
    currency: "USD",
  });

  alert("DataLayer Event Sent: purchase_completed");
  console.log("Current DataLayer:", window.dataLayer);
});

document.getElementById("lead-btn").addEventListener("click", () => {
  window.dataLayer.push({
    event: "lead_generated",
    form_location: "hero_section",
  });

  alert("DataLayer Event Sent: lead_generated");
});
