'use client';

import { useState, useEffect, Suspense, useCallback } from 'react';
import dynamic from 'next/dynamic';
import ArcadeButton from '@/components/ArcadeButton';
import type { IGameConfig } from '@/games/game-loader';
import type { GameStat } from '@/types';
import * as statsManager from '@/utils/statsManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

const GameCanvas = dynamic(() => import('@/components/games/GameCanvas'), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />,
});

interface GameClientProps {
  slug: string;
  title: string;
  description: string;
  controls: string[];
  stats: GameStat[];
  isDesktopOnly: boolean; // New prop to control mobile visibility
}

export default function GameClient({
  slug,
  title,
  description,
  controls,
  stats,
  isDesktopOnly,
}: GameClientProps) {
  const [gameConfig, setGameConfig] = useState<IGameConfig | null>(null);
  const [playerStats, setPlayerStats] = useState<Record<string, number>>({});

  const refreshStats = useCallback(() => {
    const allStats = statsManager.getAllStats(slug);
    setPlayerStats(allStats);
  }, [slug]);

  useEffect(() => {
    import('@/games/game-loader').then(({ getGameConfigBySlug }) => {
      const config = getGameConfigBySlug(slug);
      setGameConfig(config);
    });

    refreshStats();
    window.addEventListener('statsUpdated', refreshStats);
    return () => {
      window.removeEventListener('statsUpdated', refreshStats);
    };
  }, [slug, refreshStats]);

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-press-start text-4xl md:text-5xl mb-8 animate-glow">{title}</h1>

        {/* --- Game Canvas & Mobile Warning --- */}
        <div className="mb-8">
          {/* Desktop View: Show the game canvas */}
          <div
            className={`${
              isDesktopOnly ? 'hidden md:inline-block' : 'inline-block'
            } border-4 border-obl-blue rounded-lg p-2 shadow-lg bg-black`}>
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

          {/* Mobile Warning: Show only if the game is desktop-only */}
          {isDesktopOnly && (
            <div className="block md:hidden border-4 border-obl-red rounded-lg p-8 max-w-md mx-auto">
              <FontAwesomeIcon icon={faDesktop} className="h-16 w-16 text-obl-red mb-4" />
              <h2 className="font-orbitron text-2xl font-bold mb-4">Desktop Recommended</h2>
              <p className="font-mono text-gray-300">
                This game is controlled by the keyboard and is best experienced on a desktop
                computer.
              </p>
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto text-left font-mono text-gray-300 space-y-8">
          <div>
            <h2 className="font-orbitron text-2xl font-bold text-obl-red mb-4">
              Controls & Objective
            </h2>
            {controls.map((control, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: control }} />
            ))}
            <p>{description}</p>
          </div>

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
