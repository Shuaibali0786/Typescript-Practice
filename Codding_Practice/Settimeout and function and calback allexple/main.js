"use strict";
// // // // Using setTimeout in typeScript 
// // // // Basic setTimeout Exmple
// // // function greet  () {
// // //     console.log("Hello World");
// // // }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// // // // call greet after 4 seconds
// // // setTimeout(greet, 4000)
// // // // Taske 2
// // // setTimeout(() =>{
// // //     console.log("Hello World")
// // // }, 2000)
// // // // taske3
// // // function add (a: number, b: number): Number {
// // //     return a + b;
// // // }
// // // let result = add ( 3, 3);
// // // console.log(result);
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
var inquirer_1 = require("inquirer");
// Initialize user balance and pin code
var myBalance = 10000;
var myPin = 1234;
// Function to simulate asynchronous balance check
function checkBalance() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Your account balance is: ".concat(myBalance));
        }, 1000);
    });
}
// Function to simulate asynchronous withdrawal
function withdraw(amount) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (amount > myBalance) {
                reject(new Error("Insufficient balance"));
            }
            else {
                myBalance -= amount;
                resolve("".concat(amount, " withdrawn successfully. Remaining balance: ").concat(myBalance));
            }
        }, 1000);
    });
}
// Main function to run the ATM operations
function runATM() {
    return __awaiter(this, void 0, void 0, function () {
        var pinAnswer, operationAns, amountAns;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Welcome to Shuaib Ali - ATM Machine");
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "pin",
                                type: "number",
                                message: "Enter your pin code:",
                            },
                        ])];
                case 1:
                    pinAnswer = _a.sent();
                    if (!(pinAnswer.pin === myPin)) return [3 /*break*/, 6];
                    console.log("Pin is Correct, Login Successfully!");
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "operation",
                                type: "list",
                                message: "Please select an option",
                                choices: ["withdraw", "check balance"],
                            },
                        ])];
                case 2:
                    operationAns = _a.sent();
                    if (!(operationAns.operation === "withdraw")) return [3 /*break*/, 4];
                    return [4 /*yield*/, inquirer_1.default.prompt([
                            {
                                name: "amount",
                                type: "number",
                                message: "Enter the amount to withdraw:",
                            },
                        ])];
                case 3:
                    amountAns = _a.sent();
                    withdraw(amountAns.amount)
                        .then(function (message) {
                        console.log(message);
                    })
                        .catch(function (error) {
                        console.error("Error:", error.message);
                    });
                    return [3 /*break*/, 5];
                case 4:
                    if (operationAns.operation === "check balance") {
                        checkBalance()
                            .then(function (message) {
                            console.log(message);
                        })
                            .catch(function (error) {
                            console.error("Error:", error.message);
                        });
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    console.log("Pin is Incorrect, Try Again");
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
runATM();
