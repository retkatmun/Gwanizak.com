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

const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');
const captionText = document.getElementById('caption');
const galleryItems = document.querySelectorAll('.gallery-item');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function openModal(index) {
  modal.style.display = "block";
  currentIndex = index;
  modalImg.src = galleryItems[currentIndex].src;
  captionText.innerHTML = galleryItems[currentIndex].alt;
}

function closeModal() {
  modal.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
  captionText.innerHTML = galleryItems[currentIndex].alt;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  modalImg.src = galleryItems[currentIndex].src;
  captionText.innerHTML = galleryItems[currentIndex].alt;
}

// Event listeners
galleryItems.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
nextBtn.addEventListener('click', nextImage);
prevBtn.addEventListener('click', prevImage);

// Close modal when clicking outside image
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
