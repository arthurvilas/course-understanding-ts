// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number; // now we have an anonymous function in AddFn
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

// interfaces define how objects should look like
// can be implemented by classes
// interfaces can also implement other interfaces!

interface Person {
    readonly name: string; // readonly means the property must only be set ONCE and never changed - also used in types!
    age: number;

    outputName?: string; // ? marks the property as OPTIONAL - implementation not enforced in classes!

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: 'Jason',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    },
};

class Peter implements Person {
    name = 'Peter';
    age: number;

    constructor(age: number) {
        this.age = age;
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}
