/** @type{HTMLCanvasElement} */

const canvasOne = document.getElementById('canvas-1');
const ctx1 = canvasOne.getContext('2d');


const canvasTwo = document.getElementById('canvas-2');
const ctx2 = canvasTwo.getContext('2d');


//  Global varaibles
let gameOver=false
let loadNextLevel = true
let currentLevel =0
let animationFrame = 0
let BG = new Image();
BG.src = "./assets/images/BG-1.jpg"
let BG2 = new Image();
BG2.src = "./assets/images/BG-2.jpg"
let floor = new Image();
floor.src = "./assets/images/FloorBG.png"
const gravity = 0.6
const worldSize = 500
const jumpHeight = 13
const playerSpeed = 3
let playerCanJump = true
const jumpCooldown = 800
canvasOne.width = worldSize
canvasOne.height = worldSize
canvasTwo.width = worldSize
canvasTwo.height = worldSize

const keys = {
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
    ArrowDown: {
        pressed: false,
    },
    ArrowUp: {
        pressed: false,
    }

}




//  Classes
class Player {
    constructor(ctx, left) {
        this.velocityY = 0
        this.velocityX = 0
        this.spriteWidth = 31
        this.spriteHeight = 49
        this.frameX = 0
        this.width = this.spriteWidth + 5
        this.height = this.spriteHeight + 1
        this.x = 10
        this.y = 10
        this.ctx = ctx
        this.left = left
        this.color =
            this.interaction = false
        this.interactionColor = 'red'
        this.regularColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        this.collissionWithCube = false
        this.collissionWithDoor = false
        this.image = new Image();
        this.image.src = "./assets/images/LammaRight.png"
    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)


    }

    update() {

        if (animationFrame % 8 == 0) {
            this.frameX++
            if (this.frameX > 7) this.frameX = 0
        }
        //  jump
        this.x += this.velocityX
        this.y += this.velocityY

        if (this.y + this.height + this.velocityY <= worldSize) {
            this.velocityY += gravity
        } else {
            this.velocityY = 0
        }


        if (this.y < 0) {
            this.y = 0
            this.velocityY = 0
        }


        if (this.left) {
            if (keys.ArrowRight.pressed) {

                this.x + this.width < worldSize ? this.velocityX = playerSpeed : this.velocityX = 0
                if (this.velocityY < 0) {
                    this.image.src = "./assets/images/JumpRight.png"
                } else {
                    this.image.src = "./assets/images/LammaRight.png"
                }

            } else if (keys.ArrowLeft.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0
                if (this.velocityY < 0) {
                    this.image.src = "./assets/images/JumpLeft.png"
                } else {
                    this.image.src = "./assets/images/LammaLeft.png"
                }
            } else {
                this.velocityX = 0
            }
            if (this.velocityX == 0) {
                this.image.src = "./assets/images/IdleRight.png"
            }

        }

        if (!this.left) {
            if (keys.ArrowRight.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0
                if (this.velocityY < 0) {
                    this.image.src = "./assets/images/JumpLeft.png"
                } else {
                    this.image.src = "./assets/images/LammaLeft.png"
                }
            } else if (keys.ArrowLeft.pressed) {
                this.x + this.width < worldSize ? this.velocityX = playerSpeed : this.velocityX = 0
                if (this.velocityY < 0) {
                    this.image.src = "./assets/images/JumpRight.png"
                } else {
                    this.image.src = "./assets/images/LammaRight.png"
                }

            } else {
                this.velocityX = 0
            }




            if (this.velocityX == 0) {
                this.image.src = "./assets/images/IdleLeft.png"
            }
        }


        if (this.interaction) {
            this.color = this.interactionColor
        } else {
            this.color = this.regularColor
        }
    }
}

const player1 = new Player(ctx1, true)
const player2 = new Player(ctx2, false)
player2.x = 450
player2.image.src = "./assets/images/LammaLeft.png"






