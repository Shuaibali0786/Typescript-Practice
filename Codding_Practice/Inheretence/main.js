//  Bass class 
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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makesound = function () {
        console.log("".concat(this.name, " makes a sound"));
    };
    return Animal;
}());
// Derived class 
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, bread) {
        var _this = _super.call(this, name) || this;
        _this.bread = bread;
        return _this;
    }
    Dog.prototype.makesound = function () {
        console.log("".concat(this.name, " barks."));
    };
    Dog.prototype.showBread = function () {
        console.log("".concat(this.name, " is a ").concat(this.bread, ","));
    };
    return Dog;
}(Animal));
var myDog = new Dog("Rex", "German Shepherd");
myDog.makesound();
myDog.showBread();
