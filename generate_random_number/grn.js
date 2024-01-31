// 1. Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100

Math.floor(Math.random());

// 2. Opdater din funktion så den skriver det tilfædige tal til HTML.

// let randomNr = Math.floor(Math.random());

// 3. Opdater din funktionen så den kan modtage parameteret “max”. Det tilfældige tal skal så være fra og med 0 til og med “max

let randomNr = Math.floor(Math.random() * 101);

// 4. Opdater din funktion så den også modtager en querySelector som parameter som tallet skal udskrives til

document.querySelector("#number").textContent = randomNr;
