class Animal {
    constructor(name,price,type) {
        this.name=name
        this.price=price
        this.type=type
    }
     add(params) {
        console.log(" hello 1");
    }
}
Animal.prototype.sub=function(){
    console.log(" hello 2");
    
}
let animal1=new Animal("rocky1",2001,"dog")
let animal2=new Animal("rocky2",2002,"dog")
let animal3=new Animal("rocky3",2003,"dog")
let animal4=new Animal("rocky4",2004,"dog")