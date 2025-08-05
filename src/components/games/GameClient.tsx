'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ArcadeButton from '@/components/ArcadeButton';
import type { IGameConfig } from '@/games/game-loader';
import type { GameStat } from '@/types';
import * as statsManager from '@/utils/statsManager';

const GameCanvas = dynamic(() => import('@/components/games/GameCanvas'), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />,
});

interface GameClientProps {
  slug: string;
  title: string;
  description: string;
  controls: string[];
  stats: GameStat[]; // The array defining which stats to show
}

export default function GameClient({ slug, title, description, controls, stats }: GameClientProps) {
  const [gameConfig, setGameConfig] = useState<IGameConfig | null>(null);
  const [playerStats, setPlayerStats] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load the game config
    import('@/games/game-loader').then(({ getGameConfigBySlug }) => {
      const config = getGameConfigBySlug(slug);
      setGameConfig(config);
    });

    // Load all stats for this game from local storage
    const allStats = statsManager.getAllStats(slug);
    setPlayerStats(allStats);
  }, [slug]);

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-press-start text-4xl md:text-5xl mb-8 animate-glow">{title}</h1>

        <div className="inline-block border-4 border-obl-blue rounded-lg p-2 shadow-lg bg-black mb-8">
          <div className="flex justify-center">
            <Suspense
              fallback={<div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse" />}>
              {gameConfig ? (
                <GameCanvas gameConfig={gameConfig} />
              ) : (
                <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse" />
              )}
            </Suspense>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-left font-mono text-gray-300 space-y-8">
          {/* Controls & Objective Section */}
          <div>
            <h2 className="font-orbitron text-2xl font-bold text-obl-red mb-4">
              Controls & Objective
            </h2>
            {controls.map((control, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: control }} />
            ))}
            <p>{description}</p>
          </div>

          {/* Player Stats Section */}
          {stats && stats.length > 0 && (
            <div>
              <h2 className="font-orbitron text-2xl font-bold text-obl-red mb-4">Player Stats</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.key} className="bg-obl-blue/20 p-3 rounded-md">
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                    <div className="text-white font-bold text-2xl">
                      {playerStats[stat.key] || 0}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          <ArcadeButton href="/games" color="blue">
            Back to Arcade
          </ArcadeButton>
        </div>
      </div>
    </div>
  );
}
