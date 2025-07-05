/* ===== GLOBAL STYLES ===== */
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #000;
  color: #fff;
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
  color: #00ffcc;
}

/* ===== OFFER BAR ===== */
.offer-bar {
  background: red;
  color: yellow;
  font-weight: bold;
  padding: 10px 0;
  text-align: center;
  animation: blink 1s infinite alternate, scroll 15s linear infinite;
  white-space: nowrap;
  overflow: hidden;
}
@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}
@keyframes scroll {
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
}

/* ===== LOGO ===== */
.logo-section {
  background: #111;
  text-align: center;
  padding: 20px 0;
}
.logo {
  width: 140px;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 0 10px #0f0;
}

/* ===== MAIN TITLE ===== */
.main-title {
  font-size: 2.5rem;
  color: #00ffcc;
  text-shadow: 2px 2px 5px #000;
  margin-top: 20px;
}
.subtitle {
  font-size: 1.2rem;
  color: #ccc;
  padding: 10px;
}

/* ===== INTRO SECTION ===== */
.intro {
  padding: 20px;
  background-color: #111;
  color: #eee;
  border-left: 5px solid lime;
  box-shadow: inset 0 0 10px #0f0;
}
.warn {
  color: red;
  font-weight: bold;
  animation: blink 1s infinite;
}

/* ===== 3D HEADING SECTION ===== */
.highlight-section {
  background: #000;
  padding: 20px;
}
.heading-3d {
  font-size: 1.6rem;
  color: #00ffcc;
  text-align: center;
  transform: perspective(1000px) rotateX(10deg);
}
.highlight-section ul {
  list-style-type: none;
  padding-left: 0;
}
.highlight-section li {
  margin: 8px 0;
  padding-left: 10px;
  font-size: 1rem;
  border-left: 3px solid #0f0;
  padding-left: 10px;
  color: #ccc;
}

/* ===== SYLLABUS SECTION ===== */
.syllabus {
  padding: 25px;
  background: #111;
}
.syllabus h2 {
  text-align: center;
  color: #0ff;
}
.syllabus ul {
  list-style: none;
  padding: 0;
}
.syllabus li {
  padding: 10px;
  border-bottom: 1px solid #444;
}
.syllabus .highlight {
  color: yellow;
  font-weight: bold;
}

/* ===== GALLERY SECTION ===== */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 20px;
  background: #000;
}
.gallery img {
  width: 200px;
  height: auto;
  border: 2px solid #0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px lime;
  transition: transform 0.3s ease;
}
.gallery img:hover {
  transform: scale(1.05);
}

/* ===== TESTIMONIALS SECTION ===== */
.testimonials {
  padding: 20px;
  background-color: #111;
}
.testimonials h2 {
  text-align: center;
  color: #0ff;
}
.testimonial-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
}
.testimonial-row img {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  border: 2px solid #0ff;
}

/* ===== CALL TO ACTION ===== */
.cta {
  padding: 30px;
  background: #222;
  text-align: center;
}
.cta h2 {
  color: #00ffcc;
}
.cta a {
  display: inline-block;
  margin-top: 15px;
  background: #25D366;
  color: #fff;
  padding: 10px 20px;
  border-radius: 40px;
  font-weight: bold;
  box-shadow: 0 0 10px #25D366;
}
.cta a:hover {
  background: #1ebd5a;
}

/* ===== MAP BLOCK ===== */
.map-block {
  background-color: #000;
  padding: 30px;
  text-align: center;
}
.map-block iframe {
  width: 90%;
  height: 250px;
  margin-top: 10px;
  border: none;
  box-shadow: 0 0 10px #0ff;
}
.map-block p, .map-block a {
  color: #ccc;
  font-size: 0.95rem;
}

/* ===== FOOTER ===== */
.footer {
  background: #111;
  color: #888;
  padding: 20px;
  font-size: 0.9rem;
  text-align: center;
}

/* ===== FIXED WHATSAPP BUTTON ===== */
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 1000;
  box-shadow: 0 0 15px #25D366;
}
.whatsapp-button a {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #fff;
  height: 100%;
  width: 100%;
}
.whatsapp-button:hover {
  transform: scale(1.1);
}

/* ===== MEDIA QUERY FOR MOBILE ===== */
@media (max-width: 600px) {
  .main-title { font-size: 2rem; }
  .gallery img, .testimonial-row img { width: 90px; }
  .cta a { font-size: 0.9rem; padding: 8px 16px; }
}
