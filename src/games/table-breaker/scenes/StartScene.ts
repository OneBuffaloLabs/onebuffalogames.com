import * as Phaser from 'phaser';

export class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: 'StartScene' });
  }

  create() {
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY - 40,
        'Click or Press Space to Start',
        {
          font: '32px "Press Start 2P"',
          color: '#ffffff',
          align: 'center',
        }
      )
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true });

    this.input.keyboard!.once('keydown-SPACE', (event: KeyboardEvent) => {
      event.preventDefault();
      this.scene.start('MainScene');
    });

    this.input.once('pointerdown', () => {
      this.scene.start('MainScene');
    });
  }
}
