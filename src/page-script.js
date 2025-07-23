/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

window.onload = function () {
  setInterval(() => {
    // === DESKTOP ===
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown (desktop)
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling
    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }

    // === MOBILE ===
    const mobilePropertiesBtn = document.querySelector('.notion-mobile [aria-label="Page properties"]')
    const mobilePropertiesDropdown = mobilePropertiesBtn?.nextElementSibling
    if (mobilePropertiesDropdown) {
      mobilePropertiesDropdown.style.display = 'none'
    }
  }, 1000)

  // --- Adaptive Theme Management (v4 - Persistent Poller) ---
  const THEME_KEY = "theme";
  const NOTION_DARK_CLASS = "notion-dark-theme";

  const sunIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#ffffff" viewBox="0 0 256 256"><path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"></path><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path></svg>';
  const moonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="#000000" viewBox="0 0 256 256"><path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"></path><path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"></path></svg>';

  let currentTheme;

  // This function is our watchdog. It constantly enforces our desired theme.
  function forceTheme(theme) {
    // 1. Set our custom theme class on the root <html> and <body> element
    if (theme === "light") {
      document.documentElement.classList.add("light");
      document.body.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.body.classList.remove("light");
    }
    // Tidak pernah update <script id='theme-data'> di sini
    // 2. Force Notion's internal theme to match our state
    const notionApp = document.querySelector(".notion-app-inner");
    if (notionApp) {
      if (theme === "dark") {
        notionApp.classList.add("notion-dark-theme");
      } else {
        notionApp.classList.remove("notion-dark-theme");
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
  function syncThemeFromBody(mutations) {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        // Observer hanya sync class, tidak update script theme-data
      }
    });
  }

  // Fungsi untuk sinkronisasi theme Notion
  function syncNotionTheme(theme) {
    const notionApp = document.querySelector('.notion-app-inner');
    if (notionApp) {
      if (theme === 'dark') {
        notionApp.classList.add('notion-dark-theme');
      } else {
        notionApp.classList.remove('notion-dark-theme');
      }
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
    const themeScript = document.getElementById('theme-data');

    // Pastikan theme valid
    if (theme !== "dark" && theme !== "light") {
      theme = "dark"; // Default ke dark jika invalid
    }

    if (theme === "light") {
      html.classList.add("light");
      body.classList.add("light");
      if (themeScript && themeScript.tagName === 'SCRIPT') {
        themeScript.textContent = JSON.stringify({ mode: 'light' });
      }
    } else {
      html.classList.remove("light");
      body.classList.remove("light");
      if (themeScript && themeScript.tagName === 'SCRIPT') {
        themeScript.textContent = JSON.stringify({ mode: 'system' });
      }
    }

    localStorage.setItem("theme", theme);
    currentTheme = theme;
    syncNotionTheme(theme);
  }

  // --- Main Execution ---
  currentTheme = getInitialTheme();
  setTheme(currentTheme); // Set awal agar sinkron

  // Start the persistent poller (our "watchdog")
  setInterval(() => forceTheme(currentTheme), 250);

  // Create the button once the page is fully loaded
  if (document.getElementById("x-toggle")) return;

  const toggleButton = document.createElement("button");
  toggleButton.id = "x-toggle";
  document.body.appendChild(toggleButton);
  updateButtonIcon(toggleButton, currentTheme);

  toggleButton.addEventListener("click", () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    updateButtonIcon(toggleButton, newTheme);
  });

  // Create x-burger button with same logic as x-toggle
  if (document.getElementById("x-burger")) return;

  const burgerButton = document.createElement("button");
  burgerButton.id = "x-burger";
  burgerButton.setAttribute("aria-label", "Open sidebar");
  burgerButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none"><path d="M4 8.5L20 8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 15.5L20 15.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  document.body.appendChild(burgerButton);

  // Create overlay for sidebar
  if (!document.getElementById("x-sidebar-overlay")) {
    const overlay = document.createElement("div");
    overlay.id = "x-sidebar-overlay";
    document.body.appendChild(overlay);
  }

  // Responsive show/hide for burger
  function updateBurgerDisplay() {
    if (window.innerWidth < 900) {
      burgerButton.style.display = "flex";
    } else {
      burgerButton.style.display = "none";
      document.body.classList.remove("sidebar-open");
    }
  }

  // Initial setup
  updateBurgerDisplay();
  window.addEventListener("resize", updateBurgerDisplay);

  // Burger click: toggle sidebar
  burgerButton.addEventListener("click", () => {
    if (window.innerWidth < 900) {
      const isOpen = document.body.classList.toggle("sidebar-open");
      const overlay = document.getElementById("x-sidebar-overlay");
      if (overlay) {
        overlay.style.display = isOpen ? "block" : "none";
      }
    }
  });

  // Overlay click: close sidebar
  const overlay = document.getElementById("x-sidebar-overlay");
  if (overlay) {
    overlay.addEventListener("click", () => {
      document.body.classList.remove("sidebar-open");
      overlay.style.display = "none";
    });
  }
};

