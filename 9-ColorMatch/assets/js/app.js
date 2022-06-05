const boxHolder = document.querySelector('.boxes')
const color1 = document.querySelector('.color-1')
const color2 = document.querySelector('.color-2')
const color3 = document.querySelector('.color-3')
const color4 = document.querySelector('.color-4')
const color5 = document.querySelector('.color-5')
const moves = document.querySelector('.Moves-left')
const Gamelevel = document.querySelector('.Game-level')
const WinOrLose = document.querySelector('.WinOrLose')
const coloursArray = ['lightseagreen', 'lightpink', 'lightgreen', 'lightblue', 'lightgoldenrodyellow']
const refresh = document.querySelector('.refresh-level')
const nextLevel = document.querySelector('.next-level')
const prevLevel = document.querySelector('.prev-level')
let gameWon = false
let randomNumber = Math.floor(getRandomNumber())
let currentColor = 'lightgreen'
let lefties = [8, 17, 26, 35, 44, 53, 62, 71]
let righties = [0, 9, 18, 27, 36, 45, 54, 63]
let movesLeft = 2
let currentGameLevel = 1
let levelsPassedArray = []

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////// Event Listeners //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
    updateMoves();
    createBox();
    horizotalColor(0, 9, 26)
    horizotalColor(1, 27, 44)
    horizotalColor(2, 45, 62)
});

refresh.addEventListener('click', function () {

    refreshCurrentLevel(currentGameLevel);
})

nextLevel.addEventListener('click', function () {
    goToNextLevel(currentGameLevel);
})

prevLevel.addEventListener('click', function () {
    if (currentGameLevel == 1) {
        return
    }
    goToPreviousLevel(currentGameLevel);
})

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////// SIDE FUNCTIONS //////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
function generateLevel(level) {
    if (currentGameLevel == 1) {
        horizotalColor(0, 9, 26)
        horizotalColor(1, 27, 44)
        horizotalColor(2, 45, 62)
        WinOrLose.style.display = 'none';
        movesLeft = 2;
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 2) {
        horizotalColor(1, 9, 17)
        horizotalColor(4, 18, 26)
        horizotalColor(1, 27, 44)
        horizotalColor(2, 45, 62)
        WinOrLose.style.display = 'none';
        movesLeft = 2;
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 3) {
        horizotalColor(1, 9, 17)
        horizotalColor(3, 18, 26)
        horizotalColor(4, 27, 44)
        horizotalColor(0, 45, 62)
        WinOrLose.style.display = 'none';
        movesLeft = 3
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 4) {
        horizotalColor(1, 9, 13)
        horizotalColor(3, 14, 17)
        horizotalColor(0, 18, 26)
        horizotalColor(4, 27, 53)
        horizotalColor(1, 54, 62)
        WinOrLose.style.display = 'none';
        movesLeft = 3
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 5) {
        horizotalColor(1, 9, 13)
        horizotalColor(3, 14, 17)
        horizotalColor(2, 18, 26)
        horizotalColor(4, 27, 53)
        horizotalColor(1, 54, 62)
        verticalColor(4, 9, 54)
        singleColor(3,60)
        singleColor(2,50)
        singleColor(2,51)
        singleColor(2,52)
        WinOrLose.style.display = 'none';
        movesLeft = 3
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 6) {
        horizotalColor(1, 9, 26)
        horizotalColor(0, 27, 44)
        horizotalColor(4, 45, 62)
        specificColour(3, 9, 17, 53, 62, 29, 33)
        specificColour(2, 31, 30, 52, 61, 28, 32)
        WinOrLose.style.display = 'none';
        movesLeft = 4
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 7) {
        horizotalColor(4, 9, 62)
        verticalColor(4, 9, 54)
        verticalColor(0, 12, 57)
        verticalColor(4, 14, 59)
        verticalColor(0, 17, 62)
        specificColour(3, 9, 17, 53, 46, 29, 33)
        specificColour(2, 31, 30, 52, 61, 28, 29)
        WinOrLose.style.display = 'none';
        movesLeft = 4
        updateMoves();
        updateLevel();
    } else if (currentGameLevel == 8) {
        horizotalColor(1, 9, 62)
        specificColour(4, 9, 17, 54, 62, 31, 30)
        specificColour(3, 20, 29, 38, 39, 40, 41)
        specificColour(3, 21, 22, 23, 24, 33, 42)
        verticalColor(0, 9, 54)
        verticalColor(0, 17, 62)
        verticalColor(4, 14, 59)
        singleColor(3,55)
        WinOrLose.style.display = 'none';
        movesLeft = 4
        updateMoves();
        updateLevel();
    }else if (currentGameLevel == 9) {
        horizotalColor(4, 9, 62)
        horizotalColor(3, 27, 44)
        diagonalColor(1,9,59)
        diagonalColor(1,12,62)
        diagonalColor(1,15,35)
        singleColor(1,54)
        singleColor(0,45)
        singleColor(0,55)
        singleColor(0,23)
        singleColor(0,60)
        singleColor(4,15)
        WinOrLose.style.display = 'none';
        movesLeft = 6
        updateMoves();
        updateLevel();
    }else if (currentGameLevel == 10) {
        horizotalColor(0, 9, 62)
        verticalColor(4,9,54)
        verticalColor(3,10,55)
        verticalColor(4,11,56)
        verticalColor(1,13,58)
        verticalColor(1,17,62)
        diagonalColor(3,11,61)
        verticalColor(2,12,57)
        singleColor(2,27)
        singleColor(2,44)
        singleColor(3,29)
        singleColor(3,30)
        singleColor(4,15)
        singleColor(4,59)
        singleColor(1,47)
        singleColor(0,48)
        WinOrLose.style.display = 'none';
        movesLeft = 5
        updateMoves();
        updateLevel();
    }


    else {

        currentGameLevel = 10;
        console.log('no more levels')


    }
}


