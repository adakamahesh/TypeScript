// Declaring an object 'user' with properties 'name', 'email', and 'isActive'
const user={
    name:'mahesh',
    email:"mahesh@gmail.com",
    isActive:true
}

// Defining a function 'createuser' which takes an object as input with properties 'name' (string) and 'ispaid' (boolean)
function creatuser({name:string, ispaid:boolean}){}
let newuser={name:"mahesh",ispaid:false}// Declaring an object 'newuser' with properties 'name' and 'ispaid'
console.log(newuser);
creatuser(newuser);

// Defining a function 'createcourse' which returns an object with properties 'name' (string) and 'price' (number)
function createcourse():{name:string,price:number}{
    return {name:"sri", price:399}
}

export{}