import * as Phaser from 'phaser';
import { Table } from '../prefabs/Table';
import { Football } from '../prefabs/Football';
import * as statsManager from '@/utils/statsManager';

const GAME_ID = 'table-breaker';

export class MainScene extends Phaser.Scene {
  private table!: Table;
  private football!: Football;
  private bricks!: Phaser.Physics.Arcade.StaticGroup;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private scoreText!: Phaser.GameObjects.Text;
  private score = 0;
  private isGameOver = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    // --- STATS ---
    statsManager.incrementStat(GAME_ID, 'gamesPlayed');

    // --- GAME OBJECTS ---
    this.createBricks();
    this.table = new Table(this, this.cameras.main.centerX, 550);
    this.football = new Football(this, this.cameras.main.centerX, this.cameras.main.centerY);

    // --- PHYSICS ---
    this.physics.add.collider(
      this.football,
      this.table,
      this.handleTableFootballCollision,
      undefined,
      this
    );
    this.physics.add.collider(
      this.football,
      this.bricks,
      this.handleFootballBrickCollision,
      undefined,
      this
    );

    // --- UI & CONTROLS ---
    this.cursors = this.input.keyboard!.createCursorKeys();
    this.scoreText = this.add.text(16, 16, 'Score: 0', {
      font: '32px "Press Start 2P"',
      color: '#ffffff',
    });
  }

  update() {
    if (this.isGameOver) {
      return;
    }
    this.table.handlePlayerMovement(this.cursors);
    this.checkGameOver();
  }

  private handleTableFootballCollision() {
    if (this.football.body) {
      this.football.body.velocity.y *= 1.05;
    }
  }

  // --- THE DEFINITIVE FIX ---
  // By defining the callback as an arrow function assigned to a class property,
  // we can explicitly apply the correct type and lexically bind `this`.
  private handleFootballBrickCollision: Phaser.Types.Physics.Arcade.ArcadePhysicsCallback = (
    football,
    brick
  ) => {
    // Cast the brick to a physics-enabled sprite to access its body
    const brickSprite = brick as Phaser.Physics.Arcade.Sprite;
    brickSprite.disableBody(true, true);

    this.score += 10;
    this.scoreText.setText(`Score: ${this.score}`);
    statsManager.incrementStat(GAME_ID, 'blocksSmashed');

    // Check for win condition
    if (this.bricks.countActive(true) === 0) {
      this.endGame('You Win!');
    }
  };

  private checkGameOver() {
    if (this.football.y > this.cameras.main.height) {
      this.endGame('Game Over');
    }
  }

  private endGame(message: string) {
    this.isGameOver = true;
    this.physics.pause();
    this.football.setVisible(false);
    statsManager.updateHighestStat(GAME_ID, 'highScore', this.score);

    if (message === 'You Win!') {
      statsManager.incrementStat(GAME_ID, 'levelsCompleted');
    }

    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, message, {
        font: '64px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);
  }

  private createBricks() {
    this.bricks = this.physics.add.staticGroup();
    const brickWidth = 64;
    const brickHeight = 32;
    const rows = 4;
    const cols = 10;
    const xOffset = (this.cameras.main.width - cols * brickWidth) / 2;
    const yOffset = 50;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        this.bricks
          .create(xOffset + j * brickWidth, yOffset + i * brickHeight, 'brick')
          .setOrigin(0, 0)
          .refreshBody();
      }
    }
  }
}
