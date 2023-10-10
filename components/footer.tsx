import Link from 'next/link';

import { siteConfig } from '@/config/site';

const Footer = () => (
  <footer className='border-t border-gray-300 py-8 text-center text-sm'>
    © Copyright {new Date().getFullYear()} {siteConfig.name}. Made by{' '}
    <Link href='https://www.github.com/skinner12'>GitHub</Link>.
    {/*
     * PLEASE READ THIS SECTION
     * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
     * The link doesn't need to appear on every pages, one link on one page is enough.
     * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
     */}
  </footer>
);

export default Footer;
