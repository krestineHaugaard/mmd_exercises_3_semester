"use strict";

// moms trykket fra et beløb

// const fastMoms = 0.25;
// let valgtPris = 1000;
// momsBeregner(fastMoms, valgtPris);

// function momsBeregner(moms, pris) {
//   let momsAfPris = moms * pris;
//   let nyPris = pris - momsAfPris;
//   console.log(nyPris + " kr");
// }

// moms lagt i et beløv

function momsBeregner(pris, moms = 25) {
  console.log(pris + (pris * moms) / 100);
}

let beregnMoms = momsBeregner(100);

console.log(beregnMoms);
