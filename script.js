// ✅ Website JS for Trading Hub Academy

document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 Trading Hub Academy Website Loaded");

  // 🔁 Auto Gallery Slider
  const galleryImages = document.querySelectorAll(".gallery img");
  let currentIndex = 0;

  if (galleryImages.length > 1) {
    galleryImages.forEach((img, i) => {
      img.style.display = i === 0 ? "block" : "none";
    });

    setInterval(() => {
      galleryImages.forEach((img, i) => {
        img.style.display = i === currentIndex ? "block" : "none";
      });
      currentIndex = (currentIndex + 1) % galleryImages.length;
    }, 3000);
  }

  // 📲 WhatsApp Button Interaction
  const whatsappBtn = document.querySelector(".whatsapp-button");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("mouseenter", () => {
      console.log("🟢 Hovered on WhatsApp Button");
    });
    whatsappBtn.addEventListener("click", () => {
      console.log("✅ WhatsApp Contact Clicked");
    });
  }

  // 🔦 Highlight visible sections (optional scroll-based effect)
  const highlightSections = document.querySelectorAll(".highlight-section li, .syllabus li");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = '0.5s';
        entry.target.style.transform = 'translateX(0)';
        entry.target.style.opacity = 1;
      }
    });
  }, {
    threshold: 0.3
  });

  highlightSections.forEach(item => {
    item.style.transform = 'translateX(-20px)';
    item.style.opacity = 0;
    observer.observe(item);
  });
});
