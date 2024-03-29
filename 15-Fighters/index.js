const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const targetFPS = 60;
const frameTime = 1000 / targetFPS; // Time per frame in milliseconds
let startGame = false
let endGame=false
let playerScoreDisplay = document.querySelector('.current-score')
let playerHighestScoreDisplay=document.querySelector('.Highest-score')
let bestScore=localStorage.getItem('BestScore');
if(bestScore===null)localStorage.setItem('BestScore', 0);
playerHighestScoreDisplay.textContent = bestScore
let gameScoreDisplay=document.querySelector('.game-score')
let htmlPlayerHealth = document.querySelector('#playerHealth')
let htmlEnemyHealth = document.querySelector('#enemyHealth')
let nextLevelScreen = document.querySelector('.next-level')
let nextEnemyButton = document.querySelector('.next-enemy')

let playerStatSpeed = document.querySelector('.player-speed')
let playerAttackSpeed = document.querySelector('.player-attack-delay')
let playerDisplayDamage = document.querySelector('.player-damage')
let playerStatArmor = document.querySelector('.player-armor')
let playerStatRegen = document.querySelector('.player-regen')
let playerStartRecovery = document.querySelector('.player-recovery')
let playerBlockDuration = document.querySelector('.player-block-duration')


let enemyStatSpeed = document.querySelector('.enemy-speed')
let enemyStatDamage = document.querySelector('.enemy-damage')
let enemyStatArmor = document.querySelector('.enemy-armor')
let enemyStatRegen = document.querySelector('.enemy-regen')


let displayLevel = document.querySelector('.current-level')
let playerDodge = document.querySelector('.player-dodge-cooldown')
let playerAttackIcon = document.querySelector('.player-attack-cooldown')
let canPlayerAttackIcon = true
let canEnemyAttackIcon = true

// store
let speedUpStore = document.querySelector('.speedUp')
let dmgUpStore = document.querySelector('.dmgUp')
let armorUpStore = document.querySelector('.armorUp')
let regenUpStore = document.querySelector('.regenUp')
let gemble = document.querySelector('.Gamble')
let shaclesItem = document.querySelector('.Shacles')
let lifePerBlock = document.querySelector('.lifePerBlock')

// sounds
function setupBackgroundSound() {
    let gameSound = new Audio('./img/sounds/backgroundMusic.mp3');
    gameSound.volume =0.4
    gameSound.play()
    
    setTimeout(setupBackgroundSound, 240000)
}


function powerUpSound() {
    let powerUp = new Audio('./img/sounds/powerUp.wav');
    powerUp.volume =0.2
    powerUp.play()
}

gambleArray = [1, 1, 0, 0, 0, 0, 1, 0, 1, 0]
function randomNumber() {
    return Math.floor(Math.random() * ((gambleArray.length) - 0))
}

gemble.addEventListener('click', function () {
    gemble.style.display = 'none'
    if (gambleArray[randomNumber()] == 1) {
        playerScore *= 2
    } else {
        playerScore = 0
    }
})

shaclesItem.addEventListener('click', function () {
    if (playerScore >= 100) {
        // powerUpSound()
        playerScore -= 100
        enemyCanJump = false
        shaclesItem.style.display = 'none'
    }
})

lifePerBlock.addEventListener('click', function () {
    if (playerScore >= 100) {
        powerUpSound()
        playerScore -= 100
        playerLifePerBlock += 0.5
        defendingDuration += 20
    }
})

dmgUpStore.addEventListener('click', function () {
    if (playerScore >= 100) {
        powerUpSound()
        playerScore -= 100
        playerStartDamage++
    }
})
armorUpStore.addEventListener('click', function () {
    if (playerScore >= 100) {
        powerUpSound()
        playerScore -= 100
        playerArmour++
    }
})
speedUpStore.addEventListener('click', function () {
    if (playerScore >= 100) {
        powerUpSound()
        playerScore -= 100
        playerMovementSpeed += 0.5
        player.attackBox.attackDelay -= 100
    }
})
regenUpStore.addEventListener('click', function () {
    if (playerScore >= 100) {
        powerUpSound()
        playerScore -= 100
        playerRegeneration += 0.5
    }
})

let isLevelCompleted = true
function convertHpToScore() {
    if (enemy.dead && isLevelCompleted) {
        if(!endGame){
            gameScore += Math.floor(player.health * enemyScoreMultiplier)
            gameScore += Math.floor(timer * (enemyScoreMultiplier*3.2))
        }
        playerScore += 100
        gemble.style.display = 'flex'
        isLevelCompleted = false
        enemyCanJump = true
        shaclesItem.style.display = 'flex'
    } else {
        // console.log('dont transfer score');
    }
}




