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
  .notion-topbar,
  .notion-topbar-mobile {
    height: 60px !important;
    min-height: 60px !important;
    max-height: 60px !important;
  }
    
  
  
  `,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
