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
    karya: "217db40e66ea80019ed8d59fc830c005",
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
  // fof: {
  //  page: "",
  //  slug: "default",
  //},

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
    }

    body,
    .notion-page-content {
      margin-top: 60px;
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
      font-family: 'Space Gotesk', sans-serif !important;
      font-weight: 500 !important;
      font-size: 1rem !important;
      line-height: 1.5 !important;
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

    /* ==================
      HIDE & REMOVED
    ===================== */

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
      width: 36px;
      height: 36px;
      border-radius: 50%;
      cursor: pointer;
      background: var(--bg-2) !important;
      border: none;
      box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      transition: background-color 0.3s ease;
    }

    #x-toggle svg {
      width: 24px;
      height: 24px;
      display: block;
    }
  
    #x-toggle:hover {
      color: var(--link);
      background: var(--hover) !important;
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
      padding: 0 4px 0 4px;
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
    #x-header-logo {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }
    #x-header-title {
      font-size: 14px;
      font-weight: 500;
      color: var(--text-1);
    }

    /* =====================
    RESPONSIVE: MOBILE VIEW
    ===================== */
    
    @media (max-width: 900px) {

      .notion-frame {
        transition: margin-left 0.3s cubic-bezier(0.4,0,0.2,1);
        padding-left: 0 !important;
      }
      
      #x-sidebar {
        display: none !important;
        transform: translateX(-100%) !important;
        transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
      }
      
      body.sidebar-open #x-sidebar {
        display: block !important;
        transform: translateX(0) !important;
      }
      
      body.sidebar-open .notion-frame {
        margin-left: 250px !important;
      }

      /* Memastikan notion-frame kembali ke posisi normal saat sidebar tidak aktif */
      body:not(.sidebar-open) .notion-frame {
        margin-left: 0 !important;
        padding-left: 0 !important;
      }

      #x-header,
      #x-header-inner {
        justify-content: center !important;
        align-items: center;
      }

      /* Show burger on mobile */
      #x-burger {
        display: flex !important;
      }
      
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
    }

    #x-burger:hover {
      color: var(--link);
    }

    #x-burger svg {
      width: 24px;
      height: 24px;
      display: block;
    }

  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
};
