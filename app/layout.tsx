import type { Metadata, Viewport } from 'next';
import { Archivo, Bodoni_Moda, Space_Mono } from 'next/font/google';
import './globals.css';
import Intro from '@/components/Intro';
import { LightboxProvider } from '@/components/Lightbox';
import { MobileTabBar, MobileTopBar } from '@/components/MobileChrome';
import PageTransition from '@/components/PageTransition';
import Sidebar from '@/components/Sidebar';
import { SITE } from '@/data/content';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-bodoni',
});

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-space-mono',
});

const description =
  'Wedding and portrait photography in Erie, Pennsylvania. Cameron Fitzsimmons shoots honestly — no stiff posing, no fake laughing at nothing. Booking 2026 — 2027.';

const title = 'FlickzWithFitz — Wedding & Portrait Photography in Erie, PA';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: title, template: '%s | FlickzWithFitz' },
  description,
  keywords: [
    'wedding photographer Erie PA',
    'portrait photographer Erie PA',
    'Erie Pennsylvania photography',
    'Cameron Fitzsimmons',
    'FlickzWithFitz',
  ],
  authors: [{ name: SITE.photographer }],
  creator: SITE.photographer,
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: 'FlickzWithFitz',
    title,
    description,
    images: [
      { url: '/photos/DSC01420.jpg', width: 1400, height: 933, alt: 'Lakeside ceremony' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/photos/DSC01420.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  image: `${SITE.url}/photos/DSC01420.jpg`,
  url: SITE.url,
  email: SITE.email,
  description,
  founder: { '@type': 'Person', name: SITE.photographer },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Erie',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  sameAs: [SITE.instagram],
  priceRange: '$200 — $4,000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bodoni.variable} ${archivo.variable} ${spaceMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LightboxProvider>
          <Intro />
          <MobileTopBar />
          <Sidebar />
          <main className="min-h-screen lg:ml-[322px]">
            <PageTransition>{children}</PageTransition>
            {/* Keeps the fixed tab bar from covering the end of every page. */}
            <div className="h-[74px] lg:hidden" />
          </main>
          <MobileTabBar />
        </LightboxProvider>
      </body>
    </html>
  );
}
