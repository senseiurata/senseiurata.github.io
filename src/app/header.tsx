'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import Link from 'next/link'
import { usePathname } from "next/navigation";

export default function Header () {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuSvgPath = 'images/menu.svg#' + (menuOpen ? 'close' : 'hamburger');
  
  const menuRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      const menuElement = menuRef.current;
      if (menuElement && !menuElement.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return (
    <header className="h-12 pl-3 pr-3 flex items-center uppercase">
      <h1 className="flex-none font-bold">
        <Link className="text-white" href="/">Ken’s Web Portfolio</Link>
      </h1>

      <div className="flex-auto flex justify-end" ref={menuRef}>
        <nav className={`absolute right-3 top-10 bg-gray-950 ${menuOpen ? 'block' : 'hidden'} md:block md:static md:bg-transparent`}> 
          <ul className="flex flex-col justify-end md:flex-row">
            {
              [
                { text: 'Profile', url: '/profile'},
                { text: 'Portfolio', url: '/portfolio'},
                { text: 'Contact', url: '/contact'},
              ].map(({ text, url }: { text: string, url: string }, index: number) => {
                return (
                  <li key={index}>
                    <Link
                      href={url}
                      className={`px-6 py-4 inline-block text-white ${pathname === url ? 'md:text-cyan-300' : ''}`}
                      aria-current={ pathname === url ? 'page' : undefined }
                    >
                      {text}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>
        <button className="w-6 h-6 m-2 flex-none md:hidden" onClick={ () => setMenuOpen(!menuOpen) }>
          <svg className=" fill-white" viewBox="0 0 48 48">
            <title>{ menuOpen ? 'Menu Close' : 'Menu Open'}</title>
            <use xlinkHref={ menuSvgPath }></use>
          </svg>
        </button>
      </div>
    </header>
  );
};
