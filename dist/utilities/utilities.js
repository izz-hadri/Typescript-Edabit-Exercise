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
}
exports.default = Utilities;
