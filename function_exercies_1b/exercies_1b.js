"use strict";

// sayHello("Connor");

// function sayHello(firstName) {
//   console.log("Hello", firstName);
// }

// 1. the function is called on earlier line than it created?

// function sayHello(firstName) {
//   console.log("Hello", firstName);
// }

// sayHello("Connor");
// den kører uden problemer

// 2. the function is called with a variable called myName?

// myName("Connor");

// function sayHello(firstName) {
//   console.log("Hello", firstName);
// }

// Uncaught ReferenceError: myName is not defined at exercies_1b.js:20:1

// 3. there is another variable called firstName outsite the function?

// sayHello("Connor");
// firstname("Krestine");

// function sayHello(firstName) {
//   console.log("Hello", firstName);
// }

// exercies_1b.js:31 Uncaught ReferenceError: firstname is not defined

// 4. the function is called without any parameter?

// sayHello("Connor");

// function sayHello() {
//   console.log("Hello", firstName);
// }

// exercies_1b.js:44 Uncaught ReferenceError: firstName is not defined
//     at sayHello (exercies_1b.js:44:24)
//     at exercies_1b.js:41:1
// sayHello @ exercies_1b.js:44
// (anonymous) @ exercies_1b.js:41

// 5. the function is called with firstName and lastName?

// sayHello("Connor");

// function sayHello(firstName, lastName) {
//   console.log("Hello", firstName);
// }

// ingen fejlmelding, alt kører

// 6. and the function is called with lastName before firstName?

// sayHello("Connor");

// function sayHello(lastName, firstName) {
//   console.log("Hello", firstName);
// }

// Hello undefined, den kan ikke finde firstname, fordi last name ikke er findes
