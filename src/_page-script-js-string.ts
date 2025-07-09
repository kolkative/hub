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

  }, 1000)
}

(function () {
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
  
  // --- Adaptive Theme Management (v4 - Persistent Poller) ---
  const THEME_KEY = "theme";
  const NOTION_DARK_CLASS = "notion-dark-theme";

  const sunIcon = '<i class="hgi hgi-stroke hgi-moon-02"></i>';
  const moonIcon = '<i class="hgi hgi-stroke hgi-moon-02"></i>';

  let currentTheme;

  // This function is our watchdog. It constantly enforces our desired theme.
  function forceTheme(theme) {
    // 1. Set our custom theme class on the root <html> element
    if (theme === "light") {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    } else {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    }

    // 2. Force Notion's internal theme to match our state
    const notionApp = document.querySelector(".notion-app-inner");
    if (notionApp) {
      if (
        theme === "light" &&
        notionApp.classList.contains(NOTION_DARK_CLASS)
      ) {
        notionApp.classList.remove(NOTION_DARK_CLASS);
      } else if (
        theme === "dark" &&
        !notionApp.classList.contains(NOTION_DARK_CLASS)
      ) {
        notionApp.classList.add(NOTION_DARK_CLASS);
      }
    }
  }

  function updateButtonIcon(button, theme) {
    if (button) {
      button.innerHTML = theme === "dark" ? sunIcon : moonIcon;
      button.classList.remove("toggle-dark", "toggle-light");
      button.classList.add(theme === "dark" ? "toggle-dark" : "toggle-light");
    }
  }

  function getInitialTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    // If a theme is saved in localStorage, use it. Otherwise, default to dark.
    return savedTheme || "dark";
  }

  // --- Main Execution ---
  currentTheme = getInitialTheme();
  setTheme(currentTheme); // Set awal agar sinkron

  // Start the persistent poller (our "watchdog")
  setInterval(() => forceTheme(currentTheme), 250);

  // Create the button once the page is fully loaded
  window.addEventListener("load", () => {
    if (document.getElementById("x-toggle")) return;

    const toggleButton = document.createElement("button");
    toggleButton.id = "x-toggle";
    document.body.appendChild(toggleButton);
    updateButtonIcon(toggleButton, currentTheme);

    toggleButton.addEventListener("click", () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      setTheme(newTheme);
      currentTheme = newTheme;
      updateButtonIcon(toggleButton, newTheme);
    });
  });

})();

// Inject x-header at the top of the body
(function () {
  window.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("x-header")) {
      var header = document.createElement("div");
      header.id = "x-header";
      header.innerHTML =
        '<div id="x-header-inner">' +
          '<img id="x-header-logo" src="https://i.imgur.com/uyJEQnp.png" alt="Kolkative Hub" />' +
          '<span id="x-header-title">Kolkative Hub</span>' +
        '</div>';
      document.body.insertBefore(header, document.body.firstChild);
    }
  });
})();</script>`