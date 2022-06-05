const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const box5 = document.querySelector('.box5')
const box6 = document.querySelector('.box6')
const box7 = document.querySelector('.box7')
const box8 = document.querySelector('.box8')
const box9 = document.querySelector('.box9')
const box10 = document.querySelector('.box10')
const box11 = document.querySelector('.box11')
const box12 = document.querySelector('.box12')
const box13 = document.querySelector('.box13')
const box14 = document.querySelector('.box14')
const box15 = document.querySelector('.box15')
const box16 = document.querySelector('.box16')
const box17 = document.querySelector('.box17')
const box18 = document.querySelector('.box18')
const box19 = document.querySelector('.box19')
const box20 = document.querySelector('.box20')
const box21 = document.querySelector('.box21')
const box22 = document.querySelector('.box22')
const box23 = document.querySelector('.box23')
const box24 = document.querySelector('.box24')
const box25 = document.querySelector('.box25')
const box26 = document.querySelector('.box26')
const box27 = document.querySelector('.box27')
const box28 = document.querySelector('.box28')
const box29 = document.querySelector('.box29')
const box30 = document.querySelector('.box30')
const box31 = document.querySelector('.box31')
const box32 = document.querySelector('.box32')
const box33 = document.querySelector('.box33')
const box34 = document.querySelector('.box34')
const box35 = document.querySelector('.box35')
const box36 = document.querySelector('.box36')
const box37 = document.querySelector('.box37')
const box38 = document.querySelector('.box38')
const box39 = document.querySelector('.box39')
const box40 = document.querySelector('.box40')
const box41 = document.querySelector('.box41')
const box42 = document.querySelector('.box42')
const gameOver = document.querySelector('.Game-Over')
const gameWon = document.querySelector('.Game-Won')
const gridBoxes = document.querySelector('.grid-boxes')
const playLose = document.getElementById('play-lose')
const playWon = document.querySelector('.play-won')
let winCounter = [];


// Random play button possition
let horizontal = Array.from(range(-300, 300, 1));
let vertical = Array.from(range(-400, 300, 1));

function* range(start, end, step) {
    while (start < end) {
        yield start;
        start += step;
    }
}

let randomHorizontal = Math.floor(getRandomHorizontal());
function getRandomHorizontal() {
    return Math.random() * horizontal.length;
}


let randomVertical = Math.floor(getRandomVertical());
function getRandomVertical() {
    return Math.random() * vertical.length;
}




