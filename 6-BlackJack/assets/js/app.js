
//Deck
const deck = [
    ///////////////// 1 Deck////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",
    ///////////////////////2 Deck////////////////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",
    ///////////////////////3 Deck////////////////////////////////

    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",
    ///////////////////////4 Deck////////////////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",

    ///////////////////////5 Deck////////////////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",

    ///////////////////////6 Deck////////////////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",

    ///////////////////////7 Deck////////////////////////////////
    "A ♠", "A ♥", "A ♣", "A ♦",
    "2 ♠", "2 ♥", "2 ♣", "2 ♦",
    "3 ♠", "3 ♥", "3 ♣", "3 ♦",
    "4 ♠", "4 ♥", "4 ♣", "4 ♦",
    "5 ♠", "5 ♥", "5 ♣", "5 ♦",
    "6 ♠", "6 ♥", "6 ♣", "6 ♦",
    "7 ♠", "7 ♥", "7 ♣", "7 ♦",
    "8 ♠", "8 ♥", "8 ♣", "8 ♦",
    "9 ♠", "9 ♥", "9 ♣", "9 ♦",
    "10 ♠", "10 ♥", "10 ♣", "10 ♦",
    "J ♠", "J ♥", "J ♣", "J ♦",
    "Q ♠", "Q ♥", "Q ♣", "Q ♦",
    "K ♠", "K ♥", "K ♣", "K ♦",
]
const deckSize=document.querySelector('.cards-left')

//Dealer
const dealerCardOne = document.querySelector(".dealer-CardOne")
const dealerCardTwo = document.querySelector(".dealer-CardTwo")
const dealerCardThree = document.querySelector(".dealer-CardTree")
const dealerCardFour = document.querySelector(".dealer-CardFour")
const dealerCardFive = document.querySelector(".dealer-CardFive")

//Player
const playerCardOne = document.querySelector(".player-CardOne")
const playerCardTwo = document.querySelector(".player-CardTwo")
const playerCardThree = document.querySelector(".player-CardTree")
const playerCardFour = document.querySelector(".player-CardFour")
const playerCardFive = document.querySelector(".player-CardFive")
const playerCardSix = document.querySelector(".player-CardSix")

// actions
const dealerScore = document.querySelector(".Dealer-Score")//Dealer
const score = document.querySelector('.Score')//Player
const dealCards = document.querySelector('.Deal')
const hit = document.querySelector('.Hit')
const stand = document.querySelector('.Stand')


// conditions
const dealerBust = document.querySelector('.Dealer-Bust')
const bust = document.querySelector('.Bust')
const winGame = document.querySelector('.Win')
const loseGame = document.querySelector('.Lose')
const tieGame = document.querySelector('.Tie')
const blackJack=document.querySelector('.Black-Jack')


//Betting
// const dealBlock = document.querySelector('.deal-block')
const chipBlock = document.querySelector('.chip-block')
const yourMoney = document.querySelector('.Your-current-Money')
const bet = document.querySelector('.Bet')
const chipTen = document.querySelector('.Chip-10')
const chipTwenty = document.querySelector('.Chip-20')
const chipFifty = document.querySelector('.Chip-50')
const chipHundered = document.querySelector('.Chip-100')
const yourBet = document.querySelector('.Your-current-bet')

//counters
let currentBet = 0;
let money = 100;
let popchecker = 0
let dealerHand = 0;
let playerHand = 0;
let hitCounter = 0;
let dealerCards = 2;
let dealerAceCounter = 0;
let playerAceCounter = 0;


function highlightBet() {
    popchecker += 1;
    if (currentBet == 0) {
        if (popchecker % 2 == 0) {

            chipTen.style.transform = "scale(1.1)";
            chipTwenty.style.transform = "scale(1.1)";
            chipFifty.style.transform = "scale(1.1)";
            chipHundered.style.transform = "scale(1.1)";
        } else {
            chipTen.style.transform = "scale(0.9)";
            chipTwenty.style.transform = "scale(0.9)";
            chipFifty.style.transform = "scale(0.9)";
            chipHundered.style.transform = "scale(0.9)";
        }
        setTimeout(highlightBet, 600)
    }

}
highlightBet();

