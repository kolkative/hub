export const PAGE_SCRIPT_JS_STRING = `<script>
/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// SET DARK MODE SEBELUM APAPUN
(function() {
  // Set theme di body secepat mungkin
  if (document.body) {
    document.body.setAttribute('data-theme', 'dark');
  } else {
    // Jika body belum ada, tunggu DOM ready
    document.addEventListener('DOMContentLoaded', function() {
      document.body.setAttribute('data-theme', 'dark');
    });
  }
  localStorage.setItem('theme', 'dark');
})();

window.onload = function () {
  // Tambahkan CSS untuk animasi loading
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);

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
  function syncNotionTheme() {
    var theme = document.body.getAttribute('data-theme');
    var notionAppInner = document.querySelector('.notion-app-inner');
    
    if (notionAppInner) {
      // Hapus class yang ada
      notionAppInner.classList.remove('notion-dark-theme');
      
      // Tambahkan class sesuai theme
      if (theme === 'dark') {
        notionAppInner.classList.add('notion-dark-theme');
      }
      // Untuk light theme, tidak perlu menambahkan class khusus
    }
  }

  // Observer untuk memantau perubahan data-theme
  function setupThemeObserver() {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          syncNotionTheme();
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
          // Tampilkan loading state jika diperlukan
          const loadingIndicator = document.createElement('div');
          loadingIndicator.id = 'x-loading';
          loadingIndicator.style = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);z-index:9999;background:var(--surface-1);padding:16px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.15);';
          loadingIndicator.innerHTML = '<div style="display:flex;align-items:center;gap:8px;"><div style="width:16px;height:16px;border:2px solid var(--text-2);border-top:2px solid var(--text-1);border-radius:50%;animation:spin 1s linear infinite;"></div>Loading...</div>';
          document.body.appendChild(loadingIndicator);
          
          // Gunakan history.pushState untuk navigasi tanpa reload
          history.pushState({}, '', href);
          
          // Simulasi navigasi tanpa reload (karena ini adalah Notion, kita tidak bisa fetch konten)
          // Jadi kita hanya update URL dan biarkan Notion handle navigasinya
          setTimeout(() => {
            if (document.getElementById('x-loading')) {
              document.getElementById('x-loading').remove();
            }
            // Hanya sync theme, jangan buat ulang elemen
            syncNotionTheme();
          }, 500);
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

    // Paksa dark mode - abaikan localStorage
    var theme = 'dark';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleIcon(theme);
    
    syncNotionTheme();

    toggle.onclick = function() {
      var current = document.body.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      updateToggleIcon(next);
      // Sync Notion theme saat toggle
      syncNotionTheme();
    };
    document.body.appendChild(toggle);
  }

  createSidebarNavigation();
  createXHeader();
  createXToggle();
  syncNotionTheme();
  setupThemeObserver();

  // Event listener untuk menangani navigasi tanpa reload
  window.addEventListener('popstate', function() {
    // Hanya sync theme, jangan buat ulang elemen
    syncNotionTheme();
  });

  // Event listener untuk menangani perubahan URL
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      // Hanya sync theme, jangan buat ulang elemen
      syncNotionTheme();
    }
  }).observe(document, {subtree: true, childList: true});

  // Hanya jalankan sekali untuk hide elemen Notion
  function hideNotionElements() {
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
  }

  // Jalankan sekali saja
  hideNotionElements();

};
</script>`