function addOpenPropsLinks() {
  var openPropsLinks = [
    'https://unpkg.com/open-props'
  ];
  openPropsLinks.forEach(function(href) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  });
}
addOpenPropsLinks();

function createSidebarNavigation() {
  if (document.getElementById("x-sidebar")) return;
  const sidebar = document.createElement("aside");
  sidebar.id = "x-sidebar";
  sidebar.innerHTML =
    '<nav class="sidebar-nav">' +
      '<ul>' +
        '<li><a href="/kabaret" class="sidebar-link" data-menu="Karya"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="7"/></svg>' +
        '</span>Karya</a></li>' +
        '<li><a href="/team" class="sidebar-link" data-menu="Teams"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="10" height="10" rx="2"/></svg>' +
        '</span>Teams</a></li>' +
        '<li><a href="/player" class="sidebar-link" data-menu="Cast & Crew"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 14s2-2 6-2 6 2 6 2"/><circle cx="8" cy="6" r="3"/></svg>' +
        '</span>Cast & Crew</a></li>' +
        '<li><a href="/event" class="sidebar-link" data-menu="Events"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="12" height="10" rx="2"/><path d="M2 8h12"/></svg>' +
        '</span>Events</a></li>' +
        '<li><a href="/leaderboard" class="sidebar-link" data-menu="Leaderboard"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="10" width="3" height="4"/><rect x="7" y="6" width="3" height="8"/><rect x="12" y="2" width="3" height="12"/></svg>' +
        '</span>Leaderboard</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Community</div>' +
      '<ul>' +
        '<li><a href="/support" class="sidebar-link" data-menu="Support"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="7"/></svg>' +
        '</span>Support</a></li>' +
        '<li><a href="/academy" class="sidebar-link" data-menu="Academy"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="10" height="10" rx="2"/></svg>' +
        '</span>Academy</a></li>' +
        '<li><a href="/job" class="sidebar-link" data-menu="Jobs"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 14s2-2 6-2 6 2 6 2"/><circle cx="8" cy="6" r="3"/></svg>' +
        '</span>Jobs</a></li>' +
        '<li><a href="/form" class="sidebar-link" data-menu="Kritik & Saran"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="12" height="10" rx="2"/><path d="M2 8h12"/></svg>' +
        '</span>Kritik & Saran</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Marketplace</div>' +
      '<ul>' +
        '<li><a href="#" class="sidebar-link" data-menu="Tickets"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="7"/></svg>' +
        '</span>Tickets</a></li>' +
        '<li><a href="#" class="sidebar-link" data-menu="Mixing Templates"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="10" height="10" rx="2"/></svg>' +
        '</span>Mixing Templates</a></li>' +
        '<li><a href="#" class="sidebar-link" data-menu="SFX Collections"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 14s2-2 6-2 6 2 6 2"/><circle cx="8" cy="6" r="3"/></svg>' +
        '</span>SFX Collections</a></li>' +
        '<li><a href="#" class="sidebar-link" data-menu="Merch"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="12" height="10" rx="2"/><path d="M2 8h12"/></svg>' +
        '</span>Merch</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Links</div>' +
      '<ul>' +
        '<li><a href="#" class="sidebar-link" data-menu="Partnership"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="7"/></svg>' +
        '</span>Partnership</a></li>' +
        '<li><a href="/brand" class="sidebar-link" data-menu="Brand Assets"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="10" height="10" rx="2"/></svg>' +
        '</span>Brand Assets</a></li>' +
        '<li><a href="#" class="sidebar-link" data-menu="Official Blibli.com"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 14s2-2 6-2 6 2 6 2"/><circle cx="8" cy="6" r="3"/></svg>' +
        '</span>Official Blibli.com</a></li>' +
        '<li><a href="#" class="sidebar-link" data-menu="Instagram"><span class="sidebar-icon">' +
        '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="12" height="10" rx="2"/><path d="M2 8h12"/></svg>' +
        '</span>Instagram</a></li>' +
      '</ul>' +
    '</nav>';
  document.body.appendChild(sidebar);
  // document.body.classList.add('sidebar-enabled'); // Hapus seluruh manipulasi class sidebar-enabled pada body

  const lastMenu = localStorage.getItem("sidebar-selected");
  let highlighted = false;
  document.querySelectorAll("#x-sidebar .sidebar-link").forEach((link) => {
    const linkPath = link.getAttribute("href");
    if (lastMenu && linkPath === lastMenu) {
      link.classList.add("selected");
      highlighted = true;
    } else if (
      !highlighted &&
      !lastMenu &&
      (linkPath === window.location.pathname ||
        (linkPath === "/" && window.location.pathname === ""))
    ) {
      link.classList.add("selected");
      highlighted = true;
    }
  });

  document.querySelectorAll("#x-sidebar .sidebar-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelectorAll("#x-sidebar .sidebar-link")
        .forEach((l) => l.classList.remove("selected"));
      this.classList.add("selected");
      localStorage.setItem("sidebar-selected", this.getAttribute("href"));
      const href = this.getAttribute("href");
      if (href && href !== window.location.pathname) {

        showContentLoadingOverlay();

        history.pushState({}, '', href);
        

        setTimeout(() => {

          window.location.href = href;
        }, 300);
      }
    });
  });

  if (lastMenu) {
    setTimeout(() => {
      localStorage.removeItem("sidebar-selected");
    }, 1000);
  }
}

