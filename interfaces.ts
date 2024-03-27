// Define the 'user' interface with properties 'dbid', 'email', 'userid', 'googleid' (optional), and 'starttrail' method
interface user{
    readonly dbid:number
    email:string,
    userid:number
    googleid?:string
    starttrail:()=>string
}
interface user{
    githublink:string
}   // Additional property specific to this interface declaration

// Declare a constant 'mahesh' of type 'user' and assign it an object with properties defined in the merged interface
const mahesh:user={
    dbid:501,
    githublink:"maheshfhtjgv",
    email:'mahesh@gmail.com',
    userid:10,
    starttrail: ()=>{
        return "mb"
    }
}
mahesh.userid=6

console.log(mahesh);
