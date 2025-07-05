// 🔐 Login Logic
function checkLogin() {
  const pass = document.getElementById("adminPass").value;
  const correct = "tradinghub123";
  if (pass === correct) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    document.getElementById("loginError").innerText = "❌ Wrong password!";
  }
}

// 🔧 Generate HTML Output
function generateHTML() {
  const offer = document.getElementById("offerInput").value.trim();
  const courses = document.getElementById("courseInput").value.split(",");
  const whatsapp = document.getElementById("waNumber").value.trim();

  let html = `
<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trading Hub Academy</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- 🔥 OFFER BAR -->
  <div class="offer-bar">🔥 ${offer} 🔥</div>

  <!-- 🖼️ LOGO -->
  <header class="logo-section">
    <img src="images/logo.png" alt="Trading Hub Academy Logo" class="logo" />
  </header>

  <div class="container">
    <h1 class="main-title blinking">🚀 TRADING HUB ACADEMY 🚀</h1>
    <h2 class="subtitle">"शेअर मार्केट शिकायचंय, पण कुठून सुरूवात करावी – समजत नाही?"</h2>

    <section class="syllabus">
      <h2>📚 Course Details:</h2>
      <ul>
`;

  courses.forEach((item) => {
    html += `<li>📘 ${item.trim()}</li>\n`;
  });

  html += `
      </ul>
    </section>

    <!-- ✅ CALL TO ACTION -->
    <div class="cta">
      <h2>🚀 तुमचं ट्रेडिंग यश इथून सुरू होतं!</h2>
      <a href="https://wa.me/${whatsapp}?text=Hi%20Trading%20Hub%20Academy%2C%20मला%20कोर्स%20बद्दल%20माहिती%20हवी%20आहे." target="_blank">
        👉 WhatsApp वर संपर्क करा
      </a>
    </div>

    <footer class="footer">
      📞 ${whatsapp} • 🌐 www.tradinghubacademy.in
    </footer>
  </div>
</body>
</html>
`;

  // Output to textarea
  document.getElementById("outputHTML").value = html;
}