function refreshCurrentLevel(level) {
    generateLevel(level);

}

function goToNextLevel(level) {
    currentGameLevel++
    generateLevel(level);

}
function goToPreviousLevel(level) {
    currentGameLevel--
    generateLevel(level);

}

function updateLevel() {
    Gamelevel.textContent = currentGameLevel
}
function movesCounter(e) {
    if (e.screenX != 0) {
        movesLeft--
        updateMoves()
    }

    winCondish()

    if (movesLeft == 0) {
        nextLevel.style.display = 'none'
        WinOrLose.style.display = 'flex'
        WinOrLose.childNodes[1].textContent = 'Out of Moves'
        winCondish()
    }
}

function updateMoves() {
    moves.textContent = movesLeft
}


function getRandomNumber() {
    return Math.random() * coloursArray.length;
}

function winCondish() {
    let wincounter = 1
    for (let i = 10; i <= 62; i++) {
        const element = boxHolder.childNodes[i]
        if (element.style.backgroundColor == currentColor) {
            wincounter++
        } else {
            wincounter = 1
        }
    }
    if (wincounter == 54) {
        WinOrLose.childNodes[1].textContent = 'Level Completed'
        WinOrLose.style.display = 'flex'
        nextLevel.style.display = 'flex'
    } else {
    }
}


function horizotalColor(ColorIndex, start, finish) {
    let color = coloursArray[ColorIndex]
    for (let i = start; i <= finish; i++) {
        let element = boxHolder.childNodes[i]
        element.style.backgroundColor = color
    }
}

function diagonalColor(ColorIndex, start, finish) {
    let color = coloursArray[ColorIndex]
    for (let i = start; i <= finish; i += 10) {
        let element = boxHolder.childNodes[i]
        element.style.backgroundColor = color

    }
}
function verticalColor(ColorIndex, start, finish) {
    let color = coloursArray[ColorIndex]
    for (let i = start; i <= finish; i += 9) {
        let element = boxHolder.childNodes[i]
        element.style.backgroundColor = color

    }
}

function specificColour(ColorIndex, block1, block2, block3, block4, block5, block6) {
    let color = coloursArray[ColorIndex]
    let element1 = boxHolder.childNodes[block1]
    let element2 = boxHolder.childNodes[block2]
    let element3 = boxHolder.childNodes[block3]
    let element4 = boxHolder.childNodes[block4]
    let element5 = boxHolder.childNodes[block5]
    let element6 = boxHolder.childNodes[block6]
    element1.style.backgroundColor = color
    element2.style.backgroundColor = color
    element3.style.backgroundColor = color
    element4.style.backgroundColor = color
    element5.style.backgroundColor = color
    element6.style.backgroundColor = color
}

function singleColor(ColorIndex, block1){
    let color = coloursArray[ColorIndex]
    let element = boxHolder.childNodes[block1]
    element.style.backgroundColor = color


}

function randomColors(){
    for (let i = 10; i <=62; i++) {
        let element = boxHolder.childNodes[i]
        let randomNumber = Math.floor(getRandomNumber())
        element.style.background = coloursArray[randomNumber]
        }

}


/////////////////////////////////////////////////////////////////////////////////
////////////////////// MAIN Game Locig/////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

function createBox() {
    for (let i = 0; i < 72; i++) {
        let randomNumber = Math.floor(getRandomNumber())
        const newBox = document.createElement('div')
        newBox.classList.add('box')
        if (i >= 63 || i <= 8) {
            newBox.style.display = 'none'
        }
        newBox.textContent = i
        // newBox.style.background = coloursArray[randomNumber]
        boxHolder.appendChild(newBox)
        newBox.addEventListener('click', function (e) {
            e.preventDefault();
            let target = Number(e.target.textContent)
            newColoringLogic(target);
            movesCounter(e)


        })
    }

}


