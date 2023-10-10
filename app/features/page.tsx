import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Boilerplate & Starter: Powering Modern Web Development',
  description:
    "Welcome to the ultimate Next.js Boilerplate and Starter, meticulously crafted to supercharge your web development journey. Whether you're a seasoned developer or just starting out, our boilerplate integrates the best tools and practices to ensure a seamless, efficient, and robust development experience.",
  openGraph: {
    title: 'Next.js Boilerplate & Starter: Powering Modern Web Development',
    description:
      "Welcome to the ultimate Next.js Boilerplate and Starter, meticulously crafted to supercharge your web development journey. Whether you're a seasoned developer or just starting out, our boilerplate integrates the best tools and practices to ensure a seamless, efficient, and robust development experience.",
  },
  twitter: {
    title: 'Next.js Boilerplate & Starter: Powering Modern Web Development',
    description:
      "Welcome to the ultimate Next.js Boilerplate and Starter, meticulously crafted to supercharge your web development journey. Whether you're a seasoned developer or just starting out, our boilerplate integrates the best tools and practices to ensure a seamless, efficient, and robust development experience.",
  },
};

const About = () => (
  <div>
    <div className='container mx-auto p-8 font-sans'>
      <h1 className='mb-4 text-4xl font-bold'>
        Next.js Boilerplate & Starter: Powering Modern Web Development
      </h1>

      <p className='mb-6'>
        Welcome to the ultimate Next.js Boilerplate and Starter, meticulously
        crafted to supercharge your web development journey. Whether you're a
        seasoned developer or just starting out, our boilerplate integrates the
        best tools and practices to ensure a seamless, efficient, and robust
        development experience.
      </p>

      <h2 className='mb-3 text-3xl font-semibold'>Key Features:</h2>
      <ul className='mb-6 list-disc pl-5'>
        <li className='mb-2'>
          🔥 <strong>App Router Support</strong>: Navigate your Next.js
          applications with enhanced routing capabilities, ensuring smooth
          transitions and user experiences.
        </li>
        <li className='mb-2'>
          🎨 <strong>Tailwind CSS & PostCSS</strong>: Dive into rapid UI/UX
          development with the power of Tailwind CSS, further enhanced with
          PostCSS for advanced styling solutions.
        </li>
        <li className='mb-2'>
          🔧 <strong>TypeScript ⚡️</strong>: Write type-safe code, ensuring
          reliability and maintainability, with the robustness of TypeScript.
        </li>
        <li className='mb-2'>
          📝 <strong>Code Quality Tools</strong>: With ESLint and Prettier,
          maintain a consistent codebase, free from common errors and adhering
          to best practices.
        </li>
        <li className='mb-2'>
          ✅ <strong>Commit with Confidence</strong>: Integrated Husky,
          Lint-Staged, and Commitlint ensure that every commit is up to
          standard, making version control smoother and more reliable.
        </li>
        <li className='mb-2'>
          🚀 <strong>Robust Testing</strong>: With Jest and the Testing Library,
          ensure every component and utility in your application works as
          expected, guaranteeing quality and reliability.
        </li>
        <li className='mb-2'>
          🔀 <strong>Radix-UI Integration</strong>: Incorporate low-level UI
          primitives into your project, enabling more customized and unique user
          interfaces.
        </li>
        <li className='mb-2'>
          🌐 <strong>Fetch External APIs</strong>: Our boilerplate comes with
          built-in utilities to seamlessly fetch external APIs, making data
          integration a breeze.
        </li>
      </ul>

      <p className='mb-6'>
        By choosing our Next.js Boilerplate and Starter, you're not just
        selecting a development tool; you're investing in a foundation that's
        been optimized for performance, scalability, and developer experience.
        Start building, with the confidence that you're backed by the best tools
        in the industry.
      </p>
    </div>
  </div>
);

export default About;