function cardReveal() {
    if (dealerCardTwo.textContent.includes('♠') || dealerCardTwo.textContent.includes('♣')) {
        dealerCardTwo.style.color = 'black'
    } else {
        dealerCardTwo.style.color = 'red'
    }
}
function win() {
    money += currentBet * 2
    currentBet = 0
    chipBlock.style.display = 'none'
    // dealCards.style.display='flex'
    // dealBlock.style.display = 'flex'

}
function lose() {
    currentBet = 0
    chipBlock.style.display = 'none'
    // dealBlock.style.display = 'flex'
    // dealCards.style.display='flex'

}
function blackJackWin(){
    money += currentBet * 2.5
    currentBet = 0
    yourMoney.textContent=money
    yourBet.textContent=currentBet
    chipBlock.style.display = 'none'
    // dealBlock.style.display = 'flex'
    dealerScore.textContent = dealerHand
    blackJack.style.display = 'flex'
    // dealCards.style.display='flex'
}

function tie() {
    money += currentBet
    currentBet = 0
    chipBlock.style.display = 'none'
    // dealBlock.style.display = 'flex'
    // dealCards.style.display='flex'
}
function randomNumber() {
    return Math.floor(Math.random() * ((deck.length) - 0))
}
function anotherCardForPlayer(param) {
    switch (param) {// Player
        case "A ♠":
        case "A ♥":
        case "A ♣":
        case "A ♦":


            if (playerAceCounter == 0 && playerHand + 11 < 22) {
                playerAceCounter += 1
                playerHand += 11;
            } else if (playerAceCounter >= 1) {
                playerHand += 1;
            } else {
                playerHand += 1;
            }
            //3 comment//

            break;

        case "2 ♠":
        case "2 ♥":
        case "2 ♣":
        case "2 ♦":

            playerHand += 2
            //3 comment//

            break;

        case "3 ♠":
        case "3 ♥":
        case "3 ♣":
        case "3 ♦":

            playerHand += 3
            //3 comment//

            break;


        case "4 ♠":
        case "4 ♥":
        case "4 ♣":
        case "4 ♦":

            playerHand += 4
            //3 comment//

            break;



        case "5 ♠":
        case "5 ♥":
        case "5 ♣":
        case "5 ♦":

            playerHand += 5
            //3 comment//

            break;

        case "6 ♠":
        case "6 ♥":
        case "6 ♣":
        case "6 ♦":

            playerHand += 6
            //3 comment//

            break;


        case "7 ♠":
        case "7 ♥":
        case "7 ♣":
        case "7 ♦":

            playerHand += 7
            //3 comment//

            break;


        case "8 ♠":
        case "8 ♥":
        case "8 ♣":
        case "8 ♦":

            playerHand += 8
            //3 comment//

            break;


        case "9 ♠":
        case "9 ♥":
        case "9 ♣":
        case "9 ♦":

            playerHand += 9
            //3 comment//

            break;


        case "10 ♠":
        case "10 ♥":
        case "10 ♣":
        case "10 ♦":

            playerHand += 10
            //3 comment//

            break;



        case "J ♠":
        case "J ♥":
        case "J ♣":
        case "J ♦":

            playerHand += 10
            //3 comment//

            break;



        case "Q ♠":
        case "Q ♥":
        case "Q ♣":
        case "Q ♦":

            playerHand += 10
            //3 comment//

            break;



        case "K ♠":
        case "K ♥":
        case "K ♣":
        case "K ♦":

            playerHand += 10
            //3 comment//

            break;

    }

}
function anotherCardForDealer(param1){
    switch (param1) {// DEALER
        case "A ♠":
        case "A ♥":
        case "A ♣":
        case "A ♦":

            if (dealerAceCounter == 0 && dealerHand + 11 < 22) {
                dealerAceCounter += 1
                dealerHand += 11;
            } else if (dealerAceCounter >= 1) {
                dealerHand += 1;
            } else {
                dealerHand += 1;
            }
            //3 comment//

            break;

        case "2 ♠":
        case "2 ♥":
        case "2 ♣":
        case "2 ♦":

            dealerHand += 2;
            //3 comment//

            break;

        case "3 ♠":
        case "3 ♥":
        case "3 ♣":
        case "3 ♦":

            dealerHand += 3;
            //3 comment//

            break;


        case "4 ♠":
        case "4 ♥":
        case "4 ♣":
        case "4 ♦":

            dealerHand += 4;
            //3 comment//

            break;



        case "5 ♠":
        case "5 ♥":
        case "5 ♣":
        case "5 ♦":

            dealerHand += 5;
            //3 comment//

            break;

        case "6 ♠":
        case "6 ♥":
        case "6 ♣":
        case "6 ♦":

            dealerHand += 6;
            //3 comment//

            break;


        case "7 ♠":
        case "7 ♥":
        case "7 ♣":
        case "7 ♦":

            dealerHand += 7;
            //3 comment//

            break;


        case "8 ♠":
        case "8 ♥":
        case "8 ♣":
        case "8 ♦":

            dealerHand += 8;
            //3 comment//

            break;


        case "9 ♠":
        case "9 ♥":
        case "9 ♣":
        case "9 ♦":

            dealerHand += 9;
            //3 comment//

            break;


        case "10 ♠":
        case "10 ♥":
        case "10 ♣":
        case "10 ♦":

            dealerHand += 10;
            //3 comment//

            break;



        case "J ♠":
        case "J ♥":
        case "J ♣":
        case "J ♦":

            dealerHand += 10;
            //3 comment//

            break;



        case "Q ♠":
        case "Q ♥":
        case "Q ♣":
        case "Q ♦":

            dealerHand += 10;
            //3 comment//

            break;



        case "K ♠":
        case "K ♥":
        case "K ♣":
        case "K ♦":

            dealerHand += 10;
            //3 comment//

            break;




    }

}
//Event listeners
chipTen.addEventListener('click', function () {
    if (money >= 10) {
        currentBet += 10
        money -= 10
        yourBet.textContent = currentBet
        yourMoney.textContent = money
        // dealBlock.style.display = 'none'
        dealCards.style.display='flex'
    } else {
    }

})
chipTwenty.addEventListener('click', function () {
    if (money >= 20) {
        currentBet += 20
        money -= 20
        yourBet.textContent = currentBet
        yourMoney.textContent = money
        // dealBlock.style.display = 'none'
        dealCards.style.display='flex'
    } else (console.log('not enoug money'))
})
chipFifty.addEventListener('click', function () {
    if (money >= 50) {
        currentBet += 50
        money -= 50
        yourBet.textContent = currentBet
        yourMoney.textContent = money
        // dealBlock.style.display = 'none'
        dealCards.style.display='flex'
    } else (console.log('not enoug money'))
})
chipHundered.addEventListener('click', function () {
    if (money >= 100) {
        currentBet += 100
        money -= 100
        yourBet.textContent = currentBet
        yourMoney.textContent = money
        // dealBlock.style.display = 'none'
        dealCards.style.display='flex'
    } else (console.log('not enoug money'))
})

