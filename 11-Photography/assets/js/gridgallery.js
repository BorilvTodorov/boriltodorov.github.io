/* on load event */
let loader= document.querySelector(".loader")
let preLoader= document.querySelector(".pre-loader")

window.addEventListener('load', (event) => {
    loader.style.display = "none";
    preLoader.style.display = "none";
  });


function galleryInitializer() {
    let fullImgBox = document.getElementById("fullImgBox"); // holdera na fullscr images display= block/flex
    let fullimg = document.getElementById("fullimg");// image-a koito se displayva
    let imageCloser = document.getElementById("imageCloser");// butona za izlizane ot fullscrean
    let galleryAllImages = document.querySelector(".gallery-image");// selectora za vseki image na koito shte zakacha clcck event
    let currentImage
    let heart = document.querySelector(".heart")
    let prevButton = document.querySelector(".prev-image")
    let nextButton = document.querySelector(".next-image")
    galleryAllImages.addEventListener("click", openFullImg);// slusha za click na nqkoi element ot selekciqta:Sled click dava  display flex na skritiq div box
    // i podava src-to na image-a koito shte se displaymne  kato go vzima ot predi tova cuknatiq image ot kolekciqta.
    let likedImages = [];

    function openFullImg(event) {
        currentImage = event.target
        if (currentImage.classList.contains("liked")) {
            heart.classList.add("active")
        } else {
            heart.classList.remove("active")
        }
        fullImgBox.style.display = "flex";
        if (event.target.classList.contains("imageClicker")) {
            fullimg.src = event.target.src
        }
        // console.log("this is your event target", event.target);

    }


    imageCloser.addEventListener("click", closeFullImg); // slusha za click na x-a i maha display flexa- Skriva full screen boxa
    function closeFullImg() {
        fullImgBox.style.display = "none";
    }


    prevButton.addEventListener("click", prev); /* като се натисне Prev button, da вземе Src-to на html
    elementa koito e predi tekushtiq displaynat */ // previousSibling
    function prev() {
        if (currentImage === null || currentImage.previousSibling.src == null) {
            fullImgBox.style.display = "none";
        }

        fullimg.src = currentImage.previousSibling.src
        currentImage = currentImage.previousSibling
        if (currentImage.classList.contains("liked")) {
            heart.classList.add("active")
        }
        else {
            heart.classList.remove("active")
        }



    }

    nextButton.addEventListener("click", next);/* като се натисне Next button, da вземе Src-to на html
    elementa koito e predi tekushtiq displaynat */ //nextSibling
    function next() {
        if (currentImage === null || currentImage.nextSibling == null) {

            loadNextPage();
        }

        fullimg.src = currentImage.nextSibling.src
        currentImage = currentImage.nextSibling
        if (currentImage.classList.contains("liked")) {
            heart.classList.add("active")
        }
        else {
            heart.classList.remove("active")
        }


    }/* 
        getData("https://picsum.photos/v2/list?page=1&limit=50", function moreImages(data) {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            let newImage = document.createElement("img")
            newUrl = element.download_url
            const indexID = newUrl.indexOf("id");
            const partFromUrl = newUrl.slice(indexID);
            const imgOSize = partFromUrl.replace("id/" + element.id, "");
            newImage.src = element.download_url.replace(imgOSize, "/1920/1080")
            // console.log("part of URL", imgOSize);

            // const url=element.download_url.split("/",5).join("/")+"/300/300" // 3ti nachin
            // console.log("third",url)

            // newId="id/"+element.id+"/300/300" 1vi nachin
            // newImage.src="https://picsum.photos/"+newId 1vi nachin
            let loadImages = document.querySelector('.gallery-image');
            newImage.classList.add("imageClicker")
            loadImages.appendChild(newImage);


        }
        // console.log(data)

    }, function () { console.log("error") }); */

    heart.addEventListener("click", likeAnImage)
    function likeAnImage(click) {
        click.stopPropagation()
        currentImage.classList.toggle("liked")
        if (!heart.classList.contains("active")) {
            heart.classList.add("active")

        } // on clikc ako heart ima active class go mahni, ako go nqma go dobavi
        else {
            heart.classList.remove("active")
        }
    }

}

/*  on like-image event запази HTML elementa i mu dobavi class active, pri natiskane na next/previous proveri dali img elementa ima heart active class */

// Previous and Next image functionality

// filter liked Направи така че в грид галери всички които нямат класа liked da sa display none.


//Filters functionality

let regularImages=document.querySelectorAll(".imageClicker")
let likeFilter=document.querySelector(".toggle-category.liked")
// let natureFilter=document.querySelector(".toggle-category.nature")// filter for nature images
// let travelFilter=document.querySelector(".toggle-category.travel")// filter for travel images
let wildlifeFilter=document.querySelector(".toggle-category.wildlife")// filter for wildlife images
let imageSelection=document.querySelector(".gallery-image")
let allImages = imageSelection.children;

likeFilter.addEventListener("click",likedImagesFilter)
function likedImagesFilter(){
    for (let i = 0; i < allImages.length; i++) {
        const element = allImages[i];
        if(!element.classList.contains("liked")){
            element.style.display = "none";
            
        }
    }

}










document.addEventListener("DOMContentLoaded", function (domEvent) {
    submitLoginForm();
    galleryInitializer();





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
s
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


//Import images
function getData(url, success, errorCB) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function () {
        const responseData = JSON.parse(xhr.responseText);
        success(responseData);
    };

    xhr.addEventListener('error', (error) => {
        if (typeof errorCB == "function") {
            errorCB();
        }
        console.log(error);
        console.log(xhr);
    })
    xhr.send(null);
    // xhr.send('string');
    // xhr.send(new Blob());
    // xhr.send(new Int8Array());
    // xhr.send(document);
}

//
let pageCounter=1;
function renderImagtesFromRequest(data) {
    for (let i = 0; i < data.length; i++) {
        let newUrl;
        const element = data[i];
        let newDiv=document.createElement("div")// this is new
        let newLink = document.createElement("a")// this is new
        let newImage = document.createElement("img")
        newUrl = element.download_url
        const indexID = newUrl.indexOf("id");
        const partFromUrl = newUrl.slice(indexID);
        const imgOSize = partFromUrl.replace("id/" + element.id, "");
        newImage.src = element.download_url.replace(imgOSize, "/1920/1080")
        // console.log("part of URL", imgOSize);
        // const url=element.download_url.split("/",5).join("/")+"/300/300" // 3ti nachin
        // console.log("third",url)
        // newId="id/"+element.id+"/300/300" 1vi nachin
        // newImage.src="https://picsum.photos/"+newId 1vi nachin
        let loadImages = document.querySelector('.gallery-image');
        newImage.classList.add("imageClicker")
        loadImages.appendChild(newImage);
        // newDiv.appendChild(newImage);
        // newLink.href="single.html?pic_id="+element.id+""+"";
        // newDiv.appendChild(newLink);
    

    }
    pageCounter+=1;
    // console.log(data)

}

function loadNextPage() {
    getData("https://picsum.photos/v2/list?page="+pageCounter+"&limit=50", renderImagtesFromRequest, function () { console.log("error") });
}
loadNextPage();


// Load content when you see the footer

let options = {
    root: null,
    rootMargins: "0px",
    threshold: 0.2
};

const observer = new IntersectionObserver(handleIntersect, options);
observer.observe(document.querySelector(".infinate-image-loader"));

function handleIntersect(entries) {
    if (entries[0].isIntersecting) {
        loadNextPage();

        // console.log("you've reached the load image section")
    }

}


