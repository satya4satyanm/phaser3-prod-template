import BootScene from './scenes/BootScene';
import LoaderScene from './scenes/LoaderScene';
import SplashScene from './scenes/SplashScene';
import LevelsScene from './scenes/LevelsScene';
import GameScene from './scenes/GameScene';
import LevelCompleteScene from './scenes/LevelCompleteScene';
import LevelFailScene from './scenes/LevelFailScene';
import PauseScene from './scenes/PuaseScene';

class Game extends Phaser.Game {

  constructor() {
    super({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
          debug: true
        }
      },
      scene: [BootScene, LoaderScene, SplashScene, LevelsScene, GameScene, LevelCompleteScene, LevelFailScene, PauseScene]
    });

    window.addEventListener('resize', this.resizeGame.bind(this));
  }

  resizeGame() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    //Resize game
    // this.resize(width, height);
    //Let all scenes know of our new size
    for(let sceneKey in this.scene.keys) {
      if(this.scene.keys[sceneKey].resize) {
        this.scene.keys[sceneKey].resize(width, height);
      }
    }
  }

}

new Game();
