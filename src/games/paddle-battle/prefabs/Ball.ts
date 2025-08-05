import * as Phaser from 'phaser';

export class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    // The 'ball' texture is now expected to already exist.
    super(scene, x, y, 'ball');

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCollideWorldBounds(true);
    this.setBounce(1, 1);
  }

  // Resets the ball to the center and launches it
  public reset() {
    this.setPosition(this.scene.cameras.main.centerX, this.scene.cameras.main.centerY);
    const angle =
      Phaser.Math.Between(0, 1) > 0.5
        ? Phaser.Math.Between(-30, 30)
        : Phaser.Math.Between(150, 210);
    const vec = this.scene.physics.velocityFromAngle(angle, 400);
    this.setVelocity(vec.x, vec.y);
  }
}
