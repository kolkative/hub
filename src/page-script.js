/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */


// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  // === TOGGLE LIGHT MODE CUSTOM ===
  function createToggleButton() {
    // Check if toggle already exists
    if (document.getElementById('x-toggle')) {
      return
    }
    
    // Create toggle button
    const toggle = document.createElement('div')
    toggle.id = 'x-toggle'
    toggle.innerHTML = '<div class="toggle-icon sun"></div><span class="toggle-text">Light</span><div class="toggle-icon moon"></div>'
    
    // Add click event
    toggle.addEventListener('click', function() {
      const notionApp = document.querySelector('.notion-app-inner')
      const isLight = notionApp && notionApp.classList.contains('notion-light-theme')
      if (isLight) {
        // Kembali ke default (dark bawaan Notion)
        notionApp.classList.remove('notion-light-theme')
        toggle.querySelector('.toggle-text').textContent = 'Light'
        localStorage.setItem('theme', 'dark')
      } else {
        // Aktifkan light mode custom
        if (notionApp) notionApp.classList.add('notion-light-theme')
        toggle.querySelector('.toggle-text').textContent = 'Dark'
        localStorage.setItem('theme', 'light')
      }
    })
    
    // Append to body
    document.body.appendChild(toggle)
  }
  
  // Initialize theme from localStorage
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    const notionApp = document.querySelector('.notion-app-inner')
    if (savedTheme === 'light' && notionApp) {
      notionApp.classList.add('notion-light-theme')
    }
  }
  
  // Create toggle button and initialize theme
  createToggleButton()
  initializeTheme()

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

