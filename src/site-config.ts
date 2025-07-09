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
    /*  ========================
        LIGHT AND DARK THEMES
        ========================  */
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

    /*  =====================
        BACKGROUND & COLOR
        ===================== */
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
      background: var(--bg-sidebar) !important;
      color: var(--text-main) !important;
      height: 60px !important;
      min-height: 60px !important;
      max-height: 60px !important;
    }
    
    h1 {
      padding-left: 10px !important;
    }

    body div.notion-selectable .notion-page-block {
      position: fixed !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      background: var(--bg-sidebar, #23272f) !important;
      background-clip: padding-box !important;
      z-index: 2 !important;
      padding: 4px 0 4px 50px !important;
      border-bottom: 2px solid #3b82f6 !important;
      box-sizing: border-box !important;
    }

    .notion-page-content {
      margin-top: 34px; 
    }

    /* =====================
       HIDE & REMOVED
       ===================== */
    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    .notion-topbar-mobile {
      display: none !important;
    }

    /* ==================
       X-TOGGLE STYLE
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
 
    /* =====================
       X-SIDEBAR STYLE
       ===================== */
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
    #x-sidebar .x-sidebar-menu a:hover,
    #x-sidebar .x-sidebar-menu a.active {
      background: var(--surface-hover, #2e2e38);
      color: var(--accent, #64ffda);
      opacity: 1;
      border-radius: 6px;
    }
    #x-sidebar .x-sidebar-menu a svg,
    #x-sidebar .x-sidebar-menu a img[alt="Kolkative Academy"] {
      margin-right: 4px !important;
      min-width: 20px;
      min-height: 20px;
      max-width: 20px;
      max-height: 20px;
      vertical-align: middle;
      display: inline-block;
    }
    #x-sidebar .x-sidebar-menu a.active svg {
      color: #3b82f6;
      stroke: #3b82f6;
    }
    html.light-mode #x-sidebar {
      background: var(--bg-sidebar, #f7f7f8);
      color: var(--text-main, #23272f);
      border-right: 1px solid var(--border-main, #e5e5e7);
    }
    html.light-mode #x-sidebar .x-sidebar-logo {
      color: var(--text-main, #23272f);
    }
    html.light-mode #x-sidebar .x-sidebar-menu a:hover,
    html.light-mode #x-sidebar .x-sidebar-menu a.active {
      background: var(--surface-hover, #e5e5e7);
      color: var(--accent, #3b82f6);
    }
    html.light-mode #x-sidebar .x-sidebar-menu a.active svg {
      color: #3b82f6;
      stroke: #3b82f6;
    }
    /* Hugeicons for sidebar */
    #x-sidebar .hgi {
      font-family: 'Hugeicons', 'Arial', sans-serif !important;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      font-size: 18px;
      display: inline-block;
      vertical-align: middle;
      speak: never;
      margin-right: 8px;
      color: inherit;
      width: 1.2em;
      height: 1.2em;
      overflow: visible;
    }
    #x-sidebar .x-sidebar-menu a.active .hgi {
      color: #3b82f6;
    }
    html.light-mode #x-sidebar .x-sidebar-menu a.active .hgi {
      color: #3b82f6;
    }

    /* =====================
       OVERIDE STYLE (MOBILE VIEW)
       ===================== */
    @media (max-width: 900px) {
      #x-sidebar {
        display: none !important;
      }
      body.sidebar-open #x-sidebar {
        display: block !important;
      }
      .notion-frame {
        padding-left: 0 !important;
        transition: padding-left 0.3s cubic-bezier(0.4,0,0.2,1);
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
      .main-content,
      .notion-page-content,
      div.notion-selectable .notion-page-block {
        z-index: 2 !important;
        position: relative !important;
      }
      
    }
      
    /* =====================
       OVERLAY STYLE (MOBILE VIEW)
       ===================== */
    #x-sidebar-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(2px);
      z-index: unset;
      display: none;
      pointer-events: auto;
    }
  
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
