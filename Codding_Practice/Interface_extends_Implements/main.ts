// Define an interface
interface Iperson {
    name: string;
    age: number;
    city: string;
    getDetails(): string;
}

// define a base class
class person implements Iperson {
    name: string;
    age: number;
    city: string;
    constructor(name: string, age: number, city: string){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    }
}

class greet extends person  {
    constructor(name: string, age: number, city: string){
        super(name, age, city)
    }
    message (): string {
    return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`
    }
}

let person1 = new person ("Shuaib", 23, "Karachi");
console.log(person1.getDetails());

let A = new greet("Sohail", 23, "karachi")
console.log(A.message())