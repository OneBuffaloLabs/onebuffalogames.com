import * as Phaser from 'phaser';

export class Paddle extends Phaser.Physics.Arcade.Sprite {
  private aiSpeed: number;

  constructor(scene: Phaser.Scene, x: number, y: number, textureKey: string, aiSpeed = 250) {
    super(scene, x, y, textureKey);
    this.aiSpeed = aiSpeed;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setImmovable(true);
    this.setCollideWorldBounds(true);
  }

  handlePlayerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (cursors.up.isDown) {
      this.setVelocityY(-350); // Player speed is constant
    } else if (cursors.down.isDown) {
      this.setVelocityY(350);
    } else {
      this.setVelocityY(0);
    }
  }

  handleAiMovement(ball: Phaser.Physics.Arcade.Sprite) {
    // Use the speed set by the difficulty
    if (this.y < ball.y) {
      this.setVelocityY(this.aiSpeed);
    } else if (this.y > ball.y) {
      this.setVelocityY(-this.aiSpeed);
    } else {
      this.setVelocityY(0);
    }
  }
}
