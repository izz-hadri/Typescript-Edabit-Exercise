"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Exercise1 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(1, "Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
    }
    getAnswer() {
        let number1 = Utilities_1.default.getRandomNumber();
        let number2 = Utilities_1.default.getRandomNumber();
        let result = number1 + number2 < 100;
        console.log(`${number1} + ${number2} = ${number1 + number2} => ${result}`);
    }
}
exports.default = Exercise1;
