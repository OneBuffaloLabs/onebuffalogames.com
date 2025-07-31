import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import hubData from '@/data/hubData.json';
import type { Hub } from '@/types';
import SectionHeader from './SectionHeader';

/**
 * Shuffles an array and returns a new array with the first N items.
 * @param arr The array to shuffle.
 * @param n The number of items to return.
 * @returns A new array with N random items.
 */
const getRandomItems = <T,>(arr: T[], n: number): T[] => {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const HubsSection = () => {
  // Assert the type of the imported JSON data
  const hubs: Hub[] = hubData;
  // Get 3 random hubs to feature on the homepage
  const featuredHubs = getRandomItems(hubs, 3);

  return (
    <section>
      <SectionHeader title="Explore Our Hubs" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredHubs.map((hub) => (
          <div
            key={hub.title}
            className="flex flex-col items-center text-center p-6 bg-obl-blue/30 rounded-lg border-2 border-obl-blue/50 transition-transform duration-300 hover:scale-105">
            {/* Use the provided image, or a fallback icon if none exists */}
            {hub.imageUrl ? (
              <Image
                src={hub.imageUrl}
                alt={`${hub.title} logo`}
                width={64}
                height={64}
                className="h-16 w-16 mb-4 object-contain"
              />
            ) : (
              <FontAwesomeIcon icon={faGamepad} className="h-16 w-16 mb-4 text-obl-red" />
            )}
            <h3 className="font-orbitron text-2xl font-bold mb-2">{hub.title}</h3>
            {/* Only render the description if it exists */}
            {hub.description && <p className="text-gray-300 mb-4 flex-grow">{hub.description}</p>}
            {/* The link acts as a button */}
            <Link
              href={hub.linkUrl}
              target={hub.isComingSoon ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className={`font-mono text-white py-2 px-4 rounded transition-colors ${
                hub.isComingSoon
                  ? 'bg-gray-600 cursor-not-allowed' // Style for "Coming Soon" state
                  : 'bg-obl-blue hover:bg-blue-800'
              }`}>
              {hub.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HubsSection;
