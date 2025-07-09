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

  const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5"></path>
    <path d="M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
</svg>';
  const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>';

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
  forceTheme(currentTheme); // FIX: was setTheme(currentTheme)

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