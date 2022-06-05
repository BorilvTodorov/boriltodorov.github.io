// check events in JS - DOM

let loader= document.querySelector(".loader")
let preLoader= document.querySelector(".pre-loader")

window.addEventListener('load', (event) => {
    loader.style.display = "none";
    preLoader.style.display = "none";
  });

function initializeSearch() {
    let search = document.querySelector(".header-element-search")
    if (!search) {
        return;
    }
    search.addEventListener("click", function (click) {
        click.stopPropagation()
        if (!search.classList.contains("open")) {

            let searchDropdown = document.querySelector(".search-dropdown");

            let contentHeight = searchDropdown.querySelector('.dropdown-content').offsetHeight;

            searchDropdown.style.height = contentHeight + "px";
            search.classList.add("open")

            function listenForOutsideSearchClick(event) {
                console.log(event);
                searchDropdown.style.height = 0;
                document.removeEventListener("click", listenForOutsideSearchClick)
                search.classList.remove("open")
            }
            document.addEventListener("click", listenForOutsideSearchClick);
        }
    })
}

document.addEventListener("DOMContentLoaded", function (domEvent) {
    initializeSearch();
    submitContactForm();
    submitLoginForm();





    // login
    let loginButton = document.querySelector(".header-navigaton #sign-in")
    loginButton.addEventListener("click", function (click) {
        click.stopPropagation()
        let loginForm = document.querySelector(".request-quote-form-container")
        if (!loginForm.classList.contains("active")) {

            loginForm.classList.add("active");

            function listenerForClickOutside(event) {
                // console.log(event.path)
                let loginFormFind = event.path.indexOf(loginForm)
                // console.log(loginFormFind);
                if (loginFormFind == -1) {
                    // Елемента който кликам сега дали не се намира в request quote form container
                    // 43,44,45 не трябва да се изпълняват ако кликна на елемент вътре във формата
                    loginForm.classList.remove("active");
                    document.removeEventListener("click", listenerForClickOutside)
                }

            }
            document.addEventListener("click", listenerForClickOutside)

        }

    })


})


// Функцията трябва да поема типа на Inputa и valueto което е записано в него
// и да връща дали е валидно или не
function dataVerifier(type, value) {
    let valid = true;
    let emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let phoneValidRegex = /^[0-9][A-Za-z0-9 -]*$/
    let passwordValidRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    switch (type) {
        case "name":
            valid = !!value.length
            break;
        case "email":
            valid = value.match(emailValidRegex)
            break;
        case "phone":
            valid = value.match(phoneValidRegex)
            break;
        case "message":
            valid = !!value.length
            break;
        case "username":
            valid = !!value.length
            break;
        case "password":
            valid = value.match(passwordValidRegex)
            break;
    }
    return valid

}


function submitContactForm() {
    let contactForm = document.querySelector("#contact-form")
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault()
        let fields = document.querySelectorAll(".input-group input,.input-group textarea")
        console.log(fields);


        //създавам обекда , който да ми пази въведените данни
        let userData = {
            // Name:"Boril"
            // emai:"Boril"
            // number:"Boril"
            // message:"Boril"
        };
        // for cicle минава през всички полета от HTML формата
        let validForm = true;
        for (let index = 0; index < fields.length; index++) {
            //на const input запазваме променливите от N-ния input field
            const input = fields[index];
            // Вече създадения празен обект добавяме ново пропърти като вземем атрибута на 
            // поредния Input field и неговто value
            // Name = "Boril"
            // number= "213123"
            // email=
            // message =
            if (!dataVerifier(input.name, input.value)) {
                validForm = false;
            }
            userData[input.name] = input.value
        }
        console.log(validForm);
    })

}


// function addCategoryToSearch() { }

//Задачи
//1. Search button to look nice - Готово
//2. Popup na sign in style + add Form + Validation
//3. На search da dobavq categories- Готово
//4. document.createElement (JS metod createElement) за да добавя категория в сърча - Готово
//5. target.appendChild (JS metod appendChild element) за -готово
//6 да използвам element.innerHTML трябва да присвоявам(прочети това) - Готово ( да прочета още за element.inner HTML)


