'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/team', label: 'Our Team' },
  { href: '/team/live-shows', label: 'Live Shows' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-widest uppercase text-gray-900">
          Team<span className="text-amber-500">Ayan</span>
        </Link>

        <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase text-gray-600">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition hover:text-amber-500 ${pathname === l.href ? 'text-amber-500 font-semibold' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-2xl text-gray-700" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 pb-5 flex flex-col gap-4 pt-4 text-sm uppercase tracking-wide text-gray-600">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`transition hover:text-amber-500 ${pathname === l.href ? 'text-amber-500 font-semibold' : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
