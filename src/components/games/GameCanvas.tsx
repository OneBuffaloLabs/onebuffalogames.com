'use client';

import { useEffect, useRef } from 'react';
import * as Phaser from 'phaser';

// Define the props for the component
interface GameCanvasProps {
  gameConfig: Phaser.Types.Core.GameConfig;
}

/**
 * A reusable React component to host and manage a Phaser game instance.
 * It handles the creation and destruction of the game, preventing memory leaks.
 */
export default function GameCanvas({ gameConfig }: GameCanvasProps) {
  // Use a ref to hold the Phaser game instance
  const gameRef = useRef<Phaser.Game | null>(null);

  // The main effect to manage the game's lifecycle
  useEffect(() => {
    // Ensure this only runs in the browser
    if (typeof window !== 'undefined') {
      // Initialize the Phaser game when the component mounts
      gameRef.current = new Phaser.Game({
        ...gameConfig,
        parent: 'game-container', // Tell Phaser where to inject the canvas
      });
    }

    // The cleanup function is critical for SPAs
    return () => {
      // Destroy the game instance when the component unmounts
      gameRef.current?.destroy(true);
      gameRef.current = null;
    };
  }, [gameConfig]); // Re-run the effect if the gameConfig prop changes

  // This div is the target where Phaser will inject the game canvas
  return <div id="game-container" className="w-full flex justify-center" />;
}