const addCategory = document.querySelector(".add-category");
const categoryContainer = document.getElementById("photo-categories")

addCategory.addEventListener("click", addNewCategory);

getCategories(function (response) {
 for (let index = 0; index < response.data.length; index++) {
    addNewCategory(response.data[index]);
   
     
 }
});
console.log("after get categories")

function addNewCategory(category) {
    console.log("this is category log",category)// {title:"Nature". tag:"nature"}
    const newlinkElement = document.createElement("a");
    const newDivCategory = document.createElement("div")
    const newH6Element = document.createElement("h6");
    newH6Element.textContent = category.title;
    // console.log("add");
    newDivCategory.classList.add('category-item');
    categoryContainer.appendChild(newlinkElement);
    newlinkElement.appendChild(newDivCategory);
    newDivCategory.appendChild(newH6Element);
}


///Login starts here


function submitLoginForm() {
    let loginForm = document.querySelector('#login-form')
    loginForm.addEventListener("submit", function (events) {
        events.preventDefault()
        let loginFields = document.querySelectorAll(".input-group-login input")
        let userDataLogin = {
        };

        let validLogin = true;
        for (let index = 0; index < loginFields.length; index++) {
            const loginInput = loginFields[index];

            if (!dataVerifier(loginInput.name, loginInput.value)) {
                validLogin = false;
            }
            userDataLogin[loginInput.name] = loginInput.value
        }
        console.log(validLogin);

    })
}



/// Fetching starts here
// parse (convert JSON String to JS object)
// stringify (convert JS object to JSON STRING)

function getCategories(success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', './fake-backend/categories.json');

    xhr.onload = function () {
        const responseData =JSON.parse(xhr.responseText);
        success(responseData);
    };

    xhr.addEventListener('error', (error) => {

        console.log(error);
        console.log(xhr);
    })
    xhr.send(null);
    // xhr.send('string');
    // xhr.send(new Blob());
    // xhr.send(new Int8Array());
    // xhr.send(document);
}


// let clickToload=document.querySelector(".click-to-load")



// function getData(url,success,errorCB) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET',url);
//     xhr.onload = function () {
//         const responseData =JSON.parse(xhr.responseText);
//         success(responseData);
//     };

//     xhr.addEventListener('error', (error) => {
//         if(typeof errorCB=="function"){
//             errorCB();
//         }
//         console.log(error);
//         console.log(xhr);
//     })
//     xhr.send(null);
//     // xhr.send('string');
//     // xhr.send(new Blob());
//     // xhr.send(new Int8Array());
//     // xhr.send(document);
// }

// // url:
// let newUrl=
// getData("https://picsum.photos/v2/list?page=1&limit=50",function(data){
//     for (let i = 0; i < data.length; i++) {
//         const element = data[i];
//         let newImage=document.createElement("img")
//         newUrl=element.download_url
//         const indexID= newUrl.indexOf("id");
//         const partFromUrl=newUrl.slice(indexID);
//         const imgOSize=partFromUrl.replace("id/"+element.id,"");
//         newImage.src=element.download_url.replace(imgOSize,"/300/300")
//         console.log("part of URL",imgOSize);

//         // const url=element.download_url.split("/",5).join("/")+"/300/300" // 3ti nachin
//         // console.log("third",url)

//         // newId="id/"+element.id+"/300/300" 1vi nachin
//         // newImage.src="https://picsum.photos/"+newId 1vi nachin
//         let loadImages= document.querySelector('.load-images');
//         loadImages.appendChild(newImage);
   

//     }
//     console.log(data)

// },function(){console.log("error")});




// // да го направя с replace
// /* let newString = "https://picsum.photos/id/1008/5616/3744"
// newString.replace("5616/3744","200/300")

// console.log("new String",newString);
// //  */
// // /id/0/5616/3744

// //find index method String
//slice method string
//replace 

// Find index of ID newImage
// Silce after ID
// 200/300

//this is data 