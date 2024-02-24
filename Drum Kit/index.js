let buttons = document.querySelectorAll('.drum');
let buttonClass = ['w','a','s','d','j','k','l'];

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        animate(buttonInnerHTML);
    })
};

document.addEventListener('keydown', function (event){
    makeSound(event.key);
    animate(event.key);
})

function makeSound(key){
    switch (key) {
        case 'w':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
        break;
        case 'a':
            let kick_bass = new Audio('./sounds/kick-bass.mp3');
            kick_bass.play();
        break;
        case 's':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
        break;
        case 'd':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
        break;
        case 'j':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
        break;
        case 'k':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
        break;
        case 'l':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
        break;
        default:
            return 'false key'
        break;
    }
};

function animate(key){
    if(buttonClass.includes(key)){
        let currentElement = document.querySelector('.' + key);
        currentElement.classList.add('pressed');

        setTimeout(() => {
            currentElement.classList.remove('pressed');
        }, 100);
    }else {
        console.log(false)
    }
};