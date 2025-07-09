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

    // Hide specific topbar right elements only (not all popup-origin-wrapper)
    // Hide Share site to socials button in notion-topbar-mobile
    document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="Share site to socials"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Gabungkan: Hide 'Get Notion Free' dan button dengan svg.notionDarkMode, kecuali tampilkan .notranslate
    document.querySelectorAll('.notion-topbar-mobile [role="button"]')
      ?.forEach((el) => {
        const isGetNotionFree = el.innerText && el.innerText.trim().toLowerCase() === 'get notion free';
        const hasDarkModeIcon = !!el.querySelector('svg.notionDarkMode');
        const notranslate = el.querySelector('.notranslate');
        if ((isGetNotionFree || hasDarkModeIcon)) {
          if (notranslate) {
            Array.from(el.children).forEach(child => {
              if (!child.classList.contains('notranslate')) {
                child.style.display = 'none';
              }
            });
          } else {
            el.style.display = 'none';
          }
        }
      });

    // Hide More actions button in notion-topbar-mobile
    document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="More actions"]')
      ?.forEach((el) => (el.style.display = 'none'))
  }, 1000)
}
</script>`