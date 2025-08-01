'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import type { Game } from '@/types';
import GameCard from './GameCard';

interface GameBrowserProps {
  games: Game[];
  filterButtons: string[];
  sortOptions: { label: string; value: string }[];
}

export default function GameBrowser({ games, filterButtons, sortOptions }: GameBrowserProps) {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get('filter') || 'all';

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const [activeSort, setActiveSort] = useState('newest');

  const filteredAndSortedGames = useMemo(() => {
    let processedGames = [...games];

    // 1. Filter by search term
    if (searchTerm) {
      processedGames = processedGames.filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filter by active tag
    if (activeFilter !== 'all') {
      processedGames = processedGames.filter((game) =>
        game.tags.includes(activeFilter.toLowerCase())
      );
    }

    // 3. Sort the results
    switch (activeSort) {
      case 'newest':
        processedGames.sort(
          (a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        );
        break;
      case 'oldest':
        processedGames.sort(
          (a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
        );
        break;
      case 'popularity':
        processedGames.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'a-z':
        processedGames.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'z-a':
        processedGames.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    return processedGames;
  }, [games, searchTerm, activeFilter, activeSort]);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-4 bg-obl-dark-blue/50 border-2 border-obl-blue/30 rounded-lg">
        {/* Search Bar */}
        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64 bg-foreground/20 border-2 border-obl-blue rounded-md py-2 pl-10 pr-4 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red focus:border-transparent"
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {filterButtons.map((label) => (
            <button
              key={label}
              onClick={() => setActiveFilter(label.toLowerCase())}
              className={`font-mono py-2 px-4 rounded transition-colors text-sm ${
                activeFilter === label.toLowerCase()
                  ? 'bg-obl-red text-white'
                  : 'bg-obl-blue text-white hover:bg-blue-800'
              }`}>
              {label}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div>
          <select
            value={activeSort}
            onChange={(e) => setActiveSort(e.target.value)}
            className="font-mono bg-foreground/20 border-2 border-obl-blue text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-obl-red focus:border-transparent">
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-obl-dark-blue">
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredAndSortedGames.map((game) => (
          <GameCard key={game.title} game={game} />
        ))}
      </div>
      {filteredAndSortedGames.length === 0 && (
        <div className="text-center col-span-full py-16">
          <p className="font-orbitron text-2xl text-gray-400">
            No games found. Try adjusting your filters!
          </p>
        </div>
      )}
    </>
  );
}
