import * as Phaser from 'phaser';
import * as settingsManager from '@/utils/settingsManager';

export type Difficulty = 'easy' | 'normal' | 'hard';
const GAME_ID = 'paddle-battle';

export class StartScene extends Phaser.Scene {
  private currentDifficulty!: Difficulty;

  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    this.currentDifficulty = settingsManager.getSetting(GAME_ID, 'difficulty', 'normal');

    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY - 150, 'Paddle Battle', {
        font: '80px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);

    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 20,
        `Difficulty: ${this.currentDifficulty.toUpperCase()}`,
        {
          font: '24px "Press Start 2P"',
          color: '#ffffff',
        }
      )
      .setOrigin(0.5);

    const startButton = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 50,
        'Click or Press Space to Start',
        {
          font: '24px "Press Start 2P"',
          color: '#ffffff',
        }
      )
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    const settingsButton = this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY + 120, 'Settings', {
        font: '32px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    // Event listeners are now specific to the buttons
    settingsButton.on('pointerover', () => settingsButton.setColor('#e7042d'));
    settingsButton.on('pointerout', () => settingsButton.setColor('#ffffff'));
    settingsButton.on('pointerdown', () => this.scene.start('SettingsScene'));

    startButton.on('pointerover', () => startButton.setColor('#e7042d'));
    startButton.on('pointerout', () => startButton.setColor('#ffffff'));
    startButton.on('pointerdown', () => this.startGame());

    this.input.keyboard!.once('keydown-SPACE', (event: KeyboardEvent) => {
      event.preventDefault();
      this.startGame();
    });
  }

  private startGame() {
    this.scene.start('MainScene', { difficulty: this.currentDifficulty });
  }
}
