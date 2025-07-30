import React from 'react';
import Image from 'next/image';
import { FeaturedSection } from '@/components/FeaturedSection';
import { LatestUpdates } from '@/components/LatestUpdates';
import { Footer } from '@/components/Footer';
import hubData from '@/data/hubData.json';
import originalGamesData from '@/data/originalGamesData.json';
import arcadeGamesData from '@/data/arcadeGamesData.json';
import updatesData from '@/data/updatesData.json';

const HomePage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen text-center bg-obl-dark-blue text-white p-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/logo-banner-trans.webp"
            alt="Arcade background"
            layout="fill"
            objectFit="cover"
            className="opacity-10"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <Image
            src="/images/logos/top-text/one-buffalo-cartoon-top-text-white.png"
            alt="One Buffalo Games Logo"
            width={250}
            height={250}
            priority
          />
          <h1 className="text-4xl md:text-6xl font-orbitron mt-4">One Buffalo Games</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            Your source for everything from stats to retro arcade fun.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/hubs"
              className="px-8 py-3 bg-obl-red text-white font-semibold rounded-full hover:bg-red-700 transition-colors">
              View Game Hubs
            </a>
            <a
              href="/games"
              className="px-8 py-3 border-2 border-obl-blue text-white font-semibold rounded-full hover:bg-obl-blue hover:text-white transition-colors">
              Play Our Games
            </a>
          </div>
        </div>
      </header>

      <main>
        <FeaturedSection
          title="Explore Our Game Hubs"
          cards={hubData}
          ctaLink="/hubs"
          ctaText="View All Hubs"
          ctaButtonClasses="bg-obl-blue hover:bg-blue-800"
        />

        <FeaturedSection
          title="Play Our Original Games"
          cards={originalGamesData}
          ctaLink="/games"
          ctaText="View All Games"
          sectionBgClass="bg-gray-100"
          ctaButtonClasses="bg-obl-blue hover:bg-blue-800"
        />

        <FeaturedSection
          title="From the Arcade"
          cards={arcadeGamesData}
          ctaLink="/arcade"
          ctaText="Visit the Arcade"
          titleFontClass="font-arcade"
          ctaButtonClasses="bg-obl-red hover:bg-red-700"
        />

        <LatestUpdates updates={updatesData} />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
