'use client'; // This directive makes this component a Client Component.

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { getGameConfigBySlug } from '@/games/game-loader';
import ArcadeButton from '@/components/ArcadeButton';

// The dynamic import with ssr: false is now correctly placed in a Client Component.
// This ensures Phaser is never loaded on the server.
const GameCanvas = dynamic(() => import('@/components/games/GameCanvas'), {
  ssr: false,
  loading: () => <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />,
});

interface GameClientProps {
  slug: string;
}

/**
 * This component acts as the client-side wrapper for a game page.
 * It handles the dynamic loading of the game canvas and renders the UI.
 */
export default function GameClient({ slug }: GameClientProps) {
  // This logic now runs safely on the client
  const gameConfig = getGameConfigBySlug(slug);

  return (
    <div className="relative bg-obl-dark-blue/95 scanline-overlay text-white min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-press-start text-4xl md:text-5xl mb-8 animate-glow">
          {gameConfig.title}
        </h1>

        <div className="flex justify-center mb-8">
          <Suspense
            fallback={
              <div className="w-[800px] h-[600px] bg-foreground/10 animate-pulse rounded-lg" />
            }>
            <GameCanvas gameConfig={gameConfig} />
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
