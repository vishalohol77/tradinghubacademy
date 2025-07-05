document.addEventListener("DOMContentLoaded", function () {
  // Optional Console Log
  console.log("Website Loaded - TRADING HUB ACADEMY");

  // 🔁 GALLERY AUTO SLIDER (Optional – enables one-by-one image display)
  const galleryImages = document.querySelectorAll(".gallery img");
  let currentIndex = 0;

  if (galleryImages.length > 1) {
    setInterval(() => {
      galleryImages.forEach((img, i) => {
        img.style.display = i === currentIndex ? "block" : "none";
      });
      currentIndex = (currentIndex + 1) % galleryImages.length;
    }, 3000);
  }

  // 📲 WHATSAPP BUTTON HOVER EFFECT
  const whatsappBtn = document.querySelector(".whatsapp-button");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("mouseenter", () => {
      console.log("🟢 WhatsApp Button Hovered");
    });
    whatsappBtn.addEventListener("click", () => {
      console.log("🟢 WhatsApp Button Clicked");
    });
  }
});

