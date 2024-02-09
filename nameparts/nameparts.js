const name = "Peter Heronimius Lind";

const searchName1 = `Peter`;
const searchName2 = `Heronimius`;
const searchName3 = `Lind`;

const firstIndex1 = name.indexOf(searchName1);
const lastIndex1 = name.lastIndexOf(searchName1);

const firstIndex2 = name.indexOf(searchName2);
const lastIndex2 = name.lastIndexOf(searchName2);

const firstIndex3 = name.indexOf(searchName3);
const lastIndex3 = name.lastIndexOf(searchName3);

const firstName = name.substring(firstIndex1, lastIndex1 + searchName1.length);
const middleName = name.substring(firstIndex2, lastIndex2 + searchName2.length);
const lastName = name.substring(firstIndex3, lastIndex3 + searchName3.length);

console.log(firstName);
console.log(middleName);
console.log(lastName);

// Ved ikke om jeg har lavet det korrekt, synes det virker lidt underligt at lave så mange const
