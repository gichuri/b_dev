const sections = document.querySelectorAll('section');
const sectBtns = document.querySelectorAll('controls');
const sectBtn = document.querySelectorAll('control');
const allsections = document.querySelector('.main-content');


function PageTransitions(){
    //what happens when I click on button
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn ';
        })
    }

}

PageTransitions();