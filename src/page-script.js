/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

window.onload = function () {
  
  function createSidebarNavigation() {
    if (document.getElementById("x-sidebar")) return;
    const sidebar = document.createElement("aside");
    sidebar.id = "x-sidebar";
    sidebar.innerHTML =
      '<nav class="sidebar-nav">' +
        '<ul>' +
          '<li><a href="/karya" class="sidebar-link" data-menu="Karya"><span class="sidebar-icon">' +
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
          '<li><a href="#" class="sidebar-link" data-menu="Brand Assets & Guidelines"><span class="sidebar-icon">' +
          '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="10" height="10" rx="2"/></svg>' +
          '</span>Brand Assets & Guidelines</a></li>' +
          '<li><a href="#" class="sidebar-link" data-menu="Official Blibli.com"><span class="sidebar-icon">' +
          '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 14s2-2 6-2 6 2 6 2"/><circle cx="8" cy="6" r="3"/></svg>' +
          '</span>Official Blibli.com</a></li>' +
          '<li><a href="#" class="sidebar-link" data-menu="Instagram"><span class="sidebar-icon">' +
          '<svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="12" height="10" rx="2"/><path d="M2 8h12"/></svg>' +
          '</span>Instagram</a></li>' +
        '</ul>' +
      '</nav>';
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
      '<img src="https://imgur.com/zxwpFNK.png" class="logo" id="logo-light" alt="Kolkative Logo Light">' +
      '<img src="https://imgur.com/uyJEQnp.png" class="logo" id="logo-dark" alt="Kolkative Logo Dark">' +
      '<span class="header-title">Kolkative Hub</span>' +
      '</a>';
    document.body.appendChild(header);
  }

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

  // Tidak ada lagi loader
};
