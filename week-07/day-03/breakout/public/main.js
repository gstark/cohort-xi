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
let ball

function preload() {
  this.load.image('paddle', 'assets/paddle.png')
  this.load.image('ball', 'assets/ball.png')
}

function update() {
  if (cursors.left.isDown) {
    paddle.setVelocityX(-320)
  }

  if (cursors.right.isDown) {
    paddle.setVelocityX(320)
  }
}

function paddleHit() {}

function create() {
  paddle = this.physics.add.sprite(200, 590, 'paddle')
  paddle.body.allowGravity = false
  paddle.body.collideWorldBounds = true
  paddle.body.immovable = true

  ball = this.physics.add.sprite(0, 16, 'ball').setScale(0.1)
  ball.setBounce(1)
  ball.setCollideWorldBounds(true)
  ball.setVelocity(400, 400)
  ball.body.allowGravity = false

  this.physics.add.collider(paddle, ball, paddleHit)

  cursors = this.input.keyboard.createCursorKeys()
}

let game = new Phaser.Game(config)
