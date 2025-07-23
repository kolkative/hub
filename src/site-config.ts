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
    player: "211db40e66ea80739783ffc4a44671e5",
    event: "211db40e66ea808e8ce0cfe0a9d415de",
    kabaret: "217db40e66ea80019ed8d59fc830c005",
    brand: "239db40e66ea802eacb2f022e2c19859",
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
    page: "404",
    slug: "404",
  },

  // Google Font name, you can choose from https://fonts.google.com
  googleFont: "",

  // Custom JS for head and body of a Notion page
  customHeadCSS: `

    /* =======================
       THEME & STYLE
    ========================== */
    
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
      --indigo-6: #4c6ef5;
      --border-size-1: 1px;
      --radius-conditional-3: 6px;
      --layer-2: 2;
      --layer-4: 4;
      --layer-5: 5;
      --layer-6: 6;
      --logo-white: url('https://hub.kolkative.my.id/image/attachment%3A05bc55da-f638-4604-8c1a-9b4ad5d9f159%3AKolkative_Hub_White.png?table=block&id=239db40e-66ea-80e5-8770-fb82b100069d&spaceId=9c898b20-1510-47e1-a570-a3c00e5d8916&width=580&userId=&cache=v2');
      --logo-black: url('https://hub.kolkative.my.id/image/attachment%3Ab4133deb-17d0-46b9-8423-5d09dac4916f%3AKolkative_Hub_Black.png?table=block&id=239db40e-66ea-80b5-a864-d20c286d89ca&spaceId=9c898b20-1510-47e1-a570-a3c00e5d8916&width=580&userId=&cache=v2');
    }
    
    html, body {
      --bg-1: #0d0f12;   
      --bg-2: #16191d;
      --bg-3: #212529;     
      --text-1: #f8f9fa;
      --text-2: #f1f3f5;  
      --border: #343a40;   
      --link: #4c6ef5;    
      --hover: #495057;
    }
      
    html.light, body.light {
      --bg-1: #f8f9fa;   
      --bg-2: #f1f3f5;
      --bg-3: #e9ecef;     
      --text-1: #16191d;
      --text-2: #212529;   
      --border: #343a40;   
      --link: #4c6ef5;    
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
      padding: 18px 0px 18px 24px !important;
      border-bottom: var(--border-size-1) solid var(--border);
      box-sizing: border-box !important;
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
        width: 36px !important;
        height: 36px !important;
      }
      #x-toggle svg {
        width: 24px !important;
        height: 24px !important;
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
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    .notion-search .resultsPane::-webkit-scrollbar {
      display: none;
    }

    div[role="button"][aria-label="Filter"],
    div[role="button"][aria-label="Sort"],
    div[role="button"][aria-label="View options"],
    div[role="button"][aria-label="Layout settings"] {
      display: none !important;
      visibility: hidden !important;
      pointer-events: none !important;
      opacity: 0 !important;
    }

    .toggle-mode,
    .notion-page-controls,
    .notion-topbar,
    header.notion-topbar-mobile,
    .pageLinkIndicator,
    .notion-callout-block [role="note"] > div:empty,
    div[style*="min-height: 44px"],
    .notion-table-view div[style *="min-height: 32px;"] .notion-record-icon[style*="margin-bottom: -1px; margin-right: 4px;"] {
      display: none !important;
    }
      
    .notion-gallery-view .notion-selectable.notion-collection_view-block div + [role="button"],
    .notion-gallery-view .notion-selectable.notion-collection_view_page-block div + [role="button"] {
      display: none !important;
    }

    /* --- Disable Tooltips --- */
    div.notion-tooltip,
    div[role="tooltip"],
    .notion-link-tooltip,
    .notion-link-token[aria-label],
    .notion-link-token[role="tooltip"],
    .notion-link-token[tabindex],
    .notion-link-token[aria-describedby],
    [data-tooltip],
    [aria-label][tabindex],
    [aria-describedby][tabindex],
    .notion-hoverable-token,
    .notion-page-link-indicator,
    .notion-mention-token a[aria-label],
    .notion-mention-token [role="tooltip"] {
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

    /* ✅ Sembunyikan elemen di kanan tablist */
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
      top: 16px;
      right: 16px;
      z-index: var(--layer-6) !important;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px !important;
      height: 36px !important;
      background: none !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;
      cursor: pointer;
      transition: none;
    }
    #x-toggle svg {
      width: 24px !important;
      height: 24px !important;
      display: block;
      transition: filter 0.2s, fill 0.2s;
    }
    #x-toggle:hover svg {
      filter: brightness(1.3) drop-shadow(0 0 2px var(--link));
      /* atau bisa juga ubah fill jika SVG pakai fill="currentColor" */
      /* fill: var(--link); */
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
      padding: 10px 0 10px 0;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 4px;
      border-right: var(--border-size-1) solid var(--border);
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    #x-sidebar::-webkit-scrollbar {
      display: none !important;
    }
    #x-sidebar nav {
      padding: 70px 10px 10px 10px;
      width: 100%;
    }
    #x-sidebar ul {
      list-style: none;
      padding: 0 6px 0 6px;
      margin: 0;
      gap: 0;
    }
    #x-sidebar .sidebar-link {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px 4px 10px;
      color: var(--text-1);
      text-decoration: none;
      border-radius: 10px;
      transition: background 0.18s, color 0.18s;
      font-size: 0.93rem;
      cursor: pointer;
      margin-bottom: 1px;
      min-height: 24px;
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
      width: 24px;
      height: 24px;
      max-width: 100%;
      max-height: 24px;
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
    }
    #x-header-title {
      font-size: 1.25rem !important;
      display: flex;
      align-items: baseline;
      letter-spacing: -1px;
      font-weight: 400;
      gap: 4px;
    }
    #x-header-title .kolkative {
      font-weight: 700;
      letter-spacing: -1px;
      margin-right: 2px;
    }
    #x-header-title .hub {
      font-weight: 400;
      letter-spacing: -1px;
    }


    /* =====================
      X-BURGER
    ===================== */
      
    #x-burger {
      position: fixed;
      top: 0px;
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
      color: var(--link);
    }

    #x-burger svg {
      width: 24px;
      height: 24px;
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
       NOTION DIVIDER THEME COLOR
    ========================== */
    .notion-divider-block > hr {
      border-color: var(--border) !important;
      background: var(--border) !important;
    }


  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
};
