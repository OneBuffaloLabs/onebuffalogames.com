import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faPuzzlePiece, faStar, faNewspaper } from '@fortawesome/free-solid-svg-icons';

const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="font-press-start text-3xl md:text-4xl text-center mb-12 text-white animate-glow tracking-tighter">
    {title}
  </h2>
);

const ArcadeButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="inline-block font-orbitron bg-obl-red text-white text-lg font-bold py-3 px-8 border-b-4 border-red-800 rounded-md hover:bg-red-500 hover:border-red-700 active:translate-y-1 active:border-b-2 transition-all duration-150 transform shadow-lg">
    {children}
  </Link>
);

export default function HomePage() {
  return (
    <>
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-obl-dark-blue">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obl-dark-blue via-transparent to-transparent"></div>
        <div className="relative z-10 p-4">
          <h1 className="font-press-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-glow">
            One Buffalo Games
          </h1>
          <p className="font-orbitron text-xl md:text-2xl mb-8 tracking-wider">
            Your Portal to Classic & Original Arcade Adventures.
          </p>
          <ArcadeButton href="/games">Start Playing</ArcadeButton>
        </div>
      </section>

      {/* Main content wrapper with scanline overlay */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 space-y-24 bg-obl-dark-blue/95 scanline-overlay">
        <section>
          <SectionHeader title="Latest Updates" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-obl-dark-blue border-2 border-obl-blue p-6 rounded-lg shadow-lg hover:shadow-obl-red/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon icon={faNewspaper} className="h-6 w-6 mr-4 text-obl-red" />
                  <h3 className="font-orbitron text-xl font-bold text-white">
                    Update Title {i + 1}
                  </h3>
                </div>
                <p className="text-gray-300 font-mono mb-4">
                  A brief summary of the latest news, game release, or community event goes here...
                </p>
                <a href="#" className="font-bold text-obl-red hover:underline">
                  Read More &raquo;
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Explore Our Hubs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center text-center p-6 bg-obl-blue/30 rounded-lg border-2 border-obl-blue/50 transition-transform duration-300 hover:scale-105">
              <FontAwesomeIcon icon={faGamepad} className="h-16 w-16 mb-4 text-obl-red" />
              <h3 className="font-orbitron text-2xl font-bold mb-2">Action Classics</h3>
              <p className="text-gray-300 mb-4 flex-grow">
                High-octane adventures and timeless arcade challenges.
              </p>
              <button className="font-mono bg-obl-blue text-white py-2 px-4 rounded hover:bg-blue-800">
                View Hub
              </button>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-obl-blue/30 rounded-lg border-2 border-obl-blue/50 transition-transform duration-300 hover:scale-105">
              <FontAwesomeIcon icon={faPuzzlePiece} className="h-16 w-16 mb-4 text-obl-red" />
              <h3 className="font-orbitron text-2xl font-bold mb-2">Puzzle Power-ups</h3>
              <p className="text-gray-300 mb-4 flex-grow">
                Brain-bending puzzles and strategic gameplay.
              </p>
              <button className="font-mono bg-obl-blue text-white py-2 px-4 rounded hover:bg-blue-800">
                View Hub
              </button>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-obl-blue/30 rounded-lg border-2 border-obl-blue/50 transition-transform duration-300 hover:scale-105">
              <FontAwesomeIcon icon={faStar} className="h-16 w-16 mb-4 text-obl-red" />
              <h3 className="font-orbitron text-2xl font-bold mb-2">Indie Gems</h3>
              <p className="text-gray-300 mb-4 flex-grow">
                Unique and innovative games from independent developers.
              </p>
              <button className="font-mono bg-obl-blue text-white py-2 px-4 rounded hover:bg-blue-800">
                View Hub
              </button>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="One Buffalo Originals" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="relative group bg-obl-dark-blue border-2 border-obl-red shadow-lg rounded-lg overflow-hidden">
                <span className="absolute top-2 right-2 bg-obl-red text-white font-press-start text-xs px-2 py-1 rounded-md z-10">
                  NEW
                </span>
                <img
                  src={`https://placehold.co/300x200/003091/e7042d?text=Original+Game`}
                  alt="Original Game"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-orbitron text-xl font-bold">Original Game {i + 1}</h3>
                  <button className="mt-4 w-full font-bold bg-obl-blue text-white py-2 rounded hover:bg-blue-800 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Classic Arcade Hits" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="group bg-obl-dark-blue border-2 border-obl-blue shadow-lg rounded-lg overflow-hidden">
                <img
                  src={`https://placehold.co/300x200/e7042d/003091?text=Arcade+Classic`}
                  alt="Arcade Classic"
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="p-4">
                  <h3 className="font-orbitron text-xl font-bold">Arcade Classic {i + 1}</h3>
                  <button className="mt-4 w-full font-bold bg-obl-red text-white py-2 rounded hover:bg-red-500 transition-colors">
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <ArcadeButton href="/games">Browse All Games</ArcadeButton>
          </div>
        </section>
      </div>
    </>
  );
}
