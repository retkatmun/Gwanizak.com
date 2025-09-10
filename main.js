// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
  } else {
    toggleBtn.textContent = "🌙";
  }
});


// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Subscribe Popup
const popup = document.getElementById("popup");
const subscribeBtn = document.getElementById("subscribeBtn");
const subscribeConfirm = document.getElementById("subscribeConfirm");
const subscribeMsg = document.getElementById("subscribeMsg");
const closeBtn = document.querySelector(".close-btn");

// Open popup after 3s
setTimeout(() => {
  popup.style.display = "flex";
}, 3000);

// Close popup
closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Subscribe confirmation
subscribeConfirm.addEventListener("click", () => {
  const email = document.getElementById("subscriberEmail").value;
  if (email && email.includes("@")) {
    subscribeMsg.style.display = "block";
    setTimeout(() => {
      popup.style.display = "none";
      subscribeMsg.style.display = "none";
    }, 2000);
  } else {
    alert("Please enter a valid email address.");
  }
});

