import * as Phaser from 'phaser';

export class Paddle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    // The 'paddle' texture is now expected to already exist.
    super(scene, x, y, 'paddle');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setImmovable(true);
    this.setCollideWorldBounds(true);
  }

  // Handle player-specific movement
  handlePlayerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (cursors.up.isDown) {
      this.setVelocityY(-300);
    } else if (cursors.down.isDown) {
      this.setVelocityY(300);
    } else {
      this.setVelocityY(0);
    }
  }

  // Handle AI-specific movement
  handleAiMovement(ball: Phaser.Physics.Arcade.Sprite) {
    if (this.y < ball.y) {
      this.setVelocityY(200);
    } else if (this.y > ball.y) {
      this.setVelocityY(-200);
    } else {
      this.setVelocityY(0);
    }
  }
}
