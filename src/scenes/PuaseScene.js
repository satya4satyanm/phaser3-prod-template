import BaseScene from './BaseScene';

export default class PauseScene extends BaseScene {
  constructor() {
    super({ key: 'PauseScene' });
  }

  preload() {
    this.scaleToFit();
  }

  create() {
    let gconfig = this.game.config;
    let txtStyle = { fontSize: 35, color: '#ffffff', align: 'center' };

    let play = this.add.image(gconfig.width - 50, gconfig.height - 50, 'play').setOrigin(.5).setInteractive();
    play.on('pointerup', () => {
      this.scene.resume('GameScene');
      this.scene.sendToBack();
    });
  }
}
