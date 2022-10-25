class Sprite {
    constructor({
        possition,
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 },
    }) {
        this.possition = possition
        this.width = 50
        this.height = 150
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 3
        this.offset = offset
    }

    draw() {
        c.drawImage(
            this.image,
            this.framesCurrent * (this.image.width / this.framesMax),
            0,
            this.image.width / this.framesMax,
            this.image.height,
            this.possition.x - this.offset.x,
            this.possition.y - this.offset.y,
            (this.image.width / this.framesMax) * this.scale,
            this.image.height * this.scale
        )
    }

    animateFrames() {
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.framesMax - 1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }

    update() {
        this.draw()
        this.animateFrames()
    }
}

class Fighter extends Sprite {
    constructor({
        possition,
        velocity,
        color = 'red',
        imageSrc,
        scale = 1,
        framesMax = 1,
        offset = { x: 0, y: 0 },
        sprites,
        attackBox = { offset: {}, width: undefined, height: undefined, attackDelay: undefined }
    }) {
        super({
            possition,
            imageSrc,
            scale,
            framesMax,
            offset,
        })

        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastKey
        this.attackBox = {
            possition: {
                x: this.possition.x,
                y: this.possition.y
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height,
            attackDelay: attackBox.attackDelay
        }
        this.color = color
        this.isAttacking
        this.health = 100
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = 5
        this.sprites = sprites
        this.dead = false
        for (let sprite in this.sprites) {
            sprites[sprite].image = new Image()
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
    }

    update() {
        this.draw()
        if (!this.dead) this.animateFrames()

        // attack boxes
        this.attackBox.possition.x = this.possition.x + this.attackBox.offset.x
        this.attackBox.possition.y = this.possition.y + this.attackBox.offset.y


        //  Hit boxes
        // c.fillRect(this.attackBox.possition.x,
        //     this.attackBox.possition.y,
        //     this.attackBox.width,
        //     this.attackBox.height)

        this.possition.x += this.velocity.x
        this.possition.y += this.velocity.y

        // gravity function
        if (this.possition.y + this.height + this.velocity.y >= canvas.height - 96) {
            this.velocity.y = 0
            this.possition.y = 330
        } else this.velocity.y += gravity

    }
    attack() {
        this.switchSprite('attack1')
        this.isAttacking = true

    }

    takeHit(damage) {
        let takeLife = new Audio('./img/sounds/takeLife.wav');
        takeLife.volume=0.1
        takeLife.play()
        this.health -= damage
        if (!this.isAttacking) {
            // this.switchSprite('takeHit')
        }
    }

    switchSprite(sprite) {
        //  if dead
        if (this.image === this.sprites.death.image) {
            if (this.framesCurrent === this.sprites.death.framesMax - 1)
                this.dead = true
            return
        }

        // overriding all other animations with the attack aniumation
        if (this.image === this.sprites.attack1.image &&
            this.framesCurrent < this.sprites.attack1.framesMax - 1) return

        // override when fighter gets hit
        if (this.image === this.sprites.takeHit.image &&
            this.framesCurrent < this.sprites.takeHit.framesMax - 1) return


        switch (sprite) {
            case 'idle':
                if (this.image !== this.sprites.idle.image) {
                    this.image = this.sprites.idle.image
                    this.framesMax = this.sprites.idle.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'run':
                if (this.image !== this.sprites.run.image) {
                    this.image = this.sprites.run.image
                    this.framesMax = this.sprites.run.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'jump':
                if (this.image !== this.sprites.jump.image) {
                    this.image = this.sprites.jump.image
                    this.framesMax = this.sprites.jump.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'fall':
                if (this.image !== this.sprites.fall.image) {
                    this.image = this.sprites.fall.image
                    this.framesMax = this.sprites.fall.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'attack1':
                if (this.image !== this.sprites.attack1.image) {
                    this.image = this.sprites.attack1.image
                    this.framesMax = this.sprites.attack1.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'takeHit':
                if (this.image !== this.sprites.takeHit.image) {
                    this.image = this.sprites.takeHit.image
                    this.framesMax = this.sprites.takeHit.framesMax
                    this.framesCurrent = 0
                }
                break;
            case 'death':
                if (this.image !== this.sprites.death.image) {
                    this.image = this.sprites.death.image
                    this.framesMax = this.sprites.death.framesMax
                    this.framesCurrent = 0
                    let deadSound = new Audio('./img/sounds/death.wav');
                    deadSound.volume=0.1
                    deadSound.play()
                }
                break;
            case 'defend':
                if (this.image !== this.sprites.defend.image) {
                    this.image = this.sprites.defend.image
                    this.framesMax = this.sprites.defend.framesMax
                    this.framesCurrent = 0
                }
                break;
        }

    }
}