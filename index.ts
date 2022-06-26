import Exercise1 from "./dist/exercises/exercise1/exercise1";
import Exercise2 from "./dist/exercises/exercise2/exercise2";
import Exercise3 from "./dist/exercises/exercise3/exercise3";

export default class Main {
    constructor() {
        this.getExercise1();
        this.getExercise2();
        this.getExercise3();

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
}

new Main();