document.addEventListener('click', function () {
    deckSize.textContent=deck.length
    score.textContent = playerHand
    yourBet.textContent = currentBet
    yourMoney.textContent = money
    if (deck.length == 0) {
        console.log('no more cards')
    }
    if(playerCardThree.textContent==""&&playerHand==21){
        blackJackWin();
        cardReveal();
        playerCardThree.textContent='.'
    }
})

// Stand logic
stand.addEventListener('click', function () {
    if (dealerCardOne.textContent == "") {
        return
    }

    while (dealerHand < 17) {
        dealerCards += 1
        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)

        if (dealerCards == 3) {
            dealerCardThree.style.display = 'flex'
            if (card.includes('♠') || card.includes('♣')) {
                dealerCardThree.style.color = 'black'
            } else {
                dealerCardThree.style.color = 'red'
            }
            dealerCardThree.textContent = card
        } else if (dealerCards == 4) {
            dealerCardFour.style.display = 'flex'
            if (card.includes('♠') || card.includes('♣')) {
                dealerCardFour.style.color = 'black'
            } else {
                dealerCardFour.style.color = 'red'
            }
            dealerCardFour.textContent = card
        } else if (dealerCards == 5) {
            dealerCardFive.style.display = 'flex'
            if (card.includes('♠') || card.includes('♣')) {
                dealerCardFive.style.color = 'black'
            } else {
                dealerCardFive.style.color = 'red'
            }
            dealerCardFive.textContent = card
        }
        anotherCardForDealer(card);
    }
    if (dealerHand > 21) {// bust for dealer
        dealerBust.style.display = 'flex'
        dealerScore.textContent = dealerHand
        cardReveal();
        win();
        highlightBet();

    }

    if (dealerHand > playerHand && dealerHand <= 21) {// Lose for Player
        lose();
        cardReveal();
        highlightBet();
        loseGame.style.display = 'flex'
        dealerScore.textContent = dealerHand
    }
    if (dealerHand < playerHand) {//Win for Player
        win();
        cardReveal();
        highlightBet();
        winGame.style.display = 'flex'
        dealerScore.textContent = dealerHand
    } else if (dealerHand == playerHand) {// Tie
        tie();
        cardReveal();
        highlightBet();
        tieGame.style.display = 'flex'
        dealerScore.textContent = dealerHand
    }
})

