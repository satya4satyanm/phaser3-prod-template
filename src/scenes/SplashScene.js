import BaseScene from './BaseScene';

export default class SplashScene extends BaseScene {

  constructor() {
    super({key: 'SplashScene'});
  }

  preload() {
    this.scaleToFit();
  }

  create() {
    let gconfig = this.game.config;
    let background = this.add.image(gconfig.width/2, gconfig.height/2, 'img').setOrigin(.5);
    // this.cameras.main.startFollow(background);

    let logoStyle = {fontSize: 60, color: '#ffffff'};
    let logo = this.add.text(gconfig.width/2, gconfig.height*1/5, 'Welcome to Phaser 3 Game', logoStyle);
    logo.setStroke('#ae7f00', 10).setOrigin(.5);

    let btnStyle = {fontSize: 55, color: '#ffffff'};
    let btn = this.add.text(gconfig.width/2, gconfig.height*4/5, 'Play', btnStyle);
    btn.setStroke('#ae7f00', 6).setOrigin(.5).setInteractive();

    btn.on('pointerup', ()=>{
      this.changeToScene('LevelsScene');
    });

  }

  update() {
  }

}