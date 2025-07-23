import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'FlickzWithFitz | Cameron Fitzsimmons Photography',
    template: '%s | FlickzWithFitz',
  },
  description: 'FlickzWithFitz - Professional photographer Cameron Fitzsimmons based in Erie, PA. Specializing in authentic, timeless photography for weddings, portraits, events, and more.',
  keywords: ['photographer', 'photography', 'portraits', 'landscape', 'events', 'professional photography', 'Cameron Fitzsimmons', 'FlickzWithFitz', 'Erie PA'],
  authors: [{ name: 'Cameron Fitzsimmons' }],
  creator: 'Cameron Fitzsimmons',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://flickzwithfitz.com',
    siteName: 'FlickzWithFitz Photography',
    title: 'FlickzWithFitz | Cameron Fitzsimmons Photography',
    description: 'FlickzWithFitz - Professional photographer Cameron Fitzsimmons based in Erie, PA. Specializing in authentic, timeless photography.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlickzWithFitz Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlickzWithFitz | Cameron Fitzsimmons Photography',
    description: 'FlickzWithFitz - Professional photographer Cameron Fitzsimmons based in Erie, PA. Specializing in authentic, timeless photography.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-dark03 text-white antialiased">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 