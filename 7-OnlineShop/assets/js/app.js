const login = document.querySelector(`.login`)
const loginForm = document.querySelector('.login-form')
const loginBtn = document.querySelector('.login-btn')
const exitLogin = document.querySelector('.exit-login')
const blockScreen = document.querySelector('.block-screen')
const exitCart = document.querySelector('.exit-order')
const openCart = document.querySelector('.cart')
const cartMenu = document.querySelector('.cart-menu')
const productHolder=document.querySelector('.shop-items')
const reviewProduct = document.querySelector('.review-product')
const imagePreview = document.querySelector('.update-img')
const itemAndPricePreview=document.querySelector('.update-name-price')
const exitItemReviw =document.querySelector('.exit-item-review')
const productInfo=document.querySelector('.product-info')
const addToCart=document.querySelector('.add-button')
const itemsOrderSummary=document.querySelector('.items-table')
const totalCartCost=document.querySelector('.cart-cost')
const cartItmesNumber=document.querySelector('.cart-counter')
const searchBar=document.querySelector('.searchBar')
const filterAllItems=document.querySelector('.All-Items')
const filterMenClothing=document.querySelector('.Men-Clothing')
const filterJewelery=document.querySelector('.Jewelery')
const filterElectronics=document.querySelector('.Electronics')
const filterWomenClothing=document.querySelector('.Women-Clothing')
const filters=document.querySelector('.Filters')

const addressWrapper=document.querySelector('.address-wrapper')
const CardWrapper=document.querySelector('.Card-wrapper')// defalt is none
const confirmAdress=document.getElementById('confirm-Adress')
const ConfirmBilling=document.getElementById('confirm-billing')


confirmAdress.addEventListener('click', function (e){
    e.preventDefault();
    addressWrapper.style.display='none'
    CardWrapper.style.display='flex'

})


console.log(CardWrapper,addressWrapper)


filterAllItems.addEventListener('click', function(){
    onClickFilterSection(filterAllItems)
    myFunction('All-Items')

})

filterMenClothing.addEventListener('click', function(){
    onClickFilterSection(filterMenClothing)
    myFunction('Men-Clothing')

})
filterJewelery.addEventListener('click', function(){
    onClickFilterSection(filterJewelery)
    myFunction('Jewelery')

})
filterElectronics.addEventListener('click', function(){
    onClickFilterSection(filterElectronics)
    myFunction('Electronics')

})
filterWomenClothing.addEventListener('click', function(){
    onClickFilterSection(filterWomenClothing)
    myFunction('Women-Clothing')

})




function onClickFilterSection(element){
    removeActive();
    if(element.classList.contains('active')){
        element.classList.remove('active')
    }else{
        element.classList.add('active')
    }
}

function removeActive(){
    if(filterAllItems.classList.contains('active')){
        filterAllItems.classList.remove('active')
    }

    if(filterMenClothing.classList.contains('active')){
        filterMenClothing.classList.remove('active')
    }

    if(filterJewelery.classList.contains('active')){
        filterJewelery.classList.remove('active')
    }

    if(filterElectronics.classList.contains('active')){
        filterElectronics.classList.remove('active')
    }

    if(filterWomenClothing.classList.contains('active')){
        filterWomenClothing.classList.remove('active')
    }
}

function myFunction(param){
    let arrOfItems=productHolder.childNodes
    for (let i = 1; i < arrOfItems.length; i++) {
        let currentItem=arrOfItems[i];
        if(param=='All-Items'){
            currentItem.style.display='flex'
        }else if(currentItem.classList.contains(param)){
            currentItem.style.display='flex'
        }else{
            currentItem.style.display='none'
        }
        
        
    }
  
}


let cartCounter=0;
let currentCartCost=5;
let tax=0.2
searchBar.addEventListener('input',function(){
    removeActive();
    let contentToSearch=searchBar.value
    let contetToSearchLC=contentToSearch.toLowerCase()
    let productArray=productHolder.childNodes
   for (let i = 1; i < productArray.length; i++) {
       let currentItem=productArray[i]
       let textConent=currentItem.outerText
       let textContetLC=textConent.toLowerCase()
        if(textContetLC.includes(contetToSearchLC)){
            productHolder.childNodes[i].style.display="flex"
        }else{
            productHolder.childNodes[i].style.display="none"
        } 
   }

}
)


