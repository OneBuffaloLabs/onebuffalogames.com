// --- Next ---
import type { Metadata } from 'next';
import { Geist, Geist_Mono, Orbitron, Press_Start_2P } from 'next/font/google';
// --- Components ---
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import AnalyticsInitializer from '@/components/AnalyticsInitializer';
// --- Utils ---
import { generateMetadata } from '@/utils/metadata';
// --- Styles ---
import './globals.css';

// Font Awesome CSS fix
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

// Font Definitions
const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], weight: '700', variable: '--font-orbitron' });
const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
});

export const metadata: Metadata = generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${pressStart2P.variable} font-sans antialiased bg-obl-dark-blue text-background flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AnalyticsInitializer />
      </body>
    </html>
  );
}
