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
// define a base class
var person = /** @class */ (function () {
    function person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    person.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", City: ").concat(this.city);
    };
    return person;
}());
var greet = /** @class */ (function (_super) {
    __extends(greet, _super);
    function greet(name, age, city) {
        return _super.call(this, name, age, city) || this;
    }
    greet.prototype.message = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.age, ", City: ").concat(this.city);
    };
    return greet;
}(person));
var person1 = new person("Shuaib", 23, "Karachi");
console.log(person1.getDetails());
var A = new greet("Sohail", 23, "karachi");
console.log(A.message());
