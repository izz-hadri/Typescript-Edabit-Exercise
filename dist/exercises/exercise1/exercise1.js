"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Exercise1 {
    constructor() { }
    getQuestion() {
        console.log("Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
    }
    getAnswer() {
        let number1 = this.getRandomNumber();
        let number2 = this.getRandomNumber();
        let result = number1 + number2 < 100;
        console.log(`${number1} + ${number2} = ${number1 + number2} => ${result}`);
    }
    getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
}
exports.default = Exercise1;
