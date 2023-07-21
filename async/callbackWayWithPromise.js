'use strict';
console.log('callbackWay.js file was loaded');

function getUsername() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1. vardas: James');
      resolve();
    }, 500);
  });
}
function getTown() {
  // paskutiniam Promise nebutinas
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('2. miestas: London');
      resolve();
    }, 2500);
  });
}
function getAge() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('3. amzius: 47');
    }, 300);
  });
}

getUsername(() => {
  getTown(() => {
    getAge();
  });
});

getUsername()
  .then(() => getTown())
  .then(() => getAge());

// Trumpiausias uzrasymo budas
// getUsername().then(getTown).then(getAge);
