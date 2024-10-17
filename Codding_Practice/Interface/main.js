// // // // // // A simple  interface object a deffine a variabal.
// // // // // // Taske 1
// // // // interface Person1 {
// // // //     name: string;
// // // //     City: string;
// // // //     Country: string;
// // // //     Course: string;
// // // //     Fees: number;
// // // // };
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// // // // interface Person2 {
// // // //     name: string;
// // // //     City: string;
// // // //     Country: string;
// // // //     Course: string;
// // // //     Fees: string;
// // // // }
// // // // let person2: Person2 = {
// // // //     name: "Muneer",
// // // //     City: "Larkana",
// // // //     Country: "UAE",
// // // //     Course:  "Pythone",
// // // //     Fees: "4000"
// // // // }
// // // // let person: Person1 = {
// // // //     name: "Shuaib",
// // // //     City: "Karachi",
// // // //     Country: "Pakistan",
// // // //     Course: "TypeScript",
// // // //     Fees: 30000,
// // // // }
// // // // console.log(person)
// // // // console.log(person2)
// // // // // // Taske 2 
// // // // interface Car {
// // // //     brand: string;
// // // //     modle: string;
// // // //     year?: number;
// // // // };
// // // // let myCar: Car = {
// // // //     brand: "Toyta",
// // // //     modle: "Corola",
// // // // }
// // // // console.log(myCar);
// // // // // Taske 3
// // // // interface Book {
// // // //     readonly title: string;
// // // //     author: string;
// // // // };
// // // // let myBook: Book = {
// // // //     title: "TypeScrpt Handbooke",
// // // //     author: "Author Name"
// // // // };
// // // // console.log(myBook);
// // // // // Taske 4 
// // // // interface SearchFunc {
// // // //     (source: string, subString: string): boolean;
// // // // }
// // // // let mySearch: SearchFunc = function(source: string, subString: string): boolean {
// // // //     return source.includes(subString);
// // // // }
// // // // console.log(mySearch);
// // // // // Taske 5
// // // // interface StringArray {
// // // //     [index: number]: string;
// // // // }
// // // // let myArray: StringArray = ["Shuaib", "Muneer", "Ali"];
// // // // // let secondItem: string = myArray[1];
// // // // console.log(myArray)
// // // // // Taske 6
// // // // interface Shape {
// // // //     color: string;
// // // // }
// // // // interface Square extends Shape {
// // // //     sideLength: number;
// // // // }
// // // // let mySquare: Square = {
// // // //     color: "blue",
// // // //     sideLength: 10
// // // // };
// // // // console.log(mySquare);
// // // // Taske 7 
// // // interface Counter {
// // //     (start: number): string;
// // //     interval: number;
// // //     reset(): void;
// // // }
// // // function getCounter(): Counter {
// // //     let counter = function(start: number): string{
// // //         return `started at ${start}`;
// // //     } as Counter;
// // //     counter.interval = 123;
// // //     counter.reset = function() {
// // //         console.log("Counter reset");
// // //     };
// // //     return counter;
// // // }
// // // let  c = getCounter();
// // // c(10);
// // // c.reset();
// // // c.interval = 5.0;
// // // // getCounter();
// // // console.log(getCounter())
// // interface ClockInterface {
// //     correntTime: Date;
// //     setTime(d: Date): void;
// // }
// // class Clock implements ClockInterface {
// //     correntTime: Date = new Date();
// //     setTime(d: Date) {
// //         this.correntTime = d;
// //     }
// //     constructor(h: number, m: number){}
// // }
// // console.log(Clock);
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () {
        console.log("Button selected");
    };
    return Button;
}(Control));
var TexBox = /** @class */ (function (_super) {
    __extends(TexBox, _super);
    function TexBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TexBox.prototype.select = function () {
        console.log("TextBox selected");
    };
    return TexBox;
}(Control));
var button = new Button();
button.select();
var textBox = new TexBox();
textBox.select();
// class Control {
//     private state: any;
// }
// interface SelectableControl extends Control {
//     select(): void;
// }
// class Button extends Control implements SelectableControl {
//     select() {
//         console.log("Button selected");
//     }
// }
// class TexBox extends Control implements SelectableControl {
//     select() {
//         console.log("TextBox selected");
//     }
// }
// // Correct implementation: Both Button and TexBox extend Control and implement SelectableControl
// const button = new Button();
// button.select(); // Output: "Button selected"
// const textBox = new TexBox();
// textBox.select(); // Output: "TextBox selected"
// // The `console.log(this.AbortController);` line doesn't belong to the class code,
// // as `this` in that context refers to the global object in strict mode, it should be removed or used in a proper context.
