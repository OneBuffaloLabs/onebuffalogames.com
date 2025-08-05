import * as Phaser from 'phaser';
import * as settingsManager from '@/utils/settingsManager';
import { Difficulty } from './StartScene';

const GAME_ID = 'paddle-battle';

export class SettingsScene extends Phaser.Scene {
  private selectedDifficulty!: Difficulty;
  private difficultyLabels!: Phaser.GameObjects.Text[];

  constructor() {
    super({ key: 'SettingsScene' });
  }

  create() {
    this.selectedDifficulty = settingsManager.getSetting(GAME_ID, 'difficulty', 'normal');

    this.add
      .text(this.cameras.main.centerX, 100, 'Settings', {
        font: '64px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);

    this.add
      .text(this.cameras.main.centerX, 250, 'Difficulty', {
        font: '40px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.createDifficultySelector();

    const backButton = this.add
      .text(this.cameras.main.centerX, 500, 'Back', {
        font: '32px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    backButton.on('pointerover', () => backButton.setColor('#e7042d'));
    backButton.on('pointerout', () => backButton.setColor('#ffffff'));
    backButton.on('pointerdown', () => {
      this.scene.start('StartScene');
    });
  }

  private createDifficultySelector() {
    const difficulties: Difficulty[] = ['easy', 'normal', 'hard'];
    const cellWidth = 220;
    const gridWidth = difficulties.length * cellWidth;

    this.difficultyLabels = difficulties.map((d) => {
      const text = this.add
        .text(0, 0, d.toUpperCase(), {
          font: '32px "Press Start 2P"',
          color: '#ffffff',
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true });

      text.on('pointerdown', () => {
        this.selectedDifficulty = d;
        settingsManager.setSetting(GAME_ID, 'difficulty', d);
        this.updateSelectorUI();
      });

      return text;
    });

    // Corrected GridAlign to properly center the elements
    Phaser.Actions.GridAlign(this.difficultyLabels, {
      width: 3,
      height: 1,
      cellWidth: cellWidth,
      cellHeight: 50,
      // The starting x position is the center of the screen minus half the total grid width,
      // plus half a cell's width to center the items within their cells.
      x: this.cameras.main.centerX - gridWidth / 2 + cellWidth / 2,
      y: 320,
    });

    this.updateSelectorUI();
  }

  private updateSelectorUI() {
    this.difficultyLabels.forEach((label) => {
      label.setColor(label.text.toLowerCase() === this.selectedDifficulty ? '#e7042d' : '#ffffff');
    });
  }
}
