import * as Phaser from 'phaser';
import { StartScene } from './scenes/StartScene';
import { MainScene } from './scenes/MainScene';

// This is the configuration for our Paddle Battle game
export const paddleBattleConfig: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#010123', // OBL Dark Blue
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
    },
  },
  scene: [StartScene, MainScene],
};
