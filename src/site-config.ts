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
  googleFont: 'Roboto',

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
    --bg-main: #06061a;
    --bg-sidebar: #23272f;
    --text-main: #f7f7f8;
    --border-main: #2e2e38;
    --link: var(--indigo-4);
    --surface-hover: #2e2e38;
  }

  /* =========================
    STYLE OVERIDE
  ========================= */
  
  html.notion-html,
  .notion-app,
  .notion-app-inner {
    background: var(--bg-main) !important;
    color: var(--text-main) !important;
  }

  .notion-layout {
    margin-top: 0px !important;
    margin-left: 0px !important;
    margin-bottom: 0px !important;
    margin-right: 0px !important;
  }
    
  .notion-frame {
    background: var(--bg-main) !important;
    color: var(--text-main) !important;
    padding-left: 250px !important;
  }
  
  .notion-topbar,
  .notion-topbar-mobile {
    background: var(--bg-sidebar: #23272f);
    height: 60px !important;
    min-height: 60px !important;
    max-height: 60px !important;
    padding-left: 250px !important;
  }

  /* =====================
    HIDE & REMOVED
  ===================== */
  
  h1,
  #x-burger,
  .toggle-mode,
  .notion-page-controls {
    display: none !important;
  }

  /* ==================
    X-TOGGLE
  ===================== */
    
  #x-toggle {
    display: flex !important;
    align-items: center;
    justify-content: center;
    min-width: 36px;
    min-height: 36px;
    padding: 6px;
    position: fixed !important;
    top: 16px;
    right: 28px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 4000 !important;
  }
 
  #x-toggle svg {
    width: 24px;
    height: 24px;
    display: block;
  }
 
  #x-toggle:hover {
    color: var(--accent, #64ffda);
  }
    
  /* =========================
    X-SIDEBAR
  ========================= */

  #x-sidebar {
    position: fixed;
    top: 0; left: 0; bottom: 0;
    width: 250px;
    background: var(--bg-sidebar, #23272f);
    color: var(--text-main, #f7f7f8);
    border-right: 1px solid var(--border-main, #2e2e38);
    z-index: unset;
    display: flex;
    flex-direction: column;
    height: 100vh;
    font-family: inherit;
    font-size: 14px;
    transition: background .2s, color .2s;
  }
  
  #x-sidebar .x-sidebar-inner {
    flex: 1;
    overflow-y: auto;
    padding: 0 12px 24px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  #x-sidebar .x-sidebar-logo {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 1.15rem;
    padding: 24px 0 12px 0;
    padding-left: 14px;
    letter-spacing: -1px;
    color: var(--text-main, #f7f7f8);
  }
  
  #x-sidebar .x-sidebar-logo img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    vertical-align: middle;
    margin-right: 4px;
  }

  #x-sidebar .x-sidebar-section-title {
    margin: 18px 0 4px 8px;
    font-size: 0.98em;
    font-weight: 600;
    opacity: 0.7;
    letter-spacing: 0.01em;
  }
  
  #x-sidebar .x-sidebar-menu {
    list-style: none;
    margin: 0; padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  #x-sidebar .x-sidebar-menu-main {
    margin-bottom: 8px;
  }
  
  #x-sidebar .x-sidebar-menu li {
    margin: 0; padding: 0;
  }
  
  #x-sidebar .x-sidebar-menu a {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 7px 8px 7px 14px;
    color: inherit;
    text-decoration: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    transition: background .15s, color .15s;
    opacity: 0.95;
  }
  
  /* =====================
    RESPONSIVE: MOBILE VIEW
  ===================== */
  
  @media (max-width: 900px) {
    .notion-topbar,
    .notion-topbar-mobile,  
    .notion-frame {
      padding-left: 0 !important;
      transition: padding-left 0.3s cubic-bezier(0.4,0,0.2,1);
    }
    
    #x-sidebar {
      display: none !important;
    }
    
    body.sidebar-open #x-sidebar {
      display: block !important;
    }
    
    body.sidebar-open .notion-frame {
      padding-left: 250px !important;
    }
    
    #x-burger {
      display: flex !important;
      position: fixed !important;
      top: 16px !important;
      left: 28px !important;
      z-index: 4000 !important;
      background: none !important;
      border: none !important;
      align-items: center !important;
      justify-content: center !important;
      width: 44px !important;
      height: 44px !important;
      padding: 0 !important;
    }
    
    body.sidebar-open #x-burger {
      transform: translateX(250px);
    }
    
  }

  
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
