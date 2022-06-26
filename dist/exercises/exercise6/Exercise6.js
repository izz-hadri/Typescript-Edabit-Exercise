"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Exercise6 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(6, "Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.");
    }
    getAnswer() {
        let price = Utilities_1.default.getRandomNumber();
        let discount = Utilities_1.default.getRandomNumber();
        let priceAfterDiscount = this.dis(price, discount);
        console.log(`dis(${price}, ${discount}) => ${priceAfterDiscount}`);
    }
    dis(price, discount) {
        return parseFloat(((100 - discount) / 100 * price).toFixed(2));
    }
}
exports.default = Exercise6;
