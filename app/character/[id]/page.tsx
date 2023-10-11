import { ChevronsUpDown, Home, Laugh, Skull } from 'lucide-react';
import type { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

import Breadcrumbs from '@/components/Breadcumbs';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { env } from '@/lib/Env.mjs';
import type { Character } from '@/lib/interface';

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: number };
  },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { id } = params;

  // fetch data
  const response = await fetch(`${env.API_BASE_URL}/character/${id}`);
  const data: Character = await response.json();
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: data.name,
    description: `${data.name} a ${data.type} is ${data.gender} and is living in ${data.location.name}`,
    openGraph: {
      images: [data.image, ...previousImages],
      title: data.name,
      description: `${data.name} a ${data.type} is ${data.gender} and is living in ${data.location.name}`,
    },
    twitter: {
      title: data.name,
      description: `${data.name} a ${data.type} is ${data.gender} and is living in ${data.location.name}`,
    },
  };
}

async function getData(id: number): Promise<Character> {
  const response = await fetch(`${env.API_BASE_URL}/character/${id}`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }

  return response.json();
}

export default async function SingleCharacter({
  params,
}: {
  params: { id: number };
}) {
  const character: Character = await getData(params.id);
  return (
    <section className='container flex flex-col md:flex-row'>
      {character && (
        <div key={character.id} className=''>
          <div className='mb-4 mt-2'>
            <Breadcrumbs
              items={[
                {
                  label: <Home className='h-4 w-4' />,
                  path: '/',
                },
                {
                  label: 'Characters',
                  path: '/characters',
                },
                {
                  label: `${character.name}`,
                  path: '',
                },
              ]}
            />
          </div>{' '}
          <h1 className='mb-4 text-4xl font-bold'>{character.name}</h1>
          <div className='flex flex-col sm:flex-row'>
            <div className='my-4 sm:my-0 sm:w-1/3'>
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                className='cursor-pointer rounded transition duration-500 hover:scale-105'
              />
            </div>
            <div className='mt-2 sm:mt-0 sm:w-2/3 sm:pl-4'>
              <p className='flex items-baseline gap-1'>
                <strong>Status:</strong> {character.status}{' '}
                {character.status === 'Dead' ? (
                  <Skull className='h-4 w-4' />
                ) : (
                  <Laugh className='h-4 w-4' />
                )}
              </p>
              <p>
                <strong>Species:</strong> {character.species}
              </p>
              <p>
                <strong>Gender:</strong> {character.gender}
              </p>
              <p>
                <strong>Origin:</strong> {character.origin.name}
              </p>
              <p>
                <strong>Location:</strong> {character.location.name}
              </p>

              <Collapsible className=''>
                <div className='flex items-center justify-start space-x-2'>
                  <strong>Episodes:</strong>
                  <CollapsibleTrigger asChild>
                    <Button variant='ghost' size='sm' className='w-9 p-0'>
                      <ChevronsUpDown className='h-4 w-4' />
                      <span className='sr-only'>Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  {character.episode.map((ep, index) => (
                    <p key={ep} className=''>
                      Episode {index + 1}
                    </p>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
