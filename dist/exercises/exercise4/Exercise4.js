"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Utilities_1 = __importDefault(require("../../utilities/Utilities"));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(person) {
        if (this.age > person.age) {
            return `${person.name} is younger than me.`;
        }
        else if (this.age < person.age) {
            return `${person.name} is younger than me.`;
        }
        else {
            return `${person.name} is the same age as me.`;
        }
    }
}
class Exercise4 {
    constructor() { }
    getQuestion() {
        Utilities_1.default.displayQuestion(4, "Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:\n\n{other person name} is {older than / younger than / the same age as} me.\n");
    }
    getAnswer() {
        let p1 = new Person("Samuel", 24);
        let p2 = new Person("Joel", 36);
        let p3 = new Person("Lily", 24);
        console.log(p1.compareAge(p2));
        console.log(p2.compareAge(p1));
        console.log(p1.compareAge(p3));
    }
}
exports.default = Exercise4;
