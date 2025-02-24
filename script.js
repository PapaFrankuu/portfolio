function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const instaGif = document.querySelector(".insta-gif");
// Add event listener to reset animation after it completes
instaGif.addEventListener("animationend", () => {
  instaGif.style.animationPlayState = "paused"; // Reset after animation ends
});
