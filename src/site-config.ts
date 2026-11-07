import { NoteHostSiteConfig, googleTag } from 'notehost'
import { PAGE_SCRIPT_JS_STRING } from './_page-script-js-string'

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = 'G-2FG5VHBYH1'

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: 'hub.kolkative.com',

  // Metatags, optional
  // For main page link preview
  siteName: 'Kolkative Hub',
  siteDescription: 'Media Inspirasi &amp; Apresiasi',
  siteImage: 'https://raw.githubusercontent.com/kolkative/hub/main/public/site-preview.png',

  // Twitter handle, optional
  // twitterHandle: '',

  // URL to custom favicon.ico
  siteIcon: 'https://raw.githubusercontent.com/kolkative/hub/35eaec46dbfa0317c353b50e7f47d71b04331ec4/public/icon-color.svg',

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  notionDomain: 'kolkative',

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
    slugToPage: {
    "": "208db40e66ea8001b35af735e91f0e0c",
    team: "208db40e66ea80199338dadddde8ebb4",
    leaderboard: "211db40e66ea80739783ffc4a44671e5",
    event: "211db40e66ea808e8ce0cfe0a9d415de",
    kabaret: "217db40e66ea80019ed8d59fc830c005",
    brand: "239db40e66ea802eacb2f022e2c19859",
    job: "24edb40e66ea80e7b790c204d257ddd8",
    help: "250db40e66ea80e08011d887d304fb36",
    store: "24ddb40e66ea80ccbdbacd583113dde4",
    support: "25cdb40e66ea80b48150c92743ae07df",
    starthere: "254db40e66ea80708fd4f809e2203bb8",
    crew: "297db40e66ea809a898ffbf2ac5cee18",
    koty: "2cadb40e66ea804e90c2ce067d4f0966",
    gyfest: "373db40e66ea809ba792ecec0b9808a1",
    tnc: "373db40e66ea8046b899e46a0d3d0b79",
    bitan: "214db40e66ea80cb91acd7aac2eeacb4",
    boss: "37cdb40e66ea8046af51f90f46cbb1f1",
    goalpara: "37cdb40e66ea80e28abeebfff4763e82",
    // individual teams
  },


  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  pageMetadata: {
   "208db40e66ea8001b35af735e91f0e0c": {
      title: "Kolkative Hub",
      description: "Media Informasi dan Apresiasi Seni Petunjukan",
      image: "https://iili.io/CBP95S2.png",
      author: "Kolkative Compound",
    },
   },


  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: "https://hub.kolkative.com",
    },
  },


  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  fof: {
    page: "250db40e66ea80f2ae1ff4274a3e9e99",
    slug: "404",
  },


  // Google Font name, you can choose from https://fonts.google.com
  // googleFont: 'Roboto',

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    #x-sidebar,
    #x-header {
      --nav-bg: #191919;
      --nav-text: #f0efed;
      --nav-subtle-text: #f0efed;
      --nav-hover: #252525;
      --nav-selected: #2f2f2f;
      --nav-border: #333333;
    }

    html.light #x-sidebar,
    body.light #x-sidebar,
    html.light #x-header,
    body.light #x-header {
      --nav-bg: #f1f3f5;
      --nav-text: #16191d;
      --nav-subtle-text: #212529;
      --nav-hover: #dee2e6;
      --nav-selected: #e9ecef;
      --nav-border: #ced4da;
    }

    #x-toggle {
      position: fixed;
      z-index: 6;
      top: 10px;
      right: 14px;
      display: flex;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      background: none;
      border: 0;
      cursor: pointer;
    }

    #x-toggle svg {
      display: block;
      flex: none;
      width: 30px !important;
      min-width: 30px;
      height: 30px !important;
      min-height: 30px;
      transition: filter 0.2s, fill 0.2s;
    }

    #x-toggle:hover svg {
      filter: brightness(1.3) drop-shadow(0 0 2px #0099ff);
    }

    .notion-frame {
      padding-left: 250px !important;
    }

    .notion-page-content {
      margin-top: 60px !important;
    }

    #x-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 4;
      display: flex;
      width: 250px;
      height: 100vh;
      flex-direction: column;
      gap: 2px;
      overflow-y: auto;
      padding: 65px 0 20px;
      color: var(--nav-text);
      background: var(--nav-bg);
      border-right: 1px solid var(--nav-border);
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    #x-sidebar::-webkit-scrollbar {
      display: none;
    }

    #x-sidebar nav {
      margin: 8px 12px 24px;
      padding-bottom: 24px;
    }

    #x-sidebar ul {
      margin: 0;
      padding: 0 16px;
      list-style: none;
    }

    #x-sidebar .sidebar-link {
      display: flex;
      min-height: 20px;
      align-items: center;
      gap: 6px;
      margin-bottom: 2px;
      padding: 7px 8px;
      color: var(--nav-text);
      font-size: 0.85rem;
      line-height: 1.2;
      text-decoration: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.15s, color 0.15s;
    }

    #x-sidebar .sidebar-link.selected {
      color: var(--nav-text);
      background: var(--nav-selected);
      font-weight: 700;
    }

    #x-sidebar .sidebar-link:hover {
      color: var(--nav-text);
      background: var(--nav-hover);
    }

    #x-sidebar .sidebar-section {
      margin: 30px 0 10px 15px;
      color: var(--nav-subtle-text);
      font-size: 0.95rem;
      font-weight: 600;
      letter-spacing: 0.3px;
    }

    #x-sidebar .sidebar-icon {
      width: 20px;
      min-width: 20px;
      max-width: 20px;
      height: 20px;
      min-height: 20px;
      max-height: 20px;
    }

    #x-sidebar-overlay {
      position: fixed;
      z-index: 2;
      inset: 0;
      display: none;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.25);
      pointer-events: auto;
      transition: opacity 0.2s;
    }

    #x-header {
      position: fixed;
      z-index: 5;
      top: 0;
      left: 0;
      display: flex;
      width: 100vw;
      height: 60px;
      align-items: center;
      padding: 0 24px;
      color: var(--nav-text);
      background: var(--nav-bg);
      border-bottom: 1px solid var(--nav-border);
      transition: background 0.2s;
    }

    #x-header-logo {
      display: inline-block;
      width: 18px;
      max-width: 100%;
      height: 18px;
      max-height: 18px;
      object-fit: contain;
      vertical-align: middle;
    }

    .header-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      padding-top: 10px;
      padding-left: 10px;
      color: inherit;
      text-decoration: none;
    }

    #x-header-title,
    #x-header-title .kolkative,
    #x-header-title .hub {
      color: var(--nav-text);
    }

    #x-header-title {
      display: flex;
      align-items: baseline;
      gap: 4px;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: -0.5px;
    }

    #x-header-title .kolkative {
      margin-right: 1px;
      font-weight: 700;
    }

    #x-header-title .hub {
      font-weight: 400;
    }

    #x-burger {
      position: fixed;
      z-index: 6;
      top: 3px;
      left: 5px;
      display: none;
      width: 60px;
      height: 60px;
      align-items: center;
      justify-content: center;
      padding: 0;
      color: var(--nav-text);
      background: none;
      border: none;
      cursor: pointer;
      transition: color 0.2s ease;
    }

    #x-burger:hover {
      color: #0099ff;
    }

    #x-burger svg {
      display: block;
      width: 18px;
      height: 18px;
    }

    @media (max-width: 900px) {
      #x-sidebar {
        display: none;
        transform: translateX(-100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .notion-frame {
        padding-left: 0 !important;
        transition: margin-left 0.3s ease;
      }

      body.sidebar-open .notion-frame {
        margin-left: 250px !important;
      }

      body.sidebar-open #x-sidebar {
        display: flex;
        transform: translateX(0);
      }

      #x-header {
        justify-content: center;
      }

      #x-burger {
        display: flex;
      }

      .notion-header,
      .notion-topbar,
      .notion-topbar-mobile,
      div[role="toolbar"] {
        display: none !important;
        pointer-events: none;
      }
    }
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
