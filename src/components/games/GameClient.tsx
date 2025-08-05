'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ArcadeButton from '@/components/ArcadeButton';
import type { IGameConfig } from '@/games/game-loader';

const GameCanvas = dynamic(() => import('@/components/games/GameCanvas'), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />,
});

interface GameClientProps {
  slug: string;
  title: string;
  description: string;
  controls: string[];
}

export default function GameClient({ slug, title, description, controls }: GameClientProps) {
  const [gameConfig, setGameConfig] = useState<IGameConfig | null>(null);

  useEffect(() => {
    import('@/games/game-loader').then(({ getGameConfigBySlug }) => {
      const config = getGameConfigBySlug(slug);
      setGameConfig(config);
    });
  }, [slug]);

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-press-start text-4xl md:text-5xl mb-8 animate-glow">{title}</h1>

        <div className="inline-block border-4 border-obl-blue rounded-lg p-2 shadow-lg bg-black mb-8">
          <div className="flex justify-center">
            <Suspense
              fallback={
                <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />
              }>
              {gameConfig ? (
                <GameCanvas gameConfig={gameConfig} />
              ) : (
                <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />
              )}
            </Suspense>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-left font-mono text-gray-300 space-y-4">
          <h2 className="font-orbitron text-2xl font-bold text-obl-red">Controls & Objective</h2>
          {/* Render controls dynamically */}
          {controls.map((control, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: control }} />
          ))}
          {/* Render description dynamically */}
          <p>{description}</p>
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
