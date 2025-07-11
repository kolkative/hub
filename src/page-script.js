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
    } else if (mode === "system") {
      // Ikuti preferensi OS
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        notionApp.classList.add("notion-dark-theme");
      } else {
        notionApp.classList.remove("notion-dark-theme");
      }
    } else {
      notionApp.classList.add("notion-dark-theme");
    }

    updateRootThemeClass();
  }

  /**
   * NEW FUNCTION
   * Copy notion-dark-theme class from .notion-app-inner to <html>
   */
  function updateRootThemeClass() {
    const notionApp = document.querySelector(".notion-app-inner");
    const htmlEl = document.documentElement;

    if (!notionApp) return;

    if (notionApp.classList.contains("notion-dark-theme")) {
      htmlEl.classList.add("notion-dark-theme");
    } else {
      htmlEl.classList.remove("notion-dark-theme");
    }
  }

  function createToggleButton() {
    if (document.getElementById("x-toggle")) return;

    const toggle = document.createElement("div");
    toggle.id = "x-toggle";
    toggle.innerHTML =
      '<div class="toggle-icon">' +
      '<div id="toggle-icon-sun" class="hidden">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#000000" viewBox="0 0 256 256">' +
      '<path d="M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z" opacity="0.2"/>' +
      '<path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"/>' +
      "</svg>" +
      "</div>" +
      '<div id="toggle-icon-moon">' +
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" viewBox="0 0 256 256">' +
      '<path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"/>' +
      '<path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>' +
      "</svg>" +
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

      updateRootThemeClass();
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

    // Tambahkan event listener untuk perubahan preferensi OS
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyLightMode);
  }

  // === SIDEBAR NAVIGATION ===
  function createSidebarNavigation() {
    if (document.getElementById("x-sidebar")) return;
    const sidebar = document.createElement("aside");
    sidebar.id = "x-sidebar";
    sidebar.innerHTML =
      '<nav class="sidebar-nav">' +
      // … (biarkan bagian nav tetap sesuai versi file aslinya) …
      "</nav>";
    document.body.appendChild(sidebar);

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
      '<img src="https://imgur.com/BkAjSsD.png" id="logo-light" class="logo-light" alt="Kolkative Logo Light">' +
      '<img src="https://imgur.com/R3LDKJl.png" id="logo-dark" class="logo-dark" alt="Kolkative Logo Dark">' +
      "</a>";
    document.body.appendChild(header);

    function updateLogoMode() {
      const notionApp = document.querySelector(".notion-app-inner");
      const logoLight = document.getElementById("logo-light");
      const logoDark = document.getElementById("logo-dark");
      if (!notionApp || !logoLight || !logoDark) return;
      if (notionApp.classList.contains("notion-dark-theme")) {
        logoLight.style.display = "none";
        logoDark.style.display = "block";
      } else {
        logoLight.style.display = "block";
        logoDark.style.display = "none";
      }
    }
    updateLogoMode();

    const observer = new MutationObserver(updateLogoMode);
    const notionApp = document.querySelector(".notion-app-inner");
    if (notionApp) {
      observer.observe(notionApp, {
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  }

  createToggleButton();
  initializeTheme();
  createSidebarNavigation();
  createXHeader();

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
