const hamburgerBtn = document.querySelector(".hamburger");
const sidebarEl = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close__bar");
const dateEl = document.querySelector(".date");

// hamburger menu
hamburgerBtn.addEventListener("click", function () {
  sidebarEl.classList.remove("hide__bar");
});
closeBtn.addEventListener("click", function () {
  sidebarEl.classList.add("hide__bar");
});

// The date function
const currentYear = new Date().getFullYear();

if (currentYear <= 2023) {
  dateEl.textContent = new Date().getFullYear();
} else {
  dateEl.textContent = `2023 - ${currentYear}`;
}

// function to check if the screen size is greater than 768px and hide the sidebar

window.addEventListener("resize", function () {
  if (window.innerWidth >= 768) {
    sidebarEl.classList.add("hide__bar");
  }
});
