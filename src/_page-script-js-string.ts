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
    // Remove tooltips or overlays in mobile (example: bottom sheets, tooltips, or topbars)
    // Notion mobile often uses classes like 'notion-mobile', 'notion-topbar-mobile', etc.
    // 1. Hide mobile topbar buttons (was tooltip, now button)
    document.querySelectorAll('.notion-topbar-mobile [role="button"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // 2. Hide mobile properties dropdown (if exists)
    // Try to find a dropdown or menu that appears after a properties button in mobile
    const mobilePropertiesBtn = document.querySelector('.notion-mobile [aria-label="Page properties"]')
    const mobilePropertiesDropdown = mobilePropertiesBtn?.nextElementSibling
    if (mobilePropertiesDropdown) {
      mobilePropertiesDropdown.style.display = 'none'
    }

    // 3. Hide specific topbar right elements only (not all popup-origin-wrapper)
    // a. Hide Share site to socials button in notion-topbar-mobile
    document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="Share site to socials"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // b. Hide Get Notion Free button in notion-topbar-mobile, never hide .notranslate
    document.querySelectorAll('.notion-topbar-mobile [role="button"]')
      ?.forEach((el) => {
        if (
          el.innerText &&
          el.innerText.trim().toLowerCase() === 'get notion free'
        ) {
          const notranslate = el.querySelector('.notranslate');
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
      })

    // c. Hide More actions button in notion-topbar-mobile
    document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="More actions"]')
      ?.forEach((el) => (el.style.display = 'none'))
  }, 1000)
}
</script>`