// да направя така че, когато се посети страница Single page. Да взимам данни от съръра и да се визуализират в Single page.
// От img https://i.picsum.photos/id/10/1920/1080.jpg
// Пример za ifnoto https://picsum.photos/id/10/info

function getInfo(url, success, errorCB) {
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



// // queary elements v/list/page/limit

// getInfo("https://picsum.photos/v2/list?page=&limit=50",renderInfo)

// print console log with id
const params = new URLSearchParams(window.location.search)
let imageId= params.get('pic_id')

function displayMoreInfo(data){
    getInfo("https://picsum.photos/id/"+imageId+"/info",function(datafromURl){
   
    let imageHolder= document.querySelector(".my-image")
    let author= document.querySelector(".author")
    let image = datafromURl.download_url
    console.log("my image",image)
    let newImage = document.createElement("img")
    imageHolder.src=datafromURl.download_url
   
    author.innerText=datafromURl.author
    
    

    });
    
}
displayMoreInfo();
