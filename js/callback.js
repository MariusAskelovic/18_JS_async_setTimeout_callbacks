'use strict';
console.log('callback.js file was loaded');

function sum(a, b, callback) {
  const suma = a + b;
  callback(suma);
  return suma;
}

const rez = sum(10, 15, makeCurrency);
const rez2 = sum(100, 150, makeEuroCurrency);
// console.log(sum(10, 15));

function makeCurrency(num) {
  const currencyFormat = `$${num}.00 ct`;
  console.log(currencyFormat);
}

function makeEuroCurrency(num) {
  const currencyFormat = `€${num}.00 ct`;
  console.log(currencyFormat);
}
// makeCurrency(50);
// makeCurrency(rez);
