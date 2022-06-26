import Utilities from "../../utilities/Utilities";

export default class Exercise5 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(5, "Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.");
    }

    getAnswer(): void {
        let range1 = Utilities.getRandomNumber();
        let range2 = Utilities.getRandomNumber();
        let number = Utilities.getRandomIntFloatNumber();

        if (range1 > range2) {
            var lower = range2;
            var upper = range1;
        }
        else {
            var lower = range1;
            var upper = range2;
        }

        let isWithinBounds = this.intWithinBounds(number, lower, upper);

        console.log(`intWithinBounds(${number}, ${lower}, ${upper}) => ${isWithinBounds}`);
    }

    private intWithinBounds(number: number, lower: number, upper: number): boolean {
        if (!Number.isInteger(number)) {
            return false;
        }

        if (number > lower && number < upper) {
            return true;
        }
        else {
            return false;
        }
    }
}