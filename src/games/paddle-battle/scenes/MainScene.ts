import * as Phaser from 'phaser';
import { Paddle } from '../prefabs/Paddle';
import { Ball } from '../prefabs/Ball';

export class MainScene extends Phaser.Scene {
  private player!: Paddle;
  private opponent!: Paddle;
  private ball!: Ball;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private playerScoreText!: Phaser.GameObjects.Text;
  private opponentScoreText!: Phaser.GameObjects.Text;
  private playerScore = 0;
  private opponentScore = 0;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    // --- Create Textures Once ---
    this.createPaddleTexture();
    this.createBallTexture();

    this.physics.world.setBoundsCollision(false, false, true, true);

    // Now, create the game objects. They will find their textures by key.
    this.player = new Paddle(this, 50, this.cameras.main.centerY);
    this.opponent = new Paddle(this, this.cameras.main.width - 50, this.cameras.main.centerY);
    this.ball = new Ball(this, this.cameras.main.centerX, this.cameras.main.centerY);

    this.physics.add.collider(this.ball, this.player);
    this.physics.add.collider(this.ball, this.opponent);

    this.cursors = this.input.keyboard!.createCursorKeys();

    this.playerScoreText = this.add
      .text(this.cameras.main.centerX - 50, 50, '0', {
        font: '48px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5);
    this.opponentScoreText = this.add
      .text(this.cameras.main.centerX + 50, 50, '0', {
        font: '48px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.ball.reset();
  }

  update() {
    this.player.handlePlayerMovement(this.cursors);
    this.opponent.handleAiMovement(this.ball);

    if (this.ball.x < 0) {
      this.opponentScore++;
      this.opponentScoreText.setText(this.opponentScore.toString());
      this.ball.reset();
    } else if (this.ball.x > this.cameras.main.width) {
      this.playerScore++;
      this.playerScoreText.setText(this.playerScore.toString());
      this.ball.reset();
    }
  }

  // --- Texture Creation Methods ---
  private createPaddleTexture() {
    const graphics = this.make.graphics();
    graphics.fillStyle(0xffffff);
    graphics.fillRect(0, 0, 20, 100);
    graphics.generateTexture('paddle', 20, 100);
    graphics.destroy();
  }

  private createBallTexture() {
    const graphics = this.make.graphics();
    graphics.fillStyle(0xffffff);
    graphics.fillCircle(10, 10, 10);
    graphics.generateTexture('ball', 20, 20);
    graphics.destroy();
  }
}
