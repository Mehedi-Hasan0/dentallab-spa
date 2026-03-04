import dynamic from 'next/dynamic';
import type { Metadata } from 'next';
import { Inter, Work_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/navbar/Navbar';
import JsonLd from '@/components/shared/JsonLd';
import { SmoothScrollProvider } from '@/components/shared/SmoothScrollProvider';
import { Toaster } from '@/components/ui/sonner';
import CursorEffect from '@/components/shared/CursorEffect';
const Footer = dynamic(() => import('@/components/shared/footer/Footer'));

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const workSans = Work_Sans({
  variable: '--font-work-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dentallab-spa.vercel.app'),
  title: {
    default: 'Dental Lab | High-Precision Dental Restorations & All-on-X Expertise',
    template: '%s | Dental Lab',
  },
  description:
    'Experience the future of dental restorations with the fastest growing dental lab. We provide high-precision crowns, bridges, and implant solutions with rapid turnaround times nationwide.',
  keywords: [
    'dental lab',
    'full arch restoration',
    'dental crowns',
    'implant solutions',
    'digital scans',
    'NY dental lab',
    'FL dental lab',
    'All-on-X',
  ],
  authors: [{ name: 'Dental Lab Team' }],
  creator: 'Dental Lab',
  publisher: 'Dental Lab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dentallab-spa.vercel.app',
    siteName: 'Dental Lab',
    title: 'Dental Lab | High-Precision Dental Restorations',
    description:
      'Expertise in All-on-X and cosmetic excellence. High-precision restorations delivered nationwide with rapid turnaround times.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dental Lab High-Precision Restorations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Lab | High-Precision Dental Restorations',
    description:
      'Expertise in All-on-X and cosmetic excellence. High-precision restorations delivered nationwide.',
    images: ['/images/og-image.png'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/hero-video-poster.webp" as="image" type="image/webp" />
      </head>
      <body className={`${inter.variable} ${workSans.variable} antialiased`}>
        <JsonLd />
        <SmoothScrollProvider>
          <Toaster />
          <CursorEffect />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
