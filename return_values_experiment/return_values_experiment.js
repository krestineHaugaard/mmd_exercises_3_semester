"use strict";

// Return values experiment #1

// 1. create a function called greeting

// a. that receives one parameter firstName and

// b. returns the string `hello ${firstName}`

// 2. test it by setting a variable to the result of the function, and console.log

// c. const result = greeting ("klaus");

// d. console.log (result)

// function greeting(firstName) {
//   return `Hello ${firstName}`;
//
// }

// const result = greeting("Klaus");

// console.log(result);

// Return values experiment #2

// testing the function further

// what happens if:

// 1. the function is called: greeting("any name");

// function greeting(firstName) {
//     return `Hello ${firstName}`;
//
// }

// const result = greeting("Krestine");

// console.log(result);

// result Hello Krestine

// 2. the function is called in a console.log like so; console.log(greeting("any name"));

// function greeting(firstName) {
//   return `Hello ${firstName}`;
//
// }

// console.log(greeting("Klaus"));

// result Hello Klaus

// 3. the function is called without any parameter

// function greeting() {
//  return `Hello`;
//
// }

// const result = greeting("Klaus");

// console.log(result);

// result Hello without a name

// 4. the function is called inside a template literal: const txt = `Greetings is ${greeting("a name")}`;

// function greeting(firstName) {
//  return `Hello ${firstName}`;
//
// }

// const txt = `Greating is ${greeting("Klaus")}`;

// console.log(txt);

// result Greating is Hello Klaus

// 5. the function is called "manually" from the console (where is the return value)

// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// result
// greeting();
// 'Hello undefined'

// greeting;
// ƒ greeting(firstName) {
//   let name = `Hello ${firstName}`;
//   return name;
// }
