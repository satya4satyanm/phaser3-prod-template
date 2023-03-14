import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, options = {}) {
        super(scene);
        this.scene = scene;
        this.x = x;
        this.y = y;

        this.button = this.scene.add.sprite(0, 0, key).setInteractive();
        // this.text = this.scene.add.text(0, 0, 'Sample Text', { fontSize: '32px', fill: '#fff' });
        // Phaser.Display.Align.In.Center(this.text, this.button);

        this.add(this.button);
        // this.add(this.text);

        scene.add.existing(this);

        this.animate();
    }

    animate() {
        var tween = this.scene.tweens.add({
            targets: this.button,
            y: 400,
            ease: 'Power1',
            duration: 3000,
            yoyo: true,
            repeat: -1
        });
    }
}