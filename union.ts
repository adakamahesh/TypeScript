let score:number|string
score=45
score='ten'

type user={
    name:string;
    id:number
}

type Admin={
    username:string;
    id:number
}

let amb:user|Admin={name:'amb',id:501}
amb={username:'amb',id:501}

function getdbid(id:number|string){
    console.log(`db id is:${id}`);   
}
getdbid(5)
getdbid('5')
export{}