function updateDispalyedStats() {
    playerStatSpeed.textContent = String(playerMovementSpeed.toFixed(2))
    playerAttackSpeed.textContent = (player.attackBox.attackDelay / 1000).toFixed(2) + "s"
    playerDisplayDamage.textContent = playerStartDamage.toFixed(2)
    playerStatArmor.textContent = playerArmour.toFixed(2)
    playerStatRegen.textContent = playerRegeneration.toFixed(2)
    playerStartRecovery.textContent = playerLifePerBlock.toFixed(2)
    playerBlockDuration.textContent = (defendingDuration / 1000).toFixed(2) + "s"

    enemyStatSpeed.textContent = enemyMovementSpeed.toFixed(2)
    enemyStatDamage.textContent = enemyStartDamage.toFixed(2)
    enemyStatArmor.textContent = enemyArmor.toFixed(2)
    enemyStatRegen.textContent = enemyRegen.toFixed(2)
    playerScoreDisplay.textContent = playerScore
    displayLevel.textContent = levelCounter
    // player health
    gsap.to(htmlPlayerHealth, { width: player.health + '%' })
    htmlPlayerHealth.innerHTML = Math.ceil(player.health)

    // enemy health
    gsap.to(htmlEnemyHealth, { width: enemy.health + '%' })
    htmlEnemyHealth.innerHTML = Math.ceil(enemy.health)
}
canvas.width = 1024;
canvas.height = 576


// game Stats Player
let gameScore = 0
let playerIsDefending = false
let defendingDuration = 190;
let playerCanDefend = true
let dispalyDefend = false
let canDodge = true
let playerScore = 0
let playerLifePerBlock = 1
let playerMovementSpeed = 5
let playerStartDamage = 15
let playerArmour = 3
let playerRegeneration = 0

// game Stats Enemy
let enemyScoreMultiplier=1
let enemyStartDamage = 8
let enemyMovementSpeed = 4
let enemyArmor = 2
let enemyRegen = 0
let enemyCanJump = true

//  actual DMG delt
let playerDamage = playerStartDamage - enemyArmor
let enemyDamage = enemyStartDamage - playerArmour

function updateDamage() {
    playerDamage = playerStartDamage - enemyArmor
    if (playerDamage <= 0) {
        playerDamage = 0
    }
    enemyDamage = enemyStartDamage - playerArmour
    if (enemyDamage <= 0) {
        enemyDamage = 0
    }
}


c.fillRect(0, 0, canvas.width, canvas.height)

const gravity = 0.7
const background = new Sprite({
    possition: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/background2.jpg',
    framesMax: 1

})
const fireGuard = new Sprite({
    possition: {
        x: 670,
        y: 370,
    },
    imageSrc: './img/mage_guardian-red.png',
    scale: 1.1,
    framesMax: 14

})
const coldGuard = new Sprite({
    possition: {
        x: 735,
        y: 330,
    },
    imageSrc: './img/mage_guardian-blue.png',
    scale: 1.8,
    framesMax: 14

})
const arcaneGuard = new Sprite({
    possition: {
        x: 845,
        y: 300,
    },
    imageSrc: './img/mage_guardian-magenta.png',
    scale: 2.3,
    framesMax: 14

})
let player = new Fighter({
    possition: {
        x: 100,
        y: 0,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 0,
        y: 0,
    },
    imageSrc: './img/samuraiMack/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 157,
    },
    sprites: {
        idle: {
            imageSrc: './img/samuraiMack/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/samuraiMack/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/samuraiMack/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/samuraiMack/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/samuraiMack/Attack1.png',
            framesMax: 6,
        },
        takeHit: {
            imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/samuraiMack/Death.png',
            framesMax: 6,
        },
        defend: {
            imageSrc: './img/samuraiMack/defend.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: 100,
            y: 50,
        },
        width: 160,
        height: 50,
        attackDelay: 1320,
    }

})

function createDodge(xCor, yCor) {
    const dodge = new Sprite({
        possition: {
            x: xCor,
            y: yCor,
        },
        imageSrc: './img/dash.png',
        scale: 0.017,
        framesMax: 1

    })
    dodge.update()

}

