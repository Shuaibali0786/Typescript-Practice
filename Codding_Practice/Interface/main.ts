// // // // // // // // A simple  interface object a deffine a variabal.
// // // // // // // Taske 1
interface Person1 {
    name: string;
    City: string;
    Country: string;
    Course: string;
    Fees: number;
};

interface Person2 {
    name: string;
    City: string;
    Country: string;
    Course: string;
    Fees: string;
}
let Person2: Person2 = {
    name: "Muneer",
    City: "Larkana",
    Country: "UAE",
    Course:  "Pythone",
    Fees: "4000"
}

let person: Person1 = {
    name: "Shuaib",
    City: "Karachi",
    Country: "Pakistan",
    Course: "TypeScript",
    Fees: 30000,
}

console.log(person)

console.log(person )

// // // // // // // // // Taske 2 

// // // // // // // interface Car {
// // // // // // //     brand: string;
// // // // // // //     modle: string;
// // // // // // //     year?: number;
// // // // // // // };

// // // // // // // let myCar: Car = {
// // // // // // //     brand: "Toyta",
// // // // // // //     modle: "Corola",
    
// // // // // // // }

// // // // // // // console.log(myCar);

// // // // // // // // Taske 3

// // // // // // // interface Book {
// // // // // // //     readonly title: string;
// // // // // // //     author: string;
// // // // // // // };
// // // // // // // let myBook: Book = {
// // // // // // //     title: "TypeScrpt Handbooke",
// // // // // // //     author: "Author Name"
// // // // // // // };

// // // // // // // console.log(myBook);


// // // // // // // // Taske 4 

// // // // // // // interface SearchFunc {
// // // // // // //     (source: string, subString: string): boolean;
// // // // // // // }

// // // // // // // let mySearch: SearchFunc = function(source: string, subString: string): boolean {
// // // // // // //     return source.includes(subString);
// // // // // // // }

// // // // // // // console.log(mySearch);

// // // // // // // // Taske 5

// // // // // // // interface StringArray {
// // // // // // //     [index: number]: string;
// // // // // // // }
// // // // // // // let myArray: StringArray = ["Shuaib", "Muneer", "Ali"];
// // // // // // // // let secondItem: string = myArray[1];


// // // // // // // console.log(myArray)

// // // // // // // // Taske 6
// // // // // // // interface Shape {
// // // // // // //     color: string;
// // // // // // // }
// // // // // // // interface Square extends Shape {
// // // // // // //     sideLength: number;
// // // // // // // }
// // // // // // // let mySquare: Square = {
// // // // // // //     color: "blue",
// // // // // // //     sideLength: 10
// // // // // // // };

// // // // // // // console.log(mySquare);



// // // // // // // Taske 7 

// // // // // // interface Counter {
// // // // // //     (start: number): string;
// // // // // //     interval: number;
// // // // // //     reset(): void;
// // // // // // }

// // // // // // function getCounter(): Counter {
// // // // // //     let counter = function(start: number): string{
// // // // // //         return `started at ${start}`;
// // // // // //     } as Counter;
// // // // // //     counter.interval = 123;
// // // // // //     counter.reset = function() {
// // // // // //         console.log("Counter reset");
// // // // // //     };
// // // // // //     return counter;
// // // // // // }
// // // // // // let  c = getCounter();
// // // // // // c(10);
// // // // // // c.reset();
// // // // // // c.interval = 5.0;


// // // // // // // getCounter();
// // // // // // console.log(getCounter())



// // // // // interface ClockInterface {
// // // // //     correntTime: Date;
// // // // //     setTime(d: Date): void;

// // // // // }

// // // // // class Clock implements ClockInterface {
// // // // //     correntTime: Date = new Date();
// // // // //     setTime(d: Date) {
// // // // //         this.correntTime = d;

// // // // //     }
// // // // //     constructor(h: number, m: number){}
// // // // // }

// // // // // console.log(Clock);







// // //  today is my simple practice interface and class that's very ammazing

class Control {
    private state: any;
}
interface message extends Control{
    select():void;
}
class shuaib extends Control implements message{
    select(){
        console.log("Name:")
    };
    name(){
        console.log("Shuaib Ali");
    };
    Course(){
        console.log("Course Name:");
    };
    CoureName(){
        console.log("TypeScript")
    };
    city(){
        console.log("City Name:")
    };
    cityname(){
        console.log("Karachi")
    }   
}
 
class muneer extends Control implements message{
    select(){
        console.log("Name:");
    };

    Name1(){
        console.log("Muneer Ahmed");
    };
    course(){
        console.log("Course Name:");
    };
    courseName(){
        console.log("pythone");
    };
    City(){
        console.log("City Name:");
    };
    CityName(){
        console.log("Karachi")
    };
};
let Shuaib = new shuaib();
Shuaib.select();
Shuaib.name();
Shuaib.Course();
Shuaib.CoureName();
Shuaib.city();
Shuaib.cityname();

// Call class second
let Muneer = new muneer();
Muneer.select();
Muneer.Name1();
Muneer.course();
Muneer.courseName();
Muneer.City();
Muneer.CityName();


// class Human {
//     name: string;
//     constructor (name: string){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name + " is a human and is eating");
//     }
// }

// class Animal {
//     name: string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name + " is a Animal and is eating");
//     }
// }
// class WildAnimal {
//     title: string;
//     constructor(title: string){
//         this.title = title;
//     }
//     eat(){
//         console.log(this.title + " is a Wild Animal and is eating");
//     }
// }

// class Robot {
//     name: string;
//     constructor (name: string){
//         this.name = name;
//     }
// }

// let H: Human = new Human("Tom");
// let a: Animal = new Animal("Goat");
// let r: Robot = new Robot("R2-D2");

// // hjd
// let h2 = H;
// H = a;
// H.eat();
// let r2 = H; r = a;

// let Hum: Human = new Animal ("Dog");

// let r0: Robot = new Animal("Donkey");

// let isRobot = r0 instanceof Robot;
// console.log("Is Donkey a Animal: "+ isRobot);

// let isItAnimal = r0 instanceof Animal;
// console.log("Is Donkey a Animal:" +isItAnimal);



// fsfds fids9fs

//A confusion about Structural Typing:

//Object literals have an associated freshness before 
//they're bound to a variable. The same doesn't apply 
//for any other expressions.

//The idea is that object literals are often used for option bags 
//(where the user has to manually type out each property 
//name at each use-site), and this behavior catches typos.

//If you'd like to prevent Animal from being assigned to a Human, 
//you can add a private property to Animal, 
//since private and protected properties need to originate
// from the same declaration to be compatible.

class Human {
    
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
}

class Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(this.name + " is a Human and is eating");
    }
}

let h1 = new Human("");
let a1 = new Animal("world", 50);

//this is working, but it should not because it is 
//a fresh object with extra properties
h1 = new Animal("test", 25);

a1 = new Human("zeeshan");//ERROR

//my common sense is saying this is correct, but?

let a = {name: "Zia"};
a = {name: "Zeeshan", age: 22};//ERROR

//It seems that for object literals there is a rule for 
//fresh objects but this rules does not apply to 
//normal objects derived from classes 