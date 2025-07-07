// ✅ "आजची ऑफर जाणून घ्या" Popup Control
window.addEventListener('DOMContentLoaded', () => {
  const popupClosed = localStorage.getItem('popupClosed');
  if (!popupClosed) {
    setTimeout(() => {
      const popup = document.getElementById('offerPopup');
      if (popup) popup.style.display = 'block';
    }, 3000);
  }
let slideIndex = 0;
let testimonialSlider;
let autoSlideInterval;

window.addEventListener("DOMContentLoaded", () => {
  testimonialSlider = document.getElementById("testimonialSlider");
  startAutoSlide();

  testimonialSlider.addEventListener("mouseenter", stopAutoSlide);
  testimonialSlider.addEventListener("mouseleave", startAutoSlide);
});

function moveSlide(step) {
  const totalSlides = testimonialSlider.children.length;
  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  updateTestimonialSlide();
}

function updateTestimonialSlide() {
  const offset = slideIndex * 100;
  testimonialSlider.style.transform = `translateX(-${offset}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 3000); // every 3 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}


// ❌ Close Popup + Don't show again
function closePopup() {
  const popup = document.getElementById('offerPopup');
  if (popup) popup.style.display = 'none';
  localStorage.setItem('popupClosed', 'true');
}

 let slideIndex = 0;
let interval;
const slider = document.getElementById("testimonialSlider");

function moveSlide(step) {
  const images = slider.querySelectorAll("img");
  slideIndex = (slideIndex + step + images.length) % images.length;
  updateSlider();
}

function updateSlider() {
  const img = slider.querySelector("img");
  const slideWidth = img.offsetWidth + 20; // image + margin
  slider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function autoSlide() {
  moveSlide(1);
}

// Auto slide every 3s
interval = setInterval(autoSlide, 3000);

// Pause on hover
slider.addEventListener("mouseenter", () => clearInterval(interval));
slider.addEventListener("mouseleave", () => {
  interval = setInterval(autoSlide, 3000);
});

// Init on page load
window.addEventListener("DOMContentLoaded", () => {
  updateSlider();
});
                       