// Random play button possition
playLose.addEventListener('click', function () {
    gameOver.style.display = 'none'

    box1.classList.remove('cube-block');
    box1.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box1.style.transform = 'scale(1)'

    box2.classList.remove('cube-block');
    box2.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box2.style.transform = 'scale(1)'

    box3.classList.remove('cube-block');
    box3.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box3.style.transform = 'scale(1)'

    box4.classList.remove('cube-block');
    box4.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box4.style.transform = 'scale(1)'

    box5.classList.remove('cube-block');
    box5.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box5.style.transform = 'scale(1)'

    box6.classList.remove('cube-block');
    box6.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box6.style.transform = 'scale(1)'

    box7.classList.remove('cube-block');
    box7.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box7.style.transform = 'scale(1)'

    box8.classList.remove('cube-block');
    box8.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box8.style.transform = 'scale(1)'

    box9.classList.remove('cube-block');
    box9.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box9.style.transform = 'scale(1)'

    box10.classList.remove('cube-block');
    box10.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box10.style.transform = 'scale(1)'

    box11.classList.remove('cube-block');
    box11.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box11.style.transform = 'scale(1)'

    box12.classList.remove('cube-block');
    box12.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box12.style.transform = 'scale(1)'

    box13.classList.remove('cube-block');
    box13.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box13.style.transform = 'scale(1)'

    box14.classList.remove('cube-block');
    box14.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box14.style.transform = 'scale(1)'

    box15.classList.remove('cube-block');
    box15.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box15.style.transform = 'scale(1)'

    box16.classList.remove('cube-block');
    box16.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box16.style.transform = 'scale(1)'

    box17.classList.remove('cube-block');
    box17.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box17.style.transform = 'scale(1)'

    box18.classList.remove('cube-block');
    box18.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box18.style.transform = 'scale(1)'

    box19.classList.remove('cube-block');
    box19.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box19.style.transform = 'scale(1)'

    box20.classList.remove('cube-block');
    box20.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box20.style.transform = 'scale(1)'

    box21.classList.remove('cube-block');
    box21.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box21.style.transform = 'scale(1)'

    box22.classList.remove('cube-block');
    box22.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box22.style.transform = 'scale(1)'

    box23.classList.remove('cube-block');
    box23.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box23.style.transform = 'scale(1)'

    box24.classList.remove('cube-block');
    box24.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box24.style.transform = 'scale(1)'

    box25.classList.remove('cube-block');
    box25.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box25.style.transform = 'scale(1)'

    box26.classList.remove('cube-block');
    box26.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box26.style.transform = 'scale(1)'

    box27.classList.remove('cube-block');
    box27.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box27.style.transform = 'scale(1)'

    box28.classList.remove('cube-block');
    box28.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box28.style.transform = 'scale(1)'

    box29.classList.remove('cube-block');
    box29.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box29.style.transform = 'scale(1)'

    box30.classList.remove('cube-block');
    box30.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box30.style.transform = 'scale(1)'

    box31.classList.remove('cube-block');
    box31.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box31.style.transform = 'scale(1)'

    box32.classList.remove('cube-block');
    box32.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box32.style.transform = 'scale(1)'

    box33.classList.remove('cube-block');
    box33.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box33.style.transform = 'scale(1)'

    box34.classList.remove('cube-block');
    box34.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box34.style.transform = 'scale(1)'

    box35.classList.remove('cube-block');
    box35.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box35.style.transform = 'scale(1)'

    box36.classList.remove('cube-block');
    box36.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box36.style.transform = 'scale(1)'

    box37.classList.remove('cube-block');
    box37.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box37.style.transform = 'scale(1)'

    box38.classList.remove('cube-block');
    box38.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box38.style.transform = 'scale(1)'

    box39.classList.remove('cube-block');
    box39.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box39.style.transform = 'scale(1)'

    box40.classList.remove('cube-block');
    box40.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box40.style.transform = 'scale(1)'

    box41.classList.remove('cube-block');
    box41.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box41.style.transform = 'scale(1)'

    box42.classList.remove('cube-block');
    box42.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box42.style.transform = 'scale(1)'

    winCounter = [];


})

