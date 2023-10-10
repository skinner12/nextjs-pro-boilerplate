/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import type { ReactNode } from 'react';

// define the Props
export type CrumbItem = {
  label: ReactNode; // e.g., List
  path: string; // e.g., /list/to/something
};

export type BreadcrumbsProps = {
  items: CrumbItem[];
};

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <div className='flex items-baseline gap-2 rounded text-slate-600 hover:text-indigo-400 dark:text-slate-500'>
      {items.map((crumb, i) => {
        const isLastItem = i === items.length - 1;
        if (!isLastItem) {
          return (
            <>
              <Link
                href={crumb.path}
                key={i}
                className='cursor-pointer rounded transition duration-150 hover:scale-105'
              >
                {crumb.label}
              </Link>
              {/* separator */}
              <span> {'>'} </span>
            </>
          );
        }
        return crumb.label;
      })}
    </div>
  );
};
export default Breadcrumbs;
