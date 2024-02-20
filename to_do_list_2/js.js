// tema switcher fordi det lækkert at brugeren kan "costomize" deres personlige to do liste

const temaSwitch = document.querySelector(".tema");

temaSwitch.addEventListener("change", (event) => {
  let nyValue = event.target.value;
  document.querySelector("body").dataset.theme = nyValue;
});

// knapper i venstre side af big grid skal skifte mellem visning af brugerens to do liste og de færdige opgaver

// Ny opgave knap skal åbne pop up vindue hvor bruger kan udfylde informationer

// Ved pop up element skal baggrunden hvis muligt formørkes så den ikke forstyre det visuelle i pop uppen

// Tilføj delelement skal gøre det muligt for bruger at putte flere delelementer på sin opgave liste

// Kryds skal lukke pop up hvis bruger ikke ønsker at lave ny opgave alligevel

// Tilføj opgave knap skal tilføje alt information fra pop op input boxes, til en ny article (opgave)

// Lav unikt ID til hver articel der bliver oprettet, samt opret ny artikkiel for hver submit

// Store tjek tegns box skal fjerne opgaven fra to do til færdige opgaver og omvendt

// Stor skraldespands icon skal fjerne opgaver permanent

// Lille tjek tegn skal bare krydse delelementer af som gjort

// Lille skraldespand skal fjerne fjerne enkelte delelment i den samlede opgave
