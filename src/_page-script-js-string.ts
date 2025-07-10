export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  function applyLightMode() {
    const themeData = document.getElementById("theme-data");
    const notionApp = document.querySelector(".notion-app-inner");
    if (!themeData || !notionApp) return;
    let mode = "system";
    try {
      mode = JSON.parse(themeData.textContent).mode;
    } catch {}
    if (mode === "light") {
      notionApp.classList.remove("notion-dark-theme");
    } else {
      if (!notionApp.classList.contains("notion-dark-theme")) {
        notionApp.classList.add("notion-dark-theme");
      }
    }
  }

  // Tambahkan ikon HugeIcons (stroke, rounded) ke dalam toggle button
  // Anda bisa menyematkan SVG langsung di dalam elemen

  function createToggleButton() {
    if (document.getElementById("x-toggle")) return;

    const toggle = document.createElement("div");
    toggle.id = "x-toggle";
    toggle.innerHTML =
      '<div class="toggle-icon">' +
      '<svg id="toggle-icon-sun" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-sun" width="24" height="24">' +
      '<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M17.72 17.72l1.06 1.06M3 12h1.5M19.5 12H21M4.22 19.78l1.06-1.06M17.72 6.28l1.06-1.06M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />' +
      "</svg>" +
      '<svg id="toggle-icon-moon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon icon-moon hidden" width="24" height="24">' +
      '<path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.58 9.79z" />' +
      "</svg>" +
      "</div>";

    toggle.addEventListener("click", function () {
      const themeData = document.getElementById("theme-data");
      if (!themeData) return;

      let mode = "system";
      try {
        mode = JSON.parse(themeData.textContent).mode;
      } catch {}

      const sunIcon = document.getElementById("toggle-icon-sun");
      const moonIcon = document.getElementById("toggle-icon-moon");

      if (mode === "light") {
        themeData.textContent = JSON.stringify({ mode: "system" });
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark-theme");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      } else {
        themeData.textContent = JSON.stringify({ mode: "light" });
        localStorage.setItem("theme", "light");
        document.body.classList.remove("dark-theme");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
      }
    });

    document.body.appendChild(toggle);
  }

  // Inisialisasi dari localStorage
  function initializeTheme() {
    const themeData = document.getElementById("theme-data");
    if (!themeData) return;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      themeData.textContent = JSON.stringify({ mode: "light" });
    } else {
      themeData.textContent = JSON.stringify({ mode: "system" });
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
      ?.forEach((el) => (el.style.display = "none"));

    // Remove hidden properties dropdown (desktop)
    const propertiesDropdown = document.querySelector(
      'div[aria-label="Page properties"]'
    )?.nextElementSibling;
    if (propertiesDropdown) {
      propertiesDropdown.style.display = "none";
    }

    // === MOBILE ===
    // Hide mobile properties dropdown (if exists)
    // Try to find a dropdown or menu that appears after a properties button in mobile
    const mobilePropertiesBtn = document.querySelector(
      '.notion-mobile [aria-label="Page properties"]'
    );
    const mobilePropertiesDropdown = mobilePropertiesBtn?.nextElementSibling;
    if (mobilePropertiesDropdown) {
      mobilePropertiesDropdown.style.display = "none";
    }
  }, 1000);
};
</script>`