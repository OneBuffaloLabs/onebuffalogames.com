import * as Phaser from 'phaser';
import { Paddle } from '../prefabs/Paddle';
import { Ball } from '../prefabs/Ball';
// Import the generic stats manager
import * as statsManager from '@/utils/statsManager';

const WINNING_SCORE = 10;
const GAME_ID = 'paddle-battle'; // Define a unique ID for this game

export class MainScene extends Phaser.Scene {
  private player!: Paddle;
  private opponent!: Paddle;
  private ball!: Ball;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private playerScoreText!: Phaser.GameObjects.Text;
  private opponentScoreText!: Phaser.GameObjects.Text;

  private playerScore = 0;
  private opponentScore = 0;
  private currentRally = 0;
  private isGameOver = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.createTextures();
    this.physics.world.setBoundsCollision(false, false, true, true);

    this.player = new Paddle(this, 50, this.cameras.main.centerY);
    this.opponent = new Paddle(this, this.cameras.main.width - 50, this.cameras.main.centerY);
    this.ball = new Ball(this, this.cameras.main.centerX, this.cameras.main.centerY);

    this.physics.add.collider(
      this.ball,
      this.player,
      this.handlePaddleBallCollision,
      undefined,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.opponent,
      this.handlePaddleBallCollision,
      undefined,
      this
    );

    this.cursors = this.input.keyboard!.createCursorKeys();
    this.createScoreboard();

    this.ball.reset();
  }

  update() {
    if (this.isGameOver) {
      return;
    }

    this.player.handlePlayerMovement(this.cursors);
    this.opponent.handleAiMovement(this.ball);
    this.checkScoring();
  }

  private handlePaddleBallCollision() {
    this.currentRally++;
  }

  private checkScoring() {
    if (this.ball.x < 0) {
      this.opponentScore++;
      this.opponentScoreText.setText(this.opponentScore.toString());
      this.endRally();
      this.checkWinCondition();
    } else if (this.ball.x > this.cameras.main.width) {
      this.playerScore++;
      this.playerScoreText.setText(this.playerScore.toString());
      // Use the new generic stat function
      statsManager.incrementStat(GAME_ID, 'totalPointsScored');
      this.endRally();
      this.checkWinCondition();
    }
  }

  private endRally() {
    // Use the new generic stat function for highest value
    statsManager.updateHighestStat(GAME_ID, 'longestRally', this.currentRally);
    this.currentRally = 0;
    if (!this.isGameOver) {
      this.ball.reset();
    }
  }

  private checkWinCondition() {
    if (this.playerScore >= WINNING_SCORE) {
      this.endGame('You Win!');
      // Use the new generic stat function
      statsManager.incrementStat(GAME_ID, 'playerWins');
    } else if (this.opponentScore >= WINNING_SCORE) {
      this.endGame('You Lose!');
    }
  }

  private endGame(message: string) {
    this.isGameOver = true;
    this.physics.pause();
    this.ball.setVisible(false);

    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, message, {
        font: '64px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);

    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY + 80, 'Click to Restart', {
        font: '24px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5);

    this.input.once('pointerdown', () => {
      this.playerScore = 0;
      this.opponentScore = 0;
      this.isGameOver = false;
      this.scene.restart();
    });
  }

  private createScoreboard() {
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
  }

  private createTextures() {
    const graphics = this.make.graphics();
    graphics.fillStyle(0xffffff);
    graphics.fillRect(0, 0, 20, 100);
    graphics.generateTexture('paddle', 20, 100);

    graphics.clear();

    graphics.fillStyle(0xffffff);
    graphics.fillCircle(10, 10, 10);
    graphics.generateTexture('ball', 20, 20);
    graphics.destroy();
  }
}
