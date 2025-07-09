/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */


// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  setInterval(() => {
    // === DESKTOP ===
    // Remove all Notion tooltips on images (desktop)
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown (desktop)
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling
    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }

    // === MOBILE ===
    // Hide mobile properties dropdown (if exists)
    // Try to find a dropdown or menu that appears after a properties button in mobile
    const mobilePropertiesBtn = document.querySelector('.notion-mobile [aria-label="Page properties"]')
    const mobilePropertiesDropdown = mobilePropertiesBtn?.nextElementSibling
    if (mobilePropertiesDropdown) {
      mobilePropertiesDropdown.style.display = 'none'
    }
  }, 1000)
}

// Tambah tombol light mode toggle
(function() {
  if (document.getElementById('light-mode-toggle')) return;

  const btn = document.createElement('button');
  btn.id = 'light-mode-toggle';
  btn.setAttribute('aria-label', 'Toggle Light Mode');
  btn.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5"/>
      <path d="M12 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12 20V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M4 12H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M22 12H20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5.64 5.64L4.22 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M5.64 18.36L4.22 19.78" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `;
  btn.type = 'button';

  btn.addEventListener('click', function() {
    const app = document.querySelector('.notion-app-inner');
    if (!app) return;
    if (app.classList.contains('notion-light-theme')) {
      app.classList.remove('notion-light-theme');
      localStorage.setItem('lightMode', '0');
    } else {
      app.classList.add('notion-light-theme');
      localStorage.setItem('lightMode', '1');
    }
  });

  // Load preferensi
  window.addEventListener('DOMContentLoaded', function() {
    const app = document.querySelector('.notion-app-inner');
    if (!app) return;
    if (localStorage.getItem('lightMode') === '1') {
      app.classList.add('notion-light-theme');
    }
  });

  document.body.appendChild(btn);
})();
