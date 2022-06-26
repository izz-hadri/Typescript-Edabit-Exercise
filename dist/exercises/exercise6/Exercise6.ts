import Utilities from "../../utilities/Utilities";

export default class Exercise6 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(6, "Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.");
    }

    getAnswer(): void {
        let price = Utilities.getRandomNumber();
        let discount = Utilities.getRandomNumber();
        let priceAfterDiscount = this.dis(price, discount);

        console.log(`dis(${price}, ${discount}) => ${priceAfterDiscount}`);
    }

    private dis(price: number, discount: number): number {
        return parseFloat(((100 - discount) / 100 * price).toFixed(2));
    }
}