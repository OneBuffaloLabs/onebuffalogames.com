import HubsSection from '@/components/home/HubsSection';
import ArcadeButton from '@/components/ArcadeButton';
import FeaturedGamesSection from '@/components/home/FeaturedGamesSection';
import LatestUpdatesSection from '@/components/home/LatestUpdatesSection';

// Import game data
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
        {/* Hubs section */}
        <HubsSection />

        {/* Originals Section */}
        {originalGamesData.length > 0 && (
          <FeaturedGamesSection
            title="One Buffalo Originals"
            games={originalGamesData}
            accentColor="red"
            browseAllLink="/games?filter=originals"
          />
        )}

        {/* Arcade Section */}
        <FeaturedGamesSection
          title="Classic Arcade Hits"
          games={arcadeGamesData}
          accentColor="blue"
          browseAllLink="/games?filter=arcade"
        />

        {/* Latest Updates Section */}
        <LatestUpdatesSection />
      </div>
    </>
  );
}