playWon.addEventListener('click', function () {
    gameWon.style.display = 'none'

    box1.classList.remove('cube-block');
    box1.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box1.style.transform = 'scale(1)'

    box2.classList.remove('cube-block');
    box2.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box2.style.transform = 'scale(1)'

    box3.classList.remove('cube-block');
    box3.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box3.style.transform = 'scale(1)'

    box4.classList.remove('cube-block');
    box4.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box4.style.transform = 'scale(1)'

    box5.classList.remove('cube-block');
    box5.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box5.style.transform = 'scale(1)'

    box6.classList.remove('cube-block');
    box6.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box6.style.transform = 'scale(1)'

    box7.classList.remove('cube-block');
    box7.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box7.style.transform = 'scale(1)'

    box8.classList.remove('cube-block');
    box8.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box8.style.transform = 'scale(1)'

    box9.classList.remove('cube-block');
    box9.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box9.style.transform = 'scale(1)'

    box10.classList.remove('cube-block');
    box10.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box10.style.transform = 'scale(1)'

    box11.classList.remove('cube-block');
    box11.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box11.style.transform = 'scale(1)'

    box12.classList.remove('cube-block');
    box12.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box12.style.transform = 'scale(1)'

    box13.classList.remove('cube-block');
    box13.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box13.style.transform = 'scale(1)'

    box14.classList.remove('cube-block');
    box14.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box14.style.transform = 'scale(1)'

    box15.classList.remove('cube-block');
    box15.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box15.style.transform = 'scale(1)'

    box16.classList.remove('cube-block');
    box16.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box16.style.transform = 'scale(1)'

    box17.classList.remove('cube-block');
    box17.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box17.style.transform = 'scale(1)'

    box18.classList.remove('cube-block');
    box18.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box18.style.transform = 'scale(1)'

    box19.classList.remove('cube-block');
    box19.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box19.style.transform = 'scale(1)'

    box20.classList.remove('cube-block');
    box20.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box20.style.transform = 'scale(1)'

    box21.classList.remove('cube-block');
    box21.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box21.style.transform = 'scale(1)'

    box22.classList.remove('cube-block');
    box22.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box22.style.transform = 'scale(1)'

    box23.classList.remove('cube-block');
    box23.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box23.style.transform = 'scale(1)'

    box24.classList.remove('cube-block');
    box24.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box24.style.transform = 'scale(1)'

    box25.classList.remove('cube-block');
    box25.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box25.style.transform = 'scale(1)'

    box26.classList.remove('cube-block');
    box26.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box26.style.transform = 'scale(1)'

    box27.classList.remove('cube-block');
    box27.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box27.style.transform = 'scale(1)'

    box28.classList.remove('cube-block');
    box28.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box28.style.transform = 'scale(1)'

    box29.classList.remove('cube-block');
    box29.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box29.style.transform = 'scale(1)'

    box30.classList.remove('cube-block');
    box30.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box30.style.transform = 'scale(1)'

    box31.classList.remove('cube-block');
    box31.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box31.style.transform = 'scale(1)'

    box32.classList.remove('cube-block');
    box32.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box32.style.transform = 'scale(1)'

    box33.classList.remove('cube-block');
    box33.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box33.style.transform = 'scale(1)'

    box34.classList.remove('cube-block');
    box34.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box34.style.transform = 'scale(1)'

    box35.classList.remove('cube-block');
    box35.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box35.style.transform = 'scale(1)'

    box36.classList.remove('cube-block');
    box36.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box36.style.transform = 'scale(1)'

    box37.classList.remove('cube-block');
    box37.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box37.style.transform = 'scale(1)'

    box38.classList.remove('cube-block');
    box38.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box38.style.transform = 'scale(1)'

    box39.classList.remove('cube-block');
    box39.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box39.style.transform = 'scale(1)'

    box40.classList.remove('cube-block');
    box40.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box40.style.transform = 'scale(1)'

    box41.classList.remove('cube-block');
    box41.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box41.style.transform = 'scale(1)'

    box42.classList.remove('cube-block');
    box42.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
    box42.style.transform = 'scale(1)'

    winCounter = [];


})


