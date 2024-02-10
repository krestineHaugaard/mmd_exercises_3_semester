// Version 1 string = all uppercase

// const name = "KRESTINE";

// const firstIndex = name.indexOf(name);
// const lastIndex = name.lastIndexOf(name);

// const letter = name.substring(firstIndex + 1, lastIndex + name.length);

// const lowerCase = letter.toLowerCase();

// const newName = name.replace(letter, lowerCase);

// console.log(newName);

// Version 2 string = all lower case

const name = "krestine";

const letter = name.substring(0, 1);

const upperCase = letter.toUpperCase();

const newName = name.replace(letter, upperCase);

console.log(newName);

// Lavede to versioner fordi jeg troede det ville være nemmere
// at ændre fra store bogstaver til små, det gik så op for mig at det var
// nemmere at ændre fra små til et stort forbogstav
