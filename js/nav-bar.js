const menuButton = document.querySelector(".menu-toggle-btn");
const navigationMenu = document.querySelector(".navbar");

const toggleMenuVisibility = function () {
  navigationMenu.classList.toggle("visible");
};

// Toggle menu when clicking the button
menuButton.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevent the document click from closing it immediately
  toggleMenuVisibility();
});

// Hide menu when clicking outside
document.addEventListener("click", (event) => {
  if (
    !navigationMenu.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    navigationMenu.classList.remove("visible");
  }
});
