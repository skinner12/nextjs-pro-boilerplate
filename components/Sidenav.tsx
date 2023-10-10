/* eslint-disable unused-imports/no-unused-vars */

'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import type { ReactNode } from 'react';
import React, { useRef } from 'react';

import { siteConfig } from '@/config/site';
import type { NavItem } from '@/types/nav';

/* Sidenav logic */

const style = {
  item: `flex justify-start items-center gap-3 cursor-pointer font-medium hover:text-gray-400 ml-8 mb-4`,
  closeIcon: `absolute top-1 focus:outline-none right-3 text-3xl text-white cursor-pointer`,
  sidenav: {
    open: `w-7/12 md:w-60 bg-gray-800 text-white overflow-x-hidden`,
    close: `w-0 bg-gray-800 text-white overflow-x-hidden`,
    default: `h-screen fixed z-20 top-0 left-0 transition-all ease duration-200`,
  },
};

interface SidenavProps {
  open: boolean;
  toggle: (value: boolean) => void;
  children: ReactNode;
}

function Sidenav({ open, toggle, children }: SidenavProps) {
  // const ref = React.useRef(null);
  const ref = useRef<HTMLDivElement>(null);

  // close on click outside
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        if (!open) return;
        toggle(false);
      }
    };
    window.addEventListener('mousedown', handleOutsideClick);
    return () => window.removeEventListener('mousedown', handleOutsideClick);
  }, [open, toggle, ref]);

  return (
    <aside
      ref={ref}
      className={`${style.sidenav.default}
        ${open ? style.sidenav.open : style.sidenav.close}`}
    >
      <button
        type='button'
        aria-label='Close'
        className={style.closeIcon}
        onClick={() => toggle(!open)}
      >
        &times;
      </button>
      <div className='mt-12'>{children}</div>
    </aside>
  );
}

interface SidenavItemProps {
  children: ReactNode;
  href: string;
  open: boolean;
  toggle: (value: boolean) => void;
}

function SidenavItem({ children, href, open, toggle }: SidenavItemProps) {
  return (
    <Link href={href} className={style.item} onClick={() => toggle(!open)}>
      {children}
    </Link>
  );
}

function SidenavItemNoFollow({
  children,
  href,
  open,
  toggle,
}: SidenavItemProps) {
  return (
    <Link
      href={href}
      className={style.item}
      rel='nofollow noopener'
      target='_blank'
      onClick={() => toggle(!open)}
    >
      {children}
    </Link>
  );
}

interface MainNavProps {
  items?: NavItem[];
  open: boolean;
  toggle: (value: boolean) => void;
}

function SidenavPageItems({ items, open, toggle }: MainNavProps) {
  return (
    <div>
      {items?.length ? (
        <nav className=''>
          {items?.map(
            (item) =>
              item.href && (
                <SidenavItem
                  href={item.href}
                  key={item.id}
                  open={open}
                  toggle={toggle}
                >
                  <span className=''>{item.title}</span>
                </SidenavItem>
              ),
          )}
        </nav>
      ) : null}
    </div>
  );
}

export const SidenavPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <button
        type='button'
        aria-disabled={open}
        disabled={open}
        onClick={toggle}
        onKeyDown={toggle}
        className='block py-2 font-medium text-zinc-900 focus:outline-none dark:text-slate-50 md:hidden'
      >
        <Menu className='h-8 w-8' />
      </button>
      <Sidenav open={open} toggle={toggle}>
        {/* <SidenavItem href='/'> */}
        {/*   <span>Home</span> */}
        {/* </SidenavItem> */}
        <SidenavPageItems
          items={siteConfig.mainNav}
          open={open}
          toggle={toggle}
        />
        {/* <SidenavItem href='/boilerplate'> */}
        {/*   <IoVideocam /> */}
        {/*   <span className=''>Boilerplate</span> */}
        {/* </SidenavItem> */}
        {/* <SidenavItem href='/pokemon'> */}
        {/*   <IoLogoIonitron /> */}
        {/*   <span className=''>Pokemon</span> */}
        {/* </SidenavItem> */}
        <SidenavItemNoFollow
          href='https://www.github.com/skinner12'
          open={open}
          toggle={toggle}
        >
          {/* <IoLogoIonitron /> */}
          <span className=''>Github repo</span>
        </SidenavItemNoFollow>
      </Sidenav>
    </>
  );
};
