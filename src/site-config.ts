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
  siteIcon: 'https://imgur.com/h1ytGyy',

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
  googleFont: 'Inter',

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    :root {
      --color-bg: #fff;
      --color-bg-dark: #18181b;
      --color-text: #18181b;
      --color-text-dark: #fafafa;
      --color-primary: #2563eb;
      --color-secondary: #fbbf24;
      --radius: 12px;
      --font-main: 'Inter', sans-serif;
      --transition: 0.2s cubic-bezier(.4,0,.2,1);
    }
    body {
      font-family: var(--font-main);
      transition: background var(--transition), color var(--transition);
    }
    #light-mode-toggle {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      background: var(--color-bg-dark);
      color: var(--color-text-dark);
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      cursor: pointer;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s, color 0.2s;
    }
    #light-mode-toggle:hover {
      background: var(--color-primary);
      color: #fff;
    }
    .notion-app-inner.notion-light-theme {
      background: var(--color-bg) !important;
      color: var(--color-text) !important;
    }
    .notion-app-inner.notion-light-theme * {
      background-color: var(--color-bg) !important;
      color: var(--color-text) !important;
      border-color: var(--color-bg-dark) !important;
      box-shadow: none !important;
    }

    /* ==========================
      HIDE OVERIDE
    ========================== */
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
