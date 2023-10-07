import { ReactElement } from 'react';
import Link from 'next/link';

export default function OuterContentTemplate ({ children }: { children: ReactElement }) {
  return (
    <div className="mt-3 mb-10 p-8 max-w-3xl text-center bg-white/10 min-[400px]:mx-4 min-[400px]:rounded-2xl md:flex md:gap-7 md:text-start">
      {children}
    </div>
  );
};