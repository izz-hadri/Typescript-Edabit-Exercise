import Exercise1 from "./dist/exercises/exercise1/Exercise1";
import Exercise2 from "./dist/exercises/exercise2/Exercise2";
import Exercise3 from "./dist/exercises/exercise3/Exercise3";
import Exercise4 from "./dist/exercises/exercise4/Exercise4";
import Exercise5 from "./dist/exercises/exercise5/Exercise5";

export default class Main {
    constructor() {
        this.getExercise1();
        this.getExercise2();
        this.getExercise3();
        this.getExercise4();
        this.getExercise5();

        console.log("\n\n");
    }

    getExercise1(): void {
        let exercise = new Exercise1();
        exercise.getQuestion();
        exercise.getAnswer();
    }

    getExercise2(): void {
        let exercise = new Exercise2();
        exercise.getQuestion();
        exercise.getAnswer();
    }

    getExercise3(): void {
        let exercise = new Exercise3();
        exercise.getQuestion();
        exercise.getAnswer();
    }

    getExercise4(): void {
        let exercise = new Exercise4();
        exercise.getQuestion();
        exercise.getAnswer();
    }

    getExercise5(): void {
        let exercise = new Exercise5();
        exercise.getQuestion();
        exercise.getAnswer();
    }


} new Main();