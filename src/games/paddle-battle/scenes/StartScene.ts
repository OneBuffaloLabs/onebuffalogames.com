import * as Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY - 100, 'Paddle Battle', {
        font: '80px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);

    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 50,
        'Click or Press Space to Start',
        {
          font: '24px "Press Start 2P"',
          color: '#ffffff',
        }
      )
      .setOrigin(0.5);

    // Listen for a click to start the main game scene
    this.input.once('pointerdown', () => this.scene.start('MainScene'));

    // Updated keyboard listener to prevent default browser action
    this.input.keyboard!.once('keydown-SPACE', (event: KeyboardEvent) => {
      event.preventDefault(); // This stops the browser from scrolling
      this.scene.start('MainScene');
    });
  }
}
