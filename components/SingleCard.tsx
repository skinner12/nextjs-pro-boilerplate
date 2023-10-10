import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Character } from '@/lib/interface';
import { cn } from '@/lib/utils';

interface CardProps {
  c: Character;
  className?: React.ComponentProps<typeof Card>;
  props?: React.ComponentProps<typeof Card>;
}

export function SingleCard({ c, className, ...props }: CardProps) {
  return (
    <Card
      className={cn(
        'bg-slate-200 dark:bg-slate-800 border-gray-300 dark:border-gray-700 items-center justify-center flex flex-col ',
        className,
      )}
      {...props}
    >
      <Link className='text-xl' href={`/character/${c.id}`}>
        <CardHeader className=''>
          <CardTitle className='text-3xl'>{c.name}</CardTitle>
          <CardDescription>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              {c.gender} / {c.species}
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <Image
            className='mb-3 cursor-pointer rounded shadow-lg transition duration-500 hover:scale-105'
            src={c.image}
            alt={c.name}
            width={300}
            height={300}
          />
        </CardContent>
        <CardFooter>
          <Button className='w-full'>
            <Check className='mr-2 h-4 w-4' />
            More Infos
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
}
