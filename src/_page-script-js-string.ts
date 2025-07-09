export const PAGE_SCRIPT_JS_STRING = `<script>
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

    // Array of stylesheets to inject in order
    const stylesheets = [
      "https://unpkg.com/open-props",
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css",
      "https://cdn.jsdelivr.net/npm/@hugeicons/font/css/hugeicons.min.css",
    ];

    stylesheets.forEach((href) => {
      // Check if the stylesheet is already on the page
      if (!document.querySelector('link[href="' + href + '"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Create x-toggle sun/moon button
    const btn = document.createElement('button');
    btn.className = 'x-toggle-theme';
    btn.setAttribute('aria-label', 'Toggle light/dark mode');
    btn.innerHTML = `
      <i class="hugeicons-sun-2"></i>
      <i class="hugeicons-moon"></i>
    `;
    // Toggle logic: toggle 'notion-dark-theme' on .notion-app-inner
    btn.addEventListener('click', function() {
      const app = document.querySelector('.notion-app-inner');
      if (!app) return;
      if (app.classList.contains('notion-dark-theme')) {
        app.classList.remove('notion-dark-theme');
        localStorage.setItem('lightMode', '1');
      } else {
        app.classList.add('notion-dark-theme');
        localStorage.setItem('lightMode', '0');
      }
    });
    document.body.appendChild(btn);
    
  }, 1000)
}
</script>`