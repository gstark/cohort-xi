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
let bricks
let particles

function preload() {
  this.load.image('paddle', 'assets/paddle.png')
  this.load.image('brick', 'assets/brick.png')
  this.load.image('ball', 'assets/ball.png')
  this.load.image('red', 'assets/red.png')
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

function brickHit(ball, brick) {
  let emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD'
  })

  emitter.startFollow(brick)

  setTimeout(() => {
    emitter.active = false
    emitter.visible = false
  }, 500)

  brick.disableBody(true, true)
}

function create() {
  particles = this.add.particles('red')
  bricks = this.physics.add.staticGroup()

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      let brick = bricks.create(70 + col * 150, 25 + row * 50, 'brick')
    }
  }

  paddle = this.physics.add.sprite(200, 590, 'paddle')
  paddle.body.allowGravity = false
  paddle.body.collideWorldBounds = true
  paddle.body.immovable = true

  ball = this.physics.add.sprite(0, 300, 'ball').setScale(0.1)
  ball.setBounce(1)
  ball.setCollideWorldBounds(true)
  ball.setVelocity(400, 400)
  ball.body.allowGravity = false

  this.physics.add.collider(paddle, ball, paddleHit)
  this.physics.add.collider(bricks, ball, brickHit, null, this)

  cursors = this.input.keyboard.createCursorKeys()
}

let game = new Phaser.Game(config)
