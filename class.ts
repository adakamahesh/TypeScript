class user{
    email:string
    name:string
    constructor(email:string,name:string){
        this.email;
        this.name
    }// Assigning the constructor parameters to the class properties
}

const mahesh=new user("m@b","mahesh");// Creating a new instance of the 'user' class


abstract class Takephoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){}
}// Defining an abstract class 'Takephoto'

class Instagram extends Takephoto{

}// Extending the 'Takephoto' class with the 'Instagram' class

const mb= new Instagram('test','test')// Creating a new instance of the 'Instagram' class

export{}
