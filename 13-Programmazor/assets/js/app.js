const speedUp=document.querySelector('.speedUp')
const speedDown=document.querySelector('.speedDown')
const pause=document.querySelector('.pause')
const play=document.querySelector('.play')
let SPEED = 0.01

speedUp.addEventListener('click', function(){
    SPEED+=0.004
    dinoFlySpeed-=2;
})
speedDown.addEventListener('click', function(){
    if(SPEED>=0.010){
        SPEED-=0.01
    }
    if(dinoFlySpeed>=120){
        dinoFlySpeed+=5;
    }
})
pause.addEventListener('click', function(){
    SPEED=0;
})
play.addEventListener('click', function(){
    if(SPEED>=0.010&&dinoFlySpeed>=120){
        return
    }else{
        SPEED = 0.01
        dinoFlySpeed=120
    }
})

const flyingDino = document.querySelector('.dino')
let dinoFlySpeed=120
const flyArray = [
    './images/FlyingDino-1.png',
    './images/FlyingDino-2.png',
    './images/FlyingDino-3.png',
    './images/FlyingDino-4.png',
    './images/FlyingDino-5.png',
    './images/FlyingDino-6.png',
    './images/FlyingDino-7.png',
]
function makeDinoFly() {
    let dinoString = flyingDino.src
    //http://127.0.0.1:5501/assets/images/FlyingDino-1.png
    if (dinoString.includes('o-1')) {
        flyingDino.src = flyArray[1]
    } else if (dinoString.includes('o-2')) {
        flyingDino.src = flyArray[2]
    } else if (dinoString.includes('o-3')) {
        flyingDino.src = flyArray[3]
    } else if (dinoString.includes('o-4')) {
        flyingDino.src = flyArray[4]
    } else if (dinoString.includes('o-5')) {
        flyingDino.src = flyArray[5]
    } else if (dinoString.includes('o-6')) {
        flyingDino.src = flyArray[6]
    } else if (dinoString.includes('o-7')) {
        flyingDino.src = flyArray[0]
    }


    setTimeout(makeDinoFly, dinoFlySpeed)
}
makeDinoFly();

document.onkeydown = checkKey;
let movement = '30'
function checkKey(e) {
    e = e || window.event;

    if (e.keyCode == '38') {//key up
        incrementCustomProperty(flyingDino, 'top', -15)
    } else if (e.keyCode == '40') {//key down
        incrementCustomProperty(flyingDino, 'top', 15)
    } else if (e.keyCode == '37') {//key left
        incrementCustomProperty(flyingDino, 'left', -15)
    } else if (e.keyCode == '39') {//key right
        incrementCustomProperty(flyingDino, 'left', 15)


    }

}

// world scale
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 49;
const worldElement = document.querySelector('.world')
setPixelToWorldScale()
window.addEventListener('resize', setPixelToWorldScale)

