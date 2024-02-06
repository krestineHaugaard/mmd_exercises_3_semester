const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

// hiver dokumenter ind fra html så de kan forkortes
const breadcrumbNav = document.getElementById("breadcrumb_nav");
const generateButton = document.getElementById("breadcrumb_btn");

// alt ligger inde i en knap der generer brødkrumme stien
generateButton.addEventListener("click", () => {
  // fjerner det der lå i HTML, så når man trykker på knappen så bliver kommer der ikke flere stier oven på hinanden
  breadcrumbNav.innerHTML = "";
  // laver UL element og ligger det ind i html under #breadcrum_nav
  const breadcrumbList = document.createElement("ul");
  // her benytter vi os af vores array til at lave de forskellige list items
  bc.forEach((item, index) => {
    const listItem = document.createElement("li");
    // her tjekker vi om vi har afgøre med lastchild i array, hvis ja sætter vi en class på så java kan genkende den (vi smider også noget tekst i den)
    if (index === bc.length - 1) {
      listItem.textContent = item.name;
      listItem.classList.add("last-item");
    }
    // Hvis det ikke er en last child smider vi et link på (og tekst, som i den anden)
    else {
      const link = document.createElement("a");
      link.href = item.link;
      link.textContent = item.name;
      listItem.appendChild(link);
    }

    // appendChild betyder at vi smider indholdet bagpå, så alle de gange det er gjordt er for at få indholde til at hænge sammen
    breadcrumbList.appendChild(listItem);

    // her smider vi en / på for at seperere indholdet, men kun på de to første elementer af vores arrays
    if (index < bc.length - 1) {
      const separator = document.createElement("span");
      separator.textContent = " /";
      listItem.appendChild(separator);
    }
  });

  breadcrumbNav.appendChild(breadcrumbList);
});

// Jeg har søgt en del hjælp til den her opgave
// da den var dybt frustrende for mig, men har også
// virkelig gjordt mit foir at forstå de delelementer
// løsningen er bygge op af

// På den måde ken jeg kigge tilbage på opgaven og se om
// jeg kan bruge logiken fra opgaven i en ny
