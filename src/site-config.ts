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
       ADAPTIVE ROOT THEME VARIABLE
    ========================== */
    /* Light mode root */
    .notion-app-inner:not(.notion-dark-theme) {
      --bg-main: #fff;
      --text-main: #23272f;
      --bg-sidebar: #f7f7f8;
      --border-main: #e5e5e7;
      --link: var(--indigo-6);
      --surface-hover: #e5e5e7;
    }
    /* Dark mode root (default Notion) */
    .notion-app-inner.notion-dark-theme {
      --bg-main: #191b1e;
      --text-main: #f7f7f8;
      --bg-sidebar: #2b2e32;
      --border-main: #454952;
      --link: var(--indigo-4);
      --surface-hover: #454952;
    }
    /* Semua elemen lain mengikuti root */
    html,
    body,
    .notion-body,
    #notion-app {
      background-color: var(--bg-main) !important;
      color: var(--text-main) !important;
    }

    /* ==========================
       TOGGLE ICON MINIMAL
    ========================== */
    #x-toggle {
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 9999;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: inherit;
    }
    #x-toggle .toggle-icon {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: block;
    }
    #x-toggle .toggle-text {
      display: none;
    }
    #x-toggle .toggle-icon.sun {
      background: #fbbf24;
    }
    #x-toggle .toggle-icon.moon {
      background: #6366f1;
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
