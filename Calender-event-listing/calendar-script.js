document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    // Sets the default view
    initialView: "dayGridMonth",

    // Toolbar configuration
    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,listWeek",
    },

    // --- ADD THESE TWO ---
    height: "auto", // This tells the calendar to grow vertically based on content

    handleWindowResize: true, // Ensures it recalculates when you flip a phone sideways
    // ---------------------

    // Static Events Data
    events: [
      {
        title: "Global Rebranding Launch",
        start: "2026-03-04",
        color: "#1d4ed8", // Enterprise Blue
      },
      {
        title: "Technical Workshop: Webflow CMS",
        start: "2026-03-10T14:00:00",
        end: "2026-03-10T16:00:00",
        color: "#7c3aed", // Purple
      },
      {
        title: "Diwali Corporate Gala",
        start: "2026-03-25",
        allDay: true,
        color: "#ffb200", // Yellow/Gold
      },
    ],

    // Enterprise Touch: Open links in new tab when an event is clicked
    eventClick: function (info) {
      if (info.event.url) {
        window.open(info.event.url, "_blank");
        info.jsEvent.preventDefault();
      }
    },
  });

  calendar.render();
});
