"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// sætter deafult til dansk når siden loader færdig
let locale = "da";

// I denne funktion sættes locale = parametret, på den måde kan vi ændre parametret og dermed også locale til en ny værdi
function skiftSprog(nyLocale) {
  if (texts[nyLocale]) {
    locale = nyLocale;
    indsætText();
  }
}

// I denne function sætter vi den tekst ind som skal erstatte den text der allerede findes i header
function indsætText() {
  const header = document.querySelector(".header");
  const footer = document.querySelector(".footer");
  header.textContent = getText(0);
  footer.textContent = getText(1);
}

// Denne function stykker data fra texts sammen med den nye locale værdi samt array index der blev sendt med fra tidligere funktion, samt sender det tilbage igen
function getText(index) {
  return texts[locale].texts[index].text;
}

// Den her lille bid kode gør at når indsætText bliver kørt igennem første gang (uden valg i vores drop down), så kører den med default locale som er sat til dansk næsten øverst
indsætText();

// Den her eventlistner lytter efter forandring i vores drop down, læser den value der er valgt, sætter den til ny value, og så er der en if statement der læser hvad ny value er lig med og derefter kører skiftSprog med den valgte parameter
document.querySelector(".language").addEventListener("change", (event) => {
  let nyValue = event.target.value;
  if (nyValue === "da") {
    skiftSprog("da");
  } else {
    skiftSprog("de");
  }
});
