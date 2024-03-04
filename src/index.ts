let age = 30;
console.log(age);

//!compiling typescript in new js file
//?tsc index.ts
//!running compiled js file
//?node index.js

//!auto generate console
//? node --watch index.js

let moon = 1;
let sun = 1;
let isNight = false;
console.log("this is test for tsc files");
console.log("hello world!");

//! Arrays
let names: string[] = ["aa", "bb", "cc"];
let ages: number[] = [23, 26, 31, 32, 33, 34, 35, 36];
names.push("new name");
ages.push(23);

//! type inference with arrays
let fruits = ["apple", "orange", "mango"];
const fruit = fruits[2]; //this fruit is string
let things = ["apple", 200, true];
let thing = things[1]; //this thing can be string or number or boolean
thing = 200;
thing = false;
console.log(thing);

//!Object literal
let users: { name: string; phone: number; isSingle: boolean } = {
  name: "Trojan",
  phone: 1234567890,
  isSingle: true,
};
console.log(users.name);


//! type inference with object literal
let brands={
    name: "lugi",
    age : 36,
}
brands.name = "logo";
brands.age = 20;
