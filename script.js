function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// darkmode switch
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");
const body = document.body;

// Check for saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.src = "./assets/light.png"; // Sun icon for light mode
}

// Toggle dark mode
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeIcon.src = "./assets/light.png"; // Switch to sun icon
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeIcon.src = "./assets/dark.png"; // Switch to moon icon
    }
});
