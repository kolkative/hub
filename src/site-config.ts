import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING } from './_page-script-js-string'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = 'G-2FG5VHBYH1'

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'hub.kolkative.my.id',

  // Metatags, optional
  // For main page link preview
  siteName: 'Kolkative Hub',
  siteDescription: 'Media Informasi dan Apresiasi',
  siteImage: 'https://imgur.com/q0QXC8F',

  // Twitter handle, optional
  // twitterHandle: '',

  // URL to custom favicon.ico
  siteIcon: 'https://i.imgur.com/k1uXQVU.png',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  notionDomain: 'kolkative',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    '': '208db40e66ea8001b35af735e91f0e0c',
    team: '208db40e66ea80199338dadddde8ebb4',
    player: '211db40e66ea80739783ffc4a44671e5',
    event: '211db40e66ea808e8ce0cfe0a9d415de',
    kabaret: '208db40e66ea806f86b1d5f50f8f981c',
    // individual teams
    epigonen: '208db40e66ea80a185c7d0c381e72752',
  },

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  pageMetadata: {
    '208db40e66ea8001b35af735e91f0e0c': {
      title: 'Kolkative Hub',
      description: 'The Largest Kabaret Databases',
      image: 'https://imgur.com/q0QXC8F',
      author: 'Kolkative Compound',
    },
  },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: 'https://hub.kolktive.my.id',
    },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  fof: {
    page: "22adb40e66ea80ff83d9c1a195eecd5b",
    slug: "404", // default
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: '',

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    /* ==========================
       LIGHT MODE OVERRIDE
    ========================== */
    .notion-app-inner:not(.notion-dark-theme) {
      background-color: #fff !important;
      color: #23272f !important;
      --bg-main: #fff;
      --bg-sidebar: #f7f7f8;
      --text-main: #23272f;
      --border-main: #e5e5e7;
      --link: var(--indigo-6);
      --surface-hover: #e5e5e7;
    }

    /* ==========================
       TOGGLE BUTTON
    ========================== */
    #x-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      background: var(--bg-main, #fff);
      border: 2px solid var(--border-main, #e5e5e7);
      border-radius: 50px;
      padding: 8px 12px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-main, #23272f);
      transition: all 0.3s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    #x-toggle:hover {
      background: var(--surface-hover, #e5e5e7);
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
    }
    #x-toggle .toggle-icon {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }
    #x-toggle .toggle-icon.sun {
      background: #fbbf24;
      border-radius: 50%;
      position: relative;
    }
    #x-toggle .toggle-icon.sun::after {
      content: '';
      position: absolute;
      top: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 4px;
      background: #fbbf24;
      border-radius: 1px;
    }
    #x-toggle .toggle-icon.moon {
      background: #6366f1;
      border-radius: 50%;
      position: relative;
    }
    #x-toggle .toggle-icon.moon::after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      background: var(--bg-main, #fff);
      border-radius: 50%;
    }
    /* Hide sun icon in dark mode, hide moon icon in light mode */
    .notion-app-inner.notion-dark-theme ~ #x-toggle .toggle-icon.sun {
      display: none;
    }
    .notion-app-inner:not(.notion-dark-theme) ~ #x-toggle .toggle-icon.moon {
      display: none;
    }

    /* =====================
      HIDE & REMOVED
    ===================== */
    
    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    header.notion-topbar-mobile,
    div[style*="min-height: 44px"] {
      display: none !important;
    }

  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
