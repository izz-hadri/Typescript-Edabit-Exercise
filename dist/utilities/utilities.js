"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utilities {
    constructor() { }
    static getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    static displayQuestionNumber(number) {
        console.log(`\n\n----- Question ${number}`);
    }
    static displayQuestion(number, question) {
        this.displayQuestionNumber(number);
        console.log(question);
    }
}
exports.default = Utilities;
