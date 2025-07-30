import React from 'react';
import Image from 'next/image';
import { FeaturedSection } from '@/components/FeaturedSection';
import { Footer } from '@/components/Footer';
import hubData from '@/data/hubData.json';
import originalGamesData from '@/data/originalGamesData.json';
import arcadeGamesData from '@/data/arcadeGamesData.json';

const HomePage = () => {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <header className="relative flex flex-col items-center justify-center min-h-screen text-center bg-obl-dark-blue text-white p-8">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banners/logo-banner-trans.png"
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

        {/* Latest Updates Section */}
        <section className="bg-gray-100 py-20 px-8">
          <h2 className="text-3xl font-orbitron text-center mb-12">Latest Updates</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-4">
              <li className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">July 30, 2025</p>
                <p>Homepage structure updated for better content flow.</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">July 26, 2025</p>
                <p>Launched the new One Buffalo Games homepage!</p>
              </li>
              <li className="p-4 bg-white rounded-lg shadow">
                <p className="font-semibold">July 15, 2025</p>
                <p>Started development on the new Tower Defense game.</p>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
