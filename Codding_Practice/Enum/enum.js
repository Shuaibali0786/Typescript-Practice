// Deffine a enum of days
var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Fridy"] = 5] = "Fridy";
    Days[Days["Saturday"] = 6] = "Saturday";
})(Days || (Days = {}));
var today = Days.Sunday;
console.log("Today is ".concat(Days[today]));
// Fruites
var Fruites;
(function (Fruites) {
    Fruites[Fruites["Apple"] = 0] = "Apple";
    Fruites[Fruites["Mango"] = 1] = "Mango";
    Fruites[Fruites["Banana"] = 2] = "Banana";
    Fruites[Fruites["Orange"] = 3] = "Orange";
})(Fruites || (Fruites = {}));
console.log(Fruites[0]);
console.log(Fruites["Mango"]);
console.log(Fruites["Apple"]);
console.log(Fruites.Orange);
var friendsName;
(function (friendsName) {
    friendsName[friendsName["Shuaib"] = 0] = "Shuaib";
    friendsName[friendsName["Baat"] = 1] = "Baat";
    friendsName[friendsName["Karachi"] = 2] = "Karachi";
    friendsName[friendsName["Pakistan"] = 3] = "Pakistan";
})(friendsName || (friendsName = {}));
var Friendsname = friendsName.Shuaib;
console.log("This is me ".concat(friendsName[Friendsname]));
var message;
(function (message) {
    message[message["a"] = 0] = "a";
    message[message["b"] = 1] = "b";
    message[message["c"] = 2] = "c";
    message[message["d"] = 3] = "d";
    message[message["e"] = 4] = "e";
})(message || (message = {}));
var abc = message.a;
console.log(" ".concat(message[abc]));
