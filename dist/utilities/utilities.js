"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Utilities {
    constructor() { }
    static getRandomNumber() {
        return Math.floor(Math.random() * 100);
    }
    static getRandomIntFloatNumber() {
        let random = this.getRandomNumber() % 2 == 0;
        let number = random
            ? Math.floor(Math.random() * 100)
            : parseFloat((Math.floor(Math.random() * 100) + Math.random()).toFixed(2));
        return number;
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
