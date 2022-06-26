"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utilities_1 = __importDefault(require("../../utilities/utilities"));
class Exercise2 {
    constructor() { }
    getQuestion() {
        utilities_1.default.displayQuestionNumber(2);
        console.log("Write a function that takes the base and height of a triangle and return its area.");
    }
    getAnswer() {
        let base = utilities_1.default.getRandomNumber();
        let height = utilities_1.default.getRandomNumber();
        let area = this.triArea(base, height);
        console.log(`triArea(${base}, ${height}) => ${area}`);
    }
    triArea(base, height) {
        return (base * height) / 2;
    }
}
exports.default = Exercise2;
