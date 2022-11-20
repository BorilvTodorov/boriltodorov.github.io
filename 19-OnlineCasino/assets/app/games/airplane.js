import { updateMoney } from '../utils.js'

export function airplaneTrigger(e) {
    const currentBet = document.querySelector('.currentBet')
    const balance = document.getElementById('balance')
    const currentPayout = document.querySelector('.currentPayout')
    const stopButton = document.querySelector('.airplaneStop')
    let winnings = 0
    const odds = {
        '1': randomNumber(0.3, 1.8),
        '2': randomNumber(0.4, 1.8),
        '3': randomNumber(0.4, 1.8),
        '4': randomNumber(0.7, 1.8),
        '5': randomNumber(0.8, 1.8),
        '6': randomNumber(0.8, 1.8),
        '7': randomNumber(0.8, 1.8),
        '8': randomNumber(0.8, 1.8),
        '9': randomNumber(0.8, 2),
        '10': randomNumber(0.8, 3),
        '11': randomNumber(1, 3),
        '12': randomNumber(1, 4),
        '13': randomNumber(1, 6),
        '14': randomNumber(1, 6),
        '15': randomNumber(3, 6),
    }

    let playerBet = 0
    if (currentBet.value == '' || isNaN(currentBet.value)) {
        alert('Please Insert valid bet')
        return
    }

    if (!isNaN(currentBet.value)) {
        if (Number(currentBet.value) > Number(balance.textContent)) {
            alert('You don\'t have enough funds')
            return
        }
        playerBet = Number(currentBet.value)
        balance.textContent = (Number(balance.textContent) - Number(playerBet)).toFixed(2)
    }


    e.target.style.display = 'none';
    stopButton.style.display = 'flex';

    const canvas = document.querySelector('.airplaneCanvas')
    canvas.style.display = "flex"
    const ctx = canvas.getContext('2d');
    canvas.width = 600
    canvas.height = 600

    const backgroundImg = new Image()
    backgroundImg.src = "./assets/images/cosmosBG.jpg"
    let backgroundX = 0

    class Airplane {
        constructor(x, y) {
            this.x = x
            this.y = y
            this.w = 130
            this.h = 150
            this.velocity = 0.1
            this.hasCrashed = false
            this.hasPlayerStopped = false
            this.altitude = 0
            this.breakingPoint = odds[Math.floor(randomNumber(1, 15))]
            this.image = new Image()
            this.image.src = "./assets/images/Airplane.png"
        }

        update() {
            this.x += this.velocity * 4
            this.y -= this.velocity * 3
            this.altitude = this.x / 100
        }

    }

    class Particle {
        constructor(x, y) {
            this.x = x,
                this.y = y
            this.size = 30
            this.image = new Image()
            this.image.src = "./assets/images/fire.png"

        }

        draw() {
            // ctx.fillRect(this.x,this.y, this.size, this.size)
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
        }

        update() {
            this.x -= 1.8
            this.y += 0.5
        }
    }

    let particlesArray = []
    function createParticle(x, y) {
        let newPartile = new Particle(x, y)
        particlesArray.push(newPartile)
        
    }
    let animateFrame = 0




    const airPlane = new Airplane(10, canvas.height)
    function animate() {
        animateFrame++

        airPlane.update()
        backgroundX -= 0.1
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(backgroundImg, backgroundX, 0, 900, 601,)
        if (animateFrame % 7 == 0) {
            createParticle(airPlane.x +14, airPlane.y - 44)
        } else if(animateFrame % 14 == 0){
            particlesArray.shift()
        }
        
        particlesArray.forEach(el => {
            el.draw()
            el.update()
        })
        ctx.drawImage(airPlane.image, airPlane.x, airPlane.y - airPlane.h, airPlane.w, airPlane.h)
        ctx.fillStyle = "white";
        ctx.font = '35px Comic Sans MS';
        ctx.fillText(`x ${(airPlane.altitude).toFixed(2)}`, airPlane.x + 40, (airPlane.y - airPlane.h + 10));


        ctx.fillStyle = "white";
        ctx.font = '25px Comic Sans MS';
        ctx.fillText(`Payout ${(playerBet * airPlane.altitude).toFixed(2)}$`, 400, 570);




        if (airPlane.altitude > airPlane.breakingPoint) {
            airPlane.hasCrashed = true
        }


        if (!airPlane.hasPlayerStopped) {
            currentPayout.textContent = (playerBet * airPlane.altitude).toFixed(2)
        } else {
            ctx.fillStyle = "white";
            ctx.font = '25px Comic Sans MS';
            ctx.fillText(`Closed at ${currentPayout.textContent}$`, 380, 40);
        }

        if (airPlane.hasCrashed) {
            if (!airPlane.hasPlayerStopped) {
                currentPayout.textContent = 0.00
            }
            e.target.style.display = 'flex';
            stopButton.style.display = 'none';
            currentBet.value = ''
            balance.textContent = (Number(balance.textContent) + Number(currentPayout.textContent)).toFixed(2)
            sessionStorage.money = balance.textContent
            updateMoney(sessionStorage.id, Number(sessionStorage.money))
            return
        }

        requestAnimationFrame(animate)
    }
    animate()

    stopButton.addEventListener('click', (e) => {
        e.target.style.display = 'none'
        airPlane.hasPlayerStopped = true
        winnings = playerBet * airPlane.altitude
        currentPayout.textContent = winnings.toFixed(2)
    })

    function randomNumber(min, max) {
        return Math.random() * (max - min) + min
    }

}

