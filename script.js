// ✅ "आजची ऑफर जाणून घ्या" Popup Control
window.addEventListener('DOMContentLoaded', () => {
  const popupClosed = localStorage.getItem('popupClosed');
  if (!popupClosed) {
    setTimeout(() => {
      const popup = document.getElementById('offerPopup');
      if (popup) popup.style.display = 'block';
    }, 3000);
  }

  // 🔁 Start testimonial auto-slide
  slider = document.getElementById("testimonialSlider");
  startAutoSlide();
  slider.addEventListener("mouseenter", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
});

// ❌ Close Popup + Don't show again
function closePopup() {
  const popup = document.getElementById('offerPopup');
  if (popup) popup.style.display = 'none';
  localStorage.setItem('popupClosed', 'true');
}

// 🔄 Testimonial Slider Controls
let slideIndex = 0;
let slider;
let interval;

function moveSlide(step) {
  const totalSlides = slider.children.length;
  slideIndex = (slideIndex + step + totalSlides) % totalSlides;
  updateSlide();
}

function startAutoSlide() {
  interval = setInterval(() => {
    moveSlide(1);
  }, 4000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

function updateSlide() {
  const offset = slideIndex * (160 + 20); // 160px image + 20px gap
  slider.style.transform = `translateX(-${offset}px)`;
}

// 🔧 Placeholder for Admin Panel Content Sync
function updateContentFromAdmin(data) {
  // Future use:
  // document.querySelector('.main-title').textContent = data.title;
}
