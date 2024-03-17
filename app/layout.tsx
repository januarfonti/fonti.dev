import './global.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://fonti.dev'),
  title: {
    default: 'Januar Fonti',
    template: '%s | Januar Fonti',
  },
  description: 'Developer, writer, and creator.',
  openGraph: {
    title: 'Januar Fonti',
    description: 'Developer, writer, and creator.',
    url: 'https://fonti.dev',
    siteName: 'Januar Fonti',
    locale: 'en_US',
    type: 'website',
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
  twitter: {
    title: 'Januar Fonti',
    card: 'summary_large_image',
  },
  verification: {
    google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
    yandex: '14d2e73487fa6c71',
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <div className=' max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto'>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 relative">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        </div>
      </body>
      { process.env.NODE_ENV === "production" && (
        <>
          <Script async src="https://analytics.fonti.dev/script.js" data-website-id="408c3514-f670-41be-96e3-7dad54c9a375" strategy="lazyOnload" />
        </>
      )}
    </html>
  );
}
