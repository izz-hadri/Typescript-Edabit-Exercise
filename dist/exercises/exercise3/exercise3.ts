import Utilities from "../../utilities/utilities";

export default class Exercise3 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestionNumber(3);
        console.log("Create a function that returns true when num1 is equal to num2; otherwise return false.");
    }

    getAnswer(): void {
        let number1 = Utilities.getRandomNumber();
        let number2 = Utilities.getRandomNumber();
        let isSame = this.isSameNum(number1, number2);

        console.log(`isSameNum(${number1}, ${number2}) => ${isSame}`)
    }

    private isSameNum(number1: number, number2: number): boolean {
        return number1 === number2;
    }
}