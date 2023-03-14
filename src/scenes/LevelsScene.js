import BaseScene from './BaseScene';

export default class LevelsScene extends BaseScene {

  constructor() {
    super({key: 'LevelsScene'});
  }

  preload() {
    this.scaleToFit();
  }

  create() {
    let gconfig = this.game.config;
    let background = this.add.image(gconfig.width/2, gconfig.height/2, 'img').setOrigin(.5).setAlpha(.4);
    // this.cameras.main.startFollow(background);

    let logoStyle = {fontSize: 60, color: '#ffffff'};
    let logo = this.add.text(gconfig.width/2, gconfig.height*1/5, 'Select level', logoStyle);
    logo.setStroke('#ae7f00', 10).setOrigin(.5);

    let btnStyle = {fontSize: 55, color: '#ffffff'};
    let l1 = this.add.text(gconfig.width/2, gconfig.height/2, 'Level 1', btnStyle);
    l1.setStroke('#ae7f00', 6).setOrigin(.5).setInteractive();

    l1.on('pointerup', ()=>{
      this.changeToScene('GameScene', {l:1});
    });

    let l2 = this.add.text(gconfig.width/2, gconfig.height*2.5/4, 'Level 2', btnStyle);
    l2.setStroke('#ae7f00', 6).setOrigin(.5).setInteractive();

    l2.on('pointerup', ()=>{
      this.changeToScene('GameScene', {l:2});
    });

  }

  update() {
  }

}