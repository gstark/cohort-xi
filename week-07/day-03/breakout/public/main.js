let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let cursors
let paddle

function preload() {
  this.load.image('paddle', 'assets/paddle.png')
}

function update() {
  if (cursors.left.isDown) {
    paddle.setVelocityX(-160)
  }

  if (cursors.right.isDown) {
    paddle.setVelocityX(160)
  }
}

function create() {
  paddle = this.physics.add.sprite(200, 550, 'paddle')
  paddle.body.allowGravity = false
  paddle.body.collideWorldBounds = true

  cursors = this.input.keyboard.createCursorKeys()
}

let game = new Phaser.Game(config)
