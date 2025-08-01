import type { Metadata } from 'next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons';
import ArcadeButton from '@/components/ArcadeButton';
import { generateMetadata } from '@/utils/metadata';

// Generate metadata for the 404 page
export const metadata: Metadata = generateMetadata({
  title: '404 - Page Not Found',
  description:
    "Oops! The page you're looking for doesn't exist. Return to the homepage to find our games and hubs.",
  // Good practice to prevent search engines from indexing the 404 page
  robots: {
    index: false,
    follow: true,
  },
});

export default function NotFound() {
  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white h-full flex flex-col items-center justify-center text-center p-4 pt-10">
      <div className="relative z-10">
        <FontAwesomeIcon icon={faGhost} size="6x" className="text-obl-red mb-8 animate-bounce" />
        <h1 className="font-press-start text-7xl md:text-9xl mb-4 animate-glow">404</h1>
        <h2 className="font-orbitron text-3xl md:text-4xl font-bold uppercase tracking-wider mb-4">
          Page Not Found
        </h2>
        <p className="font-mono text-lg text-gray-400 max-w-md mx-auto mb-8">
          Looks like you took a wrong turn in the pixel maze. The page you&apos;re looking for might
          have been moved or doesn&apos;t exist.
        </p>
        <ArcadeButton href="/" color="red">
          Return to Homepage
        </ArcadeButton>
      </div>
    </div>
  );
}
