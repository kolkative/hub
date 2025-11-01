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
  siteIcon:
    "https://raw.githubusercontent.com/kolkative/web/refs/heads/main/public/kolkative-hub-logo.svg",

  // Additional safety: avoid serving extraneous Notion content from your website
  // Use the value from your Notion settings => Workspace => Settings => Domain
  notionDomain: "kolkative",

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
    showpeace: "268db40e66ea80899571f4b790567c30",
    starthere: "254db40e66ea80708fd4f809e2203bb8",
    crew: "297db40e66ea809a898ffbf2ac5cee18",
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
    page: "250db40e66ea80f2ae1ff4274a3e9e99",
    slug: "404",
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: "Space Grotesk",

  // Custom JS for head and body of a Notion page
  customHeadCSS: `

    /* =======================
       THEME & STYLE
    ========================== */
    
    /* Hide text decoration untuk semua link */
    a, a:link, a:visited, a:hover, a:active {
      text-decoration: none !important;
      text-decoration-line: none !important;
      text-decoration-style: none !important;
      text-decoration-color: none !important;
      text-decoration-thickness: none !important;
    }
    /* Boldkan teks link di area konten */
    .notion-page-content a {
      font-weight: 600 !important;
    }
    
    /* CSS Variables untuk Theme */
    :root {
      --gray-0: #f8f9fa;
      --gray-1: #f1f3f5;
      --gray-2: #e9ecef;
      --gray-3: #dee2e6;
      --gray-7: #495057;
      --gray-8: #343a40;
      --gray-9: #212529;
      --gray-10: #16191d;
      --gray-11: #0d0f12;
      --border-size-1: 1px;
      --radius-conditional-3: 6px;
      --layer-2: 2;
      --layer-4: 4;
      --layer-5: 5;
      --layer-6: 6;
      --logo-white: url('https://hub.kolkative.my.id/image/attachment%3A05bc55da-f638-4604-8c1a-9b4ad5d9f159%3AKolkative_Hub_White.png?table=block&id=239db40e-66ea-80e5-8770-fb82b100069d&spaceId=9c898b20-1510-47e1-a570-a3c00e5d8916&width=580&userId=&cache=v2');
      --logo-black: url('https://hub.kolkative.my.id/image/attachment%3Ab4133deb-17d0-46b9-8423-5d09dac4916f%3AKolkative_Hub_Black.png?table=block&id=239db40e-66ea-80b5-a864-d20c286d89ca&spaceId=9c898b20-1510-47e1-a570-a3c00e5d8916&width=580&userId=&cache=v2');
      --logo: #0099FF;
      /* Dark theme defaults */
      --bg-1: #0d0f12;   
      --bg-2: #16191d;
      --bg-3: #212529;     
      --text-1: #f8f9fa;
      --text-2: #f1f3f5;  
      --border: #343a40;   
      --link: #0099FF; 
      --brand: #FF3366;  
      --hover: #495057;
    }
      
    html.light, body.light {
      --bg-1: #f8f9fa;   
      --bg-2: #f1f3f5;
      --bg-3: #e9ecef;     
      --text-1: #16191d;
      --text-2: #212529;   
      --border: #343a40;   
      --link: #0099FF; 
      --brand: #FF3366;
      --hover: #dee2e6; 
    }

    .notion-app,
    .notion-app-inner {
      background: var(--bg-1) !important;
      color: var(--text-1) !important;
    }

    .notion-frame {
      background: var(--bg-1) !important;
      color: var(--text-1) !important;
      padding-left: 250px !important; 
      transition: padding 0.3s ease;
    }
    

    body,
    .notion-page-content {
      margin-top: 60px !important; 
      color: var(--text-1) !important;
      background: var(--bg-1) !important;
      z-index: var(--layer-2) !important;
      padding: 0 0 0 0 !important;
    }

    
    .notion-callout-block [role="note"] > div {
      background: var(--bg-2) !important;
      color: var(--text-1) !important;
      border: var(--border-size-1) solid var(--border) !important;
      border-radius: var(--radius-conditional-3) !important;
      text-decoration: none !important;
      box-shadow: 2px 2px 0 #000000 !important;
      transition: all 0.15s ease-in-out !important;
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
      background: var(--bg-1) !important;
      background-clip: padding-box !important;
      z-index: var(--layer-2);
      font-size: 20px !important;
      font-weight: 600 !important;
      letter-spacing: -2px !important;
      padding: 18px 0px 18px 24px !important;
      border-bottom: var(--border-size-1) solid var(--border);
      box-sizing: border-box !important;
    }

    h2 {
      color: var(--link) !important;
      font-family: var(--font-neo-grotesque) !important;
      letter-spacing: -2px !important;
      text-transform: uppercase !important;
      font-size: 30px !important;
      font-weight: 600 !important;
      margin-top: -18px !important;
      margin-bottom: -10px !important;
      padding-top: 6px !important;
      padding-bottom: 10px !important;
      padding-inline: 0 !important;
    }
    
    h3 {
      color: var(--brand) !important;
      font-family: var(--font-neo-grotesque) !important;
      letter-spacing: -2px !important;
      text-transform: uppercase !important;
      font-size: 30px !important;
      font-weight: var(--font-weight-9) !important;
      margin-top: -38px !important;
      margin-bottom: -10px !important;
      padding-top: 6px !important;
      padding-bottom: 10px !important;
      padding-inline: 0 !important;
    }

    .notion-header-block,
    .notion-selectable.notion-header-block,
    .notion-selectable notion-sub_header-block,
    .notion-header-block > div,
    .notion-header-block > h2,
    .notion-header-block > h3  {
      margin: 0 !important;
      padding: 0 !important;
      gap: 0 !important;
    }

    /* Paksa font-size 13px untuk semua text di tab list */
    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a *,
    .notion-collection-view-tabs [role="tab"], 
    .notion-collection-view-tabs [role="tab"] *, 
    .notion-selectable.notion-collection_view-block,
    .notion-collection-view-tabs span,
    .notion-collection-view-tabs div {
      font-size: 13px !important;
    }

    /* --- Style for standard Text Links --- */
    .notion-page-content a.notion-link-token {
      display: inline-flex !important;
      align-items: center !important;
      text-decoration: none !important;
      color: var(--link) !important;
      padding: 0 20px !important;
      margin: 1px 4px !important;
      min-height: 24px !important;
      border: 1px solid var(--border) !important;
      border-radius: var(--radius-conditional-3) !important;
      transition: all 0.2s ease-out !important;
    }

    .notion-page-content a.notion-link-token:hover {
      /* Matikan efek dim/underline/hover */
      transform: none !important;
      box-shadow: none !important;
      border-color: var(--border) !important;
    }

    .notion-page-content a.notion-link-token span {
      border-bottom: none !important;
    }
    /* Global: nonaktifkan underline dan dim pada semua link di konten */
    .notion-page-content a,
    .notion-page-content a:link,
    .notion-page-content a:visited,
    .notion-page-content a:hover,
    .notion-page-content a:active {
      text-decoration: none !important;
      text-decoration-line: none !important;
      border-bottom: none !important;
      opacity: 1 !important;
      filter: none !important;
      color: var(--link) !important;
    }

    /* Reset italic/emphasis to normal italic, no capsule */
    em, i, span[style*="italic"], span[style*="font-style: italic"] {
      font-style: italic !important;
      font-weight: 700 !important; /* italic-bold */
      padding: 0 !important;
      margin: 0 !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      background: none !important;
      color: inherit !important;
    }

    /* --- List View: V4 (Compact & Refined Navy) --- */
    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item {
        margin-bottom: 5px !important;
        padding: 0 !important;
    }

    /* Target the actual link, make it a flex container */
    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a {
      display: flex !important;
      align-items: center !important;
      padding: 0.3rem 1.1rem !important;
      text-decoration: none !important;
      color: var(--text-1) !important;
      font-size: 13px !important;
      border: 1px solid var(--border) !important;
      border-radius: var(--radius-conditional-3) !important;
      transition: all 0.2s ease-out !important;
      width: 100% !important;
      min-height: 28px;
    }
    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a * {
      color: inherit !important;
    }

    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item:hover a {
      transform: translateY(-1px);
      box-shadow: 1px 1px 0 #000000 !important;
      border-color: var(--border) !important;
    }

    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a .notion-collection-row-property {
      display: none !important;
    }

    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a .notion-collection-row-property-title {
      display: block !important;
      width: 100% !important;
    }

    body .notion-list-view .notion-selectable.notion-page-block.notion-collection-item a .notion-property-title div {
      color: var(--text-1) !important; /* keep list titles not blue */
      font-size: 12px !important;
      padding: 0 !important;
      white-space: nowrap !important;
      text-overflow: ellipsis !important;
    }

    /* --- Table View: Capsule Styling --- */
    .notion-table-view-cell:hover > div > div {
      transform: translateY(-1px) scale(1.01) !important;
      box-shadow: 1px 1px 0 #000000 !important;
      border-color: var(--border) !important;
    }

    /* Teks nama view di dropdown selector (mobile mode) */
    .notion-collection_view-menu,
    .notion-collection_view-menu * {
      color: var(--text-1) !important;
    }

    /* Item di dalam dropdown view selector */
    .notion-collection_view-menu .notion-selectable,
    .notion-collection_view-menu .notion-selectable * {
      color: var(--text-1) !important;
    }

    /* Ikon di dropdown view selector */
    .notion-collection_view-menu svg,
    .notion-collection_view-menu svg * {
      fill: var(--text-1) !important;
      stroke: var(--text-1) !important;
    }


    /* =====================
    RESPONSIVE: MOBILE VIEW
    ===================== */
    
    @media (max-width: 900px) {

      #x-sidebar {
        display: none !important;
        transform: translateX(-100%) !important;
        transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      }

      .notion-frame {
        padding-left: unset !important; 
      }

      body.sidebar-open .notion-frame {
        margin-left: 250px !important; 
        transition: padding 0.3s ease;
      }
      
      body.sidebar-open #x-sidebar {
        display: block !important;
        transform: translateX(0) !important;
      }

      #x-header,
      #x-header-inner {
        justify-content: center !important;
        align-items: center;
      }

      #x-burger {
        display: flex !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
  
      /* =========================================
     MINIMAL FIX: SHOW TABLE VIEW ON MOBILE
     tanpa ubah style default
     ========================================= */

      /* Batalin aturan yang nyembunyiin row tabel */
      .notion-table-view div[style*="min-height: 44px"],
      .notion-collection-view div[style*="min-height: 44px"] {
        display: block !important;
        min-height: auto !important;
        pointer-events: auto !important;
        opacity: 1 !important;
        visibility: visible !important;
      }
    
      /* Batalin aturan yang nyembunyiin isi sel */
      .notion-table-view .notion-collection-row-property,
      .notion-table-view .notion-collection-row-property-title,
      .notion-table-view .notion-property {
        display: inline !important;
        visibility: visible !important;
        opacity: 1 !important;
        height: auto !important;
        width: auto !important;
        max-height: none !important;
        max-width: none !important;
        overflow: visible !important;
        pointer-events: auto !important;
      }

      /* ==================
      HIDE & REMOVED
      ===================== */
      
      .notion-header,
      .notion-topbar,
      .notion-topbar-mobile
      div[role="toolbar"] {
        display: none !important;
        pointer-events: none !important;
      }

      #x-toggle {
        width: 20px !important;
        height: 20px !important;
      }
      #x-toggle svg {
        width: 20px !important;
        height: 20px !important;
      }
    }

    .notion-search .resultsPane {
      display: block;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
    }

    ::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
    

    .notion-search .resultsPane::-webkit-scrollbar,
    div[role="button"][aria-label="Filter"],
    div[role="button"][aria-label="Sort"],
    .notion-gallery-view .notion-selectable.notion-collection_view-block div + [role="button"],
    .notion-gallery-view .notion-selectable.notion-collection_view_page-block div + [role="button"] {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
      opacity: 0 !important;
    }

    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    .notion-header,
    .notion-topbar-mobile,
    header.notion-topbar-mobile,
    .pageLinkIndicator,
    .notion-callout-block [role="note"] > div:empty,
    div[style*="min-height: 44px"],
    .notion-table-view div[style *="min-height: 32px;"] .notion-record-icon[style*="margin-bottom: -1px; margin-right: 4px;"] {
      display: none !important;
      pointer-events: none !important;
    }

    /* --- Disable Tooltips --- */
    [role="tooltip"],
    .notion-tooltip,
    .notion-link-tooltip,
    div.notion-tooltip,
    div[role="tooltip"],
    .notion-link-tooltip,
    .notion-hoverable-token,
    .notion-page-link-indicator,
    .notion-mention-token [role="tooltip"],
    a.notion-link-token + div[role="tooltip"],
    a.notion-link-token:hover + div[role="tooltip"],
    span.notion-enable-hover + div[role="tooltip"],
    span.notion-enable-hover:hover + div[role="tooltip"],
    div[role="button"][aria-label="Open in side peek"],
    div[aria-label="Open in side peek"],
    div[style*="Open in side peek"],
    div[style*="uppercase"],
    [aria-label="Open page"],
    .notion-hoverable-token,
    .notion-collection-item.notion-selectable [aria-haspopup="true"],
    .notion-collection-item.notion-selectable [role="button"],
    .notion-collection-item.notion-selectable div[style*="pointer-events"][style*="z-index"],
    .ellipsisSmall,
    .notion-selectable.notion-image-block [role="button"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
      max-width: 0 !important;
      max-height: 0 !important;
      position: absolute !important;
      z-index: -1 !important;
    }

    /* Sembunyikan banner promosi Notion di atas halaman (CSS spesifik) */
    div.autolayout-row.autolayout-fill-width.autolayout-center.autolayout-space {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      margin: 0 !important;
    }


    /* --- DATABASE INTERACTION CONTROL --- */
    /* Allow pointer events on collection items for hover, but keep cursor default */
    .notion-collection-item.notion-selectable {
      pointer-events: auto !important;
      cursor: default !important;
    }

    /* Disable navigation links */
    .notion-collection-item.notion-selectable {
      pointer-events: auto !important;
      cursor: default !important;
    }
      
    /* Disable navigation links */
    .notion-collection-item.notion-selectable a[href^="/"],
    .notion-property-relation a,
    .notion-page-link,
    .notion-page-content a[href^="https://www.notion.so/"],
    .notion-mention-token a,
    .notion-collection-item.notion-selectable a {
      pointer-events: none !important;
      cursor: default !important;
    }

    /* Sembunyikan elemen di kanan tablist */
    [class*="filter"],
    [class*="sort"],
    [class*="dropdown"],
    [data-testid*="filter"],
    [data-testid*="sort"],
    [data-testid*="view"],
    [aria-label*="Filter"],
    [aria-label*="Sort"],
    [aria-label*="View"],
    [aria-label*="Options"],
    [aria-label*="filter"],
    [aria-label*="sort"],
    [aria-label*="view"],
    [aria-label*="options"],
    .notion-collection-view-tabs [role="listbox"],
    .notion-collection-view-tabs [aria-expanded],
    .notion-collection-view-tabs [aria-haspopup],
    .notion-collection-view-tabs [aria-controls],
    .notion-collection-view-tabs button {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
      max-height: 0 !important;
      max-width: 0 !important;
      transform: none !important;
      position: absolute !important;
      z-index: -1 !important;
    }

    /* --- BLOCK DATABASE PAGE LINKS: Prevent access to Notion page links inside collections --- */
    .notion-collection-item.notion-selectable a[href^="/"],
    .notion-collection-item.notion-selectable a {
      pointer-events: none !important;
      cursor: default !important;
    }
    


    /* =======================
      X-TOGGLE
    ========================== */

    #x-toggle {
      position: fixed;
      top: 22px;
      right: 20px;
      z-index: var(--layer-6) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px !important;
      height: 20px !important;
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      cursor: pointer;
      transition: none;
    }
    #x-toggle svg {
      width: 20px !important;
      height: 20px !important;
      min-width: 20px !important;
      min-height: 20px !important;
      max-width: 20px !important;
      max-height: 20px !important;
      display: block !important;
      transition: filter 0.2s, fill 0.2s;
    }
    #x-toggle:hover svg {
      filter: brightness(1.3) drop-shadow(0 0 2px var(--logo));
      /* atau bisa juga ubah fill jika SVG pakai fill="currentColor" */
      /* fill: var(--logo); */
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
      background: var(--bg-2) !important;
      color: var(--text-1) !important;
      z-index: var(--layer-4);
      padding: 65px 0 20px 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 2px;
      border-right: var(--border-size-1) solid var(--border);
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    #x-sidebar::-webkit-scrollbar {
      display: none !important;
    }
    #x-sidebar nav {
      margin: 8px 12px 24px 12px;
      padding-bottom: 24px !important;
    }
    #x-sidebar ul {
      list-style: none;
      padding: 0 16px 0 16px;
      margin: 0;
      gap: 0;
    }
    #x-sidebar .sidebar-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 7px 8px 7px 8px;
      color: var(--text-1);
      text-decoration: none;
      border-radius: 6px;
      transition: background 0.15s, color 0.15s;
      font-size: 0.85rem;
      cursor: pointer;
      margin-bottom: 2px;
      min-height: 20px;
      line-height: 1.2;
    }
    #x-sidebar .sidebar-link.selected {
      background: var(--bg-3);
      color: var(--text-1);
      font-weight: bold;
    }
    #x-sidebar .sidebar-link:hover {
      background: var(--hover);
      color: var(--text-1);
    }
    #x-sidebar .sidebar-section {
      margin: 30px 0px 10px 15px;
      font-size: 0.95rem;
      color: var(--text-2);
      letter-spacing: 0.3px;
      font-weight: 600;
    }
    #x-sidebar .sidebar-icon {
      width: 20px !important;
      height: 20px !important;
      min-width: 20px !important;
      min-height: 20px !important;
      max-width: 20px !important;
      max-height: 20px !important;
    }

    #x-sidebar-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.25);
      z-index: var(--layer-2);
      display: none;
      pointer-events: auto;
      transition: opacity 0.2s;
    }


    /* =======================
      X-HEADER
    ========================== */
    #x-header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 60px;
      background: var(--bg-2)!important;
      color: var(--text-1) !important;
      z-index: var(--layer-5);
      display: flex;
      align-items: center;
      padding: 0 24px;
      border-bottom: var(--border-size-1) solid var(--border);
      transition: background 0.2s;
    }
    /* =======================
       X-HEADER LOGO THEME SWITCH
    ========================== */
    #x-header-logo {
      width: 18px;
      height: 18px;
      max-width: 100%;
      max-height: 18px;
      object-fit: contain;
      display: inline-block;
      vertical-align: middle;
      content: var(--logo-white);
    }
    html.light #x-header-logo,
    body.light #x-header-logo {
      content: var(--logo-black);
    }
    /* =======================
       X-HEADER TITLE STYLE
    ========================== */
    #x-header-title, #x-header-title .kolkative, #x-header-title .hub {
      color: var(--text-1) !important;
    }
    .header-logo {
      text-decoration: none !important;
      display: flex;
      align-items: center;
      gap: 8px;
      padding-left: 10px !important;
      padding-top: 10px !important;
    }
    #x-header-title {
      font-size: 1rem !important;
      display: flex;
      align-items: baseline;
      letter-spacing: -0.5px;
      font-weight: 400;
      gap: 4px;
    }
    #x-header-title .kolkative {
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-right: 1px;
    }
    #x-header-title .hub {
      font-weight: 400;
      letter-spacing: -0.5px;
    }


    /* =====================
      X-BURGER
    ===================== */
      
    #x-burger {
      position: fixed;
      top: 3px;
      left: 5px;
      display: none;
      align-items: center;
      justify-content: center;
      background: none;
      border: none;
      cursor: pointer;
      width: 60px;
      height: 60px;
      padding: 0;
      z-index: var(--layer-6);
      color: var(--text-1);
      transition: color 0.2s ease;
      opacity: 1;
      visibility: visible;
    }

    #x-burger:hover {
      color: var(--logo);
    }

    #x-burger svg {
      width: 18px;
      height: 18px;
      display: block;
      opacity: 1;
      visibility: visible;
    }

    /* Ensure burger is always on top */
    #x-burger {
      pointer-events: auto !important;
    }

    /* =======================
    CUSTOM: INVERTED CALLOUT BLOCK
    ========================== */
    .notion-callout-block[data-block-id="239db40e-66ea-8000-97f9-ccda366a839a"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-807d-9931-d5de044db88d"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-8029-b50d-e68c1434a141"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-8000-9f99-ccda366a839a"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-8026-afbd-c3d587b4d208"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-8094-88c6-f64cd0043f25"] [role="note"] > div,
    .notion-callout-block[data-block-id="239db40e-66ea-80e3-a644-caab898cbc5f"] [role="note"] > div {
      background: #f8f9fa !important;
      color: #16191d !important;
    }
    
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8085-9160-c82da34c81a7"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8085-9160-c82da34c81a7"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-807d-acca-e893ffa1523e"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-807d-acca-e893ffa1523e"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-807d-acca-e893ffa1523e"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-807d-acca-e893ffa1523e"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8088-9bdf-c87dc76453ea"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8088-9bdf-c87dc76453ea"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8048-be78-f2e996482907"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8048-be78-f2e996482907"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8088-9bdf-c87dc76453ea"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8088-9bdf-c87dc76453ea"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8046-899c-f77bd569f6db"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8046-899c-f77bd569f6db"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8067-848a-d57e396eacf0"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8067-848a-d57e396eacf0"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-8012-b52d-c6c9bbdecfc7"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-8012-b52d-c6c9bbdecfc7"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-806e-959a-d76e8c5e8ee8"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-806e-959a-d76e8c5e8ee8"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-80b2-a092-d31288abc5cd"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-80b2-a092-d31288abc5cd"] [role="note"] > div,
    html.light .notion-callout-block[data-block-id="239db40e-66ea-801e-af96-f155a60e86af"] [role="note"] > div,
    body.light .notion-callout-block[data-block-id="239db40e-66ea-801e-af96-f155a60e86af"] [role="note"] > div {
      background: #16191d !important;
      color: #f8f9fa !important;
    }

    /* =======================
       NOTION DIVIDER/SEPARATOR THEME COLOR
    ========================== */
    div[role="separator"] {
      border-bottom: 1px solid var(--border) !important;
      background: none !important;
    }

    /* =======================
       LAYOUT WIDE MARGIN FIX
    ========================== */
    div.layout,
    div.layout-layout-wide,
    div.layout.layout-phone {
      margin-bottom: 0px !important;
    }

    /* =======================
       COLLECTION VIEW TAB & TABLE HEADER THEME
    ========================== */
    .notion-collection-view-tab-button {
      background-color: transparent !important;
      color: var(--text-1) !important;
      border-radius: 0 !important; /* no capsule */
      -webkit-user-select: none !important;
      user-select: none !important;
      pointer-events: auto !important;
      cursor: default !important; /* keep default cursor */
    }

    .notion-collection-view-tab-button[aria-selected],
    .notion-collection-view-tab-button:hover,
    .notion-collection-view-tab-button:focus {
      user-select: none !important;
    }
    .notion-collection-view-tab-button[aria-selected] [role="tooltip"],
    .notion-collection-view-tab-button:hover [role="tooltip"],
    .notion-collection-view-tab-button:focus [role="tooltip"],
    .notion-collection-view-tab-button [role="tooltip"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
      max-width: 0 !important;
      max-height: 0 !important;
      position: absolute !important;
      z-index: -1 !important;
    }

    .notion-collection-view-tab-button:hover   {
      background-color: transparent !important; /* no hover capsule */
      color: var(--text-1) !important;
      box-shadow: none !important;
      border-radius: 0 !important;
    }

    .notion-collection-view-tab-button > div > div {
      color: var(--text-1) !important;
      -webkit-user-select: none !important;
      user-select: none !important;
    }


    /* Table view header row */
    .notion-table-view-header-row {
      background: var(--bg-2) !important;
      color: var(--text-1) !important;
      font-weight: 600 !important;
      font-size: 14px !important;
      box-shadow: none !important;
      border-bottom: var(--border-size-1) solid var(--border) !important;
      border-color: var(--border) !important;
    }
    .notion-table-view-header-cell {
      background: var(--bg-2) !important;
      color: var(--text-1) !important;
      font-weight: 600 !important;
      font-size: 14px !important;
      box-shadow: none !important;
      border-right: var(--border-size-1) solid var(--border) !important;
      border-bottom: var(--border-size-1) solid var(--border) !important;
      border-color: var(--border) !important;
    }
    .notion-table-view-header-cell:last-child {
      border-right: none !important;
    }
    /* Adaptive table borders untuk light/dark mode */
    .notion-table-view-cell,
    .notion-table-view-cell > div,
    .notion-table-view-row,
    .notion-table-view-row > div {
      border-color: var(--border) !important;
    }

    .notion-collection-view-tab-button svg,
    .notion-table-view-header-row svg {
      display: none !important;
    }

    /* =======================
       FORCE DISABLE TOOLTIP & RIGHT CLICK ON NOTION TABS
    ========================== */
    /* Nonaktifkan semua tooltip di tab dan global */
    [role="tooltip"],
    .notion-tooltip,
    .notion-collection-view-tab-button [role="tooltip"],
    .notion-collection-view-tab-button + [role="tooltip"],
    .notion-collection-view-tab-button * [role="tooltip"] {
      display: none !important;
      visibility: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      height: 0 !important;
      width: 0 !important;
      max-width: 0 !important;
      max-height: 0 !important;
      position: absolute !important;
      z-index: -1 !important;
    }
    /* Nonaktifkan user-select di semua layer tab */
    .notion-collection-view-tab-button,
    .notion-collection-view-tab-button *,
    .notion-collection-view-tab-button > * {
      user-select: none !important;
      -webkit-user-select: none !important;
    }

    .notion-selectable.notion-page-block.notion-collection-item {
      background: var(--bg-2) !important;
      transition: background 0.2s;
    }
    html.light .notion-selectable.notion-page-block.notion-collection-item,
    body.light .notion-selectable.notion-page-block.notion-collection-item {
      background: var(--bg-3) !important;
    }
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
};
