const chat = document.querySelector('.chat-msg')
const submitForm = document.querySelector('.chat-reply')
const replyText = document.querySelector('.reply-input')
const bubles = document.querySelector('.bubles-animation')
const openingTime = document.querySelector('.timeNow')
const johnReplys = ['...Funny right?', '..I got another one?', '...Ready for more?', `..This is fun, lets go for one more?`, `Are you having fun?`, `Let's go for one more ?`, `Still having fun?`]




let date = new Date
let minutes = date.getMinutes();
let hours = date.getHours();
if (minutes <= 9) {
    minutes = `0${minutes}`
}
if (hours <= 9) {
    hours = `0${hours}`
}
openingTime.textContent = `${hours}:${minutes}`


let randomNumber = Math.floor(getRandomNumber())
function getRandomNumber() {
    return Math.random() * johnReplys.length;
}

replyText.addEventListener('focusin', function (e) {
    bubbles('right-bubbles');
})
replyText.addEventListener('focusout', function () {
    deleteBubbles();

})

submitForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (replyText.value != '') {
        deleteBubbles();
        myComment(replyText.value);
        getJoke();
        replyText.value = ''
    }
})


async function getJoke() {
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeObj = await jokeData.json();
    randomJoke = jokeObj.joke
    johnBubbles();
    setTimeout(function () {
        deleteBubbles();
        johnComment(randomJoke);
    }, 5000)
}



function johnComment(joke) {
    let date = new Date
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (minutes <= 9) {
        minutes = `0${minutes}`
    }
    if (hours <= 9) {
        hours = `0${hours}`
    }
    let randomNumber = Math.floor(getRandomNumber())
    const divJohnComment = document.createElement('div');
    divJohnComment.classList.add('john-comment')
    divJohnComment.innerHTML =
        `<figure class="avatar">
            <img src="./assets/images/Face.webp" alt="IMG">
        </figure>
        <div class="john-said">
            <h3>${joke}</h3>
            <h3>${johnReplys[randomNumber]}</h3>
            <h5>${hours}:${minutes}</h5>
        </div>`
    chat.appendChild(divJohnComment)
}


function myComment(comment) {
    let date = new Date
    let minutes = date.getMinutes();
    let hours = date.getHours();
    if (minutes <= 9) {
        minutes = `0${minutes}`
    }
    if (hours <= 9) {
        hours = `0${hours}`
    }

    const myCommnet = document.createElement('div')
    myCommnet.classList.add('my-comment')
    myCommnet.innerHTML = `
    <div class="i-said">
        <h3>${comment}</h3>
        <h5>${hours}:${minutes}</h5>
    </div>   `
    chat.appendChild(myCommnet)
}

function bubbles(position) {
    let bublesDiv = document.createElement('div')
    bublesDiv.classList.add('bubles')
    let bubleAnimation = document.createElement('div')
    bubleAnimation.classList.add('bubles-animation')
    bubleAnimation.innerHTML = `
    <div class="buble buble-1"></div>
    <div class="buble buble-2"></div>
    <div class="buble buble-3"></div>
    `
    bubleAnimation.classList.add(position)
    bublesDiv.appendChild(bubleAnimation)
    chat.appendChild(bublesDiv)
    bublesDiv.style.display = "block"
}

function deleteBubbles() {
    let bubbles = document.querySelectorAll('.bubles')
    for (let i = 0; i < bubbles.length; i++) {
        const element = bubbles[i];
        element.remove();
    }
}


function johnBubbles() {

    let bublesDiv = document.createElement('div')
    bublesDiv.classList.add('bubles')
    bublesDiv.innerHTML = `
    <figure class="avatar">
    <img src="./assets/images/Face.webp" alt="IMG">
</figure>
<div class="bubles-animation left-bubbles">
    <div class="buble buble-1"></div>
    <div class="buble buble-2"></div>
    <div class="buble buble-3"></div>
</div>`
    chat.appendChild(bublesDiv)

}