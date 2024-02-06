const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

// knapper
const btnElctric = document.querySelector("#show_elctric");
const btnMoreThanTwo = document.querySelector("#show_more_than_two_passengers");
const btnElctricOwned = document.querySelector("#show_electic_owned_by_jonas");
const btnRugbroedMoreThanOne = document.querySelector(
  "#show_gas_rugbroed_and_more_than_one_passengers"
);
const btnShowAll = document.querySelector("#show_all");

showTheseVehicles(vehicles);

btnElctric.addEventListener("click", showElectric);
btnMoreThanTwo.addEventListener("click", showMoreSeats);
btnElctricOwned.addEventListener("click", showElecricAndOwner);
btnRugbroedMoreThanOne.addEventListener("click", showGasAndPassengers);
btnShowAll.addEventListener("click", showAll);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel || "Not known"}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops || "No"}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy || "No one"}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric ? "Yes" : "No"}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem ? "Yes" : "No"}</li>`;
  });
}

//  hvis køretøj skal være electrisk

function showElectric() {
  const electricVehicles = vehicles.filter((vehicle) => vehicle.isElectric);
  clearList();
  showTheseVehicles(electricVehicles);
}

//  hvis kørertøjer med mere end 2 sæder

function showMoreSeats() {
  const twoSeats = vehicles.filter((vehicle) => vehicle.passengers > 2);
  clearList();
  showTheseVehicles(twoSeats);
}

// alle el-køreretøjer som ejes af jonas

function showElecricAndOwner() {
  const electricAndOwner = vehicles.filter(
    (vehicle) => vehicle.isElectric && vehicle.ownedBy === "Jonas"
  );
  clearList();
  showTheseVehicles(electricAndOwner);
}

// alle køretøjer der kører på rugbrød og har plads til mere end en

function showGasAndPassengers() {
  const gAP = vehicles.filter(
    (vehicle) => vehicle.fuel === "Rugbrød" && vehicle.passengers > 1
  );
  clearList();
  showTheseVehicles(gAP);
}

// vis alle

function showAll() {
  clearList();
  showTheseVehicles(vehicles);
}

// fjerne list indhold så det ikke bygger sig oven på hinanden
function clearList() {
  ulPointer.innerHTML = "";
  ulPointer.innerHTML += `<li><strong>Type</strong></li>`;
  ulPointer.innerHTML += `<li><strong>Fuel</strong></li>`;
  ulPointer.innerHTML += `<li><strong>Passengers</strong></li>`;
  ulPointer.innerHTML += `<li><strong>Stops</strong></li>`;
  ulPointer.innerHTML += `<li><strong>OwnedBy</strong></li>`;
  ulPointer.innerHTML += `<li><strong>Electric</strong></li>`;
  ulPointer.innerHTML += `<li><strong>Tandem</strong></li>`;
}
