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
      LIGHT AND DARK THEMES
    ========================== */
    
    body,
    .notion-body,
    html.light-mode {
      --bg-main: #fff;
      --bg-sidebar: #f7f7f8;
      --text-main: #23272f;
      --border-main: #e5e5e7;
      --link: var(--indigo-6);
      --surface-hover: #e5e5e7;
    }
      
    body.dark,
    .notion-body.dark,
    html.dark-mode {
      --bg-main: #191b1e;
      --bg-sidebar: #2b2e32;
      --text-main: #f7f7f8;
      --border-main: #454952;
      --link: var(--indigo-4);
      --surface-hover:#454952;
    }

    /* =========================
      STYLE OVERIDE
    ========================= */
    
    /* body {
      padding-top: 60px !important;
    } */

    html.notion-html,
    .notion-app,
    .notion-app-inner {
      background: var(--bg-main) !important;
      color: var(--text-main) !important;
    }
      
    .notion-frame {
      background: var(--bg-main) !important;
      color: var(--text-main) !important;
      padding-left: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    body.sidebar-enabled .notion-frame {
      padding-left: 250px !important;
    }
    
    h1 {
      font-size: 18px !important;
      position: fixed !important;
      top: 60px !important;
      left: 0 !important;
      right: 0 !important;
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      background: var(--bg-sidebar) !important;
      background-clip: padding-box !important;
      z-index: 2 !important;
      padding: 24px 0 24px 24px !important;
      border-bottom: 1px solid var(--border-main) !important;
      box-sizing: border-box !important;
      font-weight: 500 !important;
      z-index: 2500 !important;
    }

    .layout.layout-wide {
      --margin-width: 24px !important;
      --content-width: 1fr !important;
      padding-bottom: 0px !important;
    }

    .layout.layout-wide .notion-selectable {
      max-width: none !important;
      width: auto !important;
    }

    .notion-page-content {
      margin-top: 100px !important;
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