function createDefend(xCor, yCor) {
    const defend = new Sprite({
        possition: {
            x: xCor,
            y: yCor,
        },
        imageSrc: './img/Blocked.png',
        scale: 1.4,
        framesMax: 1

    })
    defend.update()

}

function createDefendIndicator(xCor, yCor) {
    const defend = new Sprite({
        possition: {
            x: xCor,
            y: yCor,
        },
        imageSrc: './img/shield.png',
        scale: 0.055,
        framesMax: 1

    })
    defend.update()

}

function createAttack(xCor, yCor) {
    const attack = new Sprite({
        possition: {
            x: xCor,
            y: yCor,
        },
        imageSrc: './img/SwordIndicator.png',
        scale: 0.055,
        framesMax: 1

    })
    attack.update()

}



let cheatBuff = ''
window.addEventListener('keydown', function (e) {
    if (e.key == 'o') {
        cheatBuff += e.key
    }
    if (e.key == 'p') {
        cheatBuff += e.key
    }
    if (cheatBuff == 'op') {
        enemy.dead = true;
        cheatBuff = ''
    }
    if (cheatBuff.length >= 2) {
        cheatBuff = ''
    }

})
let enemy = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/knightEnemy/Idle.png',
    framesMax: 11,
    scale: 2.5,
    offset: {
        x: 215,
        y: 135,
    },
    sprites: {
        idle: {
            imageSrc: './img/knightEnemy/Idle.png',
            framesMax: 11,
        },
        run: {
            imageSrc: './img/knightEnemy/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/knightEnemy/Jump.png',
            framesMax: 3,
        },
        fall: {
            imageSrc: './img/knightEnemy/Fall.png',
            framesMax: 3,
        },
        attack1: {
            imageSrc: './img/knightEnemy/Attack1.png',
            framesMax: 7,
        },
        takeHit: {
            imageSrc: './img/knightEnemy/Take Hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/knightEnemy/Death.png',
            framesMax: 11,
        },
    },
    attackBox: {
        offset: {
            x: -160,
            y: -20,
        },
        width: 200,
        height: 140,
        attackDelay: 1350,
    },
})

//  barb enemy 100% complete
const barbEnemy = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/barbEnemy/Idle.png',
    framesMax: 10,
    scale: 2.5,
    offset: {
        x: 215,
        y: 55,
    },
    sprites: {
        idle: {
            imageSrc: './img/barbEnemy/Idle.png',
            framesMax: 10,
        },
        run: {
            imageSrc: './img/barbEnemy/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/barbEnemy/Jump.png',
            framesMax: 3,
        },
        fall: {
            imageSrc: './img/barbEnemy/Fall.png',
            framesMax: 3,
        },
        attack1: {
            imageSrc: './img/barbEnemy/Attack1.png',
            framesMax: 7,
        },
        takeHit: {
            imageSrc: './img/barbEnemy/Hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/barbEnemy/Death.png',
            framesMax: 11,
        },
    },
    attackBox: {
        offset: {
            x: -200,
            y: -50,
        },
        width: 170,
        height: 200,
        attackDelay: 1320,
    },
})
//  fire mage 100% complete
const fireMageEnemy = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/fireMage/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 100,
    },
    sprites: {
        idle: {
            imageSrc: './img/fireMage/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/fireMage/Move.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/fireMage/Idle.png',
            framesMax: 8,
        },
        fall: {
            imageSrc: './img/fireMage/Idle.png',
            framesMax: 8,
        },
        attack1: {
            imageSrc: './img/fireMage/Attack.png',
            framesMax: 8,
        },
        takeHit: {
            imageSrc: './img/fireMage/Hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/fireMage/Death.png',
            framesMax: 5,
        },
    },
    attackBox: {
        offset: {
            x: -220,
            y: 70,
        },
        width: 180,
        height: 50,
        attackDelay: 1320,
    },
})
//  Boss Enemy 100% complete
const enemyLastSamurai = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/kenji/Idle.png',
    framesMax: 4,
    scale: 2.5,
    offset: {
        x: 215,
        y: 167,
    },
    sprites: {
        idle: {
            imageSrc: './img/kenji/Idle.png',
            framesMax: 4,
        },
        run: {
            imageSrc: './img/kenji/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/kenji/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/kenji/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/kenji/Attack2.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/kenji/Take hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/kenji/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -170,
            y: 50,
        },
        width: 170,
        height: 50,
        attackDelay: 1220,
    },
})

