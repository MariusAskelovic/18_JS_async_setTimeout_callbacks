'use strict';
console.log('callbackWay.js file was loaded');

// the problem

// sakysim kad mums reikia pagaminti objekta su username, town, age

function getUsername() {
  return 'James';
}
function getTown() {
  return 'London';
}
function getAge() {
  return 47;
}

const fullUserObj = {
  username: '',
  town: '',
  age: '',
};
