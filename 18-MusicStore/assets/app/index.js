const sliderLeft = document.querySelector('.main-slider-left').addEventListener('click', () => {
    currentSlide--; updateMainSlide()
})
const sliderRight = document.querySelector('.main-slider-right').addEventListener('click', () => {
    currentSlide++; updateMainSlide()
})
const sliderText = document.querySelector('.slide-text')
const sliderImg = document.querySelector('.slide-img')
const albumReview = document.querySelectorAll('.store-image')
const purchasedItems = document.querySelector('.purchased-items')
const addToCardBtn = document.querySelectorAll('.purchase')
const reviewCart = document.querySelector('.checkout')
const storeView = document.querySelector('.page-wrapper')
const cartView = document.querySelector('.checkout-wrapper')
const orderTotal=document.querySelectorAll('.order-total')

const goToCart = document.querySelector('.cart-button').addEventListener('click', () => {
    storeView.style.display = 'none'
    cartView.style.display = 'flex'
})
const goToStore = document.querySelector('.back-to-store').addEventListener('click', () => {
    storeView.style.display = 'flex'
    cartView.style.display = 'none'
})

addToCardBtn.forEach((button) => {
    button.addEventListener('click', updateCart)
})
let tracks = document.querySelectorAll('.tracks')

albumReview.forEach((album) => {
    album.addEventListener('click', showTracks)
})

let currentSlide = 0
let sliderInfo = [
    './assets/images/sliderImgOne.png-/-MUSIC EVENT WITH DJ STARTING AT 20.00 ON AUGUST 15TH',
    './assets/images/sliderImgTwo.png-/-MUSIC EVENT WITH DJ STARTING AT 20.00 ON AUGUST 16TH',
    './assets/images/sliderImgThree.png-/-MUSIC EVENT WITH DJ STARTING AT 20.00 ON AUGUST 17TH']

function updateMainSlide() {
    if (currentSlide > sliderInfo.length - 1) {
        currentSlide = 0
    } else if (currentSlide < 0) {
        currentSlide = sliderInfo.length - 1
    }
    let [src, text] = sliderInfo[currentSlide].split('-/-')
    sliderImg.src = src
    sliderText.textContent = text
}

function showTracks(e) {
    let element = e.target.parentElement.querySelector('.tracks')
    console.log(element)
    if (element.classList.contains('active')) {
        element.classList.remove('active')
        element.style.display = 'none'
        return
    } else {
        element.classList.add('active')
        element.style.display = 'block'
    }


}

tracks.forEach((e) => {
    for (let i = 1; i < 9; i++) {
        let li = document.createElement('li')
        li.textContent = ` Track Title ${i}  ${4 + Math.floor(i / 2)}:2${Number(i)}`
        e.appendChild(li)
    }
})

function updateCart(e) {
    let currentCounter = Number(purchasedItems.textContent)
    let attribute=Date.now()
    currentCounter++
    e.target.setAttribute('traceID',attribute)
    purchasedItems.textContent = currentCounter
    let parent = e.target.parentElement.parentElement.parentElement.innerHTML
    let price=Number(e.target.parentElement.parentElement.parentElement.querySelector('.store-price').textContent.replace('$',''))
    // console.log(price)
    orderTotal.forEach((el)=>{
     el.textContent = el.textContent.replace('$','')
    let currentTotal=Number(el.textContent)
    el.textContent=currentTotal+Number(price)
    el.textContent=Number(el.textContent).toFixed(2)
    el.textContent =`$${el.textContent}`
  })

    // get price
    div = document.createElement('div')
    div.classList.add('ready-to-purchase')
    div.innerHTML = parent
    let button = div.querySelector('.purchase')
    button.disabled = false
    button.classList.remove('purchase')
    button.classList.add('remove')
    button.textContent = 'Remove item'
    button.addEventListener('click', removeItem)

    reviewCart.appendChild(div)

    e.target.disabled = true
    e.target.textContent = 'In Cart'
    function removeItem(e) {
        let currentCounter = Number(purchasedItems.textContent)
        currentCounter--
        let price=Number(e.target.parentElement.parentElement.parentElement.querySelector('.store-price').textContent.replace('$',''))
        orderTotal.forEach((el)=>{
        el.textContent = el.textContent.replace('$','')
        let currentTotal=Number(el.textContent)
        el.textContent=currentTotal-Number(price)
        el.textContent=Number(el.textContent).toFixed(2)
        el.textContent =`$${el.textContent}`
        
      })

        
        purchasedItems.textContent = currentCounter
        e.target.parentElement.parentElement.parentElement.remove()

        let buttonsCollection=Array.from(addToCardBtn)
        buttonsCollection.forEach((btn)=>{
            if(Array.from(btn.attributes).length>1){
            if(Array.from(btn.attributes)[1].value===Array.from(e.target.attributes)[1].value){
               btn.disabled=false
                btn.textContent='ADD TO CART'
                return
            }
        }
        })
    }
}
