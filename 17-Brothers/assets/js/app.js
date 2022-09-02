/** @type{HTMLCanvasElement} */

const canvasOne = document.getElementById('canvas-1');
const ctx1 = canvasOne.getContext('2d');


const canvasTwo = document.getElementById('canvas-2');
const ctx2 = canvasTwo.getContext('2d');

//  Global varaibles

let animationFrame=0
let BG=new Image();
BG.src="./assets/images/BG-1.jpg"
let BG2=new Image();
BG2.src="./assets/images/BG-2.jpg"
let floor=new Image();
floor.src="./assets/images/FloorBG.png"
const gravity = 1.1
const worldSize = 500
const jumpHeight = 18
const playerSpeed = 4
let playerCanJump = true
const jumpCooldown = 600
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
        this.width = this.spriteWidth+5
        this.height =  this.spriteHeight+1
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
        this.ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height)
    

    }

    update() {

        if(animationFrame%8==0){
            this.frameX++
            if(this.frameX>7) this.frameX=0
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
                    this.image.src = "./assets/images/LammaRight.png"

            } else if (keys.ArrowLeft.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0
                this.image.src = "./assets/images/LammaLeft.png"
            } else {
                this.velocityX = 0
            }
        }


        if (!this.left) {
            if (keys.ArrowRight.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0
                this.image.src = "./assets/images/LammaLeft.png"
            } else if (keys.ArrowLeft.pressed) {
                this.x + this.width < worldSize ? this.velocityX = playerSpeed : this.velocityX = 0
                this.image.src = "./assets/images/LammaRight.png"
            } else {
                this.velocityX = 0
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
player2.x=450






class Block {
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'white'
        this.image=new Image()
        this.image.src="./assets/images/Tile.png"
    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
    }
}

class Box {
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.velocityX=0
        this.velocityY=0
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'white'
        this.image=new Image()
        this.image.src="./assets/images/Block.png"
    }

    draw() {
        this.ctx.fillStyle = this.color
        // this.ctx.fillRect(this.x, this.y, this.width, this.height)
        this.ctx.drawImage(this.image,this.x, this.y, this.width, this.height)
    }
    update(){
        if(this.x+this.width >=worldSize){
            this.velocityX=0
        }else if(this.x<=0)this.velocityX=0
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
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'yellow'
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
        
    }
}



let playerDoorOne = new Door(ctx1, 450, 280, 20, 20)
let playerDoorTwo = new Door(ctx2, 30, 280, 20, 20)





//  left world
// borders

// new Block(Canvas, X, Y, Width, Height))
let leftWorldPlatforms = []
let boxesLeft = []

leftWorldPlatforms.push(new Block(ctx1, 0, 120, 220, 20))
leftWorldPlatforms.push(new Block(ctx1, 300, 180, 60, 20))
leftWorldPlatforms.push(new Block(ctx1, 120, 290, 180, 20))

leftWorldPlatforms.push(new Block(ctx1, 420, 210, 80, 20))
leftWorldPlatforms.push(new Block(ctx1, 420, 320, 80, 20))

leftWorldPlatforms.push(new Block(ctx1, 0, 420, 180, 20))




let boxLeftOne=new Box(ctx1, 140, 0, 60, 60)
boxesLeft.push(boxLeftOne)



// right World
// borders
let rightWorldPlatforms = []
let boxesRight = []

rightWorldPlatforms.push(new Block(ctx2, 280, 120, 220, 20))
rightWorldPlatforms.push(new Block(ctx2, 140, 180, 60, 20))
rightWorldPlatforms.push(new Block(ctx2, 200, 280, 150, 20))

rightWorldPlatforms.push(new Block(ctx2, 0, 210, 80, 20))
rightWorldPlatforms.push(new Block(ctx2, 0, 320, 80, 20))

rightWorldPlatforms.push(new Block(ctx2, 320, 420, 180, 20))

let boxRightOne=new Box(ctx2, 300, 0, 60, 60)
boxesRight.push(boxRightOne)



function animate() {
    animationFrame++
    clearCanvas()

    drawBackground(ctx1)
    drawBackgroundTwo(ctx2)
    
   
    //  block collission
    leftWorldPlatforms.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player1, block, keys.ArrowRight.pressed, keys.ArrowLeft.pressed)
        boxCollission(block,boxesLeft)
        
    })
    boxesLeft.forEach(box=>{
        box.draw()
        box.update()
        moveBox(player1, box, keys.ArrowRight.pressed, keys.ArrowLeft.pressed)
    })




    rightWorldPlatforms.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player2, block, keys.ArrowLeft.pressed, keys.ArrowRight.pressed)
        boxCollission(block,boxesRight)
        
    })

    boxesRight.forEach(box=>{
        box.draw()
        box.update()
        moveBox(player2, box, keys.ArrowLeft.pressed, keys.ArrowRight.pressed)
    })
    

    //  win condition
    playerDoorOne.draw()
    playerDoorTwo.draw()

    
    checkForCollission(playerDoorOne, player1) ? player1.collissionWithDoor = true : player1.collissionWithDoor = false
    checkForCollission(playerDoorTwo, player2) ? player2.collissionWithDoor = true : player2.collissionWithDoor = false
    if (player1.collissionWithDoor && player2.collissionWithDoor) {
        ctx1.font = '50px serif';
        ctx2.font = '50px serif';
        ctx1.clearRect(0, 0, worldSize, worldSize)
        ctx2.clearRect(0, 0, worldSize, worldSize)
        ctx1.fillText('You', 400, 250)
        ctx2.fillText('Win', 10, 250)
        return
    } else {
        player1.collissionWithDoor = false
        player2.collissionWithDoor = false
    }


    player1.draw()
    player1.update()
    player2.draw()
    player2.update()

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

function drawBackground(ctx){
    ctx.drawImage(BG,0,0,worldSize,worldSize)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.fillRect(0, 0, worldSize, worldSize)
}
function drawBackgroundTwo(ctx){
    ctx.drawImage(BG2,0,0,worldSize,worldSize)
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'
    // ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
    ctx.fillRect(0, 0, worldSize, worldSize)
}





function moveBox(player, box, keysLeft, keysRight) {
    // collission top
    box.velocityX=0
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
    
        if(player.x+player.width>box.x){
            player.x =box.x-player.width
        }
        box.velocityX=player.velocityX
    }
    if (keysRight &&
        player.x + player.velocityX <= box.x + box.width &&
        player.y + player.height >= box.y &&
        player.y <= box.y + box.height &&
        player.x >= box.x
    ) {
        if(player.x<box.x+box.width){
            player.x =box.x+box.width
        }
        box.velocityX=player.velocityX

    }
   
    

}



function boxCollission(platform,array) {
    array.forEach(box=>{
    if (box.y + box.height <= platform.y &&
        box.y + box.height + box.velocityY >= platform.y &&
        box.x + box.width + box.velocityX >= platform.x &&
        box.x <= platform.x + platform.width) {
        box.velocityY = 0
    }
})
}