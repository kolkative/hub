/* eslint-disable func-names */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

// This script is injected into the Notion page and runs on every page load.
document.addEventListener(
  'click',
  (event) => {
    if (!(event.target instanceof Element)) return

    const toggle = event.target.closest('.toggle-mode')

    if (!toggle) return

    const mode = toggle.querySelector('[title="Change to Light Mode"]') ? 'light' : 'dark'
    localStorage.setItem('newTheme', JSON.stringify({ mode }))
  },
  true,
)

window.onload = function () {
  setInterval(() => {
    // Remove all Notion tooltips on images
    document
      .querySelectorAll('div[style*="position: absolute; top: 4px;"]')
      ?.forEach((el) => (el.style.display = 'none'))

    // Remove hidden properties dropdown
    const propertiesDropdown = document.querySelector('div[aria-label="Page properties"]')?.nextElementSibling

    if (propertiesDropdown) {
      propertiesDropdown.style.display = 'none'
    }
  }, 1000)
}
