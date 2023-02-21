import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

// require("flatpickr/dist/themes/material_green.css");

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    daySpan: document.querySelector('span[data-days]'),
    hourSpan: document.querySelector('span[data-hours]'),
    minuteSpan: document.querySelector('span[data-minutes]'),
    secondSpan: document.querySelector('span[data-seconds]')
};

refs.startBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', onStartBtnClick);

let intervalId = null;
let currentTime = Date.now();
let selectedTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      selectedTime = selectedDates[0];
      correctDateCheck(selectedDates);



  },
};

function correctDateCheck(params) {
    // selectedTime = selectedDates[0];
    //   currentTime = Date.now();

    //   onInput(selectedDates);
      if (selectedTime<currentTime) {
        //   window.alert("Please choose a date in the future");
          Notiflix.Notify.failure("Please choose a date in the future");
      } else {
          console.log(selectedTime);
          refs.startBtn.removeAttribute('disabled');
      };
}

function onStartBtnClick() {
    refs.startBtn.setAttribute('disabled', true);
        
        if (selectedTime <= currentTime) {
            return
        } else {
            // console.log('Hi,man');
            intervalId = setInterval(() => {
            currentTime = Date.now();
            // refs.startBtn.removeAttribute('disabled');
            const deltaTime = selectedTime - currentTime;
            const time = convertMs(deltaTime);
                
            if (deltaTime < 1000) {
                clearInterval(intervalId);
                Notiflix.Notify.success('Countdown is over');
            }
                
            // console.log(time);
                
            updateSpan(time);
            
            } , 1000);
        }

    
    }

const fp = flatpickr("#datetime-picker", options, {
    // minDate: "today",
});


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateSpan(param) {
    refs.daySpan.textContent = param.days;
    refs.hourSpan.textContent = param.hours;
    refs.minuteSpan.textContent = param.minutes;
    refs.secondSpan.textContent = param.seconds;
}
