import Phaser from "phaser"



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
    scene: [],
}

const game = new Phaser.Game(config);