// enemy Evil Wizzard 100% complete
const enemyEvilWizzard = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/enemyWizard/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 260,
    },
    sprites: {
        idle: {
            imageSrc: './img/enemyWizard/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/enemyWizard/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/enemyWizard/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/enemyWizard/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/enemyWizard/Attack1.png',
            framesMax: 8,
        },
        takeHit: {
            imageSrc: './img/enemyWizard/Take hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/enemyWizard/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -170,
            y: -60,
        },
        width: 170,
        height: 200,
        attackDelay: 920,
    },
})
// enemy Fantasy Worrior 100% complete
const enemyFantasyWarrior = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/enemyWarrior/Idle.png',
    framesMax: 8,
    scale: 2.7,
    offset: {
        x: 215,
        y: 120,
    },
    sprites: {
        idle: {
            imageSrc: './img/enemyWarrior/Idle.png',
            framesMax: 10,
        },
        run: {
            imageSrc: './img/enemyWarrior/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/enemyWarrior/Jump.png',
            framesMax: 3,
        },
        fall: {
            imageSrc: './img/enemyWarrior/Fall.png',
            framesMax: 3,
        },
        attack1: {
            imageSrc: './img/enemyWarrior/Attack1.png',
            framesMax: 8,
        },
        takeHit: {
            imageSrc: './img/enemyWarrior/Take hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/enemyWarrior/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -150,
            y: -50,
        },
        width: 130,
        height: 200,
        attackDelay: 1320,
    },
})
// enemy Arcane Wizzard 100% complete
const enemyArcaneWizzard = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/enemyWizzardArcane/Idle.png',
    framesMax: 6,
    scale: 1.6,
    offset: {
        x: 215,
        y: 74,
    },
    sprites: {
        idle: {
            imageSrc: './img/enemyWizzardArcane/Idle.png',
            framesMax: 6,
        },
        run: {
            imageSrc: './img/enemyWizzardArcane/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/enemyWizzardArcane/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/enemyWizzardArcane/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/enemyWizzardArcane/Attack2.png',
            framesMax: 8,
        },
        takeHit: {
            imageSrc: './img/enemyWizzardArcane/Hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/enemyWizzardArcane/Death.png',
            framesMax: 7,
        },
    },
    attackBox: {
        offset: {
            x: -180,
            y: 20,
        },
        width: 130,
        height: 100,
        attackDelay: 920,
    },
})
// enemy Huntress100% complete
const enemyHuntress = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/HuntressEnemy/Idle.png',
    framesMax: 8,
    scale: 2.8,
    offset: {
        x: 215,
        y: 130,
    },
    sprites: {
        idle: {
            imageSrc: './img/HuntressEnemy/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/HuntressEnemy/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/HuntressEnemy/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/HuntressEnemy/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/HuntressEnemy/Attack1.png',
            framesMax: 5,
        },
        takeHit: {
            imageSrc: './img/HuntressEnemy/Hit.png',
            framesMax: 3,
        },
        death: {
            imageSrc: './img/HuntressEnemy/Death.png',
            framesMax: 8,
        },
    },
    attackBox: {
        offset: {
            x: -180,
            y: 20,
        },
        width: 130,
        height: 100,
        attackDelay: 1300,
    },
})
//  zombie Knight 100% complete
const enemyZombieKnight = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/enemyZombieKnight/Idle.png',
    framesMax: 11,
    scale: 3,
    offset: {
        x: 215,
        y: 100,
    },
    sprites: {
        idle: {
            imageSrc: './img/enemyZombieKnight/Idle.png',
            framesMax: 11,
        },
        run: {
            imageSrc: './img/enemyZombieKnight/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/enemyZombieKnight/Jump.png',
            framesMax: 4,
        },
        fall: {
            imageSrc: './img/enemyZombieKnight/Fall.png',
            framesMax: 4,
        },
        attack1: {
            imageSrc: './img/enemyZombieKnight/Attack.png',
            framesMax: 6,
        },
        takeHit: {
            imageSrc: './img/enemyZombieKnight/Hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/enemyZombieKnight/Death.png',
            framesMax: 9,
        },
    },
    attackBox: {
        offset: {
            x: -180,
            y: 20,
        },
        width: 130,
        height: 100,
        attackDelay: 1120,
    },
})

