import Utilities from "../../utilities/Utilities";

export default class Exercise1 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(1, "Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.");
    }

    getAnswer(): void {
        let number1 = Utilities.getRandomNumber();
        let number2 = Utilities.getRandomNumber();

        let result = number1 + number2 < 100;
        console.log(`${number1} + ${number2} = ${number1 + number2} => ${result}`);
    }
}