// 🔍 Search filter
const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function () {
  let filter = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll(".download-card");

  cards.forEach(card => {
    let title = card.querySelector("h3").textContent.toLowerCase();
    card.style.display = title.includes(filter) ? "" : "none";
  });
});

// 🌙 Dark Mode Toggle
const darkBtn = document.getElementById("darkModeBtn");

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkBtn.textContent = "☀️";
} else {
  document.body.classList.remove("dark");
  darkBtn.textContent = "🌙";
}

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkBtn.textContent = "🌙";
  }
});
