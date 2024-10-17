// type 
// Taske 1

type IPersondate ={
    name: string,
    lastName: string,
    age: number,
    isMarried: boolean,
    address:{
        city: string,
        country: string,
        postalCode: string
    }
}

let person1: IPersondate = {
    name: "Shuaib",
    lastName: "Shuaib Ali",
    age: 23,
    isMarried: false,
    address: {
        city: "Karachi",
        country: "Pakistan",
        postalCode: "3333"
    }
}
// Taske 2
let person2: IPersondate = {
    name: "Muneer",
    lastName: "Muneer Abbas",
    age: 25,
    isMarried: false,
    address: {
        city: "Karachi",
        country: "Pakistan",
        postalCode: "3434"
    }
}

// Taske 3

let person3: IPersondate = {
    name: "Sohail",
    lastName: "Sohail Ahmed",
    age: 24,
    isMarried: false,
    address: {
        city: "Karachi",
        country: "Pakistan",
        postalCode: "0405"
    }
}
// Call Console

console.log(person1, person2, person3);



type basicDetails = {
    name: string;
    age: number;
};

type contactDetails = {
    email: string;
    phone: string;
};
type Employee = basicDetails & contactDetails;

let employee: Employee = {
    name: "Shuaib",
    age: 22,
    email: "shuaib@gmail.com",
    phone: "3483433484"
};
console.log(Element)


// type basicDetails = {
//     name: string;
//     age: number;
//     email: string;
//     phone: string;
// };

// let myDetails = {
//     name: "Shuaib",
//     age: 33,
//     email: "sjjkdjjks",
//     phone: "454734"
// };

// console.log(myDetails);