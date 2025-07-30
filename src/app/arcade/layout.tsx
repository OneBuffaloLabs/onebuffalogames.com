import { Press_Start_2P } from 'next/font/google';

const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-press-start-2p',
});

export default function ArcadeLayout({ children }: { children: React.ReactNode }) {
  return <div className={pressStart2P.variable}>{children}</div>;
}
