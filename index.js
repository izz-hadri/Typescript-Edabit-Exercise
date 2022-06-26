"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = __importDefault(require("./dist/exercises/exercise1/exercise1"));
const exercise2_1 = __importDefault(require("./dist/exercises/exercise2/exercise2"));
const exercise3_1 = __importDefault(require("./dist/exercises/exercise3/exercise3"));
class Main {
    constructor() {
        this.getExercise1();
        this.getExercise2();
        this.getExercise3();
        console.log("\n\n");
    }
    getExercise1() {
        let exercise = new exercise1_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
    getExercise2() {
        let exercise = new exercise2_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
    getExercise3() {
        let exercise = new exercise3_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
}
exports.default = Main;
new Main();
