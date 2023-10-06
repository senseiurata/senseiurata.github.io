import { ReactElement } from 'react';
import Link from 'next/link';

export default function OuterContentTemplate ({ children }: { children: ReactElement }) {
  return (
    <div className="mx-auto max-w-3xl mt-3 mb-10 p-8 text-center bg-white/10 sm:rounded-2xl md:flex md:gap-7 md:text-start">
      {children}
    </div>
  );
};