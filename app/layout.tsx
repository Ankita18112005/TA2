import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientShell from '@/components/layout/ClientShell';

/* Inline style for the instant HTML overlay (no JS needed) */
const loaderStyle: React.CSSProperties = {
  position: 'fixed',
  inset: 0,
  zIndex: 99999,
  background: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const metadata: Metadata = {
  title: 'AMusicals | Music Portfolio',
  description: 'Composers, producers and performers crafting original music.',
  icons: {
    icon: '/images/icon/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {/* Instant overlay — visible before any JS loads */}
        <div id="initial-loader" style={loaderStyle} />
        <ClientShell>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientShell>
      </body>
    </html>
  );
}
