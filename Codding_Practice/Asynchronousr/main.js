// // // // // //Asynchronous 
// // // // // console.log("One")
// // // // // console.log("Two")
// // // // // console.log("Three")
// // // // // //SetTimeoute
// // // // // setTimeout( () => {
// // // // //     console.log("Hello");
// // // // // }, 5000) // timeout 
// // // // // // Deffine a Function
// // // // // function sum(a, b){
// // // // //     console.log(a+b);
// // // // // }
// // // // // function calculator (a, b, sumCalBack){
// // // // //     sumCalBack(a, b);
// // // // // }
// // // // // calculator(2, 4,(a, b,) =>{
// // // // //     console.log(a + b);
// // // // // });
// // // // //  Deffine a Function setTimeout 
// // // // function getDate(dataId, getNextdata){
// // // //     setTimeout (() => {
// // // //         console.log("date", dataId);
// // // //         getNextdata();
// // // //     }, 4000);
// // // // }
// // // // // callback hell
// // // // getDate(1, () => {
// // // //     console.log("getting data2.............")
// // // //     getDate(2, () => {
// // // //         console.log("getting data3.............")
// // // //         getDate(3, () => {
// // // //             console.log("getting data4.............")
// // // //         });
// // // //     });
// // // // });
// // // // // data1
// // // // // data2
// // // // // data33
// // // // promise
// // // let getPromise = () => {
// // //     return new Promise((resolve, reject) => {
// // //         console.log("Iam a promise");
// // //         // resolve("123");
// // //         reject("error");
// // //     });
// // // };
// // // let promise = getPromise();
// // // promise.then((res ) => {
// // //     console.log("promise fullfilled", res);
// // // });
// // // promise.catch((err ) => {
// // //     console.log("rejected", err);
// // // });
// // // hellping
// let getPromise = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         // Uncomment one of the following lines to test resolve or reject
//         // resolve("123");
//         reject("error");
//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// }).catch((err) => {
//     console.log("rejected", err);
// });
// // AsynFun,  
function asyncFunc1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("some data1");
            resolve("success");
        }, 2000);
    });
}
function asyncFunc2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("some data2");
            resolve("success");
        }, 3000);
    });
}
function asyncFunc3() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("some data3");
            resolve("success");
        }, 4000);
    });
}
console.log("feching data1...........");
asyncFunc1().then(function (res) {
    console.log("fetching data2...........");
    asyncFunc2().then(function (res) { });
});
asyncFunc3().then(function (res) {
    console.log("feching data3.............");
    // asyncFunc3().then((res) => {})
});
// async-await
