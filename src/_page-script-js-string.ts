export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// Tambahkan spinner loader overlay sebelum apapun dirender
(function() {
  // Buat elemen overlay
  var loader = document.createElement('div');
  loader.id = 'x-theme-loader';
  loader.style = 'position:fixed;z-index:99999;inset:0;display:flex;align-items:center;justify-content:center;background:#181818;transition:opacity 0.3s;';
  loader.innerHTML = '<div style="width:48px;height:48px;border:6px solid #fff;border-top:6px solid #888;border-radius:50%;animation:spin 1s linear infinite;"></div>' +
    '<style>@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style>';
  document.body.appendChild(loader);
})();

// Set data-theme pada body secepat mungkin, sebelum apapun dirender
(function() {
  var theme = localStorage.getItem('theme');
  if (theme === 'dark' || theme === 'light') {
    document.body.setAttribute('data-theme', theme);
  } else {
    document.body.setAttribute('data-theme', 'dark'); // default dark
  }
})();

window.onload = function () {
  // Utility untuk menambahkan semua link Open Props sekaligus
  function addOpenPropsLinks() {
    var openPropsLinks = [
      'https://unpkg.com/open-props/normalize.min.css',
      'https://unpkg.com/open-props/style',
      'https://unpkg.com/open-props/theme.light.switch.min.css',
      'https://unpkg.com/open-props/theme.dark.switch.min.css'
    ];
    openPropsLinks.forEach(function(href) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });
  }
  addOpenPropsLinks();

  // Manipulasi class theme di body
  // Hapus seluruh logic class .dark/.light pada body
  // Toggle dan theme hanya pakai data-theme pada body

  // Fungsi untuk sinkronisasi theme Notion dengan body [data-theme]
  // Hapus seluruh fungsi syncNotionTheme dan semua pemanggilannya

  // Observer untuk memantau perubahan data-theme
  function setupThemeObserver() {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          // Sync Notion theme secara berkala untuk memastikan sinkronisasi
          // syncNotionTheme(); // Hapus pemanggilan ini
        }
      });
    });
    
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['data-theme']
    });
  }

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
      '<a href="https://hub.kolkative.my.id" class="header-logo" target="_self" style="display:flex;align-items:center;gap:8px;">' +
      // Inline SVG logo, warna mengikuti currentColor
      '<span class="logo" style="display:inline-block;width:32px;height:32px;">' +
      '<svg viewBox="0 0 32 32" width="32" height="32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
      '<polygon points="16,2 20,12 31,12 22,18 25,29 16,22 7,29 10,18 1,12 12,12"/>' +
      '</svg>' +
      '</span>' +
      '<span class="header-title">Kolkative Hub</span>' +
      '</a>';
    document.body.appendChild(header);
  }

  function createXToggle() {
    if (document.getElementById('x-toggle')) return;
    var toggle = document.createElement('div');
    toggle.id = 'x-toggle';
    toggle.style = 'position:fixed;top:16px;right:16px;z-index:1000;cursor:pointer;display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50%;background:var(--surface-1);box-shadow:0 1px 4px rgba(0,0,0,0.08)';
    toggle.innerHTML =
      '<span id="toggle-icon-sun" style="display:none;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"/></svg>' +
      '</span>' +
      '<span id="toggle-icon-moon" style="display:none;">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>' +
      '</span>';

    // Set icon sesuai theme
    function updateToggleIcon(theme) {
      var sun = toggle.querySelector('#toggle-icon-sun');
      var moon = toggle.querySelector('#toggle-icon-moon');
      if (theme === 'light') {
        sun.style.display = '';
        moon.style.display = 'none';
      } else {
        sun.style.display = 'none';
        moon.style.display = '';
      }
    }

    // Ambil theme dari body (sudah di-set di awal)
    var theme = document.body.getAttribute('data-theme');
    updateToggleIcon(theme);
    
    // Sync Notion theme saat inisialisasi
    // syncNotionTheme(); // Hapus pemanggilan ini

    toggle.onclick = function() {
      var current = document.body.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleIcon(next);
      // Sync Notion theme saat toggle
      // syncNotionTheme(); // Hapus pemanggilan ini
    };
    document.body.appendChild(toggle);
  }

  createSidebarNavigation();
  createXHeader();
  createXToggle();
  
  // Setup observer untuk memantau perubahan theme
  setupThemeObserver();

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
    
    // Sync Notion theme secara berkala untuk memastikan sinkronisasi
    // syncNotionTheme(); // Hapus pemanggilan ini
  }, 1000);

  // Hapus spinner loader setelah theme dan DOM siap
  setTimeout(function() {
    var loader = document.getElementById('x-theme-loader');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(function() {
        if (loader.parentNode) loader.parentNode.removeChild(loader);
      }, 350);
    }
  }, 700);

  // Tidak ada lagi loader
};
</script>`