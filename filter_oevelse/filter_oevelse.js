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

const btnElctric = document.querySelector("#show_elctric");
const btnMoreThanTwo = document.querySelector("#show_more_than_two_passengers");
const btnElctricOwned = document.querySelector("#show_electic_owned_by_jonas");
const btnRugbroedMoreThanOne = document.querySelector(
  "#show_gas_rugbroed_and_more_than_one_passengers"
);
const btnShowAll = document.querySelector("#show_all");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}

// hardcode hvis køretøj skal være electrisk

function isElectric(electric) {
  if (electric.isElectric === true) {
    vehicles.filter(showTheseVehicles);
  } else {
    return false;
  }
}

// console.log(vehicles.filter(isElectric));

// hardcode hvis kørertøjer med mere end 2 sæder

function moreSeats(seat) {
  if (seat.passengers > 2) {
    return true;
  } else {
    return false;
  }
}

// console.log(vehicles.filter(moreSeats));

// hardcode alle el-køreretøjer som ejes af jonas

function seatsAndOwner(seatAndOwner) {
  if (seatAndOwner.isElectric === true && seatAndOwner.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

// console.log(vehicles.filter(seatsAndOwner));

// hardcode alle køretøjer der kører på rugbrød og har plads til mere end en

function gasAndPassengers(gAP) {
  if (gAP.fuel === "Rugbrød" && gAP.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

// console.log(vehicles.filter(gasAndPassengers));
