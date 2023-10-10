/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export default function IndexPage() {
  return (
    <section className='container sm:my-4 sm:px-4 lg:max-w-6xl'>
      <h1 className='my-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'>
        Welcome to Next.js Advanced Boilerplate & Starter
      </h1>
      <br className='hidden sm:inline' />
      <h2 className='mb-3 text-3xl font-semibold'>Key Features:</h2>
      <ul className='mb-6 list-disc pl-5'>
        <li className='mb-2'>
          🔥 App Router support for enhanced routing capabilities.
        </li>
        <li className='mb-2'>
          🎨 Integrated with Tailwind CSS & PostCSS for rapid UI development.
        </li>
        <li className='mb-2'>🔧 Full TypeScript support for type-safe code.</li>
        <li className='mb-2'>
          📝 ESLint, Prettier, and Husky setup for code quality assurance.
        </li>
        <li className='mb-2'>
          🚀 Lint-Staged, Jest, and Testing Library for robust testing.
        </li>
        <li className='mb-2'>
          ✅ Commitlint for standardized commit messages.
        </li>
        <li className='mb-2'>🔀 Radix-UI for low-level UI primitives.</li>
        <li className='mb-2'>
          🌐 Built-in utilities to fetch external APIs with ease.
        </li>
      </ul>

      <p className='mb-6'>
        Our boilerplate is designed to provide developers with a solid
        foundation, incorporating the latest tools and practices in the Next.js
        ecosystem. Whether you're building a small project or a large-scale
        application, our boilerplate has got you covered.
      </p>

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
