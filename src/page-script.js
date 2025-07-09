/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */


// This script is injected into the Notion page and runs on every page load.
window.onload = function () {
  // === TOGGLE DARK/LIGHT MODE ===
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
      const body = document.body
      const html = document.documentElement
      const notionApp = document.querySelector('.notion-app-inner')
      
      // Toggle dark mode
      if (body.classList.contains('dark') || html.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark')
        html.classList.remove('dark-mode')
        if (notionApp) {
          notionApp.classList.remove('notion-dark-theme')
        }
        toggle.querySelector('.toggle-text').textContent = 'Light'
        localStorage.setItem('theme', 'light')
      } else {
        // Switch to dark mode
        body.classList.add('dark')
        html.classList.add('dark-mode')
        if (notionApp) {
          notionApp.classList.add('notion-dark-theme')
        }
        toggle.querySelector('.toggle-text').textContent = 'Dark'
        localStorage.setItem('theme', 'dark')
      }
    })
    
    // Append to body
    document.body.appendChild(toggle)
  }
  
  // Initialize theme from localStorage
  function initializeTheme() {
    const savedTheme = localStorage.getItem('theme')
    const body = document.body
    const html = document.documentElement
    const notionApp = document.querySelector('.notion-app-inner')
    
    if (savedTheme === 'dark') {
      body.classList.add('dark')
      html.classList.add('dark-mode')
      if (notionApp) {
        notionApp.classList.add('notion-dark-theme')
      }
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