class Block {
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'white'
        this.image = new Image()
        this.image.src = "./assets/images/Tile.png"
    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

class Box {
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.velocityX = 0
        this.velocityY = 0
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'white'
        this.image = new Image()
        this.image.src = "./assets/images/Block.png"
    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    update() {
        if (this.x + this.width >= worldSize) {
            this.velocityX = 0
        } else if (this.x <= 0) this.velocityX = 0
        this.x += this.velocityX
        this.y += this.velocityY

        if (this.y + this.height + this.velocityY <= worldSize) {
            this.velocityY += gravity
        } else {
            this.velocityY = 0
        }


        if (this.y < 0) {
            this.y = 0
            this.velocityY = 0
        }

    }
}





class Door {
    constructor(ctx, x, y) {
        this.x = x
        this.y = y
        this.spriteWidth = 500
        this.spriteHeight = 499
        this.width = this.spriteWidth / 6
        this.height = this.spriteHeight / 6
        this.ctx = ctx
        this.color = 'yellow'
        this.image = new Image()
        this.image.src = "./assets/images/Gate.png"
        this.frameX = 0

    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height)

    }
    update() {
        if (animationFrame % 6 == 0) {
            this.frameX++
            if (this.frameX > 9) this.frameX = 0
        }
    }
}








//  left world
// borders

// new Block(Canvas, X, Y, Width, Height))
let playerDoorLeft;
let leftWorldPlatforms = []
let boxesLeft = []

let playerDoorRight;
let rightWorldPlatforms = []
let boxesRight = []




function animate() {

    //  level change
    nextLevel()
    animationFrame++
    clearCanvas()

    drawBackground(ctx1)
    drawBackgroundTwo(ctx2)


    //  block collission
    leftWorldPlatforms.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player1, block, keys.ArrowRight.pressed, keys.ArrowLeft.pressed)
        boxCollission(block, boxesLeft)

    })
    boxesLeft.forEach(box => {
        box.draw()
        box.update()
        moveBox(player1, box, keys.ArrowRight.pressed, keys.ArrowLeft.pressed)
    })




    rightWorldPlatforms.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player2, block, keys.ArrowLeft.pressed, keys.ArrowRight.pressed)
        boxCollission(block, boxesRight)

    })

    boxesRight.forEach(box => {
        box.draw()
        box.update()
        moveBox(player2, box, keys.ArrowLeft.pressed, keys.ArrowRight.pressed)
    })


    //  win condition



    if (checkForCollission(player1, playerDoorLeft)) {
        player1.collissionWithDoor = true
    } else {
        player1.collissionWithDoor = false
    }

    if (checkForCollission(player2, playerDoorRight)) {
        player2.collissionWithDoor = true
    } else {
        player2.collissionWithDoor = false
    }


    if (player1.collissionWithDoor && player2.collissionWithDoor) {
   
        loadNextLevel = true
    } else {
        player1.collissionWithDoor = false
        player2.collissionWithDoor = false
    }


    playerDoorLeft.draw()
    playerDoorLeft.update()
    playerDoorRight.draw()
    playerDoorRight.update()
    player1.draw()
    player1.update()
    player2.draw()
    player2.update()


    if(gameOver){
        gameisOver()
        return
    }

    requestAnimationFrame(animate)

}
animate()





window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = true
            break;

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = true
            break;

        case 'ArrowUp':
            if (playerCanJump) {
                playerCanJump = false
                player2.interaction = true
                player1.velocityY = 0
                if (!player2.collissionWithCube) {
                    player2.y += 2
                    if (player2.y + player2.height > worldSize) player2.y = worldSize - player2.height
                }
                player1.velocityY -= jumpHeight
                keys.ArrowUp.pressed = true
                setTimeout(function () {
                    playerCanJump = true
                }, jumpCooldown)
            }
            break;

        case 'ArrowDown':
            if (playerCanJump) {
                playerCanJump = false
                player1.interaction = true
                if (!player1.collissionWithCube) {
                    player1.y += 2
                    if (player1.y + player1.height > worldSize) player1.y = worldSize - player1.height
                }
                player2.velocityY = 0
                player2.velocityY -= jumpHeight
                keys.ArrowDown.pressed = true

                setTimeout(function () {
                    playerCanJump = true
                }, jumpCooldown)
            }
            break;
    }
})




window.addEventListener('keyup', function (e) {


    switch (e.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break;

        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break;

        case 'ArrowUp':
            if (player2.y > worldSize) player2.y = 400
            player2.interaction = false
            keys.ArrowUp.pressed = false
            break;

        case 'ArrowDown':
            player1.interaction = false
            keys.ArrowDown.pressed = false
            break;
    }
})



