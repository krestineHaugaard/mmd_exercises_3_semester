// vi laver en forkortelse af vores html ul
const list = document.querySelector("ul");

// vi har brug for en max længde til vores array
const arrayMax = 20;
// det her er vores array, den kommer til at indeholde alle de nye data der bliver pushet op
const valueSøjle = [];

// vi bruger setInterval til at kører funktion genereNySøjle hvert sekund
setInterval(genereNySøjle, 1000);

function genereNySøjle() {
  // Her laver vi et nyt list item
  const li = document.createElement("li");
  // Her genere vi en ny højde via math.random mellem 1 - 100
  const randomHøjte = Math.round(Math.random() * 100);
  // Her skubber vi den nye højde der er blevet generet op til vores array
  valueSøjle.push(randomHøjte);
  // Her putter vi højden på det li item vi har lavet
  li.style.setProperty("--height", randomHøjte);
  // Her bruger vi appendChild til at ligge vores nye li item ind som child i vores parent ul element
  list.appendChild(li);
  // Her benytter vi os af if til at afgører om vores array valueSøjles længde svare til vores arrayMax
  if (valueSøjle.length > arrayMax) {
    // Her bruger vi shift til at fjerne første element i vores array, så der aldrig kan stå mere end de max 20 vi har sat vores arrayMax til
    valueSøjle.shift();
    // Shift fjerner ikke vores li item i vores DOM, så den bliver ved med at fylde på til langt over 20
    // Derfor bruger vi removeChild til at fjerne li item og firstElementChild til at beskrive præcist hvilket child der skal fjernes
    list.removeChild(list.firstElementChild);
  }
}

// Og på grund af setInterval vil denne js blive ved med at kører til vi lukker vores fan igen