const enemyTheLastKing = new Fighter({
    possition: {
        x: 800,
        y: 160,
    },
    velocity: {
        x: 0,
        y: 0,
    },
    offset: {
        x: -50,
        y: 0,
    }, imageSrc: './img/FinalBoss/Idle.png',
    framesMax: 8,
    scale: 2.5,
    offset: {
        x: 215,
        y: 110,
    },
    sprites: {
        idle: {
            imageSrc: './img/FinalBoss/Idle.png',
            framesMax: 8,
        },
        run: {
            imageSrc: './img/FinalBoss/Run.png',
            framesMax: 8,
        },
        jump: {
            imageSrc: './img/FinalBoss/Jump.png',
            framesMax: 2,
        },
        fall: {
            imageSrc: './img/FinalBoss/Fall.png',
            framesMax: 2,
        },
        attack1: {
            imageSrc: './img/FinalBoss/Attack2.png',
            framesMax: 4,
        },
        takeHit: {
            imageSrc: './img/FinalBoss/Hit.png',
            framesMax: 4,
        },
        death: {
            imageSrc: './img/FinalBoss/Death.png',
            framesMax: 6,
        },
    },
    attackBox: {
        offset: {
            x: -200,
            y: 20,
        },
        width: 350,
        height: 100,
        attackDelay: 1200,
    },
})
const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    k: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },

}
// test 

decreaseTime()

//  computer movement
function fakeKeyPress(key) {
    window.dispatchEvent(new KeyboardEvent('keydown', { 'key': key }));

    setTimeout(function () {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'key': key }))
    }, 50)
}

function computerAi() {

    if (enemy.possition.y > player.possition.y && enemyCanJump) {
        fakeKeyPress('ArrowUp')
    }



    if (enemy.possition.x > (player.possition.x + 50)) { // if player is infront of enemy
        if (canEnemyAttackIcon){
            if ((enemy.possition.x - player.possition.x) <= 200 && enemy.possition.x > player.possition.x) {
                fakeKeyPress('0')
            } else if (player.possition.x < enemy.possition.x) {
                fakeKeyPress('ArrowLeft')
            }
        }else{
            if ((enemy.possition.x - player.possition.x) && enemy.possition.x > player.possition.x) {
                fakeKeyPress('ArrowRight')
            } else if (player.possition.x < enemy.possition.x) {
                fakeKeyPress('ArrowLeft')
            }
        }
    }

    if (canEnemyAttackIcon) {
        if (enemy.possition.x < (player.possition.x + 51)) {// if player is behind of enemy
            if (((player.possition.x + 50) - enemy.possition.x) >= 800 && enemy.possition.x < (player.possition.x + 50)) {
                fakeKeyPress('0')
            } else if ((player.possition.x + 200) !== enemy.possition.x) {
                fakeKeyPress('ArrowRight')
            }
        }
    } else {
        if (enemy.possition.x < (player.possition.x + 51)) {// if player is behind of enemy
            if (((player.possition.x + 50) - enemy.possition.x) && enemy.possition.x < (player.possition.x + 50)) {
                fakeKeyPress('ArrowLeft')
            } else if ((player.possition.x + 200) !== enemy.possition.x) {
                fakeKeyPress('ArrowRight')
            }
        }
    }



}


// Next level segment
function nextLevelUpdate() {
    player.health = 100
    htmlEnemyHealth.style.width = enemy.health + '%'
    htmlEnemyHealth.innerHTML = Math.ceil(enemy.health)
    htmlPlayerHealth.style.width = enemy.health + '%'
    htmlPlayerHealth.innerHTML = Math.ceil(player.health)
    enemyScoreMultiplier+=0.5
    enemyArmor += 1
    enemyStartDamage += 0.2
    enemyMovementSpeed += 0.2
    player.dead = false
    isLevelCompleted = true
}

//  test enemies
// enemy = fireMageEnemy
let playerDoesntMiss
let playerMissAttack
let enemyDoesntMiss = 4
let enemyMissAttack = 4