// side Functions



function clearCanvas() {
    ctx1.clearRect(0, 0, worldSize, worldSize)
    ctx2.clearRect(0, 0, worldSize, worldSize)
}

function collission(player, block, keysLeft, keysRight) {
    // collission top
    if (player.y + player.height <= block.y &&
        player.y + player.height + player.velocityY >= block.y &&
        player.x + player.width + player.velocityX >= block.x &&
        player.x <= block.x + block.width) {
        player.velocityY = 0
        if (block.height > 30) {
            player.collissionWithCube = true

        } else { player.collissionWithCube = false }
    }

    // leftWorldPlatforms collission left
    if (keysLeft &&
        player.x + player.width + player.velocityX >= block.x &&
        player.y + player.height >= block.y &&
        player.y <= block.y + block.height &&
        player.x + player.width <= block.x + block.width
    ) {
        player.velocityX = 0
    }
    // leftWorldPlatforms collission right
    if (keysRight &&
        player.x + player.velocityX <= block.x + block.width &&
        player.y + player.height >= block.y &&
        player.y <= block.y + block.height &&
        player.x >= block.x
    ) {
        player.velocityX = 0

    }
    // leftWorldPlatforms collission bot
    if (
        player.x + player.width + player.velocityX >= block.x &&
        player.x <= block.x + block.width &&
        player.y + player.velocityY <= block.y + block.height &&
        player.y + player.height + player.velocityY >= block.y &&
        block.height > 30
    ) {
        player.y = block.y + block.height
        player.velocityY = 0

    }

}



function checkForCollission(rect1, rect2) {
    // ctx.strokeRect(rect1.x +(rect1.width*0.3), rect1.y+(rect1.height*0.3), rect1.width-(rect1.width*0.5), rect1.height-(rect1.height*0.5))
    if ((rect1.x + rect1.width) > rect2.x + rect2.width ||
        (rect1.x + rect1.width) + (rect1.width - rect1.width) < rect2.x ||
        (rect1.y + rect1.height) > rect2.y + rect2.height ||
        (rect1.y + rect1.height) + (rect1.height - rect1.height) < rect2.y) {
    } else {
        return true
    }
}

function drawBackground(ctx) {
    ctx.drawImage(BG, 0, 0, worldSize, worldSize)
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.fillRect(0, 0, worldSize, worldSize)
}
function drawBackgroundTwo(ctx) {
    ctx.drawImage(BG2, 0, 0, worldSize, worldSize)
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
    ctx.fillRect(0, 0, worldSize, worldSize)
}





function moveBox(player, box, keysLeft, keysRight) {
    // collission top
    box.velocityX = 0
    if (player.y + player.height <= box.y &&
        player.y + player.height + player.velocityY >= box.y &&
        player.x + player.width + player.velocityX >= box.x &&
        player.x <= box.x + box.width) {

        player.velocityY = 0
        player.collissionWithCube = true
        if (box.height > 30) {
        } else { player.collissionWithCube = false }
    }

    if (keysLeft &&
        player.x + player.width >= box.x &&
        player.y + player.height >= box.y &&
        player.y <= box.y + box.height &&
        player.x + player.width <= box.x + box.width
    ) {

        if (player.x + player.width > box.x) {
            player.x = box.x - player.width
        }
        
        if(box.width>80&&box.width<110){
            box.velocityX = player.velocityX / 4
        }else if (box.width>110){
            box.velocityX = player.velocityX / 10

        }else{ box.velocityX = player.velocityX/2}
    }
    if (keysRight &&
        player.x + player.velocityX <= box.x + box.width &&
        player.y + player.height >= box.y &&
        player.y <= box.y + box.height &&
        player.x >= box.x
    ) {
        if (player.x < box.x + box.width) {
            player.x = box.x + box.width
        }
        if(box.width>80&&box.width<110){
            box.velocityX = player.velocityX / 4
        }else if (box.width>110){
            box.velocityX = player.velocityX / 10

        }else{ box.velocityX = player.velocityX/2}

    }



}



function boxCollission(platform, array) {
    array.forEach(box => {
        if (box.y + box.height <= platform.y &&
            box.y + box.height + box.velocityY >= platform.y &&
            box.x + box.width + box.velocityX >= platform.x &&
            box.x <= platform.x + platform.width) {
            box.velocityY = 0
        }
    })
}





