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

const initialBallPosition = {
  x: 0,
  y: 300,
  velocityX: 600,
  velocityY: 600
}

const paddleVelocity = 600

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

function resetGame() {
  bricks.children.entries.forEach(brick => {
    brick.enableBody(false, null, null, true, true)
  })

  ball.y = initialBallPosition.y
  ball.x = initialBallPosition.x
  ball.setVelocity(initialBallPosition.velocityX, initialBallPosition.velocityY)
  ball.enableBody(false, null, null, true, true)
}

function update() {
  if (ball.y > this.physics.world.bounds.height + ball.body.height) {
    // Disable the ball and hide it at the top of the game
    ball.disableBody(true, true)
    ball.x = 0
    ball.y = 0
    setTimeout(resetGame, 200)
  }

  if (cursors.left.isDown) {
    paddle.setVelocityX(-paddleVelocity)
  }

  if (cursors.right.isDown) {
    paddle.setVelocityX(paddleVelocity)
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
  //  this.physics.arcade.checkCollision.down = false

  this.physics.world.checkCollision.down = false
  console.log(this.physics.world)
  particles = this.add.particles('red')
  bricks = this.physics.add.staticGroup()

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      let brick = bricks.create(70 + col * 150, 25 + row * 50, 'brick')
    }
  }

  paddle = this.physics.add.sprite(200, 550, 'paddle')
  paddle.body.allowGravity = false
  paddle.body.collideWorldBounds = true
  paddle.body.immovable = true

  ball = this.physics.add
    .sprite(initialBallPosition.x, initialBallPosition.y, 'ball')
    .setScale(0.1)
  ball.setBounce(1)
  ball.setCollideWorldBounds(true)
  ball.setVelocity(initialBallPosition.velocityX, initialBallPosition.velocityY)
  ball.body.allowGravity = false

  this.physics.add.collider(paddle, ball, paddleHit)
  this.physics.add.collider(bricks, ball, brickHit, null, this)

  cursors = this.input.keyboard.createCursorKeys()
}

let game = new Phaser.Game(config)
