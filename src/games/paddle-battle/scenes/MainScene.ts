import * as Phaser from 'phaser';
import { Paddle } from '../prefabs/Paddle';
import { Ball } from '../prefabs/Ball';
import * as statsManager from '@/utils/statsManager';

const WINNING_SCORE = 10;
const GAME_ID = 'paddle-battle';

export class MainScene extends Phaser.Scene {
  private player!: Paddle;
  private opponent!: Paddle;
  private ball!: Ball;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;
  private playerScoreText!: Phaser.GameObjects.Text;
  private opponentScoreText!: Phaser.GameObjects.Text;
  private spaceKey!: Phaser.Input.Keyboard.Key;
  private pauseKey!: Phaser.Input.Keyboard.Key;
  private pauseText!: Phaser.GameObjects.Text;

  private playerScore = 0;
  private opponentScore = 0;
  private currentRally = 0;
  private totalPlayTime = 0;
  private isGameOver = false;
  private isPaused = false;

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    statsManager.incrementStat(GAME_ID, 'gamesPlayed');
    this.createThemedTextures(); // Create our new Buffalo-themed assets
    this.drawCenterLine(); // Draw the center line

    this.physics.world.setBoundsCollision(false, false, true, true);

    // Create paddles using their new, colored texture keys
    this.player = new Paddle(this, 50, this.cameras.main.centerY, 'paddle_blue');
    this.opponent = new Paddle(
      this,
      this.cameras.main.width - 50,
      this.cameras.main.centerY,
      'paddle_red'
    );

    // The ball prefab will now automatically use the 'snowflake_ball' texture
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
    this.spaceKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.pauseKey = this.input.keyboard!.addKey(Phaser.Input.Keyboard.KeyCodes.P);

    this.createScoreboard();
    this.createPauseText();
    this.ball.reset();
  }

  update(time: number, delta: number) {
    if (Phaser.Input.Keyboard.JustDown(this.pauseKey)) {
      this.togglePause();
    }
    if (this.isPaused || this.isGameOver) return;
    this.totalPlayTime += delta;
    this.player.handlePlayerMovement(this.cursors);
    this.opponent.handleAiMovement(this.ball);
    this.checkScoring();
  }

  private togglePause() {
    if (this.isGameOver) return;
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.physics.pause();
      this.pauseText.setVisible(true);
    } else {
      this.physics.resume();
      this.pauseText.setVisible(false);
    }
  }

  private handlePaddleBallCollision() {
    this.currentRally++;
    statsManager.incrementStat(GAME_ID, 'totalRallies');
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
      statsManager.incrementStat(GAME_ID, 'totalPointsScored');
      this.endRally();
      this.checkWinCondition();
    }
  }

  private endRally() {
    statsManager.updateHighestStat(GAME_ID, 'longestRally', this.currentRally);
    this.currentRally = 0;
    if (!this.isGameOver) this.ball.reset();
  }

  private checkWinCondition() {
    if (this.playerScore >= WINNING_SCORE) {
      this.endGame('You Win!');
      statsManager.incrementStat(GAME_ID, 'playerWins');
    } else if (this.opponentScore >= WINNING_SCORE) {
      this.endGame('You Lose!');
      statsManager.incrementStat(GAME_ID, 'playerLosses');
    }
  }

  private endGame(message: string) {
    this.isGameOver = true;
    this.physics.pause();
    this.ball.setVisible(false);
    statsManager.incrementStat(GAME_ID, 'totalPlayTime', Math.round(this.totalPlayTime / 1000));
    this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, message, {
        font: '64px "Press Start 2P"',
        color: '#e7042d',
      })
      .setOrigin(0.5);
    this.add
      .text(
        this.cameras.main.centerX,
        this.cameras.main.centerY + 80,
        'Click or Press Space to Restart',
        { font: '24px "Press Start 2P"', color: '#ffffff' }
      )
      .setOrigin(0.5);
    this.input.once('pointerdown', this.restartGame, this);
    this.spaceKey.once('down', this.restartGame, this);
  }

  private restartGame() {
    this.playerScore = 0;
    this.opponentScore = 0;
    this.isGameOver = false;
    this.isPaused = false;
    this.totalPlayTime = 0;
    this.scene.restart();
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

  private createPauseText() {
    this.pauseText = this.add
      .text(this.cameras.main.centerX, this.cameras.main.centerY, 'PAUSED', {
        font: '64px "Press Start 2P"',
        color: '#ffffff',
      })
      .setOrigin(0.5)
      .setVisible(false)
      .setDepth(1);
  }

  private drawCenterLine() {
    const graphics = this.make.graphics();
    graphics.lineStyle(5, 0xffffff, 0.5);
    for (let i = 0; i < this.cameras.main.height; i += 30) {
      graphics.lineBetween(this.cameras.main.centerX, i, this.cameras.main.centerX, i + 15);
    }
    graphics.generateTexture('center_line', this.cameras.main.width, this.cameras.main.height);
    this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'center_line');
    graphics.destroy();
  }

  private createThemedTextures() {
    const graphics = this.make.graphics();

    graphics.fillStyle(0x003091); // obl-blue
    graphics.fillRect(0, 0, 20, 100);
    graphics.generateTexture('paddle_blue', 20, 100);
    graphics.clear();

    graphics.fillStyle(0xe7042d); // obl-red
    graphics.fillRect(0, 0, 20, 100);
    graphics.generateTexture('paddle_red', 20, 100);
    graphics.clear();

    // Snowflake Ball
    graphics.fillStyle(0xffffff); // White
    const snowflakePixels = [
      { x: 3, y: 0, w: 1, h: 7 },
      { x: 0, y: 3, w: 7, h: 1 },
      { x: 1, y: 1, w: 1, h: 1 },
      { x: 5, y: 1, w: 1, h: 1 },
      { x: 1, y: 5, w: 1, h: 1 },
      { x: 5, y: 5, w: 1, h: 1 },
    ];
    const scale = 3;
    snowflakePixels.forEach((p) => {
      graphics.fillRect(p.x * scale, p.y * scale, p.w * scale, p.h * scale);
    });
    graphics.generateTexture('snowflake_ball', 7 * scale, 7 * scale);

    graphics.destroy();
  }
}
