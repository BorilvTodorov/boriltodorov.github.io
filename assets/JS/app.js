const navToggle=document.querySelector('.nav-toggle');
const links=document.querySelector('.links');
const clickBox=document.querySelectorAll('.box-holder')
const simpleApp=document.querySelector('.Simple-apps')
const gameApps=document.querySelector('.Game-apps')
const restApiApps=document.querySelector('.Rest-API-apps')
const boxHolder=document.querySelectorAll('.box-holder')
const allProjects=document.querySelector('.All-projects')
const favProjects=document.querySelector('.Favourite-Apps')



function filterBoxes(criteria){
    for (const box of boxHolder) {
        box.style.display = 'block'
        if(box.classList.contains(criteria)){
            box.style.display = 'felx'
        }else{
            box.style.display = 'none'
        }
    }
}



function addClass(element,el1,el2,el3,el4){
    if(element.classList.contains('active')){
        console.log('yes')
    }else{
        element.classList.add('active')
    }
    el1.classList.remove('active')
    el2.classList.remove('active')
    el3.classList.remove('active')
    el4.classList.remove('active')

}

favProjects.addEventListener('click',function(){
    filterBoxes('favourite')
    addClass(favProjects,gameApps,restApiApps,boxHolder,allProjects);
})

allProjects.addEventListener('click',function(){
    filterBoxes('box-holder')
    addClass(allProjects,gameApps,restApiApps,boxHolder,favProjects);
})

simpleApp.addEventListener('click',function(){
    filterBoxes('Simple-Apps');
    addClass(simpleApp,gameApps,restApiApps,allProjects,favProjects);
     
})
gameApps.addEventListener('click',function(){
    filterBoxes('Games');
    addClass(gameApps,simpleApp,restApiApps,allProjects,favProjects);
})
restApiApps.addEventListener('click',function(){
    filterBoxes('Rest-API');
    addClass(restApiApps,gameApps,simpleApp,allProjects,favProjects);
})


clickBox.forEach(function (item){
    item.addEventListener('click',function(e){
        let currentItem=e.target
        let currentLink=currentItem.childNodes[1]
        location.href = currentLink.href
    })
})

navToggle.addEventListener('click',function(){
    links.classList.toggle('show-links')
})