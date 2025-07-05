/* GENERAL */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background-color: #0d1117;
  color: white;
  overflow-x: hidden;
}
.container {
  max-width: 960px;
  margin: auto;
  padding: 20px;
}

/* OFFER BAR */
.offer-bar {
  background: #ff0000;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  animation: scroll-left 15s linear infinite;
}
@keyframes scroll-left {
  0% {transform: translateX(100%);}
  100% {transform: translateX(-100%);}
}

/* LOGO */
.logo-section {
  text-align: center;
  margin: 20px 0;
}
.logo-section img.logo {
  max-width: 180px;
  height: auto;
}

/* TITLES */
.main-title {
  text-align: center;
  font-size: 40px;
  color: #00e676;
  text-shadow: 0 0 10px #00e676;
}
.subtitle {
  text-align: center;
  font-size: 22px;
  color: #f44336;
}
.blinking {
  animation: blink 1.2s infinite;
}
@keyframes blink {
  0%, 100% {opacity: 1;}
  50% {opacity: 0;}
}

/* INTRO + WARN */
.intro p {
  font-size: 18px;
  line-height: 1.6;
}
.warn {
  color: #ffcc00;
  font-weight: bold;
}

/* HIGHLIGHT SECTIONS */
.highlight-section,
.syllabus {
  background-color: #161b22;
  border-left: 5px solid #00e5ff;
  padding: 20px;
  border-radius: 10px;
  margin-top: 30px;
}
.highlight-section h3,
.syllabus h2 {
  color: #00e5ff;
}

/* LISTS */
ul {
  padding-left: 20px;
}
ul li {
  font-size: 18px;
  margin-bottom: 8px;
}
li.highlight {
  color: #ff4081;
  font-weight: bold;
}

/* GALLERY */
.gallery {
  margin-top: 30px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
}
.gallery img {
  width: 300px;
  border-radius: 10px;
  border: 2px solid #444;
}

/* CTA SECTION */
.cta {
  background: #25D366;
  color: black;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin-top: 40px;
}
.cta a {
  background: black;
  color: #25D366;
  padding: 10px 25px;
  font-weight: bold;
  font-size: 18px;
  display: inline-block;
  margin-top: 10px;
  text-decoration: none;
  border-radius: 25px;
}

/* MAP BLOCK */
.map-block {
  text-align: center;
  margin-top: 40px;
}
.map-block iframe {
  width: 100%;
  height: 250px;
  border: 0;
  border-radius: 10px;
}
.map-block a {
  display: inline-block;
  margin-top: 10px;
  font-size: 18px;
  color: #1e90ff;
}

/* FOOTER */
.footer {
  text-align: center;
  font-size: 16px;
  color: #999;
  padding: 20px 10px;
  margin-top: 50px;
  border-top: 1px solid #444;
}

/* WHATSAPP BUTTON */
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #25D366;
  border-radius: 50%;
  padding: 12px;
  font-size: 25px;
  z-index: 999;
}
.whatsapp-button a {
  color: white;
  text-decoration: none;
}
