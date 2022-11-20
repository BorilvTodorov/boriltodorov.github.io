import { randomNM ,updateMoney} from '../utils.js'

export function slots(e) {
    const balance = document.getElementById('balance')
    let betElement = document.querySelector('.slotsBet')
    let payOutElement = document.querySelector('.slotsPayout')
    let letInitialBet = Number(betElement.value)
    let currentBet = Number(betElement.value)
    if (Number(balance.textContent) < currentBet) {
        alert('insert Valid Bet')
        return
    } else if (isNaN(betElement.value)) {
        alert('insert Valid Bet')
        return
    }else if(betElement.value==''){
        alert('insert Valid Bet')
        return
    }
    e.target.style.display = 'none'
    balance.textContent = (Number(balance.textContent) - Number(currentBet)).toFixed(2)
    betElement.value = ''
    const canvas = document.querySelector('.slotsCanvas')
    const ctx = canvas.getContext('2d');
    canvas.width = 600
    canvas.height = 600
    let gameFinished = false
    let images = {
        1: "./assets/images/slotImages/1.png",
        2: "./assets/images/slotImages/2.png",
        3: "./assets/images/slotImages/3.png",
        4: "./assets/images/slotImages/4.png",
        5: "./assets/images/slotImages/5.png",
        6: "./assets/images/slotImages/6.png"
    }

    let colors = {
        1: "hotpink",
        2: "crimson",
        3: "yellow",
        4: "gold",
        5: "mediumspringgreen",
        6: "white"
    }

    class Box {
        constructor(x, y, triggerID) {
            this.x = x
            this.y = y
            this.size = 120
            this.velocity = 15
            this.image = new Image()
            this.image.src = "./assets/images/slotCrate.png"
            this.requestedStop = false
            this.triggerID = triggerID
        }
        draw() {
            ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
        }
        update() {
            if (this.requestedStop && this.velocity > 0) {
                this.velocity -= 0.4

                if (this.velocity < 0) {
                    this.velocity = 0
                }

            }
            this.y += this.velocity
            if (this.y > 2280) {
                this.y = -120
            }
        }

    }



    // const oneBox= new Box (0,0,0)

    // boxes slot one
    let slotColumnOne = document.querySelector('.slotColumnOne')
    slotColumnOne.innerHTML = ''
    let displayedDivOne = false
    let displayArrayOne = new Set
    let triggerOneActive = false
    let btnStopOne = document.querySelector('.slotStopOne')
    btnStopOne.addEventListener('click', () => { triggerOneActive = true })
    let slotOneStart = 0
    let slotOneArray = []
    for (let i = 0; i < 20; i++) {
        let id = randomNM(1, 6)
        let box = new Box(-2, slotOneStart, id)
        box.image.src = images[id]
        slotOneStart += 120
        slotOneArray.push(box)
    }

    // boxes slot Two
    let slotColumnTwo = document.querySelector('.slotColumnTwo')
    slotColumnTwo.innerHTML = ''
    let displayedDivTwo = false
    let displayArrayTwo = new Set
    let triggerTwoActive = false
    let btnStopTwo = document.querySelector('.slotStopTwo')
    btnStopTwo.addEventListener('click', () => {
        if (slotColumnOne.childElementCount >= 5) {
            triggerTwoActive = true
        } else {
            showAndHideAlert('Finish Stop One')
        }
    })
    let slotTwoStart = 0
    let slotTwoArray = []
    for (let i = 0; i < 20; i++) {
        let id = randomNM(1, 6)
        let box = new Box(120, slotTwoStart, id)
        box.image.src = images[id]
        slotTwoStart += 120
        slotTwoArray.push(box)
    }

    // boxes slot Three
    let slotColumnThree = document.querySelector('.slotColumnThree')
    slotColumnThree.innerHTML = ''
    let displayedDivThree = false
    let displayArrayThree = new Set
    let triggerThreeActive = false
    let btnStopThree = document.querySelector('.slotStopThree')
    btnStopThree.addEventListener('click', () => {
        if (slotColumnTwo.childElementCount >= 5) {
            triggerThreeActive = true
        } else {
            showAndHideAlert('Finish Stop Two')
        }
    })
    let slotThreeStart = 0
    let slotThreeArray = []
    for (let i = 0; i < 20; i++) {
        let id = randomNM(1, 6)
        let box = new Box(240, slotThreeStart, id)
        box.image.src = images[id]
        slotThreeStart += 120
        slotThreeArray.push(box)
    }


    // boxes slot Four
    let slotColumnFour = document.querySelector('.slotColumnFour')
    slotColumnFour.innerHTML = ''
    let displayedDivFour = false
    let displayArrayFour = new Set
    let triggerFourActive = false
    let btnStopFour = document.querySelector('.slotStopFour')
    btnStopFour.addEventListener('click', () => {
        if (slotColumnThree.childElementCount >= 5) {
            triggerFourActive = true
        } else {
            showAndHideAlert('Finish Stop Three')
        }
    })
    let slotFourStart = 0
    let slotFourArray = []
    for (let i = 0; i < 20; i++) {
        let id = randomNM(1, 6)
        let box = new Box(360, slotFourStart, id)
        box.image.src = images[id]
        slotFourStart += 120
        slotFourArray.push(box)
    }


    let slotColumnFive = document.querySelector('.slotColumnFive')
    slotColumnFive.innerHTML = ''
    let displayedDivFive = false
    let displayArrayFive = new Set
    let triggerFiveActive = false
    let btnStopFive = document.querySelector('.slotStopFive')
    btnStopFive.addEventListener('click', () => {
        if (slotColumnFour.childElementCount >= 5) {
            triggerFiveActive = true
        } else {
            showAndHideAlert('Finish Stop Four')
        }
    })
    let slotFiveStart = 0
    let slotFiveArray = []
    for (let i = 0; i < 20; i++) {
        let id = randomNM(1, 6)
        let box = new Box(480, slotFiveStart, id)
        box.image.src = images[id]
        slotFiveStart += 120
        slotFiveArray.push(box)
    }


    function animate() {
        if (gameFinished) {
            return
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height)
        // slot One
        slotColumnFunctionality(displayArrayOne, slotOneArray, triggerOneActive, displayedDivOne, slotColumnOne)

        // slot Two
        slotColumnFunctionality(displayArrayTwo, slotTwoArray, triggerTwoActive, displayedDivTwo, slotColumnTwo)

        // slot Three
        slotColumnFunctionality(displayArrayThree, slotThreeArray, triggerThreeActive, displayedDivThree, slotColumnThree)

        // // slot Five
        slotColumnFunctionality(displayArrayFour, slotFourArray, triggerFourActive, displayedDivFour, slotColumnFour)

        // slot Five
        slotColumnFunctionality(displayArrayFive, slotFiveArray, triggerFiveActive, displayedDivFive, slotColumnFive)

        ctx.fillStyle = "white";
        ctx.font = '35px Comic Sans MS';
        ctx.fillText(`x`, 40, 20);
        requestAnimationFrame(animate)

        if (slotColumnFive.childElementCount >= 5) {
            gameFinished = true
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            checkMatches(slotColumnOne.children, slotColumnTwo.children, slotColumnThree.children, slotColumnFour.children, slotColumnFive.children)
            e.target.style.display = 'block'
            if (letInitialBet !== currentBet) {
                payOutElement.textContent =Number(currentBet).toFixed(2)
                balance.textContent = (Number(balance.textContent) + Number(payOutElement.textContent)).toFixed(2)
                sessionStorage.money = balance.textContent
            }
            sessionStorage.money = balance.textContent
            updateMoney(sessionStorage.id, Number(sessionStorage.money))
        }
    }
    animate()

    function addToResultArray(set, el) {
        if (el.velocity == 0) {
            if (el.y > 0 && el.y < 600) {
                set.add(el)
            }
        }
    }

    function createDivBoxes(parent, el) {
        let div = document.createElement("div")
        div.classList.add('box')
        div.id = el.triggerID
        div.style.borderColor = colors[el.triggerID]
        let img = document.createElement("img")
        img.src = el.image.src
        div.appendChild(img)
        parent.appendChild(div)
    }



    function slotColumnFunctionality(displaySet, slotArray, trigger, displayDiv, slotColumn) {
        if (slotColumn.childElementCount >= 5) {
            return
        }
        if (displaySet.size < 5) {
            slotArray.forEach(el => {
                el.draw()
                el.update()
                if (trigger) {
                    el.requestedStop = true
                    addToResultArray(displaySet, el)
                }
            })
        }

        if (displaySet.size >= 5 && !displayDiv) {
            displayDiv = true
            displaySet.forEach(el => {
                createDivBoxes(slotColumn, el)
            })
        }
    }



    function showAndHideAlert(message) {
        let p = document.querySelector('.slots p')
        p.style.display = 'block'
        p.textContent = message
        setTimeout(function () { p.style.display = 'none' }, 2000);
    }
    //  check matches


    function checkWilds(box1, box2) {
        if (box1 == box2) {
            return true
        } else if (box1 == 6) {
            return true
        } else if (box2 == 6) {
            return true
        }

    }

    function checkMatches(Arr0, Arr1, Arr2, Arr3, Arr4) {
        if (
            //0
            (checkWilds(Arr0[0].id, Arr1[0].id)) &
            (checkWilds(Arr1[0].id, Arr2[0].id)) &
            (checkWilds(Arr2[0].id, Arr3[0].id)) &
            (checkWilds(Arr3[0].id, Arr4[0].id))
        ) {
            Arr0[0].style.borderStyle = "solid";
            Arr1[0].style.borderStyle = "solid"
            Arr2[0].style.borderStyle = "solid"
            Arr3[0].style.borderStyle = "solid"
            Arr4[0].style.borderStyle = "solid"
            console.log("Horisontal Match 0");
            currentBet *= 1.5

        }

        if (
            //1
            (checkWilds(Arr0[1].id, Arr1[1].id)) &
            (checkWilds(Arr1[1].id, Arr2[1].id)) &
            (checkWilds(Arr2[1].id, Arr3[1].id)) &
            (checkWilds(Arr3[1].id, Arr4[1].id))
        ) {
            Arr0[1].style.borderStyle = "solid"
            Arr1[1].style.borderStyle = "solid"
            Arr2[1].style.borderStyle = "solid"
            Arr3[1].style.borderStyle = "solid"
            Arr4[1].style.borderStyle = "solid"
            console.log("Horisontal Match 1");
            currentBet *= 1.5

        }

        if (
            //22
            (checkWilds(Arr0[2].id, Arr1[2].id)) &
            (checkWilds(Arr1[2].id, Arr2[2].id)) &
            (checkWilds(Arr2[2].id, Arr3[2].id)) &
            (checkWilds(Arr3[2].id, Arr4[2].id))
        ) {
            Arr0[2].style.borderStyle = "solid"
            Arr1[2].style.borderStyle = "solid"
            Arr2[2].style.borderStyle = "solid"
            Arr3[2].style.borderStyle = "solid"
            Arr4[2].style.borderStyle = "solid"
            console.log("Horisontal Match 2");
            currentBet *= 1.5

        }

        if (
            //3
            (checkWilds(Arr0[3].id, Arr1[3].id)) &
            (checkWilds(Arr1[3].id, Arr3[3].id)) &
            (checkWilds(Arr2[3].id, Arr3[3].id)) &
            (checkWilds(Arr3[3].id, Arr4[3].id))
        ) {
            Arr0[3].style.borderStyle = "solid"
            Arr1[3].style.borderStyle = "solid"
            Arr2[3].style.borderStyle = "solid"
            Arr3[3].style.borderStyle = "solid"
            Arr4[3].style.borderStyle = "solid"
            console.log("Horisontal Match 3");
            currentBet *= 1.5

        }

        if (
            //4
            (checkWilds(Arr0[4].id, Arr1[4].id)) &
            (checkWilds(Arr1[4].id, Arr3[4].id)) &
            (checkWilds(Arr2[4].id, Arr3[4].id)) &
            (checkWilds(Arr3[4].id, Arr4[4].id))
        ) {
            Arr0[4].style.borderStyle = "solid"
            Arr1[4].style.borderStyle = "solid"
            Arr2[4].style.borderStyle = "solid"
            Arr3[4].style.borderStyle = "solid"
            Arr4[4].style.borderStyle = "solid"
            console.log("Horisontal Match 4");
            currentBet *= 1.5

        }

        // vertical matches _-----------------------------------------------------------------
        if (
            (checkWilds(Arr0[0].id, Arr0[1].id)) &
            (checkWilds(Arr0[1].id, Arr0[2].id)) &
            (checkWilds(Arr0[2].id, Arr0[3].id)) &
            (checkWilds(Arr0[3].id, Arr0[4].id))
        ) {
            Arr0[0].style.borderStyle = "solid"
            Arr0[1].style.borderStyle = "solid"
            Arr0[2].style.borderStyle = "solid"
            Arr0[3].style.borderStyle = "solid"
            Arr0[4].style.borderStyle = "solid"
            console.log("Vertical Match 0");
            currentBet *= 1.5

        }

        if (
            //1
            (checkWilds(Arr1[0].id, Arr1[1].id)) &
            (checkWilds(Arr1[1].id, Arr1[2].id)) &
            (checkWilds(Arr1[2].id, Arr1[3].id)) &
            (checkWilds(Arr1[3].id, Arr1[4].id))
        ) {
            Arr1[0].style.borderStyle = "solid"
            Arr1[1].style.borderStyle = "solid"
            Arr1[2].style.borderStyle = "solid"
            Arr1[3].style.borderStyle = "solid"
            Arr1[4].style.borderStyle = "solid"
            console.log("Vertical Match 1");
            currentBet *= 1.5

        }

        if (
            //2
            (checkWilds(Arr2[0].id, Arr2[1].id)) &
            (checkWilds(Arr2[1].id, Arr2[2].id)) &
            (checkWilds(Arr2[2].id, Arr2[3].id)) &
            (checkWilds(Arr2[3].id, Arr2[4].id))
        ) {
            Arr2[0].style.borderStyle = "solid"
            Arr2[1].style.borderStyle = "solid"
            Arr2[2].style.borderStyle = "solid"
            Arr2[3].style.borderStyle = "solid"
            Arr2[4].style.borderStyle = "solid"
            console.log("Vertical Match 2");
            currentBet *= 1.5

        }

        if (
            //3
            (checkWilds(Arr3[0].id, Arr3[1].id)) &
            (checkWilds(Arr3[1].id, Arr3[2].id)) &
            (checkWilds(Arr3[2].id, Arr3[3].id)) &
            (checkWilds(Arr3[3].id, Arr3[4].id))
        ) {
            Arr3[0].style.borderStyle = "solid"
            Arr3[1].style.borderStyle = "solid"
            Arr3[2].style.borderStyle = "solid"
            Arr3[3].style.borderStyle = "solid"
            Arr3[4].style.borderStyle = "solid"
            console.log("Vertical Match 3");
            currentBet *= 1.5

        }

        if (
            //4
            (checkWilds(Arr4[0].id, Arr4[1].id)) &
            (checkWilds(Arr4[1].id, Arr4[2].id)) &
            (checkWilds(Arr4[2].id, Arr4[3].id)) &
            (checkWilds(Arr4[3].id, Arr4[4].id))
        ) {
            Arr4[0].style.borderStyle = "solid"
            Arr4[1].style.borderStyle = "solid"
            Arr4[2].style.borderStyle = "solid"
            Arr4[3].style.borderStyle = "solid"
            Arr4[4].style.borderStyle = "solid"
            console.log("Vertical Match 4");
            currentBet *= 1.5

        }
        // diagonal Match
        if (
            (checkWilds(Arr0[4].id, Arr1[3].id)) &
            (checkWilds(Arr1[3].id, Arr2[2].id)) &
            (checkWilds(Arr2[2].id, Arr3[1].id)) &
            (checkWilds(Arr3[1].id, Arr4[0].id))
        ) {
            Arr4[0].style.borderStyle = "solid"
            Arr3[1].style.borderStyle = "solid"
            Arr2[2].style.borderStyle = "solid"
            Arr1[3].style.borderStyle = "solid"
            Arr0[4].style.borderStyle = "solid"
            console.log("Diagonal Up match");
            currentBet *= 1.5

        }
        if (
            (checkWilds(Arr0[0].id, Arr1[1].id)) &
            (checkWilds(Arr1[1].id, Arr2[2].id)) &
            (checkWilds(Arr2[2].id, Arr3[3].id)) &
            (checkWilds(Arr3[3].id, Arr4[4].id))
        ) {
            Arr0[0].style.borderStyle = "solid"
            Arr1[1].style.borderStyle = "solid"
            Arr2[2].style.borderStyle = "solid"
            Arr3[3].style.borderStyle = "solid"
            Arr4[4].style.borderStyle = "solid"
            console.log("Diagonal Down match");
            currentBet *= 1.5

        }
    }

}


