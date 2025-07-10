export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */


// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  function applyLightMode() {
    const themeData = document.getElementById('theme-data');
    const notionApp = document.querySelector('.notion-app-inner');
    if (!themeData || !notionApp) return;
    let mode = 'system';
    try {
      mode = JSON.parse(themeData.textContent).mode;
    } catch {}
    if (mode === 'light') {
      notionApp.classList.add('notion-light-theme');
    } else {
      notionApp.classList.remove('notion-light-theme');
    }
  }

  // Toggle button
  function createToggleButton() {
    if (document.getElementById('x-toggle')) return;
    const toggle = document.createElement('div');
    toggle.id = 'x-toggle';
    toggle.innerHTML = '<div class="toggle-icon"></div>';
  
    toggle.addEventListener('click', function () {
      const themeData = document.getElementById('theme-data');
      if (!themeData) return;
      let mode = 'system';
      try {
        mode = JSON.parse(themeData.textContent).mode;
      } catch {}
      if (mode === 'light') {
        themeData.textContent = JSON.stringify({ mode: 'system' });
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark-theme');
      } else {
        themeData.textContent = JSON.stringify({ mode: 'light' });
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark-theme');
      }
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