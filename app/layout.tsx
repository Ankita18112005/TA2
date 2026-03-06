import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ClientShell from '@/components/layout/ClientShell';

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
        <ClientShell>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ClientShell>
      </body>
    </html>
  );
}
