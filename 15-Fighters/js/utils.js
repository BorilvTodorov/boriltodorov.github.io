function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.possition.x + rectangle1.attackBox.width >= rectangle2.possition.x &&
        rectangle1.attackBox.possition.x <= rectangle2.possition.x + rectangle2.width &&
        rectangle1.attackBox.possition.y + rectangle1.attackBox.height >= rectangle2.possition.y &&
        rectangle1.attackBox.possition.y <= rectangle2.possition.y + rectangle2.height
    )
}

// function determineWinner({ player, enemy, timerId }) {
//     clearTimeout(timerId);
//     document.querySelector('#displayText').style.display = 'flex'
//     if (player.health === enemy.health) {
//         document.querySelector('#displayText').innerHTML = 'Tie'
//     } else if (player.health > enemy.health) {
//         document.querySelector('#displayText').innerHTML = 'Player One Wins'
//     } else if (enemy.health > player.health) {
//         document.querySelector('#displayText').innerHTML = 'Player Two Wins'
//     }
// }

let timer = 100
let timerId
function decreaseTime() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTime, 1000)
        timer--;
        document.querySelector('#timer').innerHTML = timer
    }
    if (timer === 0) {
        determineWinner({ player, enemy, timerId })
    }
}