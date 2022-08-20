import stage1 from './scenes/stage1.js';

const game = new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    // mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },
  // scenes: [stage1],
  scene: stage1,
});
