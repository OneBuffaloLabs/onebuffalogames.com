import type { Metadata } from 'next';
import { Geist, Geist_Mono, Orbitron } from 'next/font/google';
import './globals.css';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], weight: '700', variable: '--font-orbitron' });

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
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
