import type { Metadata } from 'next';
import { Geist, Geist_Mono, Orbitron, Press_Start_2P } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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

export const metadata: Metadata = {
  title: 'One Buffalo Games',
  description:
    'Find gaming tools, information hubs, and playable web games at One Buffalo Games. Your source for everything from stats to retro arcade fun.',
  keywords:
    'One Buffalo Games, gaming tools, gaming hubs, game information, game stats, stat trackers, loadout builders, interactive maps, web games, arcade games, retro games, Tower Defense, COD RCG, Halo tools, Battlefield info, video game news, Buffalo NY gaming, One Buffalo Labs',
};

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
      </body>
    </html>
  );
}
