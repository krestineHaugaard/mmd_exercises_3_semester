"use strict";

const fastMoms = 0.25;
let valgtPris = 1000;
momsBeregner(fastMoms, valgtPris);

function momsBeregner(moms, pris) {
  let momsAfPris = moms * pris;
  let nyPris = pris - momsAfPris;
  console.log(nyPris + " kr");
}