exitItemReviw.addEventListener('click',function(){
    if(reviewProduct.style.display=='flex'){
        reviewProduct.style.display='none'
    }
})

login.addEventListener('click', function () {
    blockScreen.style.display = "flex"
    loginForm.style.display = "flex"

})
loginBtn.addEventListener('submit', function () {
    loginForm.submit()
    if (loginForm.style.display == "flex") {
        loginForm.style.display = "none"
        blockScreen.style.display = "none"
    }
})
exitLogin.addEventListener('click', function () {
    if (loginForm.style.display == "flex") {
        loginForm.style.display = "none"
        blockScreen.style.display = "none"
    }
})
openCart.addEventListener('click', function () {
    cartMenu.style.display = 'flex'
    blockScreen.style.display = "flex"
})

exitCart.addEventListener('click', function () {
    cartMenu.style.display = 'none'
    blockScreen.style.display = "none"

})
// 
// Using the Fetch API
//async Fetch API that awaits for promises to be fufiled in order to use the data
// 




const getAllshopItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonShopItems = await response.json();
    postToWebPage(jsonShopItems);
}

const postToWebPage=(data)=>{
    for (let i = 0; i < data.length; i++) {
        let itemData=data[i]
        let newCategory=''
        newCategory+=itemData.category
        let div= document.createElement("div"); 
        div.classList.add("product")
        switch (newCategory) {
            case`men's clothing`:
            div.classList.add("Men-Clothing")
            break;
            case`jewelery`:
            div.classList.add("Jewelery")
            break;
            case`electronics`:
            div.classList.add("Electronics")
            break;
            case`women's clothing`:
            div.classList.add("Women-Clothing")
            break;
        }
        let img= document.createElement("img"); 
        img.src=itemData.image 
        let h5= document.createElement("h5"); 
        let span= document.createElement("span"); 
        let h4=document.createElement("h4");
        h4.classList.add("product-description")
        h5.textContent=''+itemData.category+': '
        span.textContent=' '+' $'+itemData.price
        h4.textContent=''+itemData.description;
        h5.appendChild(span)
        div.appendChild(img)
        div.appendChild(h5)
        div.appendChild(h4)
        productHolder.appendChild(div)
    }
    productsAddListeners();

}
getAllshopItems();

function productsAddListeners() {
    let product = document.querySelectorAll(".product");
    for (let i = 0; i < product.length; i++) { 
        product[i].addEventListener('click', function productClick() {
         reviewProduct.style.display='flex'
         imagePreview.src=product[i].childNodes[0].src
         productInfo.textContent=product[i].childNodes[2].textContent
         itemAndPricePreview.textContent=product[i].childNodes[1].textContent
         
        })
    }   
} 

addToCart.addEventListener('click', function (){
    let itemAndPrice=document.querySelector('.update-name-price')
    let tr=document.createElement("tr");
    let img=document.createElement("img")
    let tdOne=document.createElement("td");
    let tdTwo=document.createElement("td");
    let infString=itemAndPrice.textContent
    let indexOfPriceStart=(infString.search(':'))
    let itemName=infString.substring(0,indexOfPriceStart)
    let itemPrice=infString.substring((indexOfPriceStart+2),infString.length)
    tdOne.classList.add('table-row')
    img.classList.add("image-for-cart")
    img.src=imagePreview.src
    tdOne.textContent=itemName
    tdOne.appendChild(img)
    cartCounter+=1;
    cartItmesNumber.textContent=cartCounter

    tdTwo.textContent=itemPrice
    tr.appendChild(tdOne)
    tr.appendChild(tdTwo)
    itemsOrderSummary.appendChild(tr)
    let priceForOrderSummary=Number(infString.substring((indexOfPriceStart+5),infString.length))
    totalCostOfThisItem=Number((priceForOrderSummary+(priceForOrderSummary*tax)).toFixed(2))
    currentCartCost+=totalCostOfThisItem;
    totalCartCost.textContent=`$${currentCartCost.toFixed(2)}`

    reviewProduct.style.display='none'



})
