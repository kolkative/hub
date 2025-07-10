export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

window.onload = function () {
  // Tambahkan CDN HugeIcons stroke rounded
  const hugeIconsCDN = document.createElement("link");
  hugeIconsCDN.rel = "stylesheet";
  hugeIconsCDN.href =
    "https://unpkg.com/@hugeicons/core@latest/hugeicons-rounded-stroke.css";
  document.head.appendChild(hugeIconsCDN);

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
      notionApp.classList.add("notion-dark-theme");
    }
  }

  function createToggleButton() {
    if (document.getElementById("x-toggle")) return;

    const toggle = document.createElement("div");
    toggle.id = "x-toggle";
    toggle.innerHTML =
      '<div class="toggle-icon">' +
      '<i id="toggle-icon-sun" class="hugeicons-sun-r"></i>' +
      '<i id="toggle-icon-moon" class="hugeicons-moon-r hidden"></i>' +
      "</div>";

    toggle.addEventListener("click", function () {
      const themeData = document.getElementById("theme-data");
      const notionApp = document.querySelector(".notion-app-inner");
      if (!themeData || !notionApp) return;

      let mode = "system";
      try {
        mode = JSON.parse(themeData.textContent).mode;
      } catch {}

      const sunIcon = document.getElementById("toggle-icon-sun");
      const moonIcon = document.getElementById("toggle-icon-moon");

      if (mode === "light") {
        themeData.textContent = JSON.stringify({ mode: "system" });
        localStorage.setItem("theme", "dark");
        notionApp.classList.add("notion-dark-theme");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
      } else {
        themeData.textContent = JSON.stringify({ mode: "light" });
        localStorage.setItem("theme", "light");
        notionApp.classList.remove("notion-dark-theme");
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
      }
    });

    document.body.appendChild(toggle);
  }

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
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = "none"));

    const propertiesDropdown = document.querySelector(
      'div[aria-label="Page properties"]'
    )?.nextElementSibling;
    if (propertiesDropdown) {
      propertiesDropdown.style.display = "none";
    }

    // === MOBILE ===
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