class myPlayer {
    constructor({ position, floorCollisionBlocks, platformCollisionBlocks, trapCollisionBlocks,endCollisionBlocks,restart }) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 1
        }
        this.height = 60
        this.width = 40
        this.spriteWidth = 80
        this.spriteHeight = 80
        this.displayWidth = 140
        this.displayHeight = 140
        this.offsetY = 45
        this.offsetX = 30
        this.frameX = 0
        this.frameMax = 0
        this.frameRate=4
        this.image = new Image();
        this.image.src = "assets/images/PlayerSprites/Run-Right.png"
        this.restart = restart
        this.floorCollisionBlocks = floorCollisionBlocks
        this.platformCollisionBlocks = platformCollisionBlocks
        this.trapCollisionBlocks = trapCollisionBlocks
        this.endCollisionBlocks = endCollisionBlocks
        this.levelComplete=false
       
    }
    draw() {
 
        ctx.fillStyle = 'red'
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height) // show hitbox
        this.chageSprites()
        //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        if (animationFrame % this.frameRate == 0) this.frameX++
        if (this.frameX > this.frameMax) {
            this.frameX = 0
        }
        ctx.drawImage(this.image, this.frameX * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.position.x - this.offsetX, this.position.y - this.offsetY, this.displayWidth, this.displayHeight)



    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.checkForHorizontalFloorCollisions()
        this.applyGravity()
        this.checkForVerticalFloorCollisions()
        this.checkForVerticalPlatformCollisions()
        this.checkForTrapCollisions()
        this.checkForEndLevelCollisions()
    }
    applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }


    checkForHorizontalFloorCollisions() {
        for (let i = 0; i < this.floorCollisionBlocks.length; i++) {
            const collissionBlock = this.floorCollisionBlocks[i]

            if (collision({
                object1: this,
                object2: collissionBlock,
            })) {
                if (this.velocity.x > 0) { // moving to the right
                    this.velocity.x = 0
                    this.position.x = collissionBlock.position.x - this.width - 0.01
                    break
                }

                if (this.velocity.x < 0) { // moving to the left
                    this.velocity.x = 0
                    this.position.x = collissionBlock.position.x + collissionBlock.width + 0.01
                    break
                }
            }

        }
    }

    checkForVerticalFloorCollisions() {
        for (let i = 0; i < this.floorCollisionBlocks.length; i++) {
            const collissionBlock = this.floorCollisionBlocks[i]

            if (collision({
                object1: this,
                object2: collissionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    playerCanJump = true
                    this.position.y = collissionBlock.position.y - this.height - 0.01
                    break
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = collissionBlock.position.y + collissionBlock.height + 0.01
                    break
                }
            }

        }
    }

    checkForVerticalPlatformCollisions() {
        for (let i = 0; i < this.platformCollisionBlocks.length; i++) {
            const collissionBlock = this.platformCollisionBlocks[i]

            if (platformCollision({
                object1: this,
                object2: collissionBlock,
            })) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    playerCanJump = true
                    this.velocity.x=0
                    this.position.y = collissionBlock.position.y - this.height - 0.01
                    break
                }
            }

        }
    }

    checkForTrapCollisions() {
        for (let i = 0; i < this.trapCollisionBlocks.length; i++) {
            const collissionBlock = this.trapCollisionBlocks[i]

            if (collision({
                object1: this,
                object2: collissionBlock,
            })) {
                let death=new Audio
                death.src='assets/Sound/damaged.wav'
                death.volume=0.5
                death.play()
                deathCounter++
                dashCount = 2
                this.position.x = restart.position.x
                this.position.y = restart.position.y
            }

        }
    }


    checkForEndLevelCollisions() {
        for (let i = 0; i < this.endCollisionBlocks.length; i++) {
            const collissionBlock = this.endCollisionBlocks[i]

            if (collision({
                object1: this,
                object2: collissionBlock,
            })) {
                this.levelComplete=true
                let thanks=new Audio
                thanks.src='assets/Sound/thanks.wav'
                thanks.volume=0.1
                thanks.play()
            }

        }
    }

    chageSprites() {
        if (false) {

        } else if (this.velocity.x > 0) {// running right
            this.offsetY = 45
            this.offsetX = 30
            this.frameMax = 23
            this.image.src = "assets/images/PlayerSprites/Run-Right.png"
        }
        else if (this.velocity.x < 0) {// running Left
            this.offsetY = 45
            this.offsetX = +65
            this.frameMax = 20
            this.image.src = "assets/images/PlayerSprites/Run-Left.png"
        }

        else if (this.velocity.x == 0 &&!keys.d.pressed&&!keys.a.pressed) {//idle
            this.offsetY = 45
            this.offsetX = 30
            this.frameMax = 17
            this.image.src = "assets/images/PlayerSprites/Idle-Right.png"
        } else if (this.velocity.x < 0) { // running left

        }
    }

}