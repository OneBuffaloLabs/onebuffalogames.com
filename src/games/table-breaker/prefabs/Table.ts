import * as Phaser from 'phaser';

export class Table extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'table');
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setImmovable(true);
    this.setCollideWorldBounds(true);
  }

  handlePlayerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    if (cursors.left.isDown) {
      this.setVelocityX(-500);
    } else if (cursors.right.isDown) {
      this.setVelocityX(500);
    } else {
      this.setVelocityX(0);
    }
  }
}