let levelCounter = 1
nextEnemyButton.addEventListener('click', (event) => {
    timer=60;
    if (enemy.dead) {
        levelCounter++
        if (levelCounter === 2) {
            enemyScoreMultiplier+=0.1
            enemy = enemyFantasyWarrior
            enemyDoesntMiss = 5
            enemyMissAttack = 5
            nextLevelUpdate()
        } else if (levelCounter === 3) {
            enemy = enemyArcaneWizzard
            enemyDoesntMiss = 5
            enemyMissAttack = 5
            nextLevelUpdate()
        } else if (levelCounter === 4) {
            enemy = enemyEvilWizzard
            enemyDoesntMiss = 5
            enemyMissAttack = 5
            nextLevelUpdate()
        } else if (levelCounter === 5) {
            enemy = barbEnemy
            enemyDoesntMiss = 5
            enemyMissAttack = 5
            nextLevelUpdate()
        } else if (levelCounter === 6) {
            enemy = fireMageEnemy
            enemyDoesntMiss = 5
            enemyMissAttack = 5
            nextLevelUpdate()
        }
        else if (levelCounter === 7) {
            enemy = enemyLastSamurai
            enemyDoesntMiss = 2
            enemyMissAttack = 2
            nextLevelUpdate()
        } else if (levelCounter === 8) {
            enemy = enemyHuntress
            enemyDoesntMiss = 3
            enemyMissAttack = 3
            nextLevelUpdate()
        } else if (levelCounter === 9) {
            enemy = enemyZombieKnight
            enemyDoesntMiss = 4
            enemyMissAttack = 4
            nextLevelUpdate()
            document.querySelector('.completedLevels').innerHTML = 'Boss Fight'
            document.querySelector('.completedLevels').style.fontSize = '25'
            document.querySelector('.completedLevels').style.color = '#f472b6'
        }
        else if (levelCounter === 10) {
            enemy = enemyTheLastKing
            nextLevelScreen.style.fontSize = '35'
            let newDiv = document.createElement("div")
            newDiv.style.fontSize = '20'
            nextLevelScreen.innerHTML = 'You Won'
            enemyDoesntMiss = 2
            enemyMissAttack = 2
            nextLevelUpdate()
            newDiv.innerHTML = `Refresh to play again`
            nextLevelScreen.appendChild(newDiv)
        }



    } else {
        // console.log('Still alive');
    }

})

let lastFrameTime = 0;

function animate(currentTime) {
    const elapsedTime = currentTime - lastFrameTime;

    // Check if enough time has passed for the next frame
    if (elapsedTime < frameTime) {
      requestAnimationFrame(animate);
      return; // Skip this frame
    }

    lastFrameTime = currentTime;

    gameScoreDisplay.innerHTML = gameScore
    if(endGame)return
    window.requestAnimationFrame(animate) // means what animation you are going to loop over
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    coldGuard.update()
    fireGuard.update()
    arcaneGuard.update()
    c.fillStyle = 'rgba(255, 255, 255, 0.15)'
    c.fillRect(0, 0, canvas.width, canvas.height)
    if (startGame) {
        enemy.update()
    }
    player.update()
    updateDamage()
    if (enemy.health <= 0) {
        enemy.switchSprite('death')
    }
    if (player.health <= 0) {
        player.switchSprite('death')
        // endGame = true

    }
    if (!player.dead && !enemy.dead && nextLevelScreen.style.display == 'none') {
        computerAi()
    }

    if (enemy.dead) {
        nextLevelScreen.style.display = 'flex'
    } else {
        nextLevelScreen.style.display = 'none'
    }

    if(player.dead){
        if(gameScore>bestScore){
            localStorage.setItem('BestScore', `${gameScore}`);
            bestScore=localStorage.getItem('BestScore');
            playerHighestScoreDisplay.textContent = bestScore
        }
        console.log('hes dead');
        nextLevelScreen.style.display = 'flex'
        nextLevelScreen.innerHTML='You Lose'
    }

    if (canPlayerAttackIcon) {
        createAttack((player.possition.x - 5), (player.possition.y))
    }

    if (canEnemyAttackIcon) {
        createAttack((enemy.possition.x - 5), (enemy.possition.y))
    }

    if (playerCanDefend) {
        createDefendIndicator((player.possition.x + 55), (player.possition.y - 2))
    }

    if (canDodge) {
        createDodge((player.possition.x + 25), (player.possition.y - 2))
    }

    if (dispalyDefend) {
        createDefend((player.possition.x + 70), (player.possition.y + 25))
    }



    limitMovementToScreen()
    updateDispalyedStats()
    convertHpToScore();





    player.velocity.x = 0

    // player movement

    if (keys.a.pressed && player.lastKey === 'a') {
        player.velocity.x = -playerMovementSpeed
        player.switchSprite('run')
    } else if (keys.d.pressed && player.lastKey === 'd') {
        player.velocity.x = playerMovementSpeed
        player.switchSprite('run')
    } else if (keys.k.pressed && player.lastKey === 'k') {
        player.switchSprite('defend')
    } else {
        player.switchSprite('idle')
    }

    // jump player
    if (player.velocity.y < 0) {
        player.switchSprite('jump')
    } else if (player.velocity.y > 0) {
        player.switchSprite('fall')
    }

    // enemy movement
    enemy.velocity.x = 0
    if (keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
        enemy.velocity.x = -enemyMovementSpeed
        enemy.switchSprite('run')
    } else if (keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
        enemy.velocity.x = enemyMovementSpeed
        enemy.switchSprite('run')
    } else {
        enemy.switchSprite('idle')
    }

    // jump enemy
    if (enemy.velocity.y < 0) {
        enemy.switchSprite('jump')
    } else if (enemy.velocity.y > 0) {
        enemy.switchSprite('fall')
    }


    // detect for collission  enemy is hit
    if (rectangularCollision({
        rectangle1: player,
        rectangle2: enemy,
    }) && player.isAttacking && player.framesCurrent === 4) {
        enemy.takeHit(playerDamage)
        player.isAttacking = false
        // gsap.to(htmlEnemyHealth,{ width: enemy.health+'%'})
        // htmlEnemyHealth.innerHTML = enemy.health
        if (enemy.health <= 0) {
            htmlEnemyHealth.style.width = 0 + '%'
            htmlEnemyHealth.innerHTML = 0
        }
    }

    // if player misses
    if (player.isAttacking && player.framesCurrent === 4) {
        player.isAttacking = false
    }



    // detect for collission  player is hit
    if (rectangularCollision({
        rectangle1: enemy,
        rectangle2: player,
    }) && enemy.isAttacking && enemy.framesCurrent === enemyDoesntMiss) {
        if (!playerIsDefending) {
            player.takeHit(enemyDamage)
        } else {
            dispalyDefend = true
            setTimeout(function () {
                dispalyDefend = false
            }, 300)
            let blockSound = new Audio('./img/sounds/defendSound.wav');
            blockSound.volume =0.2
            blockSound.play()
            player.health += playerLifePerBlock
            if (player.health >= 100) {
                player.health = 100
            }
        }
        enemy.isAttacking = false
        // gsap.to(htmlPlayerHealth,{ width: player.health+'%'})
        // htmlPlayerHealth.innerHTML = player.health
        if (player.health <= 0) {
            htmlPlayerHealth.style.width = 0 + '%'
            htmlPlayerHealth.innerHTML = 0
        }
    }

    // if enemy misses
    if (enemy.isAttacking && enemy.framesCurrent === enemyMissAttack) {
        enemy.isAttacking = false
    }


    // end game based on health
    if (enemy.health <= 0 || player.health <= 0) {
        // determineWinner({ player, enemy, timerId })
    }



    if(levelCounter === 10&&enemy.dead){
        console.log('game is over get high Score');


        if(gameScore>bestScore){
            localStorage.setItem('BestScore', `${gameScore}`);
            bestScore=localStorage.getItem('BestScore');
            playerHighestScoreDisplay.textContent = bestScore
        }

        endGame=true
    }
}
   // Start the animation loop
   requestAnimationFrame(animate);



