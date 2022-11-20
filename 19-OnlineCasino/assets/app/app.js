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

// // comment
// // slots Logic
// const canvas = document.querySelector('.slotsCanvas')
// const ctx = canvas.getContext('2d');
// canvas.width = 600
// canvas.height = 600

// class Box {
//     constructor(x, y, triggerID) {
//         this.x = x
//         this.y = y
//         this.size=120
//         this.velocity=10
//         this.image = new Image()
//         this.image.src = "./assets/images/slotCrate.png"
//         this.requestedStop=false
//         this.triggerID=triggerID
//     }
//     draw() {
//         ctx.drawImage(this.image, this.x, this.y, this.size, this.size)
//     }
//     update(){
//         if(this.requestedStop &&  this.velocity>0){
//             this.velocity-=0.06

//         if(this.velocity<0){
//             this.velocity=0
//         }
            
//         }
//         this.y+=this.velocity
//         if(this.y>2280){
//             this.y=-120
//         }
//     }

// }



// // const oneBox= new Box (0,0,0)

// // boxes slot one
// let slotColumnOne=document.querySelector('.slotColumnOne')
// let displayedDivOne=false
// let displayArrayOne=new Set
// let triggerOneActive=false
// let btnStopOne=document.querySelector('.slotStopOne')
// btnStopOne.addEventListener('click',()=>{triggerOneActive=true})
// let slotOneStart=0
// let slotOneArray=[]
// for (let i = 0; i < 20; i++) {
//     let id=1
//     let box=new Box(-2,slotOneStart,id)
//     slotOneStart+=120
//     slotOneArray.push(box)
// }

// // boxes slot Two
// let slotColumnTwo=document.querySelector('.slotColumnTwo')
// let displayedDivTwo=false
// let displayArrayTwo=new Set
// let triggerTwoActive=false
// let btnStopTwo=document.querySelector('.slotStopTwo')
// btnStopTwo.addEventListener('click',()=>{
//     if(slotColumnOne.childElementCount>=5){
//     triggerTwoActive=true
// }else{
//     showAndHideAlert('Finish Stop One')
// }
// })
// let slotTwoStart=0
// let slotTwoArray=[]
// for (let i = 0; i < 20; i++) {
//     let id=2
//     let box=new Box(120,slotTwoStart,id)
//     slotTwoStart+=120
//     slotTwoArray.push(box)
// }

// // boxes slot Three
// let slotColumnThree=document.querySelector('.slotColumnThree')
// let displayedDivThree=false
// let displayArrayThree=new Set
// let triggerThreeActive=false
// let btnStopThree=document.querySelector('.slotStopThree')
// btnStopThree.addEventListener('click',()=>{
//     if(slotColumnTwo.childElementCount>=5){
//     triggerThreeActive=true
// }else{
//     showAndHideAlert('Finish Stop Two')
// }
// })
// let slotThreeStart=0
// let slotThreeArray=[]
// for (let i = 0; i < 20; i++) {
//     let id=3
//     let box=new Box(240,slotThreeStart,id)
//     slotThreeStart+=120
//     slotThreeArray.push(box)
// }


// // boxes slot Four
// let slotColumnFour=document.querySelector('.slotColumnFour')
// let displayedDivFour=false
// let displayArrayFour=new Set
// let triggerFourActive=false
// let btnStopFour=document.querySelector('.slotStopFour')
// btnStopFour.addEventListener('click',()=>{
//     if(slotColumnThree.childElementCount>=5){
//         triggerFourActive=true
// }else{
//     showAndHideAlert('Finish Stop Three')
// }
// })
// let slotFourStart=0
// let slotFourArray=[]
// for (let i = 0; i < 20; i++) {
//     let id=4
//     let box=new Box(360,slotFourStart,id)
//     slotFourStart+=120
//     slotFourArray.push(box)
// }


// let slotColumnFive=document.querySelector('.slotColumnFive')
// let displayedDivFive=false
// let displayArrayFive=new Set
// let triggerFiveActive=false
// let btnStopFive=document.querySelector('.slotStopFive')
// btnStopFive.addEventListener('click',()=>{
//     if(slotColumnFour.childElementCount>=5){
//         triggerFiveActive=true
// }else{
//     showAndHideAlert('Finish Stop Four')
// }
// })
// let slotFiveStart=0
// let slotFiveArray=[]
// for (let i = 0; i < 20; i++) {
//     let id=5
//     let box=new Box(480,slotFiveStart,id)
//     slotFiveStart+=120
//     slotFiveArray.push(box)
// }


// function animate() {

// ctx.clearRect(0, 0, canvas.width, canvas.height)
// // slot One
//  slotColumnFunctionality(displayArrayOne,slotOneArray,triggerOneActive,displayedDivOne,slotColumnOne)

//  // slot Two
//  slotColumnFunctionality(displayArrayTwo,slotTwoArray,triggerTwoActive,displayedDivTwo,slotColumnTwo)

//  // slot Three
//  slotColumnFunctionality(displayArrayThree,slotThreeArray,triggerThreeActive,displayedDivThree,slotColumnThree)
 
//  // // slot Five
//  slotColumnFunctionality(displayArrayFour,slotFourArray,triggerFourActive,displayedDivFour,slotColumnFour)

//  // slot Five
//  slotColumnFunctionality(displayArrayFive,slotFiveArray,triggerFiveActive,displayedDivFive,slotColumnFive)

//     ctx.fillStyle = "white";
//     ctx.font = '35px Comic Sans MS';
//     ctx.fillText(`x`, 40, 20);
//     requestAnimationFrame(animate)

// }
// animate()

// function addToResultArray(set,el){
//     if(el.velocity==0){
//        if(el.y>0 && el.y<600) {
//            set.add(el)
//        }
//     }
// }

// function createDivBoxes(parent,el){
//     let div=document.createElement("div")
//     div.classList.add('box')
//     div.id=el.triggerID
//     let img=document.createElement("img")
//     img.src=el.image.src
//     div.appendChild(img)
//     parent.appendChild(div)
// }



// function slotColumnFunctionality(displaySet,slotArray,trigger,displayDiv,slotColumn){
// if(slotColumn.childElementCount>=5){
//     return
// }
// if(displaySet.size<5){
//         slotArray.forEach(el=>{
//             el.draw()
//             el.update()
//             if(trigger){
//                 el.requestedStop=true
//                 addToResultArray(displaySet,el)
//             }
//         })
//     }

//     if(displaySet.size>=5 && !displayDiv){
//         displayDiv=true
//         console.log('yu are here once')
//         displaySet.forEach(el=>{
//             createDivBoxes(slotColumn,el)
//         }) 
//     } 
// }



// function showAndHideAlert(message){
// let p =document.querySelector('.slots p')
// p.style.display='block'
// p.textContent=message
// setTimeout(function(){ p.style.display='none' }, 2000);
// }