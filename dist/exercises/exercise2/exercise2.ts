import Utilities from "../../utilities/utilities";

export default class Exercise2 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(2, "Write a function that takes the base and height of a triangle and return its area.");
    }

    getAnswer(): void {
        let base = Utilities.getRandomNumber();
        let height = Utilities.getRandomNumber();
        let area = this.triArea(base, height);

        console.log(`triArea(${base}, ${height}) => ${area}`);
    }

    private triArea(base: number, height: number): number {
        return (base * height) / 2;
    }
}