// can i attack

let lastAttack = Date.now()
let cooldown = 0



let lastPlayerAttack = Date.now()
let playerCoolDown = 0
let lastEnemyAttack = Date.now()
let enemyCoolDown = 0

function canIAttack(player, delay) {
    let attackNow = Date.now()
    let ElpsAttTime = attackNow - lastAttack
    if (ElpsAttTime > delay || cooldown > delay) {
        player.attack();
        cooldown = 0
    } else {
        cooldown += ElpsAttTime
    }
    lastAttack = attackNow
}

// event listeners
// limit movement
function limitMovementToScreen() {
    if (player.possition.x >= 885) {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'd' }))
    }
    if (player.possition.x <= 85) {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'a' }))
    }
    if (enemy.possition.x >= 950) {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'ArrowRight' }))
    }
    if (enemy.possition.x <= 35) {
        window.dispatchEvent(new KeyboardEvent('keyup', { 'key': 'ArrowLeft' }))
    }
}


window.addEventListener('keydown', (event) => {

    if (!player.dead) {
        switch (event.key) {
            // player
            case 'd':

                if (!player.isAttacking) {
                    if (player.possition.x <= 885) {
                        keys.d.pressed = true
                        player.lastKey = 'd'
                    }
                }
                break;
            case 'a':
                if (!player.isAttacking) {
                    if (player.possition.x >= 30) {
                        keys.a.pressed = true
                        player.lastKey = 'a'
                    }
                }
                break;
            case 'w':
                if (!player.isAttacking) {
                    if (player.possition.y > 320)
                        player.velocity.y = -20
                }
                break;
            case 'l':
                let playerAttackNow = Date.now()
                let ElpsPlayerAttTime = playerAttackNow - lastPlayerAttack
                let playerDelay = player.attackBox.attackDelay
                if (ElpsPlayerAttTime > playerDelay || playerCoolDown > playerDelay) {
                    let newAttack = new Audio('./img/sounds/swosh.wav');
                    newAttack.volume =0.1
                    newAttack.play()
                    player.attack();

                    canPlayerAttackIcon = false
                    setTimeout(function () {
                        canPlayerAttackIcon = true
                    }, player.attackBox.attackDelay)
                    playerCoolDown = 0
                } else {
                    playerCoolDown += ElpsPlayerAttTime
                }
                lastPlayerAttack = playerAttackNow
                break;
            case 'k':
                if (!player.isAttacking && playerCanDefend) {
                    keys.k.pressed = true
                    player.lastKey = 'k'
                    playerIsDefending = true
                    playerCanDefend = false
                    setTimeout(function () {
                        keys.k.pressed = false;
                        playerIsDefending = false
                    }, defendingDuration)

                    setTimeout(function () {
                        playerCanDefend = true
                    }, 800)
                }
                break;

        }
    }
    if (!enemy.dead) {
        switch (event.key) {
            // enemy
            case 'ArrowRight':
                if (!enemy.isAttacking) {
                    if (enemy.possition.x <= 935) {
                        keys.ArrowRight.pressed = true
                        enemy.lastKey = 'ArrowRight'
                    }
                }
                break;
            case 'ArrowLeft':
                if (!enemy.isAttacking) {
                    if (player.possition.x >= 30) {
                        keys.ArrowLeft.pressed = true
                        enemy.lastKey = 'ArrowLeft'
                    }
                }
                break;
            case 'ArrowUp':
                if (!enemy.isAttacking) {
                    if (enemy.possition.y > 320) {
                        enemy.velocity.y = -20
                    }
                }
                break;
            case '0':
                let enemyAttackNow = Date.now()
                let ElpsPlayerAttTime = enemyAttackNow - lastEnemyAttack
                let enemyDelay = enemy.attackBox.attackDelay
                if (ElpsPlayerAttTime > enemyDelay || enemyCoolDown > enemyDelay) {
                    enemy.attack();
                    enemyCoolDown = 0
                    canEnemyAttackIcon = false
                    setTimeout(function () {
                        canEnemyAttackIcon = true
                    }, enemy.attackBox.attackDelay)
                } else {
                    enemyCoolDown += ElpsPlayerAttTime
                }
                lastEnemyAttack = enemyAttackNow
                break;
        }
    }
})

