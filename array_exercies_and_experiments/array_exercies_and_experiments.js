"use strict";

// const letters = [`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`];

// console.log(letters[4]);

// const newarr = letters;
// newarr[4] = `*`;

// console.log(letters[4]);

// Resultat: fik den første console.log til e og den anden til *

// Hvad er forskellen mellem letters og newarr? - det en kopi, så der er ikke nogen forskel

// Hvordan ser hele letters array ud før og efter ændringen til newarr? - før var det bogstaver, men så bliver det lavet om til *

// Er det muligt at ændre et array uden at ændre andre? -åbentbart ikke, lav et nyt array i stedet

// Hvorfor ikke? - fordi selmom det er en kopi, så går ændringerne ind og ændre originalen

// Hvad sker der hvis du bruger const i stedet for let? - der sker det samme, ingen forskell om det er const eller let

// Har du nogen ide om hvorfor det er sådan? - no clue, måske så man kan holde styr på sit array, i stedet for at lave alle mulige kopier man skal holde styr på i forhold til hvad de indeholder

// Ny opgave

// result = people.push("Draco");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Draco");

// console.log(result);
// console.log(people);

// Resultat: 4, ['Harry', 'Ron', 'Hermione', 'Draco']

// result = people.pop();

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.pop();

// console.log(result);
// console.log(people);

// Resultat: Hermione, ['Harry', 'Ron']

// result = people.push("Neville");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Neville");

// console.log(result);
// console.log(people);

// Resultat: 4, ['Harry', 'Ron', 'Hermione', 'Neville']

// result = people.push("Luna");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Luna");

// console.log(result);
// console.log(people);

// Resultat: 4, ['Harry', 'Ron', 'Hermione', 'Luna']

// result = people.slice(0,3);

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.slice(0, 3);

// console.log(result);
// console.log(people);

// Resultat: ['Harry', 'Ron', 'Hermione'], ['Harry', 'Ron', 'Hermione']

// result = people.splice(1, 0, "Cho");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.splice(1, 0, "Cho");

// console.log(result);
// console.log(people);

// Resultat: [], ['Harry', 'Cho', 'Ron', 'Hermione']

// people[1] = "Ginny";

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// people[1] = "Ginny";

// console.log(result);
// console.log(people);

// Resultat: undefined, ['Harry', 'Ginny', 'Hermione']

// result = people.push("Fred", "George");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.push("Fred", "George");

// console.log(result);
// console.log(people);

// Resultat: 5, ['Harry', 'Ron', 'Hermione', 'Fred', 'George']

// result = people.indexOf("Fred");

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.indexOf("Fred");

// console.log(result);
// console.log(people);

// Resultat: -1, ['Harry', 'Ron', 'Hermione']

// result = people.splice(result, 1);

// const people = ["Harry", "Ron", "Hermione"];

// let result;

// result = people.splice(result, 1);

// console.log(result);
// console.log(people);

// Resultat: ['Harry'], ['Ron', 'Hermione']

// Hvad gør hver metode?

// Push = skubber et ny object bagerst til ens array

// Pop = fjerner det sidste element i ens array

// Slice = The slice() method returns selected elements in an array, as a new array. The slice() method selects from a given start, up to a (not inclusive) given end. The slice() method does not change the original array.

// Splice = The splice() method adds and/or removes array elements. The splice() method overwrites the original array.

// IndexOf = The indexOf() method returns the first index (position) of a specified value.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method starts at a specified index and searches from left to right (from the given start postion to the end of the array).

// By default the search starts at the first element and ends at the last.

// Negative start values counts from the last element (but still searches from left to right).
