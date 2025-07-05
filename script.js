/* ===== Global Styling ===== */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #000;
  color: #fff;
  scroll-behavior: smooth;
}
h1, h2, h3, p {
  margin: 10px 0;
  text-align: center;
}
a {
  color: #0f0;
  text-decoration: none;
}

/* ===== Offer Strip (Top Scrolling) ===== */
.offer-strip {
  background: red;
  color: yellow;
  font-weight: bold;
  padding: 10px 0;
  overflow: hidden;
  white-space: nowrap;
  animation: scrollText 15s linear infinite;
}
@keyframes scrollText {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* ===== Hero Section ===== */
.hero {
  background: linear-gradient(145deg, #111, #222);
  padding: 60px 20px;
  text-align: center;
  transform: perspective(1000px) rotateX(3deg);
}
.title {
  font-size: 2.5rem;
  color: #00ffcc;
  text-shadow: 2px 2px 5px #000;
}
.tagline {
  font-size: 1.2rem;
  color: #ccc;
}

/* ===== Slider ===== */
.slider {
  text-align: center;
  margin: 20px 0;
}
.slider img {
  width: 90%;
  max-width: 800px;
  border: 5px solid #00ffcc;
  border-radius: 10px;
  box-shadow: 0 0 20px lime;
  animation: zoomIn 2s ease-in-out;
}
@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

/* ===== Courses Section ===== */
.courses {
  background: #111;
  padding: 30px 15px;
}
.course-card {
  background: #222;
  margin: 20px auto;
  padding: 20px;
  max-width: 600px;
  border-left: 5px solid lime;
  border-radius: 8px;
  box-shadow: 0 0 10px #0f0;
  transition: transform 0.3s;
}
.course-card:hover {
  transform: scale(1.03);
}
.course-card h3 {
  color: #0ff;
}
.course-card ul {
  list-style-type: none;
  padding-left: 0;
  color: #ccc;
}

/* ===== Video Section ===== */
.video {
  background: #000;
  padding: 30px 20px;
}
.video iframe {
  width: 90%;
  max-width: 600px;
  height: 315px;
  border: none;
  box-shadow: 0 0 15px #00ffcc;
}

/* ===== About Trainer ===== */
.about {
  background: #111;
  padding: 30px 20px;
  font-size: 1rem;
  color: #ccc;
}

/* ===== Contact Section ===== */
.contact {
  background: #000;
  padding: 30px 20px;
  font-size: 1.1rem;
}
.contact a {
  display: inline-block;
  margin-top: 10px;
  font-weight: bold;
}

/* ===== Footer ===== */
footer {
  background: #111;
  color: #777;
  padding: 15px;
  font-size: 0.9rem;
  text-align: center;
}

/* ===== WhatsApp Button (Fixed) ===== */
.whatsapp-fixed {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  color: white;
  padding: 12px 20px;
  border-radius: 50px;
  font-weight: bold;
  box-shadow: 0 0 10px #25D366;
  z-index: 1000;
  transition: 0.3s ease;
}
.whatsapp-fixed:hover {
  transform: scale(1.1);
  background: #1ebd5a;
}
