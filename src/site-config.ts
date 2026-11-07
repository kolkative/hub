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
  siteImage: 'https://iili.io/CBP95S2.png',

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
  googleFont: 'Roboto',

  // Custom JS for head and body of a Notion page
  customHeadCSS: ``,
  customHeadJS: googleTag(GOOGLE_TAG_ID),
  customBodyJS: PAGE_SCRIPT_JS_STRING,
}
