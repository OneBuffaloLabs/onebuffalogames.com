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
    const spacing = 220; // The space between each option

    this.difficultyLabels = difficulties.map((d, index) => {
      // Calculate the position for each label
      const xPos = this.cameras.main.centerX + (index - 1) * spacing;
      const yPos = 320;

      const text = this.add
        .text(xPos, yPos, d.toUpperCase(), {
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

    this.updateSelectorUI();
  }

  private updateSelectorUI() {
    this.difficultyLabels.forEach((label) => {
      label.setColor(label.text.toLowerCase() === this.selectedDifficulty ? '#e7042d' : '#ffffff');
    });
  }
}
