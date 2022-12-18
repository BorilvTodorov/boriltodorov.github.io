class CollissionBlock {
    constructor({ position, color }) {
        this.position = position
        this.height = 16
        this.width = 16
        this.color = color
    }

    draw() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()
    }
}



class Sprite {
    constructor({ position, imageSrc }) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw() {
        if (!this.image) return
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.draw()
    }
}


class Particles {
    constructor() {
        this.x = Math.random() * (canvas.width - 0) + 0;
        this.y = Math.random() * (canvas.height - 0) + 0;
        this.rainDrop = Math.random() * (5 - 2) + 2;
        this.width = this.rainDrop*0.3
        this.height = this.rainDrop*3
        this.speed = 3
        this.image = new Image()
        this.image.src ='assets/images/raindrop.png'
    }
    draw() {
        this.update()
        ctx.fillStyle = 'red'
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
    update() {
        
        this.x -= this.speed*1.2
        this.y += this.speed*4
        if (this.x < 0) {
            this.x =  canvas.width
        } else if (this.y > canvas.height) {
            this.y = 0
        }
    }
}