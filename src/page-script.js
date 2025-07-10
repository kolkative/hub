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
    } else {
      notionApp.classList.add("notion-dark-theme");
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
      '<path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/p>' +
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
  }

  // === SIDEBAR NAVIGATION ===
  function createSidebarNavigation() {
    if (document.getElementById('sidebar-navigation')) return;
    const sidebar = document.createElement('aside');
    sidebar.id = 'sidebar-navigation';
    sidebar.innerHTML =
      '<nav class="sidebar-nav">' +
        '<ul>' +
          '<li><a href="/" class="sidebar-link" data-menu="Feed">Feed</a></li>' +
          '<li><a href="/team" class="sidebar-link" data-menu="Teams">Teams</a></li>' +
          '<li><a href="/player" class="sidebar-link" data-menu="Cast & Crew">Cast & Crew</a></li>' +
          '<li><a href="/event" class="sidebar-link" data-menu="Events">Events</a></li>' +
          '<li><a href="/leaderboard" class="sidebar-link" data-menu="Leaderboard">Leaderboard</a></li>' +
        '</ul>' +
        '<div class="sidebar-section">Community</div>' +
        '<ul>' +
          '<li><a href="/support" class="sidebar-link" data-menu="Support">Support</a></li>' +
          '<li><a href="/academy" class="sidebar-link" data-menu="Academy">Academy</a></li>' +
          '<li><a href="/job" class="sidebar-link" data-menu="Jobs">Jobs</a></li>' +
          '<li><a href="/form" class="sidebar-link" data-menu="Kritik & Saran">Kritik & Saran</a></li>' +
        '</ul>' +
        '<div class="sidebar-section">Links</div>' +
        '<ul>' +
          '<li><a href="#" class="sidebar-link" data-menu="Partnership">Partnership</a></li>' +
          '<li><a href="#" class="sidebar-link" data-menu="Brand Assets & Guidelines">Brand Assets & Guidelines</a></li>' +
          '<li><a href="#" class="sidebar-link" data-menu="Official Blibli.com">Official Blibli.com</a></li>' +
          '<li><a href="#" class="sidebar-link" data-menu="Instagram">Instagram</a></li>' +
        '</ul>' +
      '</nav>';
    document.body.appendChild(sidebar);

    // Highlight selected menu utama berdasarkan URL
    document.querySelectorAll('.sidebar-link').forEach(link => {
      // Cek jika href sama dengan path saat ini
      const linkPath = link.getAttribute('href');
      if (linkPath === window.location.pathname || (linkPath === '/' && window.location.pathname === '')) {
        link.classList.add('selected');
      }
    });

    // === SIDEBAR KHUSUS MARKETPLACE ===
    if (!document.getElementById('marketplace-sidebar')) {
      const marketplaceSidebar = document.createElement('aside');
      marketplaceSidebar.id = 'marketplace-sidebar';
      marketplaceSidebar.style.position = 'fixed';
      marketplaceSidebar.style.left = '250px';
      marketplaceSidebar.style.top = '0';
      marketplaceSidebar.style.width = '200px';
      marketplaceSidebar.style.height = '100vh';
      marketplaceSidebar.style.background = '#23272f';
      marketplaceSidebar.style.color = '#fff';
      marketplaceSidebar.style.zIndex = '20';
      marketplaceSidebar.style.boxShadow = '2px 0 8px rgba(0,0,0,0.08)';
      marketplaceSidebar.style.padding = '32px 0 32px 0';
      marketplaceSidebar.style.overflowY = 'auto';
      marketplaceSidebar.innerHTML =
        '<div class="sidebar-section">Marketplace</div>' +
        '<ul style="list-style:none;padding:0 0 0 16px;margin:0;">' +
          '<li><div class="marketplace-link" data-menu="Tickets">Tickets</div></li>' +
          '<li><div class="marketplace-link" data-menu="Mixing Templates">Mixing Templates</div></li>' +
          '<li><div class="marketplace-link" data-menu="SFX Collections">SFX Collections</div></li>' +
          '<li><div class="marketplace-link" data-menu="Merch">Merch</div></li>' +
        '</ul>';
      document.body.appendChild(marketplaceSidebar);

      // Buat konten utama Marketplace jika belum ada
      let content = document.getElementById('marketplace-content');
      if (!content) {
        content = document.createElement('div');
        content.id = 'marketplace-content';
        content.style.position = 'fixed';
        content.style.left = '450px';
        content.style.top = '0';
        content.style.width = 'calc(100vw - 450px)';
        content.style.height = '100vh';
        content.style.overflowY = 'auto';
        content.style.background = 'var(--bg-main, #fff)';
        content.style.padding = '40px 32px 32px 32px';
        content.style.zIndex = '10';
        content.style.boxSizing = 'border-box';
        document.body.appendChild(content);
      }
      // Daftar konten Marketplace
      const menuContent = {
        'Tickets': '<h2>Tickets</h2><p>Ini halaman Tickets.</p>',
        'Mixing Templates': '<h2>Mixing Templates</h2><p>Ini halaman Mixing Templates.</p>',
        'SFX Collections': '<h2>SFX Collections</h2><p>Ini halaman SFX Collections.</p>',
        'Merch': '<h2>Merch</h2><p>Ini halaman Merch.</p>'
      };
      // State menu aktif Marketplace
      let selectedMarketplace = 'Tickets';
      function selectMarketplace(menu) {
        selectedMarketplace = menu;
        updateMarketplaceUI();
      }
      function updateMarketplaceUI() {
        document.querySelectorAll('.marketplace-link').forEach(link => {
          link.classList.toggle('selected', link.getAttribute('data-menu') === selectedMarketplace);
        });
        content.style.opacity = 0;
        content.style.transform = 'translateY(20px)';
        setTimeout(() => {
          content.innerHTML = menuContent[selectedMarketplace] || '<h2>' + selectedMarketplace + '</h2>';
          content.style.opacity = 1;
          content.style.transform = 'translateY(0)';
        }, 150);
      }
      // Event listener menu Marketplace
      document.querySelectorAll('.marketplace-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          selectMarketplace(this.getAttribute('data-menu'));
        });
      });
      // Inisialisasi
      updateMarketplaceUI();
    }
  }

  // === MARKETPLACE SIDEBAR INTERAKTIF VANILLA JS ===
  function enhanceMarketplaceSidebar() {
    // Tambahkan class 'marketplace' pada link Marketplace
    document.querySelectorAll('#sidebar-navigation .sidebar-section + ul').forEach((ul, idx) => {
      if (idx === 2) { // Marketplace section (urutan ke-3)
        ul.querySelectorAll('a, .sidebar-link').forEach((el) => {
          el.classList.add('marketplace');
          el.setAttribute('data-menu', el.textContent.trim());
        });
      }
    });

    // Buat konten dinamis untuk Marketplace
    let content = document.getElementById('marketplace-content');
    if (!content) {
      content = document.createElement('div');
      content.id = 'marketplace-content';
      content.style.transition = 'opacity 0.3s, transform 0.3s';
      content.style.margin = '32px 0 0 260px';
      content.style.fontSize = '1.2rem';
      content.style.minHeight = '40px';
      document.body.appendChild(content);
    }

    // State sederhana
    let selectedMarketplace = 'Tickets';
    function selectMarketplace(menu) {
      selectedMarketplace = menu;
      updateMarketplaceUI();
    }
    function updateMarketplaceUI() {
      document.querySelectorAll('.sidebar-link.marketplace').forEach(link => {
        link.classList.toggle('selected', link.dataset.menu === selectedMarketplace);
      });
      // Animasi keluar
      content.style.opacity = 0;
      content.style.transform = 'translateY(20px)';
      setTimeout(() => {
        content.textContent = 'Ini halaman ' + selectedMarketplace + '.';
        // Animasi masuk
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
      }, 200);
    }
    // Event listener
    document.querySelectorAll('.sidebar-link.marketplace').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        selectMarketplace(this.dataset.menu);
      });
    });
    // Inisialisasi
    updateMarketplaceUI();
  }

  createToggleButton();
  initializeTheme();
  createSidebarNavigation();
  enhanceMarketplaceSidebar();

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
