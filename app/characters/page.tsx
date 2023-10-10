import type { Metadata } from 'next';

import { SingleCard } from '@/components/SingleCard';
import { env } from '@/lib/Env.mjs';
import type { Character, Characters } from '@/lib/interface';

export const metadata: Metadata = {
  title: 'Fetch data from API',
  description:
    'Our boilerplate comes with built-in utilities to seamlessly fetch external APIs, making data integration a breeze.',
  openGraph: {
    title: 'Fetch data from API',
    description:
      'Our boilerplate comes with built-in utilities to seamlessly fetch external APIs, making data integration a breeze.',
  },
  twitter: {
    title: 'Fetch data from API',
    description:
      'Our boilerplate comes with built-in utilities to seamlessly fetch external APIs, making data integration a breeze.',
  },
};

async function getData(): Promise<Characters> {
  const response = await fetch(`${env.API_BASE_URL}/character`, {
    next: { revalidate: 360 },
  });
  if (!response.ok) {
    throw new Error(`Network response was not ok ${response.statusText}`);
  }
  return response.json();
}

export default async function List() {
  const data: Characters = await getData();
  return (
    <section className='container'>
      <h1 className='my-4 text-4xl font-bold'>
        Meet the Stars of the Multiverse: The Characters of Rick and Morty!
      </h1>
      <h2 className='text-2xl'>
        From the genius (and often intoxicated) mind of Rick Sanchez to the
        anxious adventures of Morty Smith, get to know the cast that takes you
        on interdimensional escapades.
      </h2>
      <div className='my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
        {data &&
          data.results.map((c: Character) => {
            return <SingleCard key={c.id} c={c} />;
          })}
      </div>
    </section>
  );
}
