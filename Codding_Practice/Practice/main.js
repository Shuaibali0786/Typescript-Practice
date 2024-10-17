class person1 {
    name;
    age;
    city;
    course;
    constructor(name, age, city, course) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.course = course;
    }
    people1() {
        console.log(`This is me ${this.name} Ali,  and iam ${this.age} yers old,  from ${this.city}, course ${this.course}`);
    }
}
class person2 extends person1 {
    constructor(name, age, city, course) {
        super(name, age, city, course);
    }
    people2() {
        console.log(`This is me ${this.name} Ahmed, and iam ${this.age} yers old, from ${this.city}, course ${this.course}`);
    }
}
class person3 extends person1 {
    constructor(name, age, city, cours) {
        super(name, age, city, cours);
    }
    people3() {
        console.log(`This is me ${this.name} Abbas, and iam ${this.age} years old , form ${this.city}, course ${this.course}`);
    }
}
class person4 extends person1 {
    constructor(name, age, city, course) {
        super(name, age, city, course);
    }
    people4() {
        console.log(`This is me ${this.name}, and iam ${this.age} yers old  form ${this.city}, course ${this.course}`);
    }
}
// calling
let greet1 = new person1("Shuaib", 22, "Karachi", "TypeScript");
greet1.people1();
let greet2 = new person2("Sohail", 23, "karachi", "javascript");
greet2.people2();
let greet3 = new person3("Muneer", 24, "Karachi", "Pythone");
greet3.people3();
let greet4 = new person4("Zeeshan", 19, "Karachi", "IT");
greet4.people4();
// // interface
// interface person1 {
//     name: string;
//     age: number;
// };
// interface person2 {
//     name: string,
//     age: number,
// }
// let greet1: person1 = {
//     name: "Shuiab",
//     age: 22
// }
// let greet2: person2 ={
//     name: "muneer", 
//     age: 23,
// }
// console.log(greet1, greet2)
// SetTimeout
// function greet1 () {
//     console.log("Hello  World");
// }
// setTimeout(greet1, 5000);
// jiosjidsj
// function greet2 (a: number, b: number):number{
//     return a + b;
// }
// let  result = greet2 (3,3);
// console.log(result)
// asynchronousr
function asyFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("feching data1");
            resolve("Success");
        }, 2000);
    });
}
// 2
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("feching data2");
            resolve("success");
        }, 4000);
    });
}
// 3
function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("feching data3");
            resolve("success");
        }, 6000);
    });
}
console.log("feaching data1..................");
asyFunc().then((res) => console.log("feaching data2.................."));
asyncFunc2().then((res) => console.log("feaching data3.................."));
asyncFunc3().then();
export {};
