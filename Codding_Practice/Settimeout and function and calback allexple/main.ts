// // // // Using setTimeout in typeScript 
// // // // Basic setTimeout Exmple
function greet  () {
    console.log("Hello World");
}

// // call greet after 4 seconds

setTimeout(greet, 4000)

// Taske 2
setTimeout(() =>{
    console.log("Hello World")
}, 2000)


// // // // taske3
function add (a: number, b: number): Number {
    return a + b;
}

let result = add ( 3, 3);
console.log(result);


// // function message (a: number, b: number) : number {
// // return a - b;
// // }

// // let now = message(8, 4);

// // console.log(now);

// // function greetFunction (name: string, greeting?: string) : void{
// //     if(greeting){
// // console.log(`${greeting}, ${name}!`);
// //     } else {
// //         console.log(` Hello ${name}!`);
// //     }
// // }

// // greetFunction("Shuaib");

// // greetFunction("Shuaib", "Good morning");

// // // promise 
// // let promise = new Promise<number>((resolve, reject) =>
// // {
// //     let success = true;
// //     setTimeout(() => {
// //         if(success){
// //             resolve(44);
// //             // reject("Shuaib")

// //         } else {
// //             reject ("Something went wrong");   // sec 3000 
// //         }
// //     }, 3000)
// // });

// // promise
// // .then((result) =>{
// //     console.log(`Result: ${result}`); // output after 3000  seconds: result: 42
// // })

// // .catch((error) =>{
// //     console.log(`Error: ${error}`);
// // });

// // function delay(ms:number): Promise<void>{
// //     return new Promise((reslove) =>{
// //         setTimeout(reslove, ms);
        
// //     });
// // }


// // delay(2000)

// // .then(() => {
// //     console.log("Executed after 2 seconds");
// // })

// // .catch((error) => {
// //     console.log(` Error ${error}`);
// // })

// // Using Async await with Promise

// function fetchData(): Promise<string> {
//     return new Promise ((reslove, reject) =>
//     {
//         setTimeout(() => {
//             let success = true;
//             if(success) {
//                 reslove("Data fetched successfully");
//             } else {

//             }
//         })
//     })
// }


