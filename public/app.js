const buttons = document.querySelectorAll('.btn')
const counter = document.querySelector('.counter')

let num = 0;

buttons.forEach(function(button){
    button.addEventListener('click', (e) => {
        const target = e.currentTarget.classList
        if(target.contains('add')){
            num++;
        }
        counter.innerHTML = num;
    })
})