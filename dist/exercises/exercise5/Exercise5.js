"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Exercise5 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(5, "Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.");
    }
    getAnswer() {
        let range1 = Utilities_1.default.getRandomNumber();
        let range2 = Utilities_1.default.getRandomNumber();
        let number = Utilities_1.default.getRandomIntFloatNumber();
        if (range1 > range2) {
            var lower = range2;
            var upper = range1;
        }
        else {
            var lower = range1;
            var upper = range2;
        }
        let isWithinBounds = this.intWithinBounds(number, lower, upper);
        console.log(`intWithinBounds(${number}, ${lower}, ${upper}) => ${isWithinBounds}`);
    }
    intWithinBounds(number, lower, upper) {
        if (!Number.isInteger(number)) {
            return false;
        }
        if (number > lower && number < upper) {
            return true;
        }
        else {
            return false;
        }
    }
}
exports.default = Exercise5;
