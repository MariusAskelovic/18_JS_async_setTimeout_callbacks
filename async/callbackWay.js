'use strict';
console.log('callbackWay.js file was loaded');

// the problem

// sakysim kad mums reikia pagaminti objekta su username, town, age

function getUsername(callback) {
  console.log('pries timeout');
  setTimeout(() => {
    console.log('1. vardas: James');
    callback();
  }, 2000);
  console.log('po timeout');
}
function getTown(callback) {
  setTimeout(() => {
    console.log('2. miestas: London');
    callback();
  }, 2500);
}
function getAge() {
  setTimeout(() => {
    console.log('3. amzius: 47');
  }, 1000);
}

// jei butu daugiau lygiu, tai yra vadinama 'callback hell'
getUsername(() => {
  getTown(() => {
    getAge();
  });
});
// getTown();
// getAge();

function getValueAfter(callback) {
  let rez;
  setTimeout(() => {
    rez = 'gryzo reiksme';
    callback('gryzo reiksme');
  }, 2000);
  return rez;
}

const reiksme = getValueAfter((reiksmePoTimeout) => {
  console.log('reiksmePoTimeout ===', reiksmePoTimeout);
});
console.log('reiksme ===', reiksme);
