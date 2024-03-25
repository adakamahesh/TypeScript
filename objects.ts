const user={
    name:'mahesh',
    email:"mahesh@gmail.com",
    isActive:true
}

function creatuser({name:string, ispaid:boolean}){}
let newuser={name:"mahesh",ispaid:false}
console.log(newuser);
creatuser(newuser);

function createcourse():{name:string,price:number}{
    return {name:"sri", price:399}
}

export{}