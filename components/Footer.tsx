import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-500">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-900 font-black tracking-widest uppercase">
          Team<span className="text-amber-500">Ayan</span>
        </p>
        <nav className="flex gap-6 uppercase tracking-wide">
          <Link href="/" className="hover:text-amber-500 transition">Home</Link>
          <Link href="/portfolio" className="hover:text-amber-500 transition">Portfolio</Link>
          <Link href="/team" className="hover:text-amber-500 transition">Team</Link>
          <Link href="/contact" className="hover:text-amber-500 transition">Contact</Link>
        </nav>
        <p>&copy; {new Date().getFullYear()} Team Ayan</p>
      </div>
    </footer>
  );
}