let lastkeyPressed
let lastkeyPressTime

let lastkeyPressTimeA
let lastkeyPressTimeD


window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false
            if (!player.isAttacking && player.possition.x < 750 && (Date.now() - lastkeyPressTimeD) <= 180 && canDodge) {
                let dodgeSound = new Audio('./img/sounds/dash.wav');
                dodgeSound.volume =0.1
                dodgeSound.play()
                player.possition.x += 200
                canDodge = false
                setTimeout(function () {
                    canDodge = true
                }, 1200)

            }
            lastkeyPressed = event.key
            lastkeyPressTimeD = Date.now()

            // console.log(event.key)
            break;
        case 'a':
            keys.a.pressed = false
            if (!player.isAttacking && player.possition.x > 155 && (Date.now() - lastkeyPressTimeA) <= 180 && canDodge) {
                let dodgeSound = new Audio('./img/sounds/dash.wav');
                dodgeSound.volume =0.2
                dodgeSound.play()
                player.possition.x -= 200
                canDodge = false
                setTimeout(function () {
                    canDodge = true
                }, 1200)

            }
            lastkeyPressed = event.key
            lastkeyPressTimeA = Date.now()
            break;
        case 'k':
            // keys.k.pressed = false;
            // playerIsDefending = false
            break;

    }

    // enemy
    switch (event.key) {
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break;
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break;

    }
})

function playerRegen() {
    if (player.health < 100 && player.health >= 1) {
        player.health += playerRegeneration

    } else {
        // console.log(player.health)
    }


    setTimeout(playerRegen, 1000)
}


playerRegen();

let startWindow = document.querySelector('.WelcomeScreen')
window.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (!startGame) {
            setupBackgroundSound()
            startGame = true;
        }
        startWindow.style.display = 'none'
    }
})


// function attackCooldownCounter(character){
//     let cooldonw=character.attackDelay

// }