function resetLevel() {
    player2.x = 450
    player2.y = 10
    player1.x = 10
    player1.y = 10
    leftWorldPlatforms = []
    boxesLeft = []
    rightWorldPlatforms = []
    boxesRight = []
    currentLevel++
    loadNextLevel = false
}

function nextLevel() {
    if (loadNextLevel) {
        if (currentLevel == 0) {
            welcomeLevel()
            
        } else if (currentLevel == 1) {
            levelOne()
        } else if (currentLevel == 2) {
            levelTwo()
        } else if (currentLevel == 3) {
            levelTree()
        } else if (currentLevel == 4) {
            levelFour()
        } else {
            gameOver=true    
            return
        }
    }
}


function welcomeLevel() {
    resetLevel()
    
    
    /////////////////////////////////////// Level One Left /////////////////////////////////////
    playerDoorLeft = new Door(ctx1, 415, 420) //Left Door
    leftWorldPlatforms.push(new Block(ctx1, 0, 240, 250, 20))// Right plank 1
    leftWorldPlatforms.push(new Block(ctx1, 250, 340, 250, 20))// Right plank 2

    /////////////////////////////////////// Level One Right /////////////////////////////////////

    playerDoorRight = new Door(ctx2, 0, 420) //Right Door
    rightWorldPlatforms.push(new Block(ctx2, 250, 240, 250, 20))// Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 0, 340, 250, 20))// Left plank 2


}


function levelOne() {
    resetLevel()
    /////////////////////////////////////// Level One Left /////////////////////////////////////
    playerDoorLeft = new Door(ctx1, 0, 360) //Left Door
    boxesLeft.push(new Box(ctx1, 110, 240, 60, 60)) //Left Box-1
    leftWorldPlatforms.push(new Block(ctx1, 0, 240, 150, 20))// Right plank 1
    leftWorldPlatforms.push(new Block(ctx1, 200, 320, 300, 20)) // Right plank 2

    /////////////////////////////////////// Level One Right /////////////////////////////////////

    playerDoorRight = new Door(ctx2, 415, 360) //Right Door
    boxesRight.push(new Box(ctx2, 320, 240, 60, 60)) // Right Box-1
    rightWorldPlatforms.push(new Block(ctx2, 350, 240, 150, 20))// Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 0, 320, 300, 20)) // Left plank 2
}


function levelTwo() {
    resetLevel()
    /////////////////////////////////////// Level One Left /////////////////////////////////////
    playerDoorLeft = new Door(ctx1, 420, 240) //Left Door
    boxesLeft.push(new Box(ctx1, 140, 0, 60, 60)) //Left Box-1
    leftWorldPlatforms.push(new Block(ctx1, 0, 120, 220, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 300, 180, 60, 20)) // Left plank 2
    leftWorldPlatforms.push(new Block(ctx1, 120, 290, 180, 20)) // Left plank 3
    leftWorldPlatforms.push(new Block(ctx1, 440, 210, 60, 20)) // Left plank 4
    leftWorldPlatforms.push(new Block(ctx1, 420, 320, 80, 20)) // Left plank 5
    leftWorldPlatforms.push(new Block(ctx1, 0, 420, 180, 20)) // Left plank 6



    /////////////////////////////////////// Level One Right /////////////////////////////////////

    playerDoorRight = new Door(ctx2, 0, 240) //Right Door
    boxesRight.push(new Box(ctx2, 300, 0, 60, 60)) // Right Box-1
    rightWorldPlatforms.push(new Block(ctx2, 280, 120, 220, 20)) // Right plank 1
    rightWorldPlatforms.push(new Block(ctx2, 130, 180, 60, 20))  // Right plank 2
    rightWorldPlatforms.push(new Block(ctx2, 200, 280, 150, 20)) // Right plank 3
    rightWorldPlatforms.push(new Block(ctx2, 0, 210, 60, 20)) // Right plank 4
    rightWorldPlatforms.push(new Block(ctx2, 0, 320, 80, 20)) // Right plank 5
    rightWorldPlatforms.push(new Block(ctx2, 320, 420, 180, 20))  // Right plank 6
}

