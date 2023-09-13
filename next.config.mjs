/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
const { withContentlayer } = await import('next-contentlayer')
// TODO: add support to bundle-analyzer
const withBundleAnalyzer = await import('@next/bundle-analyzer');


// You might need to insert additional domains in script-src if you are using external services
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app analytics.umami.is;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src *.s3.amazonaws.com;
  connect-src *;
  font-src 'self';
  frame-src giscus.app
`

const securityHeaders = [
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains',
  },
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

 const nextConfig ={
   reactStrictMode: true,
   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
   i18n: {
     locales: ['en'],
     defaultLocale: 'en',
   },
   eslint: {
     dirs: ['app', 'components', 'layouts', 'scripts'],
   },
   experimental: {
     appDir: true,
   },
   // images: {
   //   domains: ['picsum.photos'],
   // },
   // async headers() {
   //   return [
   //     {
   //       source: '/(.*)',
   //       headers: securityHeaders,
   //     },
   //   ]
   // },
   // webpack: (config, options) => {
   //   config.module.rules.push({
   //     test: /\.svg$/,
   //     use: ['@svgr/webpack'],
   //   })
   //
   //   return config
   // },
}
const config = withContentlayer(nextConfig)

export default config
