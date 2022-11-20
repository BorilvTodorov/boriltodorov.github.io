import { navigate, userOrGuest, resetView, loadGame } from "./navigation.js";
import { register } from "./register.js";
import { login } from "./login.js";
import { airplaneTrigger } from "./games/airplane.js";
import { updateMoney } from "./utils.js"
import {slots} from './games/slots.js'


[...document.querySelectorAll("nav a")].forEach((e) => e.addEventListener("click", navigate));
[...document.querySelectorAll('.games button')].forEach((e) => e.addEventListener("click", loadGame));

userOrGuest()

document.querySelector('.register form').addEventListener("submit", (e) => { e.preventDefault(); register(e) });
document.querySelector('.login form').addEventListener("submit", (e) => { e.preventDefault(); login(e) });
document.querySelector('.backToHome').addEventListener('click', resetView)

updateMoney(sessionStorage.name)


// airplane game
document.querySelector('.airplanePlay').addEventListener('click', airplaneTrigger)
document.querySelector('.airplane button').addEventListener('click', airplaneTrigger)


// slots Game
document.querySelector('.slotsStartGame').addEventListener('click',slots)

