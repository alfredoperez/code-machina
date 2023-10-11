const siteMetadata = {
  description: 'A starter template to build amazing static websites with Next.js and Contentlayer',
  locale: 'en',
  language: 'en',
  headerTitle: 'Code Machina',
  siteUrl: 'https://nextjs-contentlayer-starter.vercel.app',
  siteRepo: 'github.com/your-org/your-repo',
  title: 'Next.js Contentlayer Starter',
  socialBanner: '/social.png',
  mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'address@yoursite.com',
  github: 'https://github.com',
  twitter: 'https://twitter.com/Twitter',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com',
  theme: 'system', // system, dark or light
  author: 'Your Name',
  // Features
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}
export default siteMetadata
