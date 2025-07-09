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
    // document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="Share site to socials"]')
    //  ?.forEach((el) => (el.style.display = 'none'))

    // Gabungkan: Hide 'Get Notion Free' dan button dengan svg.notionDarkMode, kecuali tampilkan .notranslate
    // document.querySelectorAll('.notion-topbar-mobile [role="button"]')
    //  ?.forEach((el) => {
    //    const isGetNotionFree = el.innerText && el.innerText.trim().toLowerCase() === 'get notion free';
    //    const hasDarkModeIcon = !!el.querySelector('svg.notionDarkMode');
    //    const notranslate = el.querySelector('.notranslate');
    //    if ((isGetNotionFree || hasDarkModeIcon)) {
    //      if (notranslate) {
    //        Array.from(el.children).forEach(child => {
    //          if (!child.classList.contains('notranslate')) {
    //            child.style.display = 'none';
    //          }
    //        });
    //      } else {
    //        el.style.display = 'none';
    //      }
    //    }
    //  });

    // Hide More actions button in notion-topbar-mobile
    // document.querySelectorAll('.notion-topbar-mobile [role="button"][aria-label="More actions"]')
    //  ?.forEach((el) => (el.style.display = 'none'))
  }, 1000)
}

// --- Sidebar Injection ---
function injectSidebar() {
  if (document.getElementById("x-sidebar")) return;
  const sidebar = document.createElement("nav");
  sidebar.id = "x-sidebar";
  sidebar.setAttribute("aria-label", "Sidebar");
  var html = "";
  html += '<div class="x-sidebar-inner">';
  html +=
    '<div class="x-sidebar-logo" style="display:flex;align-items:center;padding:24px 0 12px 0;padding-left:14px;font-weight:700;font-size:1.15rem;letter-spacing:-1px;">';
  html +=
    '<img src="https://i.imgur.com/uyJEQnp.png" alt="Kolkative Hub" style="width:20px;height:20px;object-fit:contain;vertical-align:middle;margin-right:4px;"/>';
  html += '<span class="x-sidebar-logo-text">Kolkative Hub</span>';
  html += "</div>";
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

  // Logic: hanya satu menu utama yang active
  var mainMenuLinks = sidebar.querySelectorAll(".x-sidebar-menu-main a");
  mainMenuLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      mainMenuLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
}

// --- Responsive: Sidebar auto show/hide on resize ---
window.addEventListener("resize", function () {
  var sidebar = document.getElementById("x-sidebar");
  var overlay = document.getElementById("x-sidebar-overlay");
  if (window.innerWidth > 900 && sidebar) {
    sidebar.style.display = "";
  }
  if (window.innerWidth > 900) {
    document.body.classList.remove("x-sidebar-open");
    if (overlay) overlay.style.display = "none";
  }
});

// --- Hamburger Button Injection (Mobile/Tablet Only) ---
(function() {
  function tryInjectBurger() {
    if (document.getElementById('x-burger')) return;
    var burger = document.createElement('button');
    burger.id = 'x-burger';
    burger.setAttribute('aria-label', 'Open sidebar');
    burger.innerHTML = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M4 8.5L20 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 15.5L20 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>;
    burger.style.display = 'none';
    burger.style.background = 'none';
    burger.style.border = 'none';
    burger.style.cursor = 'pointer';
    burger.style.marginRight = '12px';
    document.body.appendChild(burger);
    // Overlay
    var overlay = document.getElementById('x-sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'x-sidebar-overlay';
      overlay.style.display = 'none';
      overlay.addEventListener('click', function() {
        var sidebar = document.getElementById('x-sidebar');
        if (sidebar) sidebar.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('x-sidebar-open');
      });
      document.body.appendChild(overlay);
    }
    // Toggle sidebar
    burger.addEventListener('click', function() {
      var sidebar = document.getElementById('x-sidebar');
      if (!sidebar) return;
      if (sidebar.style.display === 'block') {
        sidebar.style.display = 'none';
        overlay.style.display = 'none';
        document.body.classList.remove('x-sidebar-open');
        burger.classList.remove('active');
      } else {
        sidebar.style.display = 'block';
        sidebar.style.position = 'fixed';
        sidebar.style.top = '0';
        sidebar.style.left = '0';
        sidebar.style.height = '100vh';
        overlay.style.display = 'block';
        document.body.classList.add('x-sidebar-open');
        burger.classList.add('active');
        document.body.appendChild(burger);
      }
    });
    clearInterval(window._burgerInterval);
  }
  window._burgerInterval = setInterval(tryInjectBurger, 500);
})();

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

  const sunIcon = '<i class="bi bi-sun-fill"></i>';
  const moonIcon = '<i class="bi bi-moon-fill"></i>';

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

  // Sinkronisasi toggle NoteHost <-> custom theme
  function syncThemeFromBody() {
    const html = document.documentElement;
    const body = document.body;
    if (body.classList.contains("dark")) {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light-mode");
      html.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }

  // Pantau perubahan class pada body (toggle NoteHost)
  const themeObserver = new MutationObserver(syncThemeFromBody);
  themeObserver.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Saat toggle custom diklik, update juga class body
  function setTheme(theme) {
    const html = document.documentElement;
    const body = document.body;
    if (theme === "dark") {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
      body.classList.add("dark");
    } else {
      html.classList.add("light-mode");
      html.classList.remove("dark-mode");
      body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }

  // --- Main Execution ---
  currentTheme = getInitialTheme();
  setTheme(currentTheme); // Set awal agar sinkron

  // Start the persistent poller (our "watchdog")
  setInterval(() => forceTheme(currentTheme), 50);

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

  window.addEventListener("load", injectSidebar);

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