let current = 0;
const images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
const slider = document.getElementById("slider-image");
setInterval(() => {
  current = (current + 1) % images.length;
  slider.src = images[current];
}, 3000);
