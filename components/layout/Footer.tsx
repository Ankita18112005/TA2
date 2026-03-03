"use client";

import Link from "next/link";
import { NAV_LINKS, SOCIALS } from "@/constants/data";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            {/* ── TOP SECTION ─────────────────────────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Brand column */}
                <div className="md:col-span-4">
                    <Link href="/" className="inline-block text-2xl font-black tracking-widest uppercase text-white">
                        Team<span className="text-amber-500">Ayan</span>
                    </Link>
                    <p className="mt-4 font-mono text-sm tracking-wide leading-relaxed max-w-xs">
                        Composers, producers and performers crafting original music that moves
                        people worldwide.
                    </p>
                    {/* Socials */}
                    <div className="flex gap-4 mt-6">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-500 hover:text-white transition"
                            >
                                {s.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:col-span-2">
                    <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-6">
                        Navigate
                    </h4>
                    <ul className="space-y-3">
                        {NAV_LINKS.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="text-sm tracking-wide hover:text-amber-500 transition"
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div className="md:col-span-3">
                    <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-6">
                        Services
                    </h4>
                    <ul className="space-y-3 text-sm tracking-wide">
                        <li>Music Composition</li>
                        <li>Sound Engineering</li>
                        <li>Live Performance</li>
                        <li>Film Scoring</li>
                        <li>Music Production</li>
                    </ul>
                </div>

                {/* Contact / Newsletter */}
                <div className="md:col-span-3">
                    <h4 className="text-white font-bold text-xs tracking-[0.25em] uppercase mb-6">
                        Get in touch
                    </h4>
                    <ul className="space-y-3 text-sm tracking-wide">
                        <li>
                            <a href="mailto:hello@teamayan.com" className="hover:text-amber-500 transition">
                                hello@teamayan.com
                            </a>
                        </li>
                        <li>New Delhi, India</li>
                    </ul>

                    <p className="mt-8 text-xs tracking-wide text-gray-500 uppercase mb-3">
                        Stay Updated
                    </p>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex"
                    >
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 bg-gray-800 border border-gray-700 px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
                        />
                        <button
                            type="submit"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 text-xs font-bold tracking-widest uppercase transition"
                        >
                            Join
                        </button>
                    </form>
                </div>
            </div>

            {/* ── DIVIDER ─────────────────────────────────────────────────────── */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-wider uppercase">
                    <p>&copy; {new Date().getFullYear()} Team Ayan. All rights reserved.</p>
                    <p className="text-gray-600">
                        Crafted with passion &amp; precision.
                    </p>
                </div>
            </div>
        </footer>
    );
}
