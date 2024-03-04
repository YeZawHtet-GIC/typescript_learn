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
let brands = {
  name: "lugi",
  age: 36,
};
brands.name = "logo";
brands.age = 20;

//! functions
function addTwoNumber(number1: number, number2: number): number {
  return number1 + number2;
}
const subtractTwoNumber = (number1: number, number2: number): number => {
  return number1 - number2;
};
addTwoNumber(2, 3);
subtractTwoNumber(2, 3);
function addAllNumbers(items: number[]): number {
  const total = items.reduce((a, c) => a + c, 0);
  console.log(total);
  return total;
}
addAllNumbers([1, 2, 3, 4, 6]);

//!return type inference
function formatGreeting(name: string, greeting: string) {
  return `${name} ${greeting}`;
}

const result = formatGreeting("mario", "Hello");

//! any type in ts
let something: any;
something = "hello world";
something = 200;
something = true;

// way 2
let something2;
something2 = "hello world";
something2 = 200;
something2 = true;

//! any type in array

let items: any[] = [1, 2, 3, 4, 5];
items.push("hello world");
items.push(200);
items.push(true);

//! function and any

function add(a: any, b: any): any {
  return a + b;
}
add(1, 2);
