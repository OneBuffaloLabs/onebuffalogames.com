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

    // --- Primary Action: Start Game ---
    const startButton = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 40, // Positioned slightly above center
        'Click or Press Space to Start',
        {
          font: '32px "Press Start 2P"',
          color: '#ffffff',
          align: 'center',
        }
      )
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    // --- Secondary Action: Settings ---
    const settingsButton = this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 40, // Positioned below the start button
        'Settings',
        {
          font: '24px "Press Start 2P"',
          color: '#ffffff',
        }
      )
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    // --- Tertiary Info: Current Difficulty ---
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.height - 40, // Positioned at the bottom
        `Difficulty: ${this.currentDifficulty.toUpperCase()}`,
        {
          font: '16px "Press Start 2P"',
          color: 'rgba(255, 255, 255, 0.7)', // Muted color
        }
      )
      .setOrigin(0.5);

    // --- Event Listeners ---
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
