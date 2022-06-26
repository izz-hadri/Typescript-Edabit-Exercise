export default class Utilities {
    constructor() { }

    static getRandomNumber(): number {
        return Math.floor(Math.random() * 100);
    }

    static displayQuestionNumber(number: number): void {
        console.log(`\n\n----- Question ${number}`);
    }

    static displayQuestion(number: number, question: string): void {
        this.displayQuestionNumber(number);
        console.log(question);
    }
}