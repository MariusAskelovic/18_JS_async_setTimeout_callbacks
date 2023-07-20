'use strict';
console.log('planeTickets.js file was loaded');

// klientas perka lektuvo bilieta
// galimi galutiniai rezultatai
// pavyko
// nepavyko
// eiga - pending
const user1 = {
  username: 'Mike',
  town: 'Kaunas',
};
function buyPlaneTickets() {
  return new Promise((resolve, reject) => {
    // imituojam kad pirkimas trunka 4sek
    setTimeout(() => {
      // veiksmas cia vyks po 4 sekundziu
      let isError = false;
      console.log('isError ===', isError);
      // jei nera klaidos,  tai pavyko
      if (isError === false) {
        resolve(user1);
      } else {
        reject();
      }
    }, 3000);
  });
}

buyPlaneTickets()
  .then((u1) => {
    console.log('geros keliones', u1.username);
    return u1.username.toUpperCase();
  })
  .then((uNameUpper) => {
    console.log('uNameUpper ===', uNameUpper);
  })
  .catch(() => {
    console.warn('ivyko klaida');
  });
