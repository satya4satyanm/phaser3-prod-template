import Phaser from 'phaser';

export default class BaseScene extends Phaser.Scene {

  constructor(key) {
    super(key);
  }

  changeToScene(key, data = null) {
    this.input.keyboard.removeAllListeners();
    this.input.removeAllListeners();
    this.scene.stop(this.sys.config.key);
    this.scene.start(key, data);
    this.scene.bringToTop(key);
  }

  scaleToFit(width = 700, height = 650) {
    let scaleX = window.innerWidth < width ? window.innerWidth / width : 1;
    let scaleY = window.innerHeight < height ? window.innerHeight / height : 1;
    if(scaleX < scaleY) {
      this.cameras.main.setZoom(scaleX);
    }
    else if(scaleY < scaleX) {
      this.cameras.main.setZoom(scaleY);
    }
  }
}