function levelTree() {
    resetLevel()
    /////////////////////////////////////// Level One Left /////////////////////////////////////
    player1.y = 400
    playerDoorLeft = new Door(ctx1, 420, 40) //Left Door
    boxesLeft.push(new Box(ctx1, 140, 0, 60, 60)) //Left Box-1
    leftWorldPlatforms.push(new Block(ctx1, 340, 120, 160, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 0, 120, 160, 20)) // Left plank 2
    leftWorldPlatforms.push(new Block(ctx1, 0, 240, 100, 20)) // Left plank 3
    leftWorldPlatforms.push(new Block(ctx1, 0, 380, 150, 20)) // Left plank 5
    leftWorldPlatforms.push(new Block(ctx1, 440, 210, 60, 20)) // Left plank 4
    leftWorldPlatforms.push(new Block(ctx1, 420, 320, 80, 20)) // Left plank 6




    /////////////////////////////////////// Level One Right /////////////////////////////////////

    playerDoorRight = new Door(ctx2, 0, 420) //Right Door
    boxesRight.push(new Box(ctx2, 300, 0, 60, 60)) // Right Box-1
    rightWorldPlatforms.push(new Block(ctx2, 280, 120, 220, 20)) // Right plank 1
    rightWorldPlatforms.push(new Block(ctx2, 130, 180, 60, 20))  // Right plank 2
    rightWorldPlatforms.push(new Block(ctx2, 200, 280, 150, 20)) // Right plank 3
    rightWorldPlatforms.push(new Block(ctx2, 0, 210, 60, 20)) // Right plank 4
    rightWorldPlatforms.push(new Block(ctx2, 0, 320, 80, 20)) // Right plank 5
    rightWorldPlatforms.push(new Block(ctx2, 320, 420, 180, 20))  // Right plank 6
}

function levelFour() {
    resetLevel()
    /////////////////////////////////////// Level One Left /////////////////////////////////////
    player1.y = 400
    player2.y = 400
    playerDoorLeft = new Door(ctx1, 0, 8) //Left Door
    boxesLeft.push(new Box(ctx1, 270, 0, 120, 120)) //Left Box-1
    boxesLeft.push(new Box(ctx1, 90, 0, 81, 81)) //Left Box-1
    boxesLeft.push(new Box(ctx1, 225, 300, 60, 60)) //Left Box-1
    leftWorldPlatforms.push(new Block(ctx1, 0, 85, 130, 20)) // Left plank 1
    // leftWorldPlatforms.push(new Block(ctx1, 300, 280, 200, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 0, 300, 170, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 100, 200, 150, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 250, 200, 150, 20)) // Left plank 1
    leftWorldPlatforms.push(new Block(ctx1, 340, 300, 170, 20)) // Left plank 1


    /////////////////////////////////////// Level One Right /////////////////////////////////////

    playerDoorRight = new Door(ctx2, 415, 8) //Right Door
    boxesRight.push(new Box(ctx2, 110, 0, 120, 120)) // Right Box-1
    boxesRight.push(new Box(ctx2, 310, 0, 81, 81)) // Right Box-1
    boxesRight.push(new Box(ctx2, 225, 300, 60, 60)) // Right Box-1
    rightWorldPlatforms.push(new Block(ctx2, 370, 85, 130, 20)) // Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 0, 300, 170, 20)) // Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 100, 200, 150, 20)) // Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 250, 200, 150, 20)) // Left plank 1
    rightWorldPlatforms.push(new Block(ctx2, 340, 300, 170, 20)) // Left plank 1

}
function levelFive() {
    playerDoorLeft = new Door(ctx1, 0, 200) //Left Door
    playerDoorRight = new Door(ctx2, 415, 200) //Right Door
    resetLevel()
    /////////////////////////////////////// Level One Left /////////////////////////////////////

}

function gameisOver(){
    ctx1.font = '50px serif';
    ctx2.font = '50px serif';
    ctx1.clearRect(0, 0, worldSize, worldSize)
    ctx2.clearRect(0, 0, worldSize, worldSize)
    ctx1.fillStyle='pink'
    ctx1.fillText('You', 400, 250)
    ctx2.fillStyle='pink'
    ctx2.fillText('Win', 10, 250)
    canvasOne.style.border='none'
    canvasTwo.style.border='none'
}