function notSiblings(target, targetArray) {
    if (target.textContent == Number(targetArray[0]) ||
        target.textContent == targetArray[1] ||
        target.textContent == targetArray[2] ||
        target.textContent == targetArray[3] ||
        target.textContent == targetArray[4] ||
        target.textContent == targetArray[5] ||
        target.textContent == targetArray[6] ||
        target.textContent == targetArray[7]
    ) {
    } else {
        target.click()
    }
}




///////////////////////////////////////////////////// scrap prev logic//////////////////////

function newColoringLogic(currentElementIndex) {
    let leftIndex = currentElementIndex - 1
    let rightIndex = currentElementIndex + 1
    let upIndex = currentElementIndex - 9
    let downIndex = currentElementIndex + 9

    let C = boxHolder.childNodes[currentElementIndex]
    let L = boxHolder.childNodes[leftIndex]
    let R = boxHolder.childNodes[rightIndex]
    let T = boxHolder.childNodes[upIndex]
    let B = boxHolder.childNodes[downIndex]
    if (C.style.backgroundColor == currentColor) {
        return
    }




    if (L !== undefined && R !== undefined && T !== undefined && B !== undefined) { // if nothing is undefined

        if (//LRTB
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks
            T.click()
            B.click()

        } else if (// RTB
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        }
        else if (// LTB
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks
            B.click()
            // if (!notSiblings(R, righties)) { }// Right Clicks
        }
        else if (// LRT
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks

        } else if (// LRB
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        } else if (// RT
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(R, righties)) { }// Right Clicks

        } else if (// LT
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks

        } else if (// LB
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            B.click()

        } else if (// LR
            C.style.backgroundColor == L.style.backgroundColor &&
            C.style.backgroundColor == R.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks


        } else if (// RB
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        } else if (// TB
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            B.click()

        } else if (//B
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            B.click()

        } else if (// L
            C.style.backgroundColor == L.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks


        } else if (// R
            C.style.backgroundColor == R.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(R, righties)) { }// Right Clicks


        } else if (// T
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()

        } else { console.log('im already colored') }
        // undefined starts here
    } else if (T == undefined && R == undefined) {//'undefinde TR
        if (C.style.backgroundColor == L.style.backgroundColor &&// LB
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            B.click()

        }

    } else if (T == undefined && L == undefined) {//'undefinde TL
        if (// RB
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        }



    } else if (B == undefined && R == undefined) {//'undefinde BR
        if (C.style.backgroundColor == L.style.backgroundColor &&// LT
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks

        }

    } else if (B == undefined && L == undefined) {//'undefindundefinde BL
        if (// RT
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(R, righties)) { }// Right Clicks

        }

    } else if (L == undefined) {//'undefinde L
        if (// RTB
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        }

    } else if (R == undefined) {//'undefinde R
        if (C.style.backgroundColor == L.style.backgroundColor &&// LTB
            C.style.backgroundColor == T.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks

        }

    } else if (B == undefined) {//'undefinde B
        if (C.style.backgroundColor == L.style.backgroundColor &&// LRT
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == T.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            T.click()
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks

        }

    } else if (T == undefined) {//Undefinde T
        if (C.style.backgroundColor == L.style.backgroundColor &&// LRB
            C.style.backgroundColor == R.style.backgroundColor &&
            C.style.backgroundColor == B.style.backgroundColor) {
            C.style.backgroundColor = currentColor
            if (!notSiblings(L, lefties)) { }// Left Clicks
            if (!notSiblings(R, righties)) { }// Right Clicks
            B.click()

        }
    }
    C.style.backgroundColor = currentColor
}

// pallet section////////////////////////////////////////////////////////////////

function pickColour(param, param2, param3, param4, param5) {
    if (param.classList.contains('active')) {
    } else {
        param.classList.add('active')
        if (param2.classList.contains('active')) {
            param2.classList.remove('active')
        }
        if (param3.classList.contains('active')) {
            param3.classList.remove('active')
        }
        if (param4.classList.contains('active')) {
            param4.classList.remove('active')
        }
        if (param5.classList.contains('active')) {
            param5.classList.remove('active')
        }
    }
}



color1.addEventListener('click', function () {
    currentColor = coloursArray[0]
    pickColour(color1, color2, color3, color4, color5)
})
color2.addEventListener('click', function () {
    currentColor = coloursArray[1]
    pickColour(color2, color1, color3, color4, color5)
})
color3.addEventListener('click', function () {
    currentColor = coloursArray[2]
    pickColour(color3, color1, color2, color4, color5)
})
color4.addEventListener('click', function () {
    currentColor = coloursArray[3]
    pickColour(color4, color1, color2, color3, color5)
})
color5.addEventListener('click', function () {
    currentColor = coloursArray[4]
    pickColour(color5, color1, color2, color4, color3)
})

