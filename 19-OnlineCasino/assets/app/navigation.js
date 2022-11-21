const gameView = document.querySelector(".games");
const registerView = document.querySelector(".register");
const loginView = document.querySelector(".login");
const homeView = document.querySelector(".home");
const footerView = document.querySelector(".footer");
const navBar = document.querySelector(".navBar")
const airplaneView = document.querySelector(".airplane")
const diceView = document.querySelector(".dice")
const slotsView = document.querySelector(".slots")

const gamesLink = document.getElementById('games')
const registerLink = document.getElementById('register')
const loginLink = document.getElementById('login')
const logoutLink = document.getElementById('logout')
const profile = document.querySelector('.profile')
const balance = document.getElementById('balance')
const balanceContainer = document.querySelector('.balanceContainer')
const currentGame = document.querySelector('.playGame')
const backToHome = document.querySelector('.backToHome')


const viewsList = {
  Home: homeView,
  Games: gameView,
  Register: registerView,
  Login: loginView,
  airplane: airplaneView,
  dice: diceView,
  slots: slotsView,
};
export function navigate(e) {
  e.preventDefault();
  if (e.target.nodeName == "A") {
    if (viewsList[e.target.textContent]) {
      navigateToScreen(viewsList[e.target.textContent]);
    }
  }
}

function navigateToScreen(view) {
  clearViews();
  if (view.classList.contains("games")) {
    view.style.display = "flex";
  } else {
    view.style.display = "flex";
  }
}

function clearViews() {
  gameView.style.display = "none";
  registerView.style.display = "none";
  loginView.style.display = "none";
  homeView.style.display = "none";
  airplaneView.style.display = 'none'
  slotsView.style.display = 'none'
  diceView.style.display = 'none'
}


export function userOrGuest() {

  if (!!sessionStorage.getItem('name')) {
    backToHome.style.display = 'none'
    let name = sessionStorage.getItem('name')
    profile.style.display = 'flex'
    balance.innerHTML = sessionStorage.getItem('money')
    profile.innerHTML = name[0].toLocaleUpperCase()
    registerLink.style.display = "none";
    loginLink.style.display = "none";
    gamesLink.style.display = "flex";
    logoutLink.style.display = "flex";
    balanceContainer.style.display = 'flex'
    footerView.style.display = 'flex'
  } else {
    backToHome.style.display = 'none'
    balanceContainer.style.display = 'none'
    profile.style.display = 'none'
    registerLink.style.display = "flex";
    loginLink.style.display = "flex";
    gamesLink.style.display = "none";
    logoutLink.style.display = "none";
    footerView.style.display = 'flex'
  }

}

logoutLink.addEventListener('click', () => {
  if (confirm("Confirm Logout")) {
    sessionStorage.clear()
    userOrGuest()
    resetView()
  }
})


export function resetView() {
  navBar.style.display = 'block'
  navigateToScreen(homeView)
  userOrGuest()
}


export function loadGame(e) {


  let id = e.target.parentElement.parentElement.id
  if (viewsList[id]) {
    clearScreanForGame()
    navigateToScreen(viewsList[id])
  }

}

export function clearScreanForGame(e) {
  backToHome.style.display = 'block'
  gameView.style.display = 'none'
  registerView.style.display = 'none'
  loginView.style.display = 'none'
  homeView.style.display = 'none'
  footerView.style.display = 'none'
  navBar.style.display = 'none'
  airplaneView.style.display = 'none'
  slotsView.style.display = 'none'
  diceView.style.display = 'none'
}


