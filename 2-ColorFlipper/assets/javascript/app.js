const colors=["green","red","blue","yellow","pink","purple","gray","teal","yellowgreen"]
const btn=document.getElementById('btn');
const color = document.querySelector('.color')

btn.addEventListener('click',function(){
    // get random number between 0 and 3 colors [0]
    const randomNumber=Math.floor(getRandomNumber())
    console.log(randomNumber);
    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent=colors[randomNumber];
    color.style.color=colors[randomNumber];


});

function getRandomNumber(){
    return Math.random()*colors.length;
}

