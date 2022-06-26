export default class Utilities {
    constructor() { }

    static getRandomNumber(): number {
        return Math.floor(Math.random() * 100);
    }

    static getRandomIntFloatNumber(): number {
        let random = this.getRandomNumber() % 2 == 0;
        let number = random
            ? Math.floor(Math.random() * 100)
            : parseFloat((Math.floor(Math.random() * 100) + Math.random()).toFixed(2));
        return number;
    }

    static displayQuestionNumber(number: number): void {
        console.log(`\n\n----- Question ${number}`);
    }

    static displayQuestion(number: number, question: string): void {
        this.displayQuestionNumber(number);
        console.log(question);
    }
}