/** @type{HTMLCanvasElement} */

const canvasOne = document.getElementById('canvas-1');
const ctx1 = canvasOne.getContext('2d');


const canvasTwo = document.getElementById('canvas-2');
const ctx2 = canvasTwo.getContext('2d');

//  Global varaibles


const gravity = 1.5
const worldSize = 500
const jumpHeight = 22
const playerSpeed = 5
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
        this.width = 50
        this.height = 50
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
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    update() {
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

            } else if (keys.ArrowLeft.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0

            } else {
                this.velocityX = 0
            }
        }


        if (!this.left) {
            if (keys.ArrowRight.pressed) {
                this.x > 0 ? this.velocityX = -playerSpeed : this.velocityX = 0
            } else if (keys.ArrowLeft.pressed) {
                this.x + this.width < worldSize ? this.velocityX = playerSpeed : this.velocityX = 0
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






class Block {
    constructor(ctx, x, y, w, h) {
        this.x = x
        this.y = y
        this.width = w
        this.height = h
        this.ctx = ctx
        this.color = 'white'
    }

    draw() {
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
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



let playerDoorOne=new Door(ctx1, 430, 250, 20, 20)
let playerDoorTwo=new Door(ctx2, 30, 250, 20, 20)





//  left world
// borders

// new Block(Canvas, X, Y, Width, Height))
let leftWorld = []

leftWorld.push(new Block(ctx1, 0, 70, 300, 5))
leftWorld.push(new Block(ctx1, 200, 150, 300, 5))

leftWorld.push(new Block(ctx1, 400, 210, 100, 5))
leftWorld.push(new Block(ctx1, 400, 320, 100, 5))


leftWorld.push(new Block(ctx1, 130, 320, 80, 100))
leftWorld.push(new Block(ctx1, 0, 420, 300, 5))







// right World
// borders
let rightWorld = []

rightWorld.push(new Block(ctx2, 200, 70, 300, 5))
rightWorld.push(new Block(ctx2, 0, 150, 300, 5))

rightWorld.push(new Block(ctx2, 0, 210, 100, 5))
rightWorld.push(new Block(ctx2, 0, 320, 100, 5))


rightWorld.push(new Block(ctx2, 250, 320, 80, 100))
rightWorld.push(new Block(ctx2, 200, 420, 300, 5))




function animate() {
    clearCanvas()
    player1.draw()
    player1.update()
    player2.draw()
    player2.update()

    //  block collission
    leftWorld.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player1, block, keys.ArrowRight.pressed, keys.ArrowLeft.pressed)
    })

    rightWorld.forEach(block => {
        // collission(player,block,keys,left,right)
        block.draw()
        collission(player2, block, keys.ArrowLeft.pressed, keys.ArrowRight.pressed)
    })


    //  win condition
    playerDoorOne.draw()
    playerDoorTwo.draw()

        checkForCollission(playerDoorOne, player1) ? player1.collissionWithDoor = true  : player1.collissionWithDoor = false
        checkForCollission(playerDoorTwo, player2) ? player2.collissionWithDoor = true  : player2.collissionWithDoor = false
        if(player1.collissionWithDoor&&player2.collissionWithDoor){
            ctx1.font = '50px serif';
            ctx2.font = '50px serif';
            ctx1.clearRect(0, 0, worldSize, worldSize)
            ctx2.clearRect(0, 0, worldSize, worldSize)
            ctx1.fillText('You',400,250)
            ctx2.fillText('Win',10,250)
            return   
        }else{
            player1.collissionWithDoor = false 
            player2.collissionWithDoor = false 
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

    // leftWorld collission left
    if (keysLeft &&
        player.x + player.width + player.velocityX >= block.x &&
        player.y + player.height >= block.y &&
        player.y <= block.y + block.height &&
        player.x + player.width <= block.x + block.width
    ) {
        player.velocityX = 0
    }
    // leftWorld collission right
    if (keysRight &&
        player.x + player.velocityX <= block.x + block.width &&
        player.y + player.height >= block.y &&
        player.y <= block.y + block.height &&
        player.x >= block.x
    ) {
        player.velocityX = 0

    }
    // leftWorld collission bot
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