document.addEventListener("DOMContentLoaded", function () {
  // 1. Initialize an empty array for the "Harvested" events
  const harvestedEvents = [];

  // 2. Select all simulated CMS items from the HTML
  const cmsItems = document.querySelectorAll(".cms-item");

  // 3. THE HANDSHAKE: Loop through each HTML item and extract values
  cmsItems.forEach((item) => {
    const titleText = item.querySelector(".event-title").innerText;
    const startDate = item.querySelector(".event-start").innerText;
    const hexColor = item.querySelector(".event-color").innerText;

    // Push a clean object into our array
    harvestedEvents.push({
      title: titleText,
      start: startDate,
      color: hexColor,
    });
  });

  // 4. Initialize FullCalendar using our harvested array
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "auto", // Responsive height based on content
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,listWeek",
    },
    events: harvestedEvents, // This is the data bridge!
  });

  calendar.render();
});