function setPixelToWorldScale() {
    let worldToPixelScale
    if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
        worldToPixelScale = window.innerWidth / WORLD_WIDTH
    } else {
        worldToPixelScale = window.innerHeight / WORLD_HEIGHT
    }
    worldElement.style.width = `${WORLD_WIDTH * worldToPixelScale}px`
    worldElement.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`
}

// Update frames
let lastTime
function update(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(update)
        return
    }
    const delta = time - lastTime
    // console.log(delta)
    uptadeGround(delta)
    updateCloudA(delta)
    updateCloudB(delta)
    updateCloudC(delta)
    // updateClouds(delta)

    // console.log('Dino->',getDinoRect(),'Cloud->',getCloudARect())
    if (checkAnswerA()) { }
    if (checkAnswerB()) { }
    if (checkAnswerC()) { }
    lastTime = time
    window.requestAnimationFrame(update)
}
window.requestAnimationFrame(update)


// Ground
const groundElements = document.querySelectorAll('.ground')

function uptadeGround(delta) {
    groundElements.forEach(ground => {
        incrementCustomProperty(ground, '--left', delta * SPEED * -0.5)

        if (getCustomProperty(ground, '--left') <= -100) {
            incrementCustomProperty(ground, '--left', 200)
        }
    })
}

// Update custom Property
function setupGround() {
    setCustomProperty(groundElements[0], '--left', 0)
    setCustomProperty(groundElements[1], '--left', 100)
}
setupGround();
function getCustomProperty(element, prop) {
    return parseFloat(getComputedStyle(element).getPropertyValue(prop)) || 0

}

function setCustomProperty(element, prop, value) {
    element.style.setProperty(prop, value)

}

function incrementCustomProperty(element, prop, inc) {
    setCustomProperty(element, prop, getCustomProperty(element, prop) + inc)

}

const cloudA = document.querySelector('.Clound-A')
const cloudB = document.querySelector('.Clound-B')
const cloudC = document.querySelector('.Clound-C')


function updateCloudA(delta) {
    incrementCustomProperty(cloudA, '--left', delta * SPEED * -0.18)
}

function updateCloudB(delta) {
    incrementCustomProperty(cloudB, '--left', delta * SPEED * -0.18)
}

function updateCloudC(delta) {
    incrementCustomProperty(cloudC, '--left', delta * SPEED * -0.18)
}

// // collission of dino and clouds

function getDinoRect() {
    return flyingDino.getBoundingClientRect();
}

function getCloudARect() {
    return cloudA.getBoundingClientRect();
}
function getCloudBRect() {
    return cloudB.getBoundingClientRect();
}
function getCloudCRect() {
    return cloudC.getBoundingClientRect();
}

// check answer A
function isCollisionA(rect1, rect2) {
    let dinoX = rect2.x
    let DinoY = rect2.y
    let cloudX = rect1.x
    let cloudY = rect1.y
    if (cloudX - 50 <= dinoX &&
        cloudX + 50 >= dinoX &&
        cloudY - 25 <= DinoY &&
        cloudY + 25 >= DinoY) {
            cloudA.style.display = "none"
            resetCloudsPossition()
            updateQuestion('A')
    }

}

function checkAnswerA() {
    return isCollisionA(getCloudARect(), getDinoRect())

}

// check answer B

function isCollisionB(rect1, rect2) {
    let dinoX = rect2.x
    let DinoY = rect2.y
    let cloudX = rect1.x
    let cloudY = rect1.y
    if (cloudX - 50 <= dinoX &&
        cloudX + 50 >= dinoX &&
        cloudY - 45 <= DinoY &&
        cloudY + 45 >= DinoY) {
        cloudB.style.display = "none"
        resetCloudsPossition()
        updateQuestion('B')
    }

}

function checkAnswerB() {
    return isCollisionB(getCloudBRect(), getDinoRect())

}


// check answer C

function isCollisionC(rect1, rect2) {
    let dinoX = rect2.x
    let DinoY = rect2.y
    let cloudX = rect1.x
    let cloudY = rect1.y
    if (cloudX - 50 <= dinoX &&
        cloudX + 50 >= dinoX &&
        cloudY - 45 <= DinoY &&
        cloudY + 45 >= DinoY) {
        cloudC.style.display = "none"
        resetCloudsPossition()
        console.log(` From Collission`,questionCounter)
        updateQuestion('C')
    }

}

function checkAnswerC() {
    return isCollisionC(getCloudCRect(), getDinoRect())

}


function resetCloudsPossition() {
    setCustomProperty(cloudA, '--left', 85)
    setCustomProperty(cloudB, '--left', 85)
    setCustomProperty(cloudC, '--left', 85)
    cloudA.style.display = 'flex'
    cloudB.style.display = 'flex'
    cloudC.style.display = 'flex'
}

const questionParagraph = document.querySelector('.question-paragraph')
let collissionCounter=0
let correctAnswers=0;
let questionCounter=1;
let questions=[
    {Question:'',A:'',B:'',C:'',Answer:''},
    {Question:'Inside which HTML element do we put the JavaScript?',A:'<js>',B:'<javascript>',C:'<script>',Answer:'C'},
    {Question:'Where is the correct place to insert a JavaScript?',A:'The <body> section',B:'The <head> section',C:'Both "A" and "B" ',Answer:'C'},
    {Question:`What is the correct syntax for referring to an external script called "xxx.js"?`,A:'<script name="xxx.js">',B:`<script href="xxx.js">`,C:`<script src="xxx.js">`,Answer:'C'},
    {Question:`The external JavaScript file must contain the <script> tag.`,A:'False',B:'True',C:'Kangaroo',Answer:'A'},
    {Question:`How do you write "Hello World" in an alert box?`,A:'alert("Hello World");',B:'alertBox("Hello World");',C:'msgBox("Hello World");',Answer:'A'},
    {Question:`How do you create a function in JavaScript?`,A:'function = myFunction()',B:'function:myFunction()',C:'function myFunction()',Answer:'C'},
    {Question:`How do you call a function named "myFunction"?`,A:'call myFunction()',B:'myFunction()',C:'call function myFunction()',Answer:'B'},
    {Question:`How to write an IF statement in JavaScript?`,A:'if i = 5 then',B:'if (i == 5)',C:'if i = 5',Answer:'B'},
    {Question:`How to write an IF statement for executing some code if "i" is NOT equal to 5?`,A:'if (i != 5)',B:'if i <> 5',C:'if i =! 5 then',Answer:'A'},
    {Question:`How does a WHILE loop start?`,A:'while i = 1 to 10',B:'while (i <= 10; i++)',C:'while (i <= 10)',Answer:'C'},
    {Question:`How does a FOR loop start?`,A:'for (i <= 5; i++)',B:'for i = 1 to 5',C:'for (i = 0; i <= 5; i++)',Answer:'C'},
    {Question:`How can you add a comment in a JavaScript?`,A:`'This is a comment`,B:'//This is a comment',C:'<!--This is a comment-->',Answer:'B'},
    {Question:`How to insert a comment that has more than one line?`,A:`<!--This comment has
    more than one line-->`,B:`/*This comment has
    more than one line*/`,C:`//This comment has
    more than one line//
    `,Answer:'B'},
    {Question:` What is the correct way to write a JavaScript array?`,A:'let colors = "red","green","blue"',B:'let colors = ["red","green","blue"]',C:'var colors = (1:"red",2:"green",3:"blue")',Answer:'B'},
    {Question:` How do you round the number 7.25, to the nearest integer?`,A:'rnd(7.25)',B:'Math.rnd(7.25)',C:'Math.round(7.25)',Answer:'C'},
    {Question:`How do you find the number with the highest value of x and y?`,A:'top(x, y)',B:'Math.max(x, y)',C:'Math.ceil(x, y)',Answer:'B'},
    {Question:` JavaScript is the same as Java.`,A:'False ',B:'True',C:'Kangaroo',Answer:'A'},
    {Question:` How can you detect the client's browser name?`,A:'browser.name',B:'client.navName',C:'navigator.appName',Answer:'C'},
    {Question:` Which event occurs when the user clicks on an HTML element?`,A:'onmouseover',B:'onclick',C:'onchange',Answer:'B'},
    {Question:` How do you declare a JavaScript variable?`,A:'variable carName;',B:'v carName;',C:'var carName;',Answer:'C'},
    {Question:` Which operator is used to assign a value to a variable?`,A:'x',B:'*',C:'=',Answer:'C'},
    {Question:` What will the following code return: Boolean(10 > 9)`,A:'true',B:'false',C:'NaN',Answer:'A'},
    {Question:` Is JavaScript case-sensitive? `,A:'No',B:'Yes',C:'Sometimes',Answer:'B'},
    {Question:` Congrats You have finished the quiz.The maximum socre you can get is 23`,A:'Thanks',B:'For',C:'Helping',Answer:'End'},
    {Question:` Congrats You have finished the quiz.The maximum socre you can get is 23`,A:'Thanks',B:'For',C:'Helping',Answer:'End'}
]

const currentScore=document.querySelector('.Score')
function updateQuestion(collissionAnswer) {
    if(collissionAnswer==questions[questionCounter-1].Answer){
        correctAnswers++;
        currentScore.textContent=String(correctAnswers);
    }else if (questions[questionCounter-1].Answer=='End'){
        return
    }
    
    questionParagraph.textContent =questions[questionCounter].Question
    const answerA = document.createElement('li')
    const answerB = document.createElement('li')
    const answerC = document.createElement('li')
    answerA.textContent = questions[questionCounter].A
    answerB.textContent = questions[questionCounter].B
    answerC.textContent = questions[questionCounter].C
    answerA.classList.add('answer-A')
    answerB.classList.add('answer-B')
    answerC.classList.add('answer-C')
    questionParagraph.appendChild(answerA)
    questionParagraph.appendChild(answerB)
    questionParagraph.appendChild(answerC)
    questionCounter++
}
