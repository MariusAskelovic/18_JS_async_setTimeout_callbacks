'use strict';
console.log('copy.js file was loaded');

const obj1 = { town: 'London' };
const obj1neKopija = obj1;
const obj2 = { town: 'London' };

// obj1 ir obj2 yra nuorodos i atminties vieta
console.log(obj1 === obj2); // FALSE
console.log(obj1neKopija === obj1); // TRUE

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

const peopleShallowCopy = people.slice();
console.log(peopleShallowCopy === people); // FALSE
console.table(peopleShallowCopy);

console.log(
  'peopleShallowCopy[0] === people[0] ===',
  peopleShallowCopy[0] === people[0]
);
// jei TRUE, reiskia ne kopija, o tas pats daiktas

const peopleMapCopy = people.map((perObj) => {
  const perObjCopy = { ...perObj };
  return perObjCopy;
});
console.log(
  'peopleMapCopy[0] === people[0] ===',
  peopleMapCopy[0] === people[0]
);
// be spread (...) nebutu kopijos

const colors = [
  { id: 1, value: 'red' },
  { id: 2, value: 'green' },
  { id: 3, value: 'blue' },
];

// vienas is budu kopijuoti bet kokio lygio masyva ar objekta
// musu strukturoj negali buti funkciju, metodu ir pns

// paversti objekta ar masyva i JSON formata(string)
console.log('colors ===', colors);
// (colors, null, 2) null ir 2 nebutina, bet skaitosi lengviau
const jsonStringFromColors = JSON.stringify(colors);
console.log('jsonStringFromColors ===', jsonStringFromColors); // pavertem i string
console.log('typeof jsonStringFromColors ===', typeof jsonStringFromColors);
// atverciant mes turim kopija
const deelColorsCopy = JSON.parse(jsonStringFromColors); // grazinam i masyva
console.log('deelColorsCopy ===', deelColorsCopy);
console.log(
  'deelColorsCopy[0] === colors[0] ===',
  deelColorsCopy[0] === colors[0]
);
