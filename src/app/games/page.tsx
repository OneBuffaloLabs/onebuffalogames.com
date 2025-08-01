import { Suspense } from 'react';
import GameBrowser from '@/components/games/GameBrowser';

// Import game data from JSON files
import originalGamesData from '@/data/originalGames.json';
import arcadeGamesData from '@/data/arcadeGames.json';

// Combine the two arrays into a single source of truth
const allGames = [...originalGamesData, ...arcadeGamesData];

// Define the filter and sort options that will be passed to the component
const filterButtons = ['All', 'Originals', 'Arcade', 'Action', 'Puzzle', 'Shooter', 'Strategy'];
const sortOptions = [
  { label: 'Sort by: Newest', value: 'newest' },
  { label: 'Sort by: Oldest', value: 'oldest' },
  { label: 'Sort by: Popularity', value: 'popularity' },
  { label: 'Sort by: A-Z', value: 'a-z' },
  { label: 'Sort by: Z-A', value: 'z-a' },
];

export default function GamesPage() {
  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          Our Arcade Collection
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
          <GameBrowser games={allGames} filterButtons={filterButtons} sortOptions={sortOptions} />
        </Suspense>
      </div>
    </div>
  );
}
