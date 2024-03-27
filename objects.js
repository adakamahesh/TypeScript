"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Declaring an object 'user' with properties 'name', 'email', and 'isActive'
var user = {
    name: 'mahesh',
    email: "mahesh@gmail.com",
    isActive: true
};
// Defining a function 'createuser' which takes an object as input with properties 'name' (string) and 'ispaid' (boolean)
function creatuser(_a) {
    var string = _a.name, boolean = _a.ispaid;
}
var newuser = { name: "mahesh", ispaid: false }; // Declaring an object 'newuser' with properties 'name' and 'ispaid'
console.log(newuser);
creatuser(newuser);
// Defining a function 'createcourse' which returns an object with properties 'name' (string) and 'price' (number)
function createcourse() {
    return { name: "sri", price: 399 };
}
