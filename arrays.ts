const username:string[]=[]// Declaring an empty array of strings to store usernames
const usernumber:Array<number>=[]// Declaring an empty array of numbers using a different syntax

// Defining a type 'user' with properties 'name' and 'isactive'
type user={
    name:string
    isactive:boolean
}

const alluseres:user[]=[]// Declaring an empty array of objects of type 'user' to store all users
const MLModel:number[][]=[
    [65,25,34],[]
]// Declaring a 2D array to store numerical data for MLModel

username.push("mahesh")// Adding a username to the 'username' array
usernumber.push(501)// Adding a number to the 'usernumber' array
alluseres.push({name:"jay",isactive:true})// Adding a user object to the 'alluseres' array

console.log(username);
console.log(usernumber);
console.log(alluseres);
console.log(MLModel);

export{}