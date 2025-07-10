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
  siteIcon: "https://imgur.com/SAjtNw5",

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
    kabaret: "208db40e66ea806f86b1d5f50f8f981c",
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
    page: "22adb40e66ea80ff83d9c1a195eecd5b",
    slug: "404", // default
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: "",

  // Custom JS for head and body of a Notion page
  customHeadCSS: `
    /* =======================
       THEME & STYLE
    ========================== */
    /* Light mode root */
    .notion-app-inner {
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

    .notion-frame {
      background-color: var(--bg-main) !important;
      color: var(--text-main) !important;
    }

    .notion-page-content {
      margin-top: 50px;
    }

    div.notion-selectable.notion-callout-block > div {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 0.75rem 1.5rem; /* ruang dalam tombol */
      border: 1px solid var(--border-main) !important; /* warna garis */
      border-radius: 0.75rem; /* sudut membulat */
      background: var(--bg-sidebar); /* warna dasar */
      color: var(--text-main); /* warna teks */
      font-family: 'Space Gotesk', sans-serif;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.5;
      text-decoration: none;
      box-shadow: 2px 2px 0 #0000 !important; /* shadow ala Phosphor */
      transition: all 0.15s ease-in-out;
    }
    
    div.notion-selectable.notion-callout-block > div {
      background: var(--bg-sidebar) !important;
      transform: translateY(-1px);
      box-shadow: 3px 3px 0 #0000 !important;
    }
    
    div.notion-selectable.notion-callout-block:active > div {
      transform: translateY(1px);
      box-shadow: 1px 1px 0 #0000 !important;
    }

    a {
      color: var(--text-main) !important;
      font-size: 20px;
      line-height: 150%;
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", sans-serif;
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
      text-decoration: underline;
      padding:3px;
    }
    
    a:link{
        color: var(--link) !important;
    }
    
    a:visited{
        color: var(--link) !important;
    }
    
    a:hover{
        background: linear-gradient(#eee, #eee);
        background-size: auto 4em;
        background-repeat: no-repeat;
        background-position: 0% 15px; 
    }

    .title {
      width: 100%;
      padding-bottom: 10px;
      border-bottom: 1px solid var(--border-main) !important;
      margin-top: 50px;
    }
    
    .subtitle {
      color: var(--text-main) !important;
      font-weight: 500;
    }

    h1 {
      position: fixed !important;
      color: var(--text-main) !important;
      top: 0 !important;
      left: 0 !important;
      right: 0 !important;
      width: 100vw !important;
      min-width: 100vw !important;
      max-width: 100vw !important;
      background: var(--bg-sidebar,) !important;
      background-clip: padding-box !important;
      z-index: 2 !important;
      font-size: 20px !important;
      padding: 24px 0px 24px 24px !important;
      border-bottom: 1px solid var(--border-main);
      border-top: 1px solid var(--border-main);
      box-sizing: border-box !important;
    }

    h2 {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 30px;
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      line-height: 1.1;
    }
    
    h3 {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 25px;
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      line-height: 1.1;
    }
    
    h4 {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      line-height: 1.1;
    }
    
    h5 {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 18px;
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      line-height: 1.1;
    }
    
    h6 {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 14px;
      font-style: normal;
      font-variant: normal;
      font-weight: 700;
      line-height: 1;
    }
    
    p {
      color: rgba(0, 0, 0, 0.6);
      font-size: 20px;
      line-height: 150%;
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-style: normal;
      font-variant: normal;
      font-weight: 400;
    }
    
    button {
      background-color: var(--bg-sidebar) !important;
      color: var(--text-main) !important;
      border: 1px solid var(--border-main) !important;
      box-shadow: rgba(15, 15, 15, 0.1) 0px 1px 2px;
      border-radius: 6px;
      align-items: center;
      height: fit-content;
      min-width: 180px;
      font-size: large;
      font-weight: 500;
      padding: 12px;
    }
    
    button:hover {
      background-color: var(--bg-sidebar) !important;
      color: var(--text-main) !important;
    }
    
    button.primary {
      background-color: var(--bg-sidebar) !important;
      color: #fff;
      border: 1px solid var(--border-main) !important;
      border-radius: 3px;
      align-items: center;
      height: fit-content;
      min-width: 180px;
      font-size: large;
      font-weight: 500;
      padding: 12px;
    }
    
    button.primary:hover {
      background-color: #cf534a;
      color: #fff;
    }
    
    form {
      font-size: 20px;
    }
    
    ul {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
    }
    
    li {
      font-family: "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans",
        "Helvetica Neue", Arial, sans-serif;
      font-size: 20px;
      line-height: 1.5;
    }
    
    table {
      border: 1px solid var(--border-main) !important;
      border-collapse: collapse;
      padding: 20px;
    }
    
    tr {
      border: 1px solid var(--border-main) !important;
      padding: 10px;
    }
    tr:nth-child(even) {
      background-color: var(--bg-sidebar) !important;
    }
    
    td {
      border: 1px solid var(--border-main) !important;
      padding: 10px;
    }
    
    th {
      border: 1px solid var(--border-main) !important;
      text-align: left;
      padding: 20px;
    }
    
    

    /* ==================
      HIDE & REMOVED
    ===================== */
    
    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    header.notion-topbar-mobile,
    div[style*="min-height: 44px"] {
      display: none !important;
    }
    
    /* ========== SCROLLBAR ========== */
    div.notion-frame > div.notion-scroller > div{
      background-color: #00000000 !important;
    }

    .notion-scroller.vertical.horizontal > div:nth-child(2) {
    background: var(--theme--bg) !important
    }

    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }

    .notion-table-view div[style *="min-height: 32px;"] .notion-record-icon[style*="margin-bottom: -1px; margin-right: 4px;"] {
      display: none !important;
    }

    /* ========== HIDE ARROWS IN PAGE LINK ========== */
    .pageLinkIndicator {
      display: none !important;
    }

    /* =======================
      X-TOGGLE
    ========================== */

    #x-toggle {
      position: fixed;
      top: 23px;
      right: 20px;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
};
