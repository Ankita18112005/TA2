import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ClientShell from "@/components/layout/ClientShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://amusicals.in"),

  title: {
    default: "AMusicals | Original Music Composition & Production from Kolkata",
    template: "%s | AMusicals",
  },

  description:
    "AMusicals is a Kolkata-based music collective of composers, vocalists and engineers creating original Bengali and Hindi compositions, studio productions and live performances.",

  applicationName: "AMusicals",

  authors: [{ name: "AMusicals Team" }],

  creator: "AMusicals",
  publisher: "AMusicals",

  keywords: [
    "AMusicals",
    "original Bengali music",
    "Kolkata music composer",
    "Bengali music production",
    "Hindi music production",
    "original compositions",
    "live music performance Kolkata",
    "independent musicians India",
    "music portfolio",
    "Ayan Mukherjee music",
    "Bengali original songs",
    "music studio Kolkata",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amusicals.in",
    siteName: "AMusicals",
    title: "AMusicals | Original Music Composition & Production from Kolkata",
    description:
      "Explore original Bengali and Hindi compositions, studio productions and live performances by AMusicals — a music collective based in Kolkata.",
    images: [
      {
        url: "/images/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AMusicals — Original Music from Kolkata",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AMusicals | Original Music from Kolkata",
    description:
      "Original Bengali and Hindi compositions, studio productions and live performances by AMusicals.",
    images: ["/images/seo/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/icon/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "AMusicals",
    url: "https://amusicals.in",
    description:
      "A Kolkata-based music collective of composers, vocalists and engineers creating original Bengali and Hindi compositions, studio productions and live performances.",
    genre: ["Bengali", "Hindi", "Original Compositions"],
    foundingLocation: {
      "@type": "Place",
      name: "Kolkata, West Bengal, India",
    },
    sameAs: [
      "https://youtube.com/@amusicals",
      "https://instagram.com/amusicals",
      "https://open.spotify.com/artist/amusicals",
      "https://facebook.com/amusicals",
    ],
    image: "https://amusicals.in/images/seo/og-image.jpg",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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