"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Exercise3 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(3, "Create a function that returns true when num1 is equal to num2; otherwise return false.");
    }
    getAnswer() {
        let number1 = Utilities_1.default.getRandomNumber();
        let number2 = Utilities_1.default.getRandomNumber();
        let isSame = this.isSameNum(number1, number2);
        console.log(`isSameNum(${number1}, ${number2}) => ${isSame}`);
    }
    isSameNum(number1, number2) {
        return number1 === number2;
    }
}
exports.default = Exercise3;
