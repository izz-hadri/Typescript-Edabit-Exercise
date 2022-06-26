"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Exercise7 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(7, "Given an input string, reverse the string word by word, the first word will be the last, and so on.");
    }
    getAnswer() {
        let text = " the sky is blue";
        let textReversed = this.reverseWords(text);
        console.log("Before: " + text);
        console.log("After : " + textReversed);
    }
    reverseWords(text) {
        let words = text.split(" ");
        let textReversed = new Array();
        words
            .slice()
            .reverse()
            .forEach(word => {
            textReversed.push(word);
        });
        return textReversed.join(" ");
    }
}
exports.default = Exercise7;
