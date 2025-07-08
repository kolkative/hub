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
      ?.forEach((el) => (el.style.display = 'none'));

    // Remove hidden properties dropdown (desktop)
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling;
    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none';
    }

    // === MOBILE ===
    // Hanya tampilkan .notranslate di .notion-topbar-mobile, sembunyikan div lain (bloatware kanan)
    document.querySelectorAll('.notion-topbar-mobile > div')
      ?.forEach((el) => {
        if (!el.classList.contains('notranslate')) {
          el.style.display = 'none';
        }
      });
  }, 1000);
}
</script>`