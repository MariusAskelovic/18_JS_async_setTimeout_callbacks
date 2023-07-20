'use strict';
console.log('setTimeout.js file was loaded');

const btnEl = document.getElementById('btn');
const timeEl = document.getElementById('time');

console.log('im first');
let count = 0;
// setTimeout((ka peleisti) , laikas milisek)
// paleisti procesa po kazkiek laiko
setTimeout(() => {
  console.log('im inside setTimeout');
}, 3000);

btnEl.addEventListener('click', () => {
  console.log('paspaudei', ++count);
});

// setInterval((ka peleisti) , laikas milisek)
// paleisti procesa kas kazkiek laiko
// const interval1 = setInterval(logKazka, 2000);
function logKazka() {
  console.log('paspaudei', ++count);
  if (count >= 10) {
    clearInterval(interval1);
  }
}

setInterval(tick, 1000);
tick(); // tam kad nebutu 1s delay
function tick() {
  const nowObj = new Date();
  const formattedTime = nowObj.toLocaleString('lt', { timeStyle: 'medium' });
  //   console.log(formattedTime);
  timeEl.textContent = formattedTime;
}
