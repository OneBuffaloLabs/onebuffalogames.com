'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';
import ArcadeButton from '@/components/ArcadeButton';
import type { IGameConfig } from '@/games/game-loader';

// Dynamically import the GameCanvas component with SSR turned off.
const GameCanvas = dynamic(() => import('@/components/games/GameCanvas'), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />,
});

interface GameClientProps {
  slug: string;
  title: string;
}

/**
 * This component acts as the client-side wrapper for a game page.
 * It handles the dynamic loading of the game canvas and its configuration.
 */
export default function GameClient({ slug, title }: GameClientProps) {
  // State to hold the game config, which will be loaded only on the client.
  const [gameConfig, setGameConfig] = useState<IGameConfig | null>(null);

  useEffect(() => {
    import('@/games/game-loader').then(({ getGameConfigBySlug }) => {
      const config = getGameConfigBySlug(slug);
      setGameConfig(config);
    });
  }, [slug]); // Re-run this effect if the game slug changes.

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-press-start text-4xl md:text-5xl mb-8 animate-glow">{title}</h1>

        <div className="flex justify-center mb-8">
          <Suspense
            fallback={
              <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />
            }>
            {/* Only render the GameCanvas when the config has been loaded into state. */}
            {gameConfig ? (
              <GameCanvas gameConfig={gameConfig} />
            ) : (
              <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />
            )}
          </Suspense>
        </div>

        <div className="max-w-2xl mx-auto text-left font-mono text-gray-300 space-y-4">
          <h2 className="font-orbitron text-2xl font-bold text-obl-red">Controls</h2>
          <p>
            Use the <span className="text-white font-bold">UP</span> and{' '}
            <span className="text-white font-bold">DOWN</span> arrow keys to move your paddle.
          </p>
          <p>First to 10 points wins!</p>
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
