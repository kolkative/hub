export const PAGE_SCRIPT_JS_STRING = `<script>
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
  const kolIcon = '<img src="/public/icon-color.svg" alt="kolIcon">';
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
    '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>';
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
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M40,128h88v88H48a8,8,0,0,1-8-8ZM208,40H128v88h88V48A8,8,0,0,0,208,40Z" opacity="0.2"></path><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,88H136V48h72ZM120,48v72H48V48ZM48,136h72v72H48Zm160,72H136V136h72v72Z"></path></svg>' +
        '</span>Karya</a></li>' +
        '<li><a href="/team" class="sidebar-link" data-menu="Teams"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M40,128h88v88H48a8,8,0,0,1-8-8ZM208,40H128v88h88V48A8,8,0,0,0,208,40Z" opacity="0.2"></path><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,88H136V48h72ZM120,48v72H48V48ZM48,136h72v72H48Zm160,72H136V136h72v72Z"></path></svg>' +
        '</span>Teams</a></li>' +
        '<li><a href="/player" class="sidebar-link" data-menu="Cast & Crew"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z" opacity="0.2"></path><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>' +
        '</span>Events</a></li>' +
        '<li><a href="/leaderboard" class="sidebar-link" data-menu="Leaderboard"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40V208H152V40Z" opacity="0.2"></path><path d="M224,200h-8V40a8,8,0,0,0-8-8H152a8,8,0,0,0-8,8V80H96a8,8,0,0,0-8,8v40H48a8,8,0,0,0-8,8v64H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16ZM160,48h40V200H160ZM104,96h40V200H104ZM56,144H88v56H56Z"></path></svg>' +
        '</span>Leaderboard</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Welcome</div>' +
      '<ul>' +
        '<li><a href="/start" class="sidebar-link" data-menu="Start Here"><span class="sidebar-icon">' +
        '<img src="/public/icon-color.svg" alt="kolIcon">' +
        '</span>Start Here</a></li>' +
        '<li><a href="/info" class="sidebar-link" data-menu="Announcements"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>' +
        '</span>Announcements</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Help</div>' +
      '<ul>' +
        '<li><a href="/support" class="sidebar-link" data-menu="Support"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z" opacity="0.2"></path><path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z"></path></svg>' +
        '</span>Community Support</a></li>' +
        '<li><a href="/job" class="sidebar-link" data-menu="Jobs"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M224,80V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H216A8,8,0,0,1,224,80Z" opacity="0.2"></path><path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM128,32a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm88,168H40V80H216Z"></path></svg>' +
        '</span>Jobs & Volunteering</a></li>' +
        '<li><a href="/help" class="sidebar-link" data-menu="Kritik & Saran"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M208,104a79.86,79.86,0,0,1-30.59,62.92A24.29,24.29,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6a24.11,24.11,0,0,0-9.3-19A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24A80,80,0,0,1,208,104Z" opacity="0.2"></path><path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path></svg>' +
        '</span>Kritik & Saran</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Community</div>' +
      '<ul>' +
        '<li><a href="/academy" class="sidebar-link" data-menu="Tickets"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M216,113.07v53.22a8,8,0,0,1-2,5.31c-11.3,12.59-38.9,36.4-86,36.4s-74.68-23.81-86-36.4a8,8,0,0,1-2-5.31V113.07L128,160Z" opacity="0.2"></path><path d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"></path></svg>' +
        '</span>Academy</a></li>' +
        '<li><a href="/resources" class="sidebar-link" data-menu="Resources"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M224,80l-96,56L32,80l96-56Z" opacity="0.2"></path><path d="M230.91,172A8,8,0,0,1,228,182.91l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,36,169.09l92,53.65,92-53.65A8,8,0,0,1,230.91,172ZM220,121.09l-92,53.65L36,121.09A8,8,0,0,0,28,134.91l96,56a8,8,0,0,0,8.06,0l96-56A8,8,0,1,0,220,121.09ZM24,80a8,8,0,0,1,4-6.91l96-56a8,8,0,0,1,8.06,0l96,56a8,8,0,0,1,0,13.82l-96,56a8,8,0,0,1-8.06,0l-96-56A8,8,0,0,1,24,80Zm23.88,0L128,126.74,208.12,80,128,33.26Z"></path></svg>' +
        '</span>Resources</a></li>' +
        '<li><a href="/store" class="sidebar-link" data-menu="Store"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="#0099FF" viewBox="0 0 256 256"><path d="M224,56V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path></svg>' +
        '</span>Store</a></li>' +
      '</ul>' +
      '<div class="sidebar-section">Links</div>' +
      '<ul>' +
        '<li><a href="/partner" class="sidebar-link" data-menu="Partnership"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>' +
        '</span>Partnership</a></li>' +
        '<li><a href="/brand" class="sidebar-link" data-menu="Brand Assets"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>' +
        '</span>Brand Assets</a></li>' +
        '<li><a href="/social" class="sidebar-link" data-menu="Official Blibli.com"><span class="sidebar-icon">' +
        '<svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path></svg>' +
        '</span>Social Accounts</a></li>' +
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

</script>`