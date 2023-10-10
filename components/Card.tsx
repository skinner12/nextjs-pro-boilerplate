'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { Character } from '@/lib/interface';

import { buttonVariants } from './ui/button';

interface CharacterProps {
  c: Character;
}

export default function Card({ c }: CharacterProps) {
  return (
    <div className='w-full max-w-sm rounded-lg border border-gray-200 bg-white py-6 shadow dark:border-gray-700 dark:bg-gray-800'>
      <div className='flex flex-col items-center pb-10'>
        <Image
          className='mb-3 h-24 w-24 rounded-full shadow-lg'
          src={c.image}
          alt={c.name}
          width={100}
          height={100}
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          {c.name}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {c.gender} / {c.species}
        </span>
        <div className='mt-4 flex space-x-3 md:mt-6'>
          <Link
            className={buttonVariants({ variant: 'outline' })}
            href={`/character/${c.id}`}
          >
            More Infos
          </Link>
        </div>
      </div>
    </div>
  );
}
