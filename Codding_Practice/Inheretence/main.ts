//  Bass class 

class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
    makesound(): void {
        console.log(`${this.name} makes a sound`);
    }
}
// Derived class 
class Dog extends Animal{
    bread: string;
    constructor (name: string, bread: string){
        super(name); // call the constructor of the base class
        this.bread = bread;
    }
    makesound(): void {
        console.log(`${this.name} barks.`);
    }
    showBread(): void{
        console.log(`${this.name} is a ${this.bread},`)
    }
}

let myDog = new Dog("Rex", "German Shepherd");
myDog.makesound();
myDog.showBread();