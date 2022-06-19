const accordionItem = document.querySelectorAll('.accordion-item-holder')
const collapsePlusMinus = document.querySelectorAll('.button-plus-minus')
const sponsorsWrap = document.querySelector('.all-sponsors-wrapp')
const prevButton = document.querySelector('.slide-prev')
const nextButton = document.querySelector('.slide-next')
let myArr = sponsorsWrap.children
let sponsorsDisplayed=5

// event listeners
prevButton.addEventListener('click', function () {
    prevLogic()
})
nextButton.addEventListener('click', function () {
    nextLogic()
})


for (const el of accordionItem) {
    el.addEventListener('click', function () {
        resetAccordion(el)
        let accordionButton = el.children[0]
        let accordionText = el.children[1]
        accordionText.textContent=' '
        getJokeForAccordion(accordionText);
        if (accordionText.classList.contains('collapsed')) {
            accordionText.classList.remove('collapsed')
            accordionButton.children[0].textContent = '-'
        } else {
            accordionText.classList.add('collapsed')
            accordionButton.children[0].textContent = '+'
        }
    })

}

// functions
function resetAccordion(param) {
    for (const el of accordionItem) {
        let accordionButton = el.children[0]
        if (param != el) {
            let accordionText = el.children[1]
            if (accordionText.classList.contains('collapsed')) {
            } else {
                accordionText.classList.add('collapsed')
                accordionButton.children[0].textContent = '+'
            }
        }
    }

}

function nextLogic() {
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i + sponsorsDisplayed] == undefined) {
            return
        } else if (myArr[i].classList.contains('active')) {
            myArr[i].classList.remove('active')
            myArr[i + sponsorsDisplayed].classList.add('active')
            break;
        }
    }
}

function prevLogic() {
    for (let i = myArr.length - 1; i > 0; i--) {
        if (myArr[i - sponsorsDisplayed] == undefined) {
            return
        } else if (myArr[i].classList.contains('active')) {
            myArr[i].classList.remove('active')
            myArr[i - sponsorsDisplayed].classList.add('active')
            break;
        }
    }

}

//  data base /
async function getJokeForAccordion(paragraphOutput) {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    randomJoke = jokeObj.joke
    paragraphOutput.textContent=randomJoke
}