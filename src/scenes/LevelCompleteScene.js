import BaseScene from './BaseScene';

export default class LevelCompleteScene extends BaseScene {

  constructor() {
    super({ key: 'LevelCompleteScene' });

    this.levelConfig = {};
  }

  init(data) {
    console.log('init', data);
    this.levelConfig = data;
  }

  preload() {
    this.scaleToFit();
  }

  create() {
    let gconfig = this.game.config;
    let background = this.add.image(gconfig.width / 2, gconfig.height / 2, 'player').setOrigin(.5).setAlpha(.4);
    // this.cameras.main.startFollow(background);

    let logoStyle = { fontSize: 60, color: '#ffffff' };
    let logo = this.add.text(gconfig.width / 2, gconfig.height * 1 / 5, 'Level Completed', logoStyle);
    logo.setStroke('#ae7f00', 10).setOrigin(.5);

    let txtStyle = { fontSize: 35, color: '#ffffff' };
    let t = this.add.text(gconfig.width / 2, gconfig.height /2, 'Congrats', txtStyle).setOrigin(.5);

    let nextLevel = this.add.text(gconfig.width / 2, gconfig.height * 2/3, 'Play Next Level', txtStyle).setOrigin(.5).setInteractive();
    
    nextLevel.on('pointerup', ()=>{
      this.changeToScene('GameScene', {l:this.levelConfig.l+1});
    })

  }

  update() {
  }

}