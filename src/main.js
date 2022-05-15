import Phaser from "phaser"

import HelloWorldScene from "./scenes/HelloWorldScene";

const config = {
    width: 800,
    height: 600,
    parent: "game",
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 200 },
        },
    },
    scene: [HelloWorldScene],
}

const game = new Phaser.Game(config);
