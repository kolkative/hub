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

  // Use single quotes and + for SVG strings
  const sunIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">' +
    '<path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="1.5"></path>' +
    '<path d="M12 2C11.6227 2.33333 11.0945 3.2 12 4M12 20C12.3773 20.3333 12.9055 21.2 12 22M19.5 4.50271C18.9685 4.46982 17.9253 4.72293 18.0042 5.99847M5.49576 17.5C5.52865 18.0315 5.27555 19.0747 4 18.9958M5.00271 4.5C4.96979 5.03202 5.22315 6.0763 6.5 5.99729M18 17.5026C18.5315 17.4715 19.5747 17.7108 19.4958 18.9168M22 12C21.6667 11.6227 20.8 11.0945 20 12M4 11.5C3.66667 11.8773 2.8 12.4055 2 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>' +
    '</svg>';
  const moonIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">' +
    '<path d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>' +
    '</svg>';

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
  forceTheme(currentTheme); // Set awal agar sinkron

  // --- Optimized Theme Watcher ---
  // Use MutationObserver to watch for .notion-app-inner changes
  const observer = new MutationObserver(() => {
    forceTheme(currentTheme);
  });
  function observeNotionApp() {
    const notionApp = document.querySelector('.notion-app-inner');
    if (notionApp) {
      observer.observe(notionApp, { attributes: true, attributeFilter: ['class'] });
    }
  }
  // Observe on DOMContentLoaded and when theme is toggled
  document.addEventListener('DOMContentLoaded', observeNotionApp);
  // Also observe again after theme toggle
  window.addEventListener('load', observeNotionApp);

  // Create the button once the page is fully loaded
  window.addEventListener("load", () => {
    if (document.getElementById("x-toggle")) return;

    const toggleButton = document.createElement("button");
    toggleButton.id = "x-toggle";
    document.body.appendChild(toggleButton);
    updateButtonIcon(toggleButton, currentTheme);

    toggleButton.addEventListener("click", () => {
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      currentTheme = newTheme;
      forceTheme(newTheme);
      updateButtonIcon(toggleButton, newTheme);
      observeNotionApp(); // re-observe after toggle
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
})();

// --- Sidebar Injection ---
function injectSidebar() {
  if (document.getElementById("x-sidebar")) return;
  const sidebar = document.createElement("nav");
  sidebar.id = "x-sidebar";
  sidebar.setAttribute("aria-label", "Sidebar");
  var html = "";
  html += '<div class="x-sidebar-inner">';
  // Main menu
  html += '<ul class="x-sidebar-menu x-sidebar-menu-main">';
  // Feed
  html +=
    '<li><a href="https://hub.kolkative.my.id" class="active" data-menu="feed">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M3 11.9896V14.5C3 17.7998 3 19.4497 4.02513 20.4749C5.05025 21.5 6.70017 21.5 10 21.5H14C17.2998 21.5 18.9497 21.5 19.9749 20.4749C21 19.4497 21 17.7998 21 14.5V11.9896C21 10.3083 21 9.46773 20.6441 8.74005C20.2882 8.01237 19.6247 7.49628 18.2976 6.46411L16.2976 4.90855C14.2331 3.30285 13.2009 2.5 12 2.5C10.7991 2.5 9.76689 3.30285 7.70242 4.90855L5.70241 6.46411C4.37533 7.49628 3.71179 8.01237 3.3559 8.74005C3 9.46773 3 10.3083 3 11.9896Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 21.5V16.5C15 15.0858 15 14.3787 14.5607 13.9393C14.1213 13.5 13.4142 13.5 12 13.5C10.5858 13.5 9.87868 13.5 9.43934 13.9393C9 14.3787 9 15.0858 9 16.5V21.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Feed</span></a></li>";
  // Teams
  html +=
    '<li><a href="https://hub.kolkative.my.id/team" data-menu="teams">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M2 12C2 7.52166 2 5.28249 3.39124 3.89124C4.78249 2.5 7.02166 2.5 11.5 2.5C15.9783 2.5 18.2175 2.5 19.6088 3.89124C21 5.28249 21 7.52166 21 12C21 16.4783 21 18.7175 19.6088 20.1088C18.2175 21.5 15.9783 21.5 11.5 21.5C7.02166 21.5 4.78249 21.5 3.39124 20.1088C2 18.7175 2 16.4783 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M12.3638 7.72209L13.2437 9.49644C13.3637 9.74344 13.6837 9.98035 13.9536 10.0257L15.5485 10.2929C16.5684 10.4643 16.8083 11.2103 16.0734 11.9462L14.8335 13.1964C14.6236 13.4081 14.5086 13.8164 14.5736 14.1087L14.9285 15.6562C15.2085 16.8812 14.5636 17.355 13.4887 16.7148L11.9939 15.8226C11.7239 15.6613 11.2789 15.6613 11.004 15.8226L9.50913 16.7148C8.43925 17.355 7.78932 16.8761 8.06929 15.6562L8.42425 14.1087C8.48925 13.8164 8.37426 13.4081 8.16428 13.1964L6.92442 11.9462C6.1945 11.2103 6.42947 10.4643 7.44936 10.2929L9.04419 10.0257C9.30916 9.98035 9.62912 9.74344 9.74911 9.49644L10.629 7.72209C11.109 6.7593 11.8889 6.7593 12.3638 7.72209Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Teams</span></a></li>";
  // Players
  html +=
    '<li><a href="https://hub.kolkative.my.id/player" data-menu="players">' +
    '<i class="hgi hgi-stroke hgi-user-square"></i>' +
    "<span>Players</span></a></li>";
  // Events
  html +=
    '<li><a href="https://hub.kolkative.my.id/event" data-menu="events">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Events</span></a></li>";
  // Leaderboard
  html +=
    '<li><a href="https://hub.kolkative.my.id/leaderboard" data-menu="leaderboard">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Leaderboard</span></a></li>";
  html += "</ul>";
  // Community section
  html += '<div class="x-sidebar-section-title">Community</div>';
  html += '<ul class="x-sidebar-menu">';
  // Community Support
  html +=
    '<li><a href="#" class="menu-blue" data-menu="community-support">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Community Support</span></a></li>";
  html +=
    '<li><a href="#" data-menu="academy"><img src="https://i.imgur.com/uyJEQnp.png" alt="Kolkative Academy" style="width:16px;height:16px;vertical-align:middle;margin-right:4px;"/><span>Kolkative Academy</span></a></li>';
  // Jobs
  html +=
    '<li><a href="#" class="menu-blue" data-menu="jobs">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Jobs</span></a></li>";
  // Meetups
  html +=
    '<li><a href="#" class="menu-blue" data-menu="meetups">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Meetups</span></a></li>";
  html += "</ul>";
  // Marketplace section
  html += '<div class="x-sidebar-section-title">Marketplace</div>';
  html += '<ul class="x-sidebar-menu">';
  // Mixing Templates
  html +=
    '<li><a href="#" class="menu-blue" data-menu="mixing-templates">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Mixing Templates</span></a></li>";
  // SFX Collections
  html +=
    '<li><a href="#" class="menu-blue" data-menu="sfx-collections">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>SFX Collections</span></a></li>";
  html += "</ul>";
  // Feature Requests (Bulb) - pindah ke Links
  html += '<div class="x-sidebar-section-title">Links</div>';
  html += '<ul class="x-sidebar-menu">';
  html +=
    '<li><a href="#" data-menu="feature-requests">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 15C15.31 15 18 12.31 18 9C18 5.69 15.31 3 12 3C8.69 3 6 5.69 6 9C6 12.31 8.69 15 12 15Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>' +
    "<span>Future Requests</span></a></li>";
  html += "</ul>";
  html += "</div>";
  sidebar.innerHTML = html;
  document.body.appendChild(sidebar);
  document.body.classList.add('sidebar-enabled');

  // Logic: highlight menu sesuai URL saat load
  var mainMenuLinks = sidebar.querySelectorAll(".x-sidebar-menu-main a");
  var currentPath = window.location.pathname.replace(/\/$/, ''); // hapus trailing slash
  mainMenuLinks.forEach(function (link) {
    var linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '');
    if (currentPath === linkPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
    
  });