const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const targetFPS = 60;
const frameTime = 1000 / targetFPS; // Time per frame in milliseconds

canvas.width = 600
canvas.height = 600

let playerIsFalling = false
let playerScore = 0
let playerJumpSpeed = 1
let playerMovementSpeed = 10
let playerBounceLeft = false
let playerBounceRight = false
let rightExelaration = 0
let rightCharge = 0
let leftExelaration = 0
let leftCharge = 0
let jumpCharge = 0
let gravity = 1.6
let animationFrame = 0

let backgRound = new Image();
let bgPossitionY = 3400
backgRound.src = "./assets/images/sprite/BG.png"

class Player {
    constructor() {
        this.position = {
            x: 250,
            y: 450,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.spriteWidth = 250
        this.spriteHeight = 257
        this.width = this.spriteWidth / 5
        this.height = this.spriteHeight / 5
        this.frameX = 0
        this.frameY = 0
        this.image = new Image();
        this.image.src = "./assets/images/sprite/Pleft.png"
    }

    draw() {
        ctx.fillStyle = 'red'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        // ctx.drawImage(this.image, 0,0,0,0,this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.image, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, this.position.x, this.position.y, this.width, this.height + 2)
    }
    update() {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()

        //  player jump charge
        if (this.position.y + this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }



        // player momvement charge left


    }
}

class Platform {
    constructor({ x, y }) {
        this.position = {
            x,
            y,
        }
        this.width = 50,
            this.height = 20
        this.startIsReached = false
        this.speed = 1
        this.image = new Image()
        this.image.src = "./assets/images/sprite/IcePlatform.png"
        this.currentFlow = 0
        this.giveScore = false

    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        //  movement of platforms left to right
        if (this.position.x > 0 && this.startIsReached == false) {
            this.position.x -= this.speed
            this.currentFlow = (this.speed * -1)
            if (this.position.x <= 0) {
                this.startIsReached = true
            }
        } else if (this.position.x + this.width < canvas.width) {
            this.currentFlow = (this.speed)
            this.position.x += this.speed
            if (this.position.x + this.width >= canvas.width) {
                this.startIsReached = false
            }
        }
    }
}

let topIce=new Image()
topIce.src="./assets/images/sprite/Top-Ice.png"


class Particles {
    constructor() {
        this.x = Math.random() * (canvas.width - 0) + 0;
        this.y = Math.random() * (canvas.height - 0) + 0;
        this.snowflakeSize = Math.random() * (18 - 2) + 2;
        this.width = this.snowflakeSize
        this.height = this.snowflakeSize
        this.speed = Math.random() * (2 - 0.5) + 0.5;
        this.image = new Image()
        this.image.src
    }
    draw() {
        ctx.fillStyle = 'red'
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    update() {
        this.x += this.speed
        this.y += this.speed
        if (this.x > canvas.width) {
            this.x = 0
        } else if (this.y > canvas.height) {
            this.y = 0
        }
    }
}
let snowflakeCount = 50
let snowFlakeImages = [
    "./assets/images/sprite/Snoflake-0.png",
    "./assets/images/sprite/Snow.png",
    "./assets/images/sprite/Snow.png",
]
let snowflakeArray = []

for (let i = 0; i < snowflakeCount; i++) {
    let mySnowFlake = new Particles()
    let randomNumberFromArray = Math.floor(Math.random() * (snowFlakeImages.length - 1 - 0) + 0)
    mySnowFlake.image.src = snowFlakeImages[randomNumberFromArray]
    snowflakeArray.push(mySnowFlake)
}
let myParticle = new Particles()



const player = new Player()
let platforms = [
]

let startingPlatform = new Platform({ x: 0, y: 580 })//starting platform
startingPlatform.width = 700
startingPlatform.position.x = -10
startingPlatform.position.y += 1
startingPlatform.giveScore = true
platforms.push(startingPlatform)
let increment = 400
let platformWidth = 300
let maxPlatforSpeed = 2
for (let i = 0; i < 50; i++) {
    if (platformWidth > 28) platformWidth -= 6
    if (maxPlatforSpeed < 7) maxPlatforSpeed += 0.2
    let randomXPossition = Math.random() * ((canvas.width - 200) - 0) + 0;
    let newPlatform = new Platform({ x: randomXPossition, y: increment })
    let randomWidth = Math.floor(Math.random() * (150 - 20) + 20)
    let randomSPeed = Math.random() * (maxPlatforSpeed - 0.2) + 0.2;
    newPlatform.width = platformWidth
    newPlatform.speed = randomSPeed
    platforms.push(newPlatform)
    increment -= 250

}

platforms.sort(function (a, b) {
    return a.width - b.width
})



const keys = {
    ArrowRight: {
        pressed: false,
        parachuteing: false,
    },
    ArrowLeft: {
        pressed: false,
        parachuteing: false,
    },
    ArrowDown: {
        pressed: false,
    }

}
let parachute = new Image()
parachute.src = "./assets/images/sprite/Parachute.png"

let lastFrameTime = 0;

function animate(currentTime) {
    const elapsedTime = currentTime - lastFrameTime;

    // Check if enough time has passed for the next frame
    if (elapsedTime < frameTime) {
      requestAnimationFrame(animate);
      return; // Skip this frame
    }

    lastFrameTime = currentTime;

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgRound, 0, -bgPossitionY)
    // ctx.drawImage(topIce,-20,-40,canvas.width+30,150)
    ctx.fillStyle = 'rgba(105, 105, 105, 0.1)'
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    if (playerIsFalling) ctx.drawImage(parachute, player.position.x - 40, player.position.y - 80)

