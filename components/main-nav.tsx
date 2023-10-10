import Link from 'next/link';
import * as React from 'react';

import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import type { NavItem } from '@/types/nav';

import { SidenavPage } from './Sidenav';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className='flex gap-6 md:gap-10'>
      <SidenavPage />
      <Link href='/' className='flex items-center space-x-2'>
        <Icons.Logo className='h-6 w-6' />
        <span className='inline-block font-bold'>{siteConfig.logoName}</span>
      </Link>
      {items?.length ? (
        <nav className='hidden gap-6 md:flex'>
          {items?.map(
            (item) =>
              item.href && (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'flex items-center text-sm font-medium text-muted-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}
