import Utilities from "../../utilities/Utilities";

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    compareAge(person: Person): string {
        if (this.age > person.age) {
            return `${person.name} is younger than me.`;
        }
        else if (this.age < person.age) {
            return `${person.name} is younger than me.`;
        }
        else {
            return `${person.name} is the same age as me.`;
        }
    }
}

export default class Exercise4 implements IExercise {
    constructor() { }

    getQuestion(): void {
        Utilities.displayQuestion(4, "Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:\n\n{other person name} is {older than / younger than / the same age as} me.\n");
    }

    getAnswer(): void {
        let p1 = new Person("Samuel", 24);
        let p2 = new Person("Joel", 36);
        let p3 = new Person("Lily", 24);

        console.log(p1.compareAge(p2));
        console.log(p2.compareAge(p1));
        console.log(p1.compareAge(p3));
    }
}