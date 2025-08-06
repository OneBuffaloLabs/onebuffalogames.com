import * as Phaser from 'phaser';
import { paddleBattleConfig } from './paddle-battle/config';

// This interface extends the base Phaser GameConfig to include a title
export interface IGameConfig extends Phaser.Types.Core.GameConfig {
  title: string;
}

// --- CLIENT-SIDE ONLY LOGIC ---
// This map contains the actual Phaser game configurations.
const gameConfigs: { [key: string]: IGameConfig } = {
  'paddle-battle': {
    ...paddleBattleConfig,
    title: 'Paddle Battle',
  },
};

// A default config for games that are not yet implemented
const comingSoonConfig: IGameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#010123',
  title: 'Coming Soon',
  scene: {
    create: function () {
      this.add
        .text(400, 300, 'Coming Soon!', {
          font: '48px "Press Start 2P"',
          color: '#e7042d',
        })
        .setOrigin(0.5);
    },
  },
};

/**
 * [CLIENT-SIDE] Retrieves a game's full Phaser configuration.
 * This should only be used in Client Components.
 */
export function getGameConfigBySlug(slug: string): IGameConfig {
  const title = slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
  return gameConfigs[slug] || { ...comingSoonConfig, title: title };
}
