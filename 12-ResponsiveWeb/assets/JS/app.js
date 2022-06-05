
const navToggleMenu=document.querySelector('.nav-toggle-menu')
const navExpand=document.querySelector('.nav-toggle')
const navCollapse=document.querySelector('.nav-toggle-menu-close')
const notification=document.querySelectorAll('.notification-delete')
const revealMorebenefits=document.querySelector('.and-more')
const moreClubBenefits=document.querySelectorAll('.club-benefits-hidden')


// nav toggle//
navExpand.addEventListener('click', function(){
    if(navToggleMenu.classList.contains('active-toggle')){

    }else{
        navToggleMenu.classList.add('active-toggle')
    }
})

navCollapse.addEventListener('click', function(){
    if(navToggleMenu.classList.contains('active-toggle')){
        navToggleMenu.classList.remove('active-toggle')
    }else{
    }
})

//show all benefits//
revealMorebenefits.addEventListener('click', function(){
    for (let i = 0; i < moreClubBenefits.length; i++) {
        const element = moreClubBenefits[i];
        if(element.classList.contains('club-benefits-hidden')){
            element.classList.remove('club-benefits-hidden')
            revealMorebenefits.childNodes[1].textContent='...view less'
        }else{
            element.classList.add('club-benefits-hidden')
            revealMorebenefits.childNodes[1].textContent='... view more'
        }
        
    }

})



// delete notifications//
for (let i = 0; i < notification.length; i++) {
    let element=notification[i]
    element.addEventListener('click', function(){
        let parent=element.parentElement.parentElement.parentElement
        parent.remove();
    })
}
