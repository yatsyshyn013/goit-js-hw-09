import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  delayEL: document.querySelector('[ name="delay"]'),
  stepEL: document.querySelector('[ name="step"]'),
  amountEL: document.querySelector('[ name="amount"]'),
  submitBtn: document.querySelector('button')
};



refs.formEl.addEventListener('submit', onFormElSubmit);


function onFormElSubmit(evt) {
  evt.preventDefault();

  let delay = Number(refs.delayEL.value);
  let step = Number(refs.stepEL.value);
  let amount = Number(refs.amountEL.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    Notiflix.Notify.failure('Date must be positive');
    return;
  }

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
     .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
    .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    delay += step;
    
  }
  refs.formEl.reset();
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  
  });
  
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });