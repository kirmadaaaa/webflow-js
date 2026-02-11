const nameInput = document.getElementById("user-name");
const themeSelect = document.getElementById("theme-pref");
const saveBtn = document.getElementById("save-btn");
const profileDropdown = document.getElementById("profile-dropdown");
const displayName = document.getElementById("display-name");
const bodyTag = document.body;

// 1. Load profiles from LocalStorage or start with empty array
let profiles = JSON.parse(localStorage.getItem("userProfiles")) || [];

// 2. Function to update the dropdown UI
function updateDropdown() {
  profileDropdown.innerHTML = '<option value="">Select a user...</option>';
  profiles.forEach((user) => {
    const opt = document.createElement("option");
    opt.value = user.name;
    opt.textContent = user.name;
    profileDropdown.appendChild(opt);
  });
}

// 3. Save / Create Profile
saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const theme = themeSelect.value;

  if (!name) return alert("Please enter a name");

  // Check if user exists, update them; otherwise add new
  const userIndex = profiles.findIndex((u) => u.name === name);
  if (userIndex > -1) {
    profiles[userIndex].theme = theme;
  } else {
    profiles.push({ name: name, theme: theme });
  }

  localStorage.setItem("userProfiles", JSON.stringify(profiles));
  updateDropdown();
  applyPreference(name, theme);
  nameInput.value = ""; // Clear input
});

// 4. Switch Profile Logic
profileDropdown.addEventListener("change", (e) => {
  const selectedName = e.target.value;
  const user = profiles.find((u) => u.name === selectedName);

  if (user) {
    applyPreference(user.name, user.theme);
  }
});

function applyPreference(name, theme) {
  displayName.innerText = name;
  bodyTag.className = theme;
}

// Initialize on load
updateDropdown();
