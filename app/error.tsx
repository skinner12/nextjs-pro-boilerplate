// Error components must be Client Components

'use client';

import type { Metadata } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Error',
  openGraph: {
    title: 'Error',
    description:
      'In this page something went wrong. Nextjs boilerplate starter has not this page',
  },
  description:
    'In this page something went wrong. Nextjs boilerplate starter has not this page',
};
export default function Error({
  error, // reset,
}: {
  error: Error & { digest?: string };
  // reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // console.error(`Some error: ${error}`);
  }, [error]);

  return (
    <section className='container flex flex-col'>
      <h1 className='my-4 text-4xl font-bold'>Something went wrong!</h1>
      <p>{error.message}</p>
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
