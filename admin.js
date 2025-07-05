
function generateCode() {
  const offerText = document.getElementById('offerText').value;
  const mainHeading = document.getElementById('mainHeading').value;
  const whatsappNumber = document.getElementById('whatsappNumber').value;
  const courseDetails = document.getElementById('courseDetails').value;
  const locationText = document.getElementById('locationText').value;
  const mapUrl = document.getElementById('mapUrl').value;
  const footerInfo = document.getElementById('footerInfo').value;

  const courseItems = courseDetails.split(',').map(item => `<li>${item.trim()}</li>`).join('\n');

  const logoFile = document.getElementById('logoFile').files[0];
  const bgFile = document.getElementById('bgFile').files[0];

  const reader1 = new FileReader();
  const reader2 = new FileReader();

  reader1.onloadend = function () {
    const logoBase64 = reader1.result;

    reader2.onloadend = function () {
      const bgBase64 = reader2.result;

      const html = \`
<!DOCTYPE html>
<html lang="mr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Trading Hub Academy</title>
  <style>body { background: url('\${bgBase64}') no-repeat center center/cover; }</style>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="offer-bar">\${offerText}</div>
  <header class="logo-section">
    <img src="\${logoBase64}" alt="Logo" class="logo" />
  </header>
  <div class="container">
    <h1 class="main-title blinking">🚀 \${mainHeading} 🚀</h1>
    <section class="syllabus"><ul>\${courseItems}</ul></section>
    <div class="cta"><a href="https://wa.me/\${whatsappNumber}" target="_blank">👉 WhatsApp वर संपर्क करा</a></div>
    <div class="map-block"><p>\${locationText}</p><iframe src="\${mapUrl}" loading="lazy"></iframe></div>
    <footer class="footer">\${footerInfo}</footer>
  </div>
</body>
</html>
\`;

      document.getElementById('outputCode').value = html;
    };

    if (bgFile) {
      reader2.readAsDataURL(bgFile);
    }
  };

  if (logoFile) {
    reader1.readAsDataURL(logoFile);
  }
}

function copyCode() {
  const textarea = document.getElementById('outputCode');
  textarea.select();
  document.execCommand('copy');
  alert('Code copied!');
}
