export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */


// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  function applyLightMode() {
    // Hapus style light mode jika ada
    const existing = document.getElementById('notion-light-style');
    if (existing) existing.remove();

    // Cek mode dari #theme-data
    const themeData = document.getElementById('theme-data');
    if (!themeData) return;
    let mode = 'system';
    try {
      mode = JSON.parse(themeData.textContent).mode;
    } catch {}

    if (mode === 'light') {
      // Tambahkan style block khusus light mode
      const style = document.createElement('style');
      style.id = 'notion-light-style';
      style.innerHTML = `
        .notion-app-inner {
          background-color: #fff !important;
          color: #23272f !important;
          --bg-main: #fff;
          --bg-sidebar: #f7f7f8;
          --text-main: #23272f;
          --border-main: #e5e5e7;
          --link: var(--indigo-6);
          --surface-hover: #e5e5e7;
        }
      `;
      document.head.appendChild(style);
    }
  }

  // Toggle button
  function createToggleButton() {
    if (document.getElementById('x-toggle')) return;
    const toggle = document.createElement('div');
    toggle.id = 'x-toggle';
    toggle.innerHTML = '<div class="toggle-icon sun"></div><span class="toggle-text">Light</span><div class="toggle-icon moon"></div>';

    toggle.addEventListener('click', function() {
      const themeData = document.getElementById('theme-data');
      if (!themeData) return;
      let mode = 'system';
      try {
        mode = JSON.parse(themeData.textContent).mode;
      } catch {}
      if (mode === 'light') {
        themeData.textContent = JSON.stringify({ mode: 'system' });
        toggle.querySelector('.toggle-text').textContent = 'Light';
        localStorage.setItem('theme', 'dark');
      } else {
        themeData.textContent = JSON.stringify({ mode: 'light' });
        toggle.querySelector('.toggle-text').textContent = 'Dark';
        localStorage.setItem('theme', 'light');
      }
      applyLightMode();
    });

    document.body.appendChild(toggle);
  }

  // Inisialisasi dari localStorage
  function initializeTheme() {
    const themeData = document.getElementById('theme-data');
    if (!themeData) return;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      themeData.textContent = JSON.stringify({ mode: 'light' });
    } else {
      themeData.textContent = JSON.stringify({ mode: 'system' });
    }
    applyLightMode();
  }

  createToggleButton();
  initializeTheme();

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

</script>`