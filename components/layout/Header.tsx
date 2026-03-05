'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/constants/data';

export default function Header() {
    const [open, setOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const pathname = usePathname();
    const lastScrollY = useRef(0);
    const openRef = useRef(open);

    // Keep ref in sync
    useEffect(() => {
        openRef.current = open;
    }, [open]);

    useEffect(() => {
        const onScroll = () => {
            // Never hide while mobile menu is open
            if (openRef.current) return;

            const currentY = window.scrollY;
            if (currentY < lastScrollY.current || currentY < 10) {
                setVisible(true);
            } else {
                setVisible(false);
            }
            lastScrollY.current = currentY;
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMenu = useCallback(() => {
        setOpen(prev => {
            const next = !prev;
            if (next) {
                // Opening: force navbar visible & reset scroll baseline
                setVisible(true);
                lastScrollY.current = window.scrollY;
            }
            return next;
        });
    }, []);

    // Navbar stays visible if either `visible` is true OR menu is open
    const isShown = visible || open;

    return (
        <header
            className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-transform duration-300 ${isShown ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-black tracking-widest uppercase text-gray-900">
                    <span className="text-amber-500">A</span>Musicals
                </Link>

                <nav className="hidden md:flex gap-8 text-sm tracking-wide uppercase text-gray-600">
                    {NAV_LINKS.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`transition hover:text-amber-500 ${pathname === l.href ? 'text-amber-500 font-semibold' : ''}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Animated Hamburger Button */}
                <button
                    className="md:hidden relative w-7 h-5 flex flex-col justify-between items-center group"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-full h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ease-in-out origin-center ${open ? 'rotate-45 translate-y-[9px]' : ''
                            }`}
                    />
                    <span
                        className={`block w-full h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ease-in-out ${open ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                            }`}
                    />
                    <span
                        className={`block w-full h-[2.5px] bg-gray-700 rounded-full transition-all duration-300 ease-in-out origin-center ${open ? '-rotate-45 -translate-y-[9px]' : ''
                            }`}
                    />
                </button>
            </div>

            {/* Mobile Dropdown with slide animation */}
            <div
                className={`md:hidden border-t border-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-6 pb-5 flex flex-col gap-4 pt-4 text-sm uppercase tracking-wide text-gray-600">
                    {NAV_LINKS.map(l => (
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
            </div>
        </header>
    );
}
