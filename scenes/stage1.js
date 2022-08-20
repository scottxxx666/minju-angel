export default class Stage1 extends Phaser.Scene {
  _pressUp = false;

  constructor() {
    super('stage-1');
  }

  preload() {
    this.load.image('angel', 'assets/angel.png');
  }

  create() {
    console.log('create', this);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.sprite(100, 100, 'angel');
    this.player.setCollideWorldBounds(true);
  }

  update() {
    if (this.cursors.up.isDown) {
      if (!this._pressUp) {
        this._fly();
      }
      this._pressUp = true;
    }
    if (this.cursors.up.isUp) {
      this._pressUp = false;
    }
  }

  _fly() {
    this.player.setVelocityY(-400);
  }
}
