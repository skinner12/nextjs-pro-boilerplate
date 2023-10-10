import type { Metadata } from 'next';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Not Found',
  openGraph: {
    title: 'Not Found',
    description:
      'This page is not found on the site. Nextjs boilerplate starter has not this page',
  },
  description:
    'This page is not found on the site. Nextjs boilerplate starter has not this page',
};

export default async function NotFound() {
  return (
    <section className='container'>
      <h1 className='my-4 text-4xl font-bold'>Not Found</h1>
      <p>Could not find requested resource</p>
      <div className='mx-auto my-6 flex justify-center  gap-4'>
        <Link href='/characters' className={buttonVariants()}>
          Fetch Extrnal API
        </Link>
        <Link
          href='/features'
          className={buttonVariants({ variant: 'outline' })}
        >
          Features
        </Link>
      </div>
    </section>
  );
}
