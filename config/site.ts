export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'NextJS Starter Template',
  logoName: 'NextJS',
  description: 'Simple NextJS template built with Radix UI and Tailwind CSS.',
  url: 'https://some.url.com',
  mainNav: [
    {
      id: 1,
      title: 'Home',
      href: '/',
    },
    {
      id: 2,
      title: 'Fetch External API',
      href: '/characters',
    },
    {
      id: 3,
      title: 'Features',
      href: '/features',
    },
  ],
  links: {
    github: 'https://github.com/skinner12',
  },
};
