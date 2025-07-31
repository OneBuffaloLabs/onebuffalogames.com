import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import SectionHeader from '@/components/home/SectionHeader';
import HubsSection from '@/components/home/HubsSection';
import ArcadeButton from '@/components/ArcadeButton';
import FeaturedGamesSection from '@/components/home/FeaturedGamesSection';

// Import the new game data
import originalGamesData from '@/data/originalGames.json';
import arcadeGamesData from '@/data/arcadeGames.json';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-obl-dark-blue">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obl-dark-blue via-transparent to-transparent"></div>
        <div className="relative z-10 p-4">
          <h1 className="font-press-start text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 animate-glow">
            One Buffalo Games
          </h1>
          <p className="font-orbitron text-xl md:text-2xl mb-8 tracking-wider">
            Your portal to game hubs, original titles, and classic arcade adventures.
          </p>
          <div className="flex justify-center items-center gap-x-4">
            <ArcadeButton href="/hubs" color="blue">
              Checkout Hubs
            </ArcadeButton>
            <ArcadeButton href="/games" color="red">
              Start Playing
            </ArcadeButton>
          </div>
        </div>
      </section>

      {/* Main content wrapper */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 space-y-24 bg-obl-dark-blue/95 scanline-overlay">
        {/* Latest Updates Section */}
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

        {/* Dynamic Hubs section */}
        <HubsSection />

        {/* Dynamic Originals Section */}
        <FeaturedGamesSection
          title="One Buffalo Originals"
          games={originalGamesData}
          accentColor="red"
          browseAllLink="/games?filter=originals"
        />

        {/* Dynamic Arcade Section */}
        <FeaturedGamesSection
          title="Classic Arcade Hits"
          games={arcadeGamesData}
          accentColor="blue"
          browseAllLink="/games?filter=arcade"
        />
      </div>
    </>
  );
}
