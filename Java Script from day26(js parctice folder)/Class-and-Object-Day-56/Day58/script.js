//! inheritance topic 
class Animal {
    constructor() {
        this.owner="ritam maty"
        this.name="animal name"
        this.price="animal price"
        this.breed="animal bread"
    }
    eat(){
        console.log("animal eat rice");
        
    }
    behaviour(){
        console.log("they are better than human");
        
    }
}
class Dog extends Animal{
    constructor() {
        super()
        this.name="rocky"
        this.price=10000
        this.breed="limbo"
    }
    sound(){
        console.log(`${this.name} can bhau bhau`);
        
    }
    eat(){
        console.log(`${this.name} can almost everything `);
        
    }
}
let dog=new Dog()
dog.eat()
dog.sound()
dog.behaviour()
//! private variable 
//! interesting thing is we can change it easily its not like another language 
//! that we cant change   
class Student {
    constructor() {
        this._sName="ritam"
    }
    get sName(){
        return this._sName
    }
    set sName(val){
        this._sName=val
        console.log("new name inserted");
        
    }
}
let s1=new Student()
console.log(s1.sName);
s1.sName="ritam maty"//! way of writing in set it quite nice 
console.log(s1.sName);





