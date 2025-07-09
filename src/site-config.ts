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
    
    /* ==========================
      ADAPTIVE ROOT COLOR
    ========================== */
    .notion-app-inner {
      --x-bg: var(--notion-light-bg, #fff);
      --x-text: var(--notion-light-text, #191919);
      background: var(--x-bg) !important;
      color: var(--x-text) !important;
    }
    .notion-app-inner.notion-dark-theme {
      --x-bg: var(--notion-dark-bg, #191919);
      --x-text: var(--notion-dark-text, #fff);
    }
    .notion-app-inner, .notion-app-inner * {
      background: var(--x-bg, inherit);
      color: var(--x-text, inherit);
    }
    /* Toggle button basic style (customize as needed) */
    .x-toggle {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 9999;
      background: var(--x-bg);
      color: var(--x-text);
      border: none;
      border-radius: 2rem;
      padding: 0.5rem 1rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
      transition: background 0.2s, color 0.2s;
    }

    .notion-app-inner.notion-dark-theme .hgi hgi-stroke hgi-moon-02,
    .x-toggle .hgi hgi-stroke hgi-sun-03 {
      display: inline;
    }

    .notion-app-inner.notion-dark-theme .hgi hgi-stroke hgi-sun-03,
    .x-toggle .hgi hgi-stroke hgi-moon-02 {
      display: none;
    }
    
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
