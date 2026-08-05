export const siteConfig = {
  name: 'App',
  description: 'Production-grade Next.js frontend',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  ogImage: '/images/og.png',
  links: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
  },
}

export type SiteConfig = typeof siteConfig
