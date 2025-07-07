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
let autoSlideInterval;

window.addEventListener('DOMContentLoaded', () => {
  startAutoSlide();
});

function moveSlide(step) {
  const slider = document.getElementById("testimonialSlider");
  const totalSlides = slider.children.length;
  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  updateSlider();
}

function updateSlider() {
  const slider = document.getElementById("testimonialSlider");
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    moveSlide(1);
  }, 4000);
}
