function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

const hamburgerDarkModeToggle = document.getElementById("hamburger-dark-mode-toggle");
const hamburgerDarkModeIcon = document.getElementById("hamburger-dark-mode-icon");

const body = document.body;

// Check for saved preference
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    darkModeIcon.src = "./assets/light.png";
    hamburgerDarkModeIcon.src = "./assets/light.png"; 
}

// Function to toggle dark mode
function toggleDarkMode() {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        darkModeIcon.src = "./assets/light.png";  
        hamburgerDarkModeIcon.src = "./assets/light.png";  
    } else {
        localStorage.setItem("dark-mode", "disabled");
        darkModeIcon.src = "./assets/dark.png";  
        hamburgerDarkModeIcon.src = "./assets/dark.png";  
    }
}

// Event listeners
darkModeToggle.addEventListener("click", toggleDarkMode);
hamburgerDarkModeToggle.addEventListener("click", toggleDarkMode);
