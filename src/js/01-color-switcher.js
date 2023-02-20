const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    bodyColor: document.querySelector('body'),
    isActive: false
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);


function onStartBtnClick() {
    
    if (refs.isActive) {
        return;
    }

    refs.isActive = true;
    refs.bodyColor.style.backgroundColor = getRandomHexColor();
    
    console.log('start');

    timerId = setInterval(() => {

    refs.bodyColor.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
};

function onStopBtnClick() {
    
    clearInterval(timerId);
    refs.isActive = false;
    console.log('stop');
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
