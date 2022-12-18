
function dashPlayer() {
    if (dashCount > 0) {
        dashCount--
        let dashSound = new Audio
        dashSound.src = 'assets/Sound/wind.wav'
        dashSound.volume = 0.5
        dashSound.play()

        if (keys.w.pressed && keys.d.pressed) { // dash right-diagonal up
            horizontalVelocity = 15
            player.velocity.y = -17
        }
        else if (keys.w.pressed && keys.a.pressed) {// dash left-diagonal up
            horizontalVelocity = 15
            player.velocity.y = -17
        }
        else if (keys.s.pressed && keys.d.pressed) { // dash right-diagonal up
            horizontalVelocity = 15
            player.velocity.y = 17
        }
        else if (keys.s.pressed && keys.a.pressed) { // dash right-diagonal up
            horizontalVelocity = 15
            player.velocity.y = 17
        }
        else if (keys.d.pressed) { // dash horizontal right
            horizontalVelocity = 20
            player.velocity.y = -5
        }
        else if (keys.a.pressed) { // dash horizontal left
            horizontalVelocity = 20
            player.velocity.y = -5
        }
        else if (keys.w.pressed) { // dash vertical up 
            player.velocity.y = -20
        }
        else if (keys.s.pressed) { // dash vertical down
            player.velocity.y = 15
        }



        setTimeout(() => {
            horizontalVelocity = 3
            player.velocity.y = -5
        }, 100)
    }
}

//==========================================================================CANVAS FUNCTIONS========================================================================================================================================================

function displayText(text, x, y) {
    ctx.strokeStyle = 'white'
    ctx.font = "30px Comic Sans MS ";
    ctx.strokeText(text, x, y);
}


//  ========================================================================COLLISSION FUNCTIONS================================================================================================================================================

function collision({
    object1,
    object2
}) {
    return (object1.position.y + object1.height >= object2.position.y &&
        object1.position.y <= object2.position.y + object2.height &&
        object1.position.x <= object2.position.x + object2.width &&
        object1.position.x + object1.width >= object2.position.x)
}


function platformCollision({
    object1,
    object2
}) {// limit hitbox for platforms ot only chec fo collision on feet
    return (object1.position.y + 85 >= object2.position.y &&
        object1.position.y + 63 <= object2.position.y + object2.height &&
        object1.position.x <= object2.position.x + object2.width &&
        object1.position.x + object1.width >= object2.position.x)
}

//  ========================================================================LEVEL FUNCTIONS========================================================================================================
console.log('level One' ,levelOneLayout)
console.log('level Two' ,levelTwoLayout)
console.log('level Three' ,levelThreeLayout)
function determineLevel(currentLevel) {
    if (currentLevel == 1) {
        return levelOneLayout
    } else if ((currentLevel == 2)) {
        return levelTwoLayout
    } else if ((currentLevel == 3)) {
        return levelThreeLayout
    }
}