import { people } from './peopleArr.js';

// 1. Parašykite funkciją, kuri atspausdina visus žmones eilutėmis
function printEachPerson(arrName) {
  return arrName.map((onePerson) => console.log(onePerson));
}
printEachPerson(people);

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
marriedStatusInString(people);