/*

if Arr0[0]==Arr1[0] | & Arr1[0]==Arr2[0] & Arr2[0]==Arr3[0] & Arr3[0]==Arr4[0]  - Horisontal Match 0
if Arr0[1]==Arr1[1] & Arr1[1]==Arr2[1] & Arr2[1]==Arr3[1] & Arr3[1]==Arr4[1]  - Horisontal Match 1
if Arr0[2]==Arr1[2] & Arr1[2]==Arr2[2] & Arr2[2]==Arr3[2] & Arr3[2]==Arr4[2]  - Horisontal Match 2
if Arr0[3]==Arr1[3] & Arr1[3]==Arr2[3] & Arr2[3]==Arr3[3] & Arr3[3]==Arr4[3]  - Horisontal Match 3
if Arr0[4]==Arr1[4] & Arr1[4]==Arr2[4] & Arr2[4]==Arr3[4] & Arr3[4]==Arr4[4]  - Horisontal Match 4

if Arr0[0]==Arr0[1] & Arr0[1]==Arr0[2] & Arr0[2]==Arr0[3] & Arr0[3]==Arr0[4]  - Vertical Match 0
if Arr1[0]==Arr1[1] & Arr1[1]==Arr1[2] & Arr1[2]==Arr1[3] & Arr1[3]==Arr1[4]  - Vertical Match 1
if Arr2[0]==Arr2[1] & Arr2[1]==Arr2[2] & Arr2[2]==Arr2[3] & Arr2[3]==Arr2[4]  - Vertical Match 2
if Arr3[0]==Arr3[1] & Arr3[1]==Arr3[2] & Arr3[2]==Arr3[3] & Arr3[3]==Arr3[4]  - Vertical Match 3
if Arr4[0]==Arr4[1] & Arr4[1]==Arr4[2] & Arr4[2]==Arr4[3] & Arr4[3]==Arr4[4]  - Vertical Match 4
 
if Arr0[0]==Arr1[1] & Arr1[1]==Arr2[2] & Arr2[2]==Arr3[3]& Arr3[3]==Arr4[4] -Diagonal Down match
if Arr0[4]==Arr1[3] & Arr1[3]==Arr2[2] & Arr2[2]==Arr3[1]& Arr3[1]==Arr4[0] -Diagonal Up match

_Arr0__Arr1__Arr2__Arr3__Arr4_
W  |  W  |  S  |  S  |  S  | [0]
W  |  T  |  S  |  T  |  W  | [1]
S  |  W  |  W  |  S  |  W  | [2]
W  |  T  |  T  |  T  |  T  | [3]
W  |  T  |  T  |  T  |  T  | [4]
 
*/