    player.update()
    ctx.fillStyle = 'DeepSkyBlue'
    ctx.fillRect(player.position.x, player.position.y - 10, jumpCharge * -1.8, 5)
    ctx.fillStyle = 'DeepSkyBlue'
    ctx.fillRect(player.position.x + player.width + 5, player.position.y, 5, rightCharge / 10.7)
    ctx.fillStyle = 'DeepSkyBlue'
    ctx.fillRect(player.position.x - 10, player.position.y, 5, leftCharge * -1 / 10.7)
    ctx.fillStyle = 'white'

    ctx.font = '50px Comic Sans MS';
    ctx.strokeText(playerScore, 20, 50);


    platforms.forEach(platform => {
        platform.draw()
        platform.update()
    })

    animationFrame++

    // move screen up and down



    platforms.forEach(platform => {
        // platform collission 
        if (player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width) {
            playerIsFalling = false
            keys.ArrowRight.parachuteing=false
            keys.ArrowLeft.parachuteing=false

            player.velocity.y = 0
            player.position.x += platform.currentFlow
            if (!platform.giveScore) {
                platform.giveScore = true
                playerScore += 1
            }
            // Jump charge
            if (keys.ArrowDown.pressed && jumpCharge > -27) jumpCharge -= playerJumpSpeed
            // arrow right charge
            if (keys.ArrowRight.pressed && rightCharge < 600)
            {
                player.image.src = "./assets/images/sprite/Pright.png"
                rightCharge += playerMovementSpeed
            } 
                
            // arrow left charge
            if (keys.ArrowLeft.pressed && leftCharge > -600) 
            {
                player.image.src = "./assets/images/sprite/Pleft.png"
                leftCharge -= playerMovementSpeed
            }



        }
    })

    if (player.position.y < 200 && player.velocity.y !== 0) {
        platforms.forEach(platform => {
            platform.position.y += 7
            bgPossitionY -= 0.03
        })

    }
    if (player.position.y >= 530) {
        playerIsFalling = true
    }

    if (playerIsFalling) {
        player.velocity.y = 0
        player.position.y = 480
        platforms.forEach(platform => {
            platform.position.y -= 1
            bgPossitionY += 0.003
        })
    } else {
        gravity = 1.5
    }


    //  right movement charge and bounce of the wall
    if (rightExelaration !== 0) {
        if (player.position.x + player.width < canvas.width && !playerBounceRight) {
            player.velocity.x = playerMovementSpeed
        } else {
            playerBounceRight = true
            player.velocity.x = -playerMovementSpeed
        }
        rightExelaration -= playerMovementSpeed
        if (rightExelaration <= 0) playerBounceRight = false
    }

    //   Left movement  charge and boucne of the wall
    else if (leftExelaration !== 0) {
        if (player.position.x > 0 && !playerBounceLeft) {
            player.velocity.x = -playerMovementSpeed
        } else {
            playerBounceLeft = true
            player.velocity.x = playerMovementSpeed
        }
        leftExelaration += playerMovementSpeed
        if (leftExelaration >= 0) playerBounceLeft = false
    } else {
        player.velocity.x = 0
    }

    //  parachute movement
    if (playerIsFalling && keys.ArrowRight.parachuteing && player.position.x + player.width < canvas.width) {
        player.image.src = "./assets/images/sprite/Pright.png"
        player.position.x += 2
    }
    if (playerIsFalling && keys.ArrowLeft.parachuteing && player.position.x > 0) {
        player.image.src = "./assets/images/sprite/Pleft.png"
        player.position.x -= 2
    }


    snowflakeArray.forEach(snowFlake => {
        snowFlake.draw()
        snowFlake.update()
    })
    requestAnimationFrame(animate)
}
animate()






window.addEventListener('keydown', function (e) {
    "./assets/images/sprite/Platform.png"
    switch (e.key) {
        case 'ArrowRight':
        
            keys.ArrowRight.pressed = true
            if (playerIsFalling) {
                keys.ArrowRight.parachuteing = true
            }
            break;
        case 'ArrowLeft':
            
            keys.ArrowLeft.pressed = true
            if (playerIsFalling) {
                keys.ArrowLeft.parachuteing = true
            }
            break;
        case 'ArrowDown':
            keys.ArrowDown.pressed = true
            break;
    }
})




window.addEventListener('keyup', function (e) {

    switch (e.key) {
        case 'ArrowDown':
            keys.ArrowDown.pressed = false
            player.velocity.y = 0
            player.velocity.y = jumpCharge
            jumpCharge = 0
            break;
        case 'ArrowRight':

            keys.ArrowRight.pressed = false
            keys.ArrowRight.parachuteing = false
            rightExelaration = rightCharge
            leftExelaration = 0
            leftCharge = 0
            rightCharge = 0
            
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            keys.ArrowLeft.parachuteing = false
            leftExelaration = leftCharge
            rightExelaration = 0
            leftCharge = 0
            rightCharge = 0
            break;
    }
})
