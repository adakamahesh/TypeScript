"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score; // Declaring a variable 'score' with type number|string
score = 45; // Assigning a number to 'score'
score = 'ten'; // Assigning a string to 'score'
// Declaring a variable 'amb' with type annotation user|Admin and assigning it an object of type user
var amb = { name: 'amb', id: 501 };
amb = { username: 'amb', id: 501 }; // Reassigning 'amb' with an object of type Admin
// Defining a function 'getdbid' which takes a parameter 'id' of type number|string and logs a message
function getdbid(id) {
    console.log("db id is:".concat(id));
}
getdbid(5); // the 'getdbid' function with a number argument
getdbid('5'); // the 'getdbid' function with a string argument
