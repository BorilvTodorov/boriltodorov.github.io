const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const targetFPS = 60;
const frameTime = 1000 / targetFPS; // Time per frame in milliseconds
//  GAME VARIABLES


canvas.width = 1024
canvas.height = 576
const gravity = 0.5
let horizontalVelocity = 3
let verticalVelocity = 3
let deathCounter = 0
let playerCanJump = true
let dashCount = 2
let animationFrame = 0
// determineLevel(floorArray, trapsArray, platformsArray, starArray, endArray, levelImage)
let currentLevel = 1
let levelLayout = determineLevel(currentLevel)
let canPlayMusic = false
let musingIsNotPlaying=true


let floorCollisionBlocks = genereteCollisionBlocks(levelLayout.Floor, 'Coral')
let platformCollisionBlocks = genereteCollisionBlocks(levelLayout.Platforms, 'Pink')
let trapCollisionBlocks = genereteCollisionBlocks(levelLayout.Traps, 'White')
let endCollisionBlocks = genereteCollisionBlocks(levelLayout.End, 'Aqua')








//  Start Location 
let startLocationArray = []
for (let i = 0; i < levelLayout.Start.length; i += 64) {
    startLocationArray.push(levelLayout.Start.slice(i, i + 64))
}
let start = []

startLocationArray.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol != 0) {
            start.push(new CollissionBlock({
                position: {
                    x: x * 16,
                    y: y * 16,
                },
                color: 'purple'
            }))
        }
    })
})
let restart = JSON.parse(JSON.stringify(start[0]))




let player = new myPlayer({
    position: start[0].position,
    floorCollisionBlocks,
    platformCollisionBlocks,
    trapCollisionBlocks,
    endCollisionBlocks,
    restart,
})

let background = new Sprite({
    position: { x: 0, y: 0 }, imageSrc: levelLayout.Background
})



let rainDrops = 250

let raindropsArray = []

for (let i = 0; i < rainDrops; i++) {
    let myRainDrop = new Particles()
    raindropsArray.push(myRainDrop)
}



const keys = {
    d: { pressed: false },
    a: { pressed: false },
    w: { pressed: false },
    s: { pressed: false }
}




// EVENT LISTENERS
window.addEventListener('keydown', (event) => {
    canPlayMusic=true
    switch (event.key) {
        case 'd': keys.d.pressed = true
            break;

        case 'a': keys.a.pressed = true
            break;

        case 'w': keys.w.pressed = true
            if (playerCanJump && player.velocity.y < 5) {
                player.velocity.y = -10
                playerCanJump = false
            }
            break;

        case 's': keys.s.pressed = true
            break;

        case 'k':
            dashPlayer()
            console.table(keys)
            break;
    }
})

window.addEventListener('keyup', (event) => {

    switch (event.key) {
        case 'd': keys.d.pressed = false
            break;

        case 'a': keys.a.pressed = false
            break;

        case 'w': keys.w.pressed = false
            break;

        case 's': keys.s.pressed = false
            break;
    }
})

//  RUN GAME
let lastFrameTime = 0;

function animate(currentTime) {
    const elapsedTime = currentTime - lastFrameTime;

    // Check if enough time has passed for the next frame
    if (elapsedTime < frameTime) {
      requestAnimationFrame(animate);
      return; // Skip this frame
    }

    lastFrameTime = currentTime;

    if (canPlayMusic) {
      if (musingIsNotPlaying) {
        let melody = new Audio();
        melody.src = 'assets/Sound/melody.mp3';
        melody.volume = 0.3;
        melody.play();
        let rain = new Audio();
        rain.src = 'assets/Sound/rain.mp3';
        rain.volume = 0.3;
        rain.play();
        musingIsNotPlaying = false;
      }
    }

    if (player.levelComplete) {
      currentLevel++;
      levelLayout = determineLevel(currentLevel);
      renderLevel(levelLayout);
    }

    animationFrame++;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    displayText(deathCounter, 50, 50);
    background.update();
    player.update();
    player.velocity.x = 0;

    if (keys.d.pressed) {
      player.velocity.x = horizontalVelocity;
    } else if (keys.a.pressed) {
      player.velocity.x = -horizontalVelocity;
    }

    displayText('Level   ' + currentLevel, 460, 25);
    displayText('💀' + deathCounter, 20, 30);
    displayText(dashCount + '💨', 950, 30);

    raindropsArray.forEach(raindrop => {
      raindrop.draw();
    });

    requestAnimationFrame(animate);
  }

  // Start the animation loop
  requestAnimationFrame(animate);


function genereteCollisionBlocks(initialArray, color) {
    let collisionsArray = []
    for (let i = 0; i < initialArray.length; i += 64) {
        collisionsArray.push(initialArray.slice(i, i + 64))
    }


    let collisionsBlocksArray = []
    collisionsArray.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol != 0) {
                collisionsBlocksArray.push(new CollissionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16,
                    },
                    color: color
                }))
            }
        })
    })

    return collisionsBlocksArray

}


function renderLevel(levelObject) {

    floorCollisionBlocks = genereteCollisionBlocks(levelObject.Floor, 'Coral')
    platformCollisionBlocks = genereteCollisionBlocks(levelObject.Platforms, 'Pink')
    trapCollisionBlocks = genereteCollisionBlocks(levelObject.Traps, 'White')
    endCollisionBlocks = genereteCollisionBlocks(levelObject.End, 'Aqua')
    dashCount = levelObject.DashCount
    startLocationArray = []
    for (let i = 0; i < levelObject.Start.length; i += 64) {
        startLocationArray.push(levelObject.Start.slice(i, i + 64))
    }
    start = []

    startLocationArray.forEach((row, y) => {
        row.forEach((symbol, x) => {
            if (symbol != 0) {
                start.push(new CollissionBlock({
                    position: {
                        x: x * 16,
                        y: y * 16,
                    },
                    color: 'purple'
                }))
            }
        })
    })

    restart = JSON.parse(JSON.stringify(start[0]))
    player = new myPlayer({
        position: start[0].position,
        floorCollisionBlocks,
        platformCollisionBlocks,
        trapCollisionBlocks,
        endCollisionBlocks,
        restart,
    })

    background = new Sprite({
        position: { x: 0, y: 0 }, imageSrc: levelLayout.Background
    })
}




function renderCollisionBlocks() {

    floorCollisionBlocks.forEach(collissionBlock => {
        collissionBlock.draw()
    })

    platformCollisionBlocks.forEach(platformBlock => {
        platformBlock.draw()
    })

    trapCollisionBlocks.forEach(trapBlock => {
        trapBlock.draw()
    })

    start.forEach(start => {
        start.draw()
    })

    endCollisionBlocks.forEach(start => {
        start.draw()
    })
}


function gameMusic() {
    let melody = new Audio
    melody.src = 'assets/Sound/melody.mp3'
    melody.volume = 0.3
    melody.play()
    let rain = new Audio
    rain.src = 'assets/Sound/rain.mp3'
    rain.volume = 0.3
    rain.play()
}
