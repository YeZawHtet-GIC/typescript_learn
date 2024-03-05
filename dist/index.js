"use strict";
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
let names = ["aa", "bb", "cc"];
let ages = [23, 26, 31, 32, 33, 34, 35, 36];
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
let users = {
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
function addTwoNumber(number1, number2) {
    return number1 + number2;
}
const subtractTwoNumber = (number1, number2) => {
    return number1 - number2;
};
addTwoNumber(2, 3);
subtractTwoNumber(2, 3);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
    return total;
}
addAllNumbers([1, 2, 3, 4, 6]);
//!return type inference
function formatGreeting(name, greeting) {
    return `${name} ${greeting}`;
}
const result = formatGreeting("mario", "Hello");
//! any type in ts
let something;
something = "hello world";
something = 200;
something = true;
// way 2
let something2;
something2 = "hello world";
something2 = 200;
something2 = true;
//! any type in array
let items = [1, 2, 3, 4, 5];
items.push("hello world");
items.push(200);
items.push(true);
//! function and any
function add(a, b) {
    return a + b;
}
add(1, 2);
//! Tuples
let tuple = ["hello", 200];
tuple[0] = "world";
tuple[1] = 300;
console.log(tuple);
//! Tuples examples
let tuple2 = ["hello", 200];
tuple2[0] = "world";
tuple2[1] = 300;
console.log(tuple2);
function useCoords() {
    // get coordinate
    const lat = 100;
    const log = 200;
    return [lat, log];
}
const [lat, log] = useCoords();
//! named tuple
let user;
user = ["trojan", "trojan@gmail.com"];
console.log(user[0]);
const user1 = { name: "mario", email: "mario@gmail.com" };
const newPost = { title: "Post One", content: "This is Post One" };
//! interface as function argument
function createPost(post) {
    console.log(post.title);
}
createPost(newPost);
//! interface with arrays
let posts = [];
posts.push(newPost);
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
console.log(colorOne);
const bookOne = { name: "Book One", price: 300 };
function formatBook(bookOne) {
    console.log(`${bookOne.name} is only ${bookOne.price}`);
}
formatBook(bookOne);
//! Union Types
let someId;
someId = 2;
someId = "3";
let id;
id = 3;
id = "hello";
//! Union types pitfall
function swapIdType(id) {
    console.log(id);
    return id;
}
swapIdType(3);
swapIdType("3");
function swapTestNumber(num) {
    if (typeof num === "number") {
        //can use number methods and propertiesF
        return num.toString();
    }
    else {
        //can use string methods
        return parseInt(num);
    }
}
const strNum = swapTestNumber("200");
const intNum = swapTestNumber(200);
console.log(strNum, intNum);
function logDetails(value) {
    if (value.type == "user") {
        console.log(value.name, value.email);
    }
    else {
        console.log(value.name, value.age);
    }
}
const user2 = { type: "user", name: "John", email: "john@example.com" };
const person = { type: "person", name: "Alice", age: 30 };
logDetails(user2); // Output: John john@example.com
logDetails(person); // Output: Alice 30
