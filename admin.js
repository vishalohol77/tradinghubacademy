// admin.js

document.addEventListener("DOMContentLoaded", function () { 
  // ✅ Confirm site loaded
  console.log("✅ TRADING HUB ACADEMY Website Loaded");

  // 🔁 AUTO GALLERY SLIDER (show one image at a time)
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

  // 📲 WHATSAPP BUTTON INTERACTION
  const whatsappBtn = document.querySelector(".whatsapp-button");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("mouseenter", () => {
      console.log("🟢 Hovered on WhatsApp Button");
    });
    whatsappBtn.addEventListener("click", () => {
      console.log("✅ WhatsApp Contact Clicked");
    });
  }

  // 💡 SCROLL ANIMATION placeholder (for future use)
  window.addEventListener("scroll", () => {
    // Placeholder for scroll-based animations or lazy loading
  });

  // 🔐 OPTIONAL: Future Login Authentication can go here

});
