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

  // Tambahkan CDN Bootstrap Icons
  const bootstrapIconsCDN = document.createElement("link");
  bootstrapIconsCDN.rel = "stylesheet";
  bootstrapIconsCDN.href =
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css";
  document.head.appendChild(bootstrapIconsCDN);

  function whenDOMReady(callback) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      setTimeout(callback, 0);
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }

  function createToggleButton() {
    if (document.getElementById("x-toggle")) return;

    const toggle = document.createElement("div");
    toggle.id = "x-toggle";
    toggle.innerHTML =
      '<div class="toggle-icon">' +
      '<i id="toggle-icon-sun" class="bi bi-sun"></i>' +
      '<i id="toggle-icon-moon" class="bi bi-moon hidden"></i>' +
      "</div>";

    toggle.style.position = "fixed";
    toggle.style.bottom = "16px";
    toggle.style.right = "16px";
    toggle.style.zIndex = "9999";

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

  whenDOMReady(function () {
    createToggleButton();
    initializeTheme();
  });

  setInterval(function () {
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach(function (el) {
        el.style.display = "none";
      });

    const propertiesDropdown = document.querySelector(
      'div[aria-label="Page properties"]'
    )?.nextElementSibling;
    if (propertiesDropdown) {
      propertiesDropdown.style.display = "none";
    }

    const mobilePropertiesBtn = document.querySelector(
      '.notion-mobile [aria-label="Page properties"]'
    );
    const mobilePropertiesDropdown = mobilePropertiesBtn?.nextElementSibling;
    if (mobilePropertiesDropdown) {
      mobilePropertiesDropdown.style.display = "none";
    }
  }, 1000);
};
