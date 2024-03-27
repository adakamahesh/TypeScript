let score:number|string// Declaring a variable 'score' with type number|string
score=45// Assigning a number to 'score'
score='ten'// Assigning a string to 'score'

// Defining a type 'user' with properties 'name' (string) and 'id' (number)
type user={
    name:string;
    id:number
}

// Defining a type 'Admin' with properties 'username' (string) and 'id' (number)
type Admin={
    username:string;
    id:number
}

// Declaring a variable 'amb' with type annotation user|Admin and assigning it an object of type user
let amb:user|Admin={name:'amb',id:501}
amb={username:'amb',id:501}// Reassigning 'amb' with an object of type Admin

// Defining a function 'getdbid' which takes a parameter 'id' of type number|string and logs a message
function getdbid(id:number|string){
    console.log(`db id is:${id}`);   
}
getdbid(5)// the 'getdbid' function with a number argument
getdbid('5')// the 'getdbid' function with a string argument
export{}