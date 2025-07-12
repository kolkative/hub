import { NoteHostSiteConfig, googleTag } from "notehost";
import { PAGE_SCRIPT_JS_STRING } from "./_page-script-js-string";

// Set this to your Google Tag ID from Google Analytics
const GOOGLE_TAG_ID = "G-2FG5VHBYH1";

export const SITE_CONFIG: NoteHostSiteConfig = {
  domain: "hub.kolkative.my.id",

  // Metatags, optional
  // For main page link preview
  siteName: "Kolkative Hub",
  siteDescription: "Media Informasi dan Apresiasi",
  siteImage: "https://imgur.com/q0QXC8F",

  // Twitter handle, optional
  // twitterHandle: '',

  // URL to custom favicon.ico
  siteIcon: "https://raw.githubusercontent.com/kolkative/web/refs/heads/main/public/kolkative-hub-logo.svg",

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  notionDomain: "kolkative",

  // Map slugs (short page names) to Notion page IDs
  // Empty slug is your main page
  slugToPage: {
    "": "208db40e66ea8001b35af735e91f0e0c",
    team: "208db40e66ea80199338dadddde8ebb4",
    player: "211db40e66ea80739783ffc4a44671e5",
    event: "211db40e66ea808e8ce0cfe0a9d415de",
    karya: "208db40e66ea806f86b1d5f50f8f981c",
    // individual teams
    epigonen: "208db40e66ea80a185c7d0c381e72752",
  },

  // Rewrite meta tags for specific pages
  // Use the Notion page ID as the key
  pageMetadata: {
    "208db40e66ea8001b35af735e91f0e0c": {
      title: "Kolkative Hub",
      description: "The Largest Kabaret Databases",
      image: "https://imgur.com/q0QXC8F",
      author: "Kolkative Compound",
    },
  },

  // Subdomain redirects are optional
  // But it is recommended to have one for www
  subDomains: {
    www: {
      redirect: "https://hub.kolktive.my.id",
    },
  },

  // The 404 (not found) page is optional
  // If you don't have one, the default 404 page will be used
  fof: {
    page: "",
    slug: "default",
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: "",

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    /* =======================
       THEME & STYLE
    ========================== */

    .notion-frame {
      background: var(--surface-1) !important;
      color: var(--text-1) !important;
      padding-left: 250px !important;
    }

    body,
    .notion-page-content {
      margin-top: 60px;
      color: var(--text-1) !important;
      background: var(--surface-1) !important;
      z-index: var(--layer-2) !important;
      padding: 0 0 0 0 !important;
    }

    .notion-callout-block > .notion-callout-content {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      padding: 0.75rem 1.5rem !important;
      border: var(--border-size-1) solid var(--surface-3) !important;
      border-radius: var(--radius-conditional-3) !important;
      background: var(--surface-2) !important;
      color: var(--text-1) !important;
      font-family: 'Space Gotesk', sans-serif !important;
      font-weight: 500 !important;
      font-size: 1rem !important;
      line-height: 1.5 !important;
      text-decoration: none !important;
      box-shadow: 2px 2px 0 #000000 !important;
      transition: all 0.15s ease-in-out !important;
    }
    
    a {
      color: var(--text-1) !important;
      font-size: 20px;
      line-height: 150%;
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", sans-serif;
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      text-decoration: underline;
      padding:3px;
      background: var(--surface-2) !important;
    }
    
    a:link{
        color: var(--text-3) !important;
    }
    
    a:visited{
        color: var(--text-4) !important;
    }
    
    a:hover{
        background: var(--surface-3) !important;
        background-size: auto 4em;
        background-repeat: no-repeat;
        background-position: 0% 15px; 
    }

    .title {
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-main) !important;
      margin-top: 50px;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    .subtitle {
      color: var(--text-1) !important;
      font-weight: 500;
      background: var(--surface-2) !important;
    }

    h1 {
      position: fixed !important;
      color: var(--text-1) !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      background: var(--surface-2) !important;
      background-clip: padding-box !important;
      z-index: var(--layer-3) !important;
      font-size: 20px !important;
      padding: 18px 0px 18px 24px !important;
      border-bottom: var(--border-size-1) solid var(--surface-3);
      box-sizing: border-box !important;
    }

    h2,h3,h4,p,dt {
      color: var(--text-1);
    }

    h5,h6,small,dd {
      color: var(--text-2);
    }
    
    button {
      color: var(--text-1) !important;
      background-color: var(--surface-2) !important;
      border: var(--border-size-1) solid var(--surface-3) !important;
      box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
      border-radius: var(--radius-conditional-4);
      align-items: center;
      height: fit-content;
      min-width: 180px;
      font-size: large;
      font-weight: 500;
      padding: 12px;
    }
    
    button:hover {
      color: var(--text-2) !important;
      background-color: var(--surface-3) !important;
    }
    
    button.primary {
      color: var(--text-1) !important;
      background-color: var(--surface-2) !important;
      border: 1px solid var(--border-main) !important;
      border-radius: var(--radius-conditional-3);
      align-items: center;
      height: fit-content;
      min-width: 180px;
      font-size: large;
      font-weight: 500;
      padding: 12px;
    }
    
    button.primary:hover {
      color: var(--text-2) !important;
      background-color: var(--surface-3) !important;
    }
    
    form {
      font-size: 20px;
    }
    
    ul {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    li {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    table {
      border: 1px solid var(--border-main) !important;
      border-collapse: collapse;
      padding: 20px;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    tr {
      border: var(--border-size-1) solid var(--surface-3); !important;
      padding: 10px;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    tr:nth-child(even) {
      background-color: var(--surface-2) !important;
    }
    
    td {
      border: var(--border-size-1) solid var(--surface-3) !important;
      padding: 10px;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    th {
      border: var(--border-size-1) solid var(--surface-3) !important;
      text-align: left;
      padding: 20px;
      color: var(--text-1) !important;
      background: var(--surface-2) !important;
    }
    
    
    /* ==================
      HIDE & REMOVED
    ===================== */

    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    header.notion-topbar-mobile,
    .pageLinkIndicator,
    div[style*="min-height: 44px"],
    .notion-table-view div[style *="min-height: 32px;"] .notion-record-icon[style*="margin-bottom: -1px; margin-right: 4px;"] {
      display: none !important;
    }
    
    div.notion-frame > div.notion-scroller > div{
      background-color: var(--surface-1) !important;
    }

    .notion-scroller.vertical.horizontal > div:nth-child(2) {
      scrollbar-color: var(--surface-1) !important
    }

    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }


    /* =======================
      X-TOGGLE
    ========================== */

    #x-toggle {
      position: fixed;
      top: 23px;
      right: 20px;
      z-index: var(--layer-7);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      border-radius: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
      background: none;
    }

    #x-toggle:hover {
      color: var(--link);
    }

    /* =======================
      X-SIDEBAR
    ========================== */
    #x-sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 250px;
      height: 100vh;
      background: var(--surface-2) !important;
      color: var(--text-1) !important;
      z-index: var(--layer-4);
      padding: 10px 0 10px 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-right: var(--border-size-1) solid var(--surface-3);
    }
    #x-sidebar nav {
      padding: 70px 10px 10px 10px;
      width: 100%;
    }
    #x-sidebar ul {
      list-style: none;
      padding: 0 10px 0 10px;
      margin: 0;
      gap: 0;
    }
    #x-sidebar .sidebar-link {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 5px 10px 5px 10px;
      color: var(--link);
      text-decoration: none;
      border-radius: 10px;
      transition: background 0.18s, color 0.18s;
      font-size: 0.93rem;
      cursor: pointer;
      margin-bottom: 1px;
      min-height: 28px;
      line-height: 1.2;
    }
    #x-sidebar .sidebar-link.selected {
      background: var(--surface-1);
      color: var(--link);
      font-weight: bold;
    }
    #x-sidebar .sidebar-link:hover {
      background: var(--surface-1);
      color: var(--link);
    }
    #x-sidebar .sidebar-section {
      gap: 10px;
      margin: 12px 24px 12px 24px;
      font-size: 0.93rem;
      color: var(--text-2);
      letter-spacing: 1px;
      font-weight: 300;
    }
    #x-sidebar .sidebar-icon {
      width: 24px;
      height: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 2px;
      opacity: 0.7;
    }

   /* @media (max-width: 600px) {
      #x-sidebar {
        width: 100vw;
        height: auto;
        position: relative;
        box-shadow: none;
        padding: 16px 0;
      }
    } */

    /* =======================
      X-HEADER
    ========================== */
    #x-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 60px;
      background: var(--surface-2)!important;
      color: var(--text-1) !important;
      z-index: var(--layer-5);
      display: flex;
      align-items: center;
      padding: 0 24px;
      border-bottom: var(--border-size-1) solid var(--surface-3);
      transition: background 0.2s;
    }
    #x-header .header-logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      user-select: none;
      text-decoration: none !important;
    }
    #x-header .header-logo img {
      height: 24px;
      max-width: 120px;
      display: block;
    }

    .header-title {
      margin-left: 8px;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-1);
      letter-spacing: 0.005em;
      display: inline-block;
      vertical-align: middle;
      cursor: pointer;
      text-decoration: none !important;
      line-height: 1;
    }

    /* Prevent FOUC: hide body until data-theme is set */
    body:not([data-theme]) { visibility: hidden; }
    body[data-theme] { visibility: visible; }

    /* Hilangkan efek hover pada header logo */
    .header-logo:hover, .header-logo img:hover, .header-logo:active { background: none !important; box-shadow: none !important; }

  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
};
