import { ReactElement } from 'react';
import Link from 'next/link';

export default function InnerContentTemplate ({
  title,
  nextUrl,
  nextActionText,
  children,
}: {
  title?: string,
  nextUrl: string,
  nextActionText: string
  children: ReactElement,
}) {
  return (
    <section className="flex flex-col">
      {title
        ? (
          <h1 className="text-2xl">
            {title}
          </h1>
        )
        : null
      }

      <div className="flex-auto">
        {children}
      </div>

      <div className="flex-none mt-4 flex justify-center md:justify-end">
        <Link
          href={nextUrl}
          className="inline-block p-2 mt-4 rounded-md border-b-4 text-lg bg-cyan-500 text-white border-cyan-700 hover:bg-cyan-600 hover:text-white"
        >
          {nextActionText}
        </Link>
      </div>
    </section>
  );
};