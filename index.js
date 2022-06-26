"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercise1_1 = __importDefault(require("./dist/exercises/exercise1/Exercise1"));
const Exercise2_1 = __importDefault(require("./dist/exercises/exercise2/Exercise2"));
const Exercise3_1 = __importDefault(require("./dist/exercises/exercise3/Exercise3"));
class Main {
    constructor() {
        this.getExercise1();
        this.getExercise2();
        this.getExercise3();
        console.log("\n\n");
    }
    getExercise1() {
        let exercise = new Exercise1_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
    getExercise2() {
        let exercise = new Exercise2_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
    getExercise3() {
        let exercise = new Exercise3_1.default();
        exercise.getQuestion();
        exercise.getAnswer();
    }
}
exports.default = Main;
new Main();
