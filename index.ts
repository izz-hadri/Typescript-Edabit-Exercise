import Exercise1 from "./dist/exercises/exercise1/exercise1";

export default class Main {
    constructor() {
        this.getExercise1();

        console.log("\n\n");
    }

    getExercise1(): void {
        let exercise = new Exercise1();
        exercise.getQuestion();
        exercise.getAnswer();
    }
}

new Main();