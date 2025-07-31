// src/app/games/page.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const GameCard = ({ title, imageUrl }: { title: string; imageUrl: string }) => (
  <div className="group bg-obl-dark-blue border-2 border-obl-blue/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:border-obl-red hover:shadow-obl-red/30 hover:-translate-y-1">
    <div className="overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-orbitron text-xl font-bold text-white truncate">{title}</h3>
      <button className="mt-4 w-full font-bold bg-obl-red text-white py-2 px-4 rounded-md border-b-4 border-red-800 hover:bg-red-500 hover:border-red-700 active:translate-y-0.5 active:border-b-2 transition-all duration-150">
        Play Game
      </button>
    </div>
  </div>
);

export default function GamesPage() {
  const filterButtons = ['All Games', 'Action', 'Puzzle', 'Originals', 'Arcade Classics'];
  const sortOptions = ['Newest', 'Popular', 'A-Z'];

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-press-start text-4xl md:text-5xl text-center mb-12 animate-glow">
          Our Arcade Collection
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 p-4 bg-obl-dark-blue/50 border-2 border-obl-blue/30 rounded-lg">
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search games..."
              className="w-full md:w-64 bg-foreground/20 border-2 border-obl-blue rounded-md py-2 pl-10 pr-4 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red focus:border-transparent"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {filterButtons.map((label) => (
              <button
                key={label}
                className="font-mono bg-obl-blue text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors text-sm">
                {label}
              </button>
            ))}
          </div>
          <div>
            <select className="font-mono bg-foreground/20 border-2 border-obl-blue text-white rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-obl-red focus:border-transparent">
              {sortOptions.map((opt) => (
                <option key={opt} className="bg-obl-dark-blue">
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {[...Array(10)].map((_, i) => (
            <GameCard
              key={i}
              title={`Game Title ${i + 1}`}
              imageUrl={`https://placehold.co/300x200/010123/ffffff?text=Game+${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
