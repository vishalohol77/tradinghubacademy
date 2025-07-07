// 📢 Show Popup after 3 seconds
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const popup = document.getElementById('offerPopup');
    if (popup) popup.style.display = 'block';
  }, 3000);
});

// ✅ Placeholder for future admin-panel data (Firebase/Local Update)
function updateContentFromAdmin(data) {
  // Example (future): document.querySelector('.main-title').textContent = data.title;
  // This function can be extended to sync dynamic content.
}