box1.addEventListener('mouseenter', function () {
    if (box1.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box1.style.transform = 'scale(0.7)'
    box1.style.transition = '1000ms'
    box1.style.backgroundColor = 'lightblue'
    box1.classList.add('cube-block');
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    }
})
box2.addEventListener('mouseenter', function () {
    if (box2.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box2.style.transform = 'scale(0.7)'
    box2.style.transition = '1000ms'
    box2.style.backgroundColor = 'lightblue'
    box2.classList.add('cube-block');
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    }
})
box3.addEventListener('mouseenter', function () {
    if (box3.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box3.style.transform = 'scale(0.7)'
    box3.style.transition = '1000ms'
    box3.style.backgroundColor = 'lightblue'
    box3.classList.add('cube-block');
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    }
})
box4.addEventListener('mouseenter', function () {
    if (box4.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box4.style.transform = 'scale(0.7)'
    box4.style.transition = '1000ms'
    box4.style.backgroundColor = 'lightblue'
    box4.classList.add('cube-block');
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    }
})
box5.addEventListener('mouseenter', function () {
    if (box5.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box5.style.transform = 'scale(0.7)'
    box5.style.transition = '1000ms'
    box5.style.backgroundColor = 'lightblue'
    box5.classList.add('cube-block');
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    }
})
box6.addEventListener('mouseenter', function () {
    if (box6.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box6.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box6.style.transition = '1000ms'
    box6.style.backgroundColor = 'lightblue'
    box6.classList.add('cube-block');
})
box7.addEventListener('mouseenter', function () {
    if (box7.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box7.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box7.style.transition = '1000ms'
    box7.style.backgroundColor = 'lightblue'
    box7.classList.add('cube-block');
})
box8.addEventListener('mouseenter', function () {
    if (box8.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box8.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box8.style.transition = '1000ms'
    box8.style.backgroundColor = 'lightblue'
    box8.classList.add('cube-block');
})
box9.addEventListener('mouseenter', function () {
    if (box9.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box9.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box9.style.transition = '1000ms'
    box9.style.backgroundColor = 'lightblue'
    box9.classList.add('cube-block');
})
box10.addEventListener('mouseenter', function () {
    if (box10.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box10.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box10.style.transition = '1000ms'
    box10.style.backgroundColor = 'lightblue'
    box10.classList.add('cube-block');
})
box11.addEventListener('mouseenter', function () {
    if (box11.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box11.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box11.style.transition = '1000ms'
    box11.style.backgroundColor = 'lightblue'
    box11.classList.add('cube-block');
})
box12.addEventListener('mouseenter', function () {
    if (box12.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box12.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box12.style.transition = '1000ms'
    box12.style.backgroundColor = 'lightblue'
    box12.classList.add('cube-block');
})
box13.addEventListener('mouseenter', function () {
    if (box13.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box13.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box13.style.transition = '1000ms'
    box13.style.backgroundColor = 'lightblue'
    box13.classList.add('cube-block');
})
box14.addEventListener('mouseenter', function () {
    if (box14.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box14.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box14.style.transition = '1000ms'
    box14.style.backgroundColor = 'lightblue'
    box14.classList.add('cube-block');
})
box15.addEventListener('mouseenter', function () {
    if (box15.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box15.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box15.style.transition = '1000ms'
    box15.style.backgroundColor = 'lightblue'
    box15.classList.add('cube-block');
})
box16.addEventListener('mouseenter', function () {
    if (box16.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box16.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box16.style.transition = '1000ms'
    box16.style.backgroundColor = 'lightblue'
    box16.classList.add('cube-block');
})
box17.addEventListener('mouseenter', function () {
    if (box17.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box17.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box17.style.transition = '1000ms'
    box17.style.backgroundColor = 'lightblue'
    box17.classList.add('cube-block');
})
box18.addEventListener('mouseenter', function () {
    if (box18.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box18.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box18.style.transition = '1000ms'
    box18.style.backgroundColor = 'lightblue'
    box18.classList.add('cube-block');
})
box19.addEventListener('mouseenter', function () {
    if (box19.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box19.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box19.style.transition = '1000ms'
    box19.style.backgroundColor = 'lightblue'
    box19.classList.add('cube-block');
})
box20.addEventListener('mouseenter', function () {
    if (box20.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box20.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box20.style.transition = '1000ms'
    box20.style.backgroundColor = 'lightblue'
    box20.classList.add('cube-block');
})
box21.addEventListener('mouseenter', function () {
    if (box21.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box21.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box21.style.transition = '1000ms'
    box21.style.backgroundColor = 'lightblue'
    box21.classList.add('cube-block');
})
box22.addEventListener('mouseenter', function () {
    if (box22.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box22.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box22.style.transition = '1000ms'
    box22.style.backgroundColor = 'lightblue'
    box22.classList.add('cube-block');
})
box23.addEventListener('mouseenter', function () {
    if (box23.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box23.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box23.style.transition = '1000ms'
    box23.style.backgroundColor = 'lightblue'
    box23.classList.add('cube-block');
})
box24.addEventListener('mouseenter', function () {
    if (box24.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box24.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box24.style.transition = '1000ms'
    box24.style.backgroundColor = 'lightblue'
    box24.classList.add('cube-block');
})
box25.addEventListener('mouseenter', function () {
    if (box25.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box25.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box25.style.transition = '1000ms'
    box25.style.backgroundColor = 'lightblue'
    box25.classList.add('cube-block');
})
box26.addEventListener('mouseenter', function () {
    if (box26.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box26.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box26.style.transition = '1000ms'
    box26.style.backgroundColor = 'lightblue'
    box26.classList.add('cube-block');
})
box27.addEventListener('mouseenter', function () {
    if (box27.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box27.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box27.style.transition = '1000ms'
    box27.style.backgroundColor = 'lightblue'
    box27.classList.add('cube-block');
})
box28.addEventListener('mouseenter', function () {
    if (box28.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box28.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box28.style.transition = '1000ms'
    box28.style.backgroundColor = 'lightblue'
    box28.classList.add('cube-block');
})
box29.addEventListener('mouseenter', function () {
    if (box29.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box29.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box29.style.transition = '1000ms'
    box29.style.backgroundColor = 'lightblue'
    box29.classList.add('cube-block');
})
box30.addEventListener('mouseenter', function () {
    if (box30.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box30.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box30.style.transition = '1000ms'
    box30.style.backgroundColor = 'lightblue'
    box30.classList.add('cube-block');
})
box31.addEventListener('mouseenter', function () {
    if (box31.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box31.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box31.style.transition = '1000ms'
    box31.style.backgroundColor = 'lightblue'
    box31.classList.add('cube-block');
})
box32.addEventListener('mouseenter', function () {
    if (box32.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box32.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box32.style.transition = '1000ms'
    box32.style.backgroundColor = 'lightblue'
    box32.classList.add('cube-block');
})
box33.addEventListener('mouseenter', function () {
    if (box33.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box33.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box33.style.transition = '1000ms'
    box33.style.backgroundColor = 'lightblue'
    box33.classList.add('cube-block');
})
box34.addEventListener('mouseenter', function () {
    if (box34.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box34.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box34.style.transition = '1000ms'
    box34.style.backgroundColor = 'lightblue'
    box34.classList.add('cube-block');
})
box35.addEventListener('mouseenter', function () {
    if (box35.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box35.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box35.style.transition = '1000ms'
    box35.style.backgroundColor = 'lightblue'
    box35.classList.add('cube-block');
})
box36.addEventListener('mouseenter', function () {
    if (box36.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box36.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box36.style.transition = '1000ms'
    box36.style.backgroundColor = 'lightblue'
    box36.classList.add('cube-block');
})
box37.addEventListener('mouseenter', function () {
    if (box37.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box37.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box37.style.transition = '1000ms'
    box37.style.backgroundColor = 'lightblue'
    box37.classList.add('cube-block');
})
box38.addEventListener('mouseenter', function () {
    if (box38.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box38.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box38.style.transition = '1000ms'
    box38.style.backgroundColor = 'lightblue'
    box38.classList.add('cube-block');
})
box39.addEventListener('mouseenter', function () {
    if (box39.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box39.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box39.style.transition = '1000ms'
    box39.style.backgroundColor = 'lightblue'
    box39.classList.add('cube-block');
})
box40.addEventListener('mouseenter', function () {
    if (box40.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box40.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box40.style.transition = '1000ms'
    box40.style.backgroundColor = 'lightblue'
    box40.classList.add('cube-block');
})
box41.addEventListener('mouseenter', function () {
    if (box41.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box41.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box41.style.transition = '1000ms'
    box41.style.backgroundColor = 'lightblue'
    box41.classList.add('cube-block');
})
box42.addEventListener('mouseenter', function () {
    if (box42.classList.contains('cube-block')) {
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playLose.style.top = vertical[randomVertical]
        playLose.style.left = horizontal[randomHorizontal]
        gameOver.style.display = 'flex'

    }
    box42.style.transform = 'scale(0.7)'
    winCounter.push('')
    console.log(winCounter.length)
    if (winCounter.length == 42) {
        gameWon.style.display = 'flex'
        randomHorizontal = Math.floor(getRandomHorizontal());
        randomVertical = Math.floor(getRandomVertical());
        playWon.style.top = vertical[randomVertical]
        playWon.style.left = horizontal[randomHorizontal]
    } box42.style.transition = '1000ms'
    box42.style.backgroundColor = 'lightblue'
    box42.classList.add('cube-block');
})