function createXHeader() {
  if (document.getElementById("x-header")) return;
  const header = document.createElement("header");
  header.id = "x-header";
  header.innerHTML =
    '<a href="https://hub.kolkative.my.id" class="header-logo" target="_self">' +
    '<img id="x-header-logo">' +
    '<span id="x-header-title"><span class="kolkative">Kolkative</span> <span class="hub">Hub</span></span>' +
    '</a>';
  document.body.appendChild(header);
}

// Tambahkan fungsi overlay spinner/blur
function showContentLoadingOverlay() {
  let overlay = document.getElementById('content-loading-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'content-loading-overlay';
    overlay.style = 'display:flex;position:fixed;inset:0;z-index:var(--layer-2);background:rgba(25,25,25,0.7);backdrop-filter:blur(2px);align-items:center;justify-content:center;';
    overlay.innerHTML = '<div class="content-spinner" style="width:48px;height:48px;border:4px solid #444;border-top:4px solid #fff;border-radius:50%;animation:content-spin 1s linear infinite;"></div>';
    document.body.appendChild(overlay);
    // Inject keyframes jika belum ada
    if (!document.getElementById('content-spinner-style')) {
      var style = document.createElement('style');
      style.id = 'content-spinner-style';
      style.textContent = '@keyframes content-spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }
  } else {
    overlay.style.display = 'flex';
  }
}

createSidebarNavigation();
createXHeader();

// Fungsi untuk memastikan theme di-load dengan benar
function ensureThemeConsistency() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    setTheme(savedTheme);
  } else {
    setTheme("dark"); // Default ke dark
  }
}

// Panggil saat halaman dimuat
ensureThemeConsistency();

// Sinkronisasi Notion theme saat popstate dan url berubah
window.addEventListener('popstate', function() {
  ensureThemeConsistency();
});

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    ensureThemeConsistency();
  }
}).observe(document, {subtree: true, childList: true});


// x-burger logic moved to window.onload for consistent timing with x-toggle

// Responsive handling sudah ditangani di dalam injectBurgerAndOverlay()

// Inject Google Fonts Bebas Neue for h2
(function() {
  if (!document.getElementById('bebas-neue-font')) {
    var link = document.createElement('link');
    link.id = 'bebas-neue-font';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';
    document.head.appendChild(link);
  }
  // Setelah font di-load, set font-family pada semua h2 dengan !important
  function setH2FontFamily() {
    document.querySelectorAll('h2').forEach(function(h2) {
      h2.style.setProperty('font-family', "'Bebas Neue', Bebas, Arial, sans-serif", 'important');
    });
  }
  // Jalankan sekali saat load
  setH2FontFamily();
  // Jalankan lagi setiap 1 detik untuk handle dynamic content
  setInterval(setH2FontFamily, 1000);
})();