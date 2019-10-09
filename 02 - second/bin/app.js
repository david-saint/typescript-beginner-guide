"use strict";
let myName = 'Max';
let myAge = 22;
let hasHobbies = true;
let hobbies = ['Football', 'Coding'];
let address = [3, 'Fola Agoro'];
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Blue;
console.log(myColor);
function returnMyName() {
    return myName;
}
console.log(returnMyName());
function sayHello() {
    console.log('Hello, World');
}
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
let myMultiply;
myMultiply = multiply;
console.log(myMultiply(2.1, 2));
let userData;
userData = {
    name: 'David Saint',
    age: 22,
};
let complex;
complex = {
    data: [21, 22],
    output(a) {
        return this.data;
    },
};
let complex2;
complex2 = {
    data: [],
    output: function () {
        return this.data;
    },
};
let myRealRealAge = 27;
myRealRealAge = '27';
let finalValue = 'A string';
function neverReturns() {
    throw new Error('An error');
}
let canBeNull = 12;
let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};
let myself = {
    bankAccount,
    name: 'David Saint',
    hobbies: ['Sports', 'Chess'],
};
myself.bankAccount.deposit(10000000);
console.log(myself);
