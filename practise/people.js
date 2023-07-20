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
joinNameSurnameWithHyphen(people);

// 3. Parašykite funkciją, kuri atspausdina visų žmonių vardus ir pavardes
// bei santuokos statusą, tokiu būdu Jonas Bikas: Vedęs Jonas Bikas: Nevedęs
// Samantas Kultaitytė: Ištekėjusi Samantas Kultaitytė: Neištekėjusi
