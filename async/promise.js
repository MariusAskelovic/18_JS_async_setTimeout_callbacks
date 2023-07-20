'use strict';
console.log('promise.js file was loaded');

function getValueAfter(callback) {
  setTimeout(() => {
    callback('gryzo reikme');
  }, 2000);
}

getValueAfter((reikme) => {});

// Promise - budas kazka daryti asinchroniniu budu
// resole funkcija kuri kvieciama sekmes atveju
// reject funkcija kuri kvieciama nesekmes atveju

// Promise turi 3 stadija
// 1 - pending - vyksta uzklausa
// 2 - resolved - sekme ir/arba gavo reiksme
// 3 - rejected - klaida/nepavyko
function getValueAfterPromisify() {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      // sita dalis vyks tik pasibaiguis timeout laikui
      resole('gryzo reikme');
    }, 2000);
  });
}

// console.log('pr1 ===', pr1);
const rez = getValueAfterPromisify();
console.log('rez ===', rez); // promise pending
getValueAfterPromisify().then((reikme) => {
  console.log('reikme ===', reikme);
});
