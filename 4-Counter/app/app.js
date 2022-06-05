// set initial count
let count = 0;

// select value and Buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    console.log(btn)
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        }else{
            count=0;
        }
        value.textContent=count;
        if (count>0){
            value.style.color='rgb(146, 227, 179)'
        } else if (count<0){
            value.style.color='rgb(223, 106, 106)'
        }else {
            value.style.color='white'
        }
    })
})