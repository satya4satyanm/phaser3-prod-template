import BaseScene from './BaseScene';
import Player from '../game-objects/Player';

export default class GameScene extends BaseScene {

  constructor() {
    super({ key: 'GameScene' });

    this.levelConfig = {};
    this.player = null;
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
    let logo = this.add.text(gconfig.width / 2, gconfig.height * 1 / 5, 'Inside Game Play', logoStyle);
    logo.setStroke('#ae7f00', 10).setOrigin(.5);

    let txtStyle = { fontSize: 35, color: '#ffffff', align: 'center' };
    let t = this.add.text(gconfig.width / 2, gconfig.height / 3, '', txtStyle).setOrigin(.5);
    t.setText('I am the game scene.\nCurrently playing level ' + this.levelConfig.l);

    let completeLevel = this.add.text(gconfig.width / 2, gconfig.height * 2 / 3, 'Complete Level', txtStyle).setOrigin(.5).setInteractive();

    let failLevel = this.add.text(gconfig.width / 2, gconfig.height * 2.5 / 3, 'Fail Level', txtStyle).setOrigin(.5).setInteractive();

    completeLevel.on('pointerup', () => {
      this.changeToScene('LevelCompleteScene', { l: this.levelConfig.l });
    })

    failLevel.on('pointerup', () => {
      this.changeToScene('LevelFailScene', { l: this.levelConfig.l });
    })



    let pause = this.add.image(gconfig.width - 50, gconfig.height - 50, 'pause').setOrigin(.5).setInteractive();

    pause.on('pointerup',  () => {
        this.scene.pause('GameScene');
        this.scene.launch('PauseScene');
        this.scene.bringToTop('PauseScene');
    });

    this.events.on('pause',  ()=> {
      console.log('Scene A paused');
    })

    this.events.on('resume',  ()=> {
      console.log('Scene A resumed');
      this.scene.sendToBack('PauseScene');
    })



    //add the player to the center of scene
    this.player = new Player(this, gconfig.width/2, gconfig.height/2, 'player', {});

  }

  update() {
  }

}