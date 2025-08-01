import Image from 'next/image';
import Link from 'next/link';
import type { Game } from '@/types';
import SectionHeader from './SectionHeader';
import ArcadeButton from '../ArcadeButton';

// Define the props for the component
interface FeaturedGamesProps {
  title: string;
  games: Game[];
  accentColor: 'red' | 'blue';
  browseAllLink: string;
}

/**
 * A reusable component to display a grid of featured games.
 * It can be styled with a red or blue accent color.
 */
const FeaturedGamesSection = ({ title, games, accentColor, browseAllLink }: FeaturedGamesProps) => {
  // Determine the styles based on the accentColor prop
  const styles = {
    border: accentColor === 'red' ? 'border-obl-red' : 'border-obl-blue',
    badge: accentColor === 'red' ? 'bg-obl-red' : 'bg-obl-blue',
    button: accentColor === 'red' ? 'bg-obl-blue' : 'bg-obl-red',
    buttonHover: accentColor === 'red' ? 'hover:bg-blue-800' : 'hover:bg-red-500',
  };

  return (
    <section>
      <SectionHeader title={title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {games.map((game) => (
          <div
            key={game.title}
            className={`relative group bg-obl-dark-blue border-2 ${styles.border} shadow-lg rounded-lg overflow-hidden flex flex-col`}>
            {/* "NEW" Badge */}
            {game.isNew && (
              <span
                className={`absolute top-2 right-2 ${styles.badge} text-white font-press-start text-xs px-2 py-1 rounded-md z-10`}>
                NEW
              </span>
            )}
            <div className="relative w-full h-40">
              <Image
                src={game.imageUrl}
                alt={game.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-orbitron text-xl font-bold">{game.title}</h3>
              {/* This div pushes the button to the bottom */}
              <div className="mt-auto pt-4">
                {game.isComingSoon ? (
                  <button
                    disabled
                    className="w-full font-bold bg-gray-600 text-gray-400 py-2 rounded cursor-not-allowed">
                    Coming Soon
                  </button>
                ) : (
                  <Link
                    href={game.linkUrl}
                    className={`block text-center w-full font-bold ${styles.button} text-white py-2 rounded ${styles.buttonHover} transition-colors`}>
                    Play Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-16">
        <ArcadeButton href={browseAllLink} color={accentColor}>
          Browse All Games
        </ArcadeButton>
      </div>
    </section>
  );
};

export default FeaturedGamesSection;
