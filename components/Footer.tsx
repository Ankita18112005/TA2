"use client";

import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/team", label: "Our Team" },
  { href: "/team/live-shows", label: "Live Shows" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  {
    label: "YouTube",
    href: "https://youtube.com/@teamayan",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/teamayan",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.44.41a4.08 4.08 0 0 1 1.52.99c.46.46.78.93.99 1.52.17.47.36 1.27.41 2.44.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.41 2.44a4.08 4.08 0 0 1-.99 1.52 4.08 4.08 0 0 1-1.52.99c-.47.17-1.27.36-2.44.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.44-.41a4.08 4.08 0 0 1-1.52-.99 4.08 4.08 0 0 1-.99-1.52c-.17-.47-.36-1.27-.41-2.44C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.97.41-2.44a4.08 4.08 0 0 1 .99-1.52 4.08 4.08 0 0 1 1.52-.99c.47-.17 1.27-.36 2.44-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.84 5.84 0 0 0-2.13 1.38A5.84 5.84 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.8.72 1.47 1.38 2.13a5.84 5.84 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.84 5.84 0 0 0 2.13-1.38 5.84 5.84 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.84 5.84 0 0 0-1.38-2.13A5.84 5.84 0 0 0 19.86.63C19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/teamayan",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm5.5 17.31a.75.75 0 0 1-1.03.25c-2.82-1.72-6.37-2.11-10.56-1.16a.75.75 0 1 1-.34-1.46c4.57-1.05 8.5-.6 11.68 1.34a.75.75 0 0 1 .25 1.03Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.22-1.98-8.14-2.56-11.95-1.4a.94.94 0 1 1-.54-1.8c4.36-1.32 9.77-.68 13.47 1.6a.94.94 0 0 1 .31 1.29Zm.13-3.4C15.23 8.33 8.85 8.12 5.15 9.19a1.12 1.12 0 1 1-.65-2.15c4.24-1.23 11.3-.99 15.76 1.62a1.12 1.12 0 0 1-1.16 1.92v.06Z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com/teamayan",
    icon: (
      <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.48 3.24H4.3l13.31 17.41Z" />
      </svg>
    ),
  },
];

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
            {socials.map((s) => (
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
            {navLinks.map((l) => (
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
