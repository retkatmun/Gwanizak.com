const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('toggle');
  overlay.classList.remove('show');
}

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  hamburger.classList.toggle('toggle');
  overlay.classList.toggle('show');
});

overlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function copyAcct() {
  var acct = document.getElementById("acct").innerText;
  navigator.clipboard.writeText(acct);
  alert("Account number copied: " + acct);
}

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slide");
  if (n >= slides.length) { slideIndex = 0 }
  if (n < 0) { slideIndex = slides.length - 1 }

  slides.forEach(slide => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}