// HIT logic
hit.addEventListener('click', function () {
    if (dealerCardOne.textContent == "") {
        return
    }
    if (hitCounter == 3) {// This is Player card 6
        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)
        playerCardSix.style.display = 'flex'
        if (card.includes('♠') || card.includes('♣')) {
            playerCardSix.style.color = 'black'
        } else {
            playerCardSix.style.color = 'red'
        }
        playerCardSix.textContent = card
        anotherCardForPlayer(card);
        hitCounter += 1

    } else if (hitCounter == 2) {// This is Player card 5
        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)
        playerCardFive.style.display = 'flex'
        if (card.includes('♠') || card.includes('♣')) {
            playerCardFive.style.color = 'black'
        } else {
            playerCardFive.style.color = 'red'
        }
        playerCardFive.textContent = card
        anotherCardForPlayer(card);
        hitCounter += 1

    } else if (hitCounter == 1) {// This is Player card 4

        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)
        playerCardFour.style.display = 'flex'
        if (card.includes('♠') || card.includes('♣')) {
            playerCardFour.style.color = 'black'
        } else {
            playerCardFour.style.color = 'red'
        }
        playerCardFour.textContent = card
        anotherCardForPlayer(card);
        hitCounter += 1

    } else if (hitCounter == 0) {// This is Player card 3
        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)
        playerCardThree.style.display = 'flex'
        if (card.includes('♠') || card.includes('♣')) {
            playerCardThree.style.color = 'black'
        } else {
            playerCardThree.style.color = 'red'
        }
        playerCardThree.textContent = card
        anotherCardForPlayer(card);
        hitCounter += 1
    }

    if (playerHand > 21 && playerAceCounter > 0) {
        playerHand -= 10;
        playerAceCounter -= 1;
    } else if (playerHand > 21) {
        lose();
        highlightBet();
        dealerScore.textContent = dealerHand
        bust.style.display = 'flex'
        if (dealerCardTwo.textContent.includes('♠') || dealerCardTwo.textContent.includes('♣')) {
            dealerCardTwo.style.color = 'black'
        } else {
            dealerCardTwo.style.color = 'red'
        }
    }
})

//Deal Cards Logic
dealCards.addEventListener('click', function () {
    deal();
})


function deal() {
    playerCardThree.textContent=''
    dealCards.style.display='none'
    // dealBlock.style.display = 'flex'
    chipBlock.style.display = 'flex'
    dealerBust.style.display = 'none'
    tieGame.style.display = 'none'
    winGame.style.display = 'none'
    loseGame.style.display = 'none'
    blackJack.style.display = 'none'
    bust.style.display = 'none'
    playerCardThree.style.display = 'none'
    playerCardFour.style.display = 'none'
    playerCardFive.style.display = 'none'
    dealerCardThree.style.display = 'none'
    dealerCardFour.style.display = 'none'
    dealerCardFive.style.display = 'none'
    dealerScore.textContent = 0
    hitCounter = 0
    dealerHand = 0;
    playerHand = 0;
    dealerAceCounter = 0;
    playerAceCounter = 0;
    dealerCards = 2;

    for (let i = 0; i < 4; i++) {

        if (deck.length < 1) {
            console.log('hi')
            return
        }
        let number = randomNumber();
        let card = deck[number];
        deck.splice(number, 1)
        // Black or Red Logic
        if (i == 0) {
            if (card.includes('♠') || card.includes('♣')) {
                dealerCardOne.style.color = 'black'
            } else {
                dealerCardOne.style.color = 'red'
            }
            dealerCardOne.textContent = card
        } else if (i == 1) {
            if (card.includes('♠') || card.includes('♣')) {
                playerCardOne.style.color = 'black'
            } else {
                playerCardOne.style.color = 'red'
            }
            playerCardOne.textContent = card
        } else if (i == 2) {
            if (card.includes('♠') || card.includes('♣')) {
                dealerCardTwo.style.color = 'transparent'
            } else {
                dealerCardTwo.style.color = 'transparent'
            }
            dealerCardTwo.textContent = card
        } else if (i == 3) {
            if (card.includes('♠') || card.includes('♣')) {
                playerCardTwo.style.color = 'black'
            } else {
                playerCardTwo.style.color = 'red'
            }
            playerCardTwo.textContent = card
        }
        // Switch for Dealer on DEAL
        if (i % 2 == 0) {// DEALER
            anotherCardForDealer(card);
        }
        // Switch for Player on DEAL
        else {// Player
            anotherCardForPlayer(card);
        }
    }
}