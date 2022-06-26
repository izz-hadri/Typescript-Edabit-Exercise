"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = __importDefault(require("../../utilities/utilities"));
class Exercise1 {
    constructor() { }
    getQuestion() {
        utilities_1.default.displayQuestionNumber(1);
        console.log("Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
    }
    getAnswer() {
        let number1 = utilities_1.default.getRandomNumber();
        let number2 = utilities_1.default.getRandomNumber();
        let result = number1 + number2 < 100;
        console.log(`${number1} + ${number2} = ${number1 + number2} => ${result}`);
    }
}
exports.default = Exercise1;
