import Utilities from "../../utilities/Utilities";

export default class Exercise7 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(7, "Given an input string, reverse the string word by word, the first word will be the last, and so on.");
    }

    getAnswer(): void {
        let text = " the sky is blue";
        let textReversed = this.reverseWords(text);
        console.log("Before: " + text);
        console.log("After : " + textReversed);
    }

    private reverseWords(text: string): string {
        let words = text.split(" ");
        let textReversed = new Array<string>();
        words
            .slice()
            .reverse()
            .forEach(word => {
                textReversed.push(word);
            });

        return textReversed.join(" ");
    }
}