import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/types';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => (
  <div className="group bg-obl-dark-blue border-2 border-obl-blue/50 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:border-obl-red hover:shadow-obl-red/30 hover:-translate-y-1 flex flex-col">
    <div className="relative w-full h-48">
      <Image
        src={game.imageUrl}
        alt={game.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="p-4 flex flex-col flex-grow">
      <h3 className="font-orbitron text-xl font-bold text-white truncate">{game.title}</h3>
      <div className="mt-auto pt-4">
        {game.isComingSoon ? (
          <button
            disabled
            className="w-full font-bold bg-gray-600 text-gray-400 py-2 px-4 rounded-md cursor-not-allowed">
            Coming Soon
          </button>
        ) : (
          <Link
            href={game.linkUrl}
            className="block text-center w-full font-bold bg-obl-red text-white py-2 px-4 rounded-md border-b-4 border-red-800 hover:bg-red-500 hover:border-red-700 active:translate-y-0.5 active:border-b-2 transition-all duration-150">
            Play Game
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default GameCard;
