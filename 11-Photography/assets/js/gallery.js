
/* on load event */
let loader= document.querySelector(".loader")
let preLoader= document.querySelector(".pre-loader")

window.addEventListener('load', (event) => {
    loader.style.display = "none";
    preLoader.style.display = "none";
  });

document.addEventListener("DOMContentLoaded", function (domEvent) {
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



///Login starts here


function loginVerifier(type, value) {
    let validLogin = true;
    let passwordValidRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    switch (type) {
        case "username":
            validLogin = !!value.length
            break;
        case "password":
            validLogin = value.match(passwordValidRegex)
            break;
    }
    return validLogin

}


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

            if (!loginVerifier(loginInput.name, loginInput.value)) {
                validLogin = false;
            }
            userDataLogin[loginInput.name] = loginInput.value
        }
        console.log(validLogin);

    })
}



let sideSmallImage= document.getElementsByClassName("display-small")
let sideLargeIm1age= document.getElementById("display-large")

for (let index = 0; index < sideSmallImage.length; index++) {
    sideSmallImage[index].addEventListener("click",moveImagetoTheSide);
}

function moveImagetoTheSide(){
    sideLargeIm1age.src=this.src
    console.log('hi')
}