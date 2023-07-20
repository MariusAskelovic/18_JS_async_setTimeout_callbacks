import { people } from './peopleArr.js';
console.table(people);

// 1. Parašykite funkciją, kuri atspausdina visus žmones eilutėmis
function printEachPerson(arrName) {
  return arrName.map((onePerson) => console.log(onePerson));
}
// printEachPerson(people);

// 2. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes,
// atskirtus brūkšneliu, pvz.: Serbentautas-Bordiūras
function joinNameSurnameWithHyphen(arrName) {
  arrName.map((onePerson) =>
    console.log(`${onePerson.name}-${onePerson.surname}`)
  );
}
// joinNameSurnameWithHyphen(people);

// 3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes
// bei santuokos statusą, tokiu būdu Jonas Bikas: Vedęs Jonas Bikas: Nevedęs
// Samantas Kultaitytė: Ištekėjusi Samantas Kultaitytė: Neištekėjusi
function marriedStatusInString(arrName) {
  arrName.map((onePerson) => {
    if (onePerson.sex === 'male' && onePerson.married === true) {
      console.log(`${onePerson.name} ${onePerson.surname} yra vedęs`);
    } else if (onePerson.sex === 'male' && onePerson.married === false) {
      console.log(`${onePerson.name} ${onePerson.surname} nėra vedęs`);
    } else if (onePerson.sex === 'female' && onePerson.married === true) {
      console.log(`${onePerson.name} ${onePerson.surname} yra ištekėjusi`);
    } else if (onePerson.sex === 'female' && onePerson.married === false) {
      console.log(`${onePerson.name} ${onePerson.surname} nėra ištekėjusi`);
    }
  });
}
// marriedStatusInString(people);

// 4. Parašykite funkcijas pagal 2 ir 3 užduotį,
// kurios vietoj to kad spausdintų, rezultatus grąžintų.
// Tuomet rezultatai būtų atspausdinti naudojant funkciją aprašytą pirmu punktu.
function returnMarried(arrName) {
  const newArr = [];
  arrName.forEach((onePerson) => {
    const fullName = `${onePerson.name}-${onePerson.surname}`;
    if (onePerson.sex === 'male' && onePerson.married === true) {
      const info = `${fullName} yra vedęs`;
      newArr.push(info);
      console.log(info);
    } else if (onePerson.sex === 'male' && onePerson.married === false) {
      const info = `${fullName} nėra vedęs`;
      newArr.push(info);
      console.log(info);
    } else if (onePerson.sex === 'female' && onePerson.married === true) {
      const info = `${fullName} yra ištekėjus`;
      newArr.push(info);
      console.log(info);
    } else if (onePerson.sex === 'female' && onePerson.married === false) {
      const info = `${fullName} nėra ištekėjus`;
      newArr.push(info);
      console.log(info);
    }
  });
  return newArr;
}
// const checkMarriedStatus = returnMarried(people);
// console.log(checkMarriedStatus);

// 5. Sukurkite kaitos funkciją, kuri grąžintų objektą su lytimi ir uždirbamu pinigų kiekiu
// ???????????????

// 6. Sukurkite funkciją, kuri grąžintų objektą su vardu, pavarde ir lytimi.
// Tuomet panaudoje ją, grazinkite masyvą,

function mainInfoObj(onePerson) {
  return {
    name: onePerson.name,
    surname: onePerson.surname,
    sex: onePerson.sex,
  };
}

function newPeopleArr(arrName) {
  const newArr = arrName.map(mainInfoObj);
  console.log(newArr);
  return newArr;
}
// newPeopleArr(people);

//////////////// = UZD 2 =

console.log('//////////////// = UZD 2 =');
// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių amziu.
function maleDrivers(arrName) {
  arrName.forEach((onePerson) => {
    if (onePerson.sex === 'male' && onePerson.hasCar) {
      console.log(onePerson);
    }
  });
}
maleDrivers(people);
