// const names: Array<string> = []; // same as string[]
// names[0].split(''); // we can call string methods in items

// const promise: Promise<number> = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(12345), 2000);
// });

// promise.then(data => {
//     // data.split(''); ERROR - we told TS promise yields a type number in Promise<number>
//     data.toFixed(2); // we can call number methods
// })

// function merge(objA: object, objB: object) {
//     return Object.assign(objA, objB);
// }

// let mergedObj = merge({ name: 'james' }, { age: '40' });
// mergedObj.name ERROR - TS does not know props of object yielded, only that it's of type object
// let mergedObj: object

function merge<T extends object, U extends object>(objA: T, objB: U) {
    // TS now knows we return an intersection of T & U
    return Object.assign(objA, objB);
}

let mergedObj = merge({ name: 'james' }, { age: '40' });
// let mergedObj: {
//     name: string;
// } & {
//     age: string;
// };
console.log(mergedObj.name);

// PROBLEM
// let anotherMergedObj = merge({name: 'john'}, 30); ERROR after adding 'extends object' to generics
// 30 is not an object, but we fail silently
// fixed adding 'extends object' to generics

interface HasLength {
    length: number;
}

function countAndDescribe<T extends HasLength>(element: T): [T, string] {
    let descriptionText = 'Got no value';
    if (element.length == 1) {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}

console.log(countAndDescribe('Hi there')); // works since strings have length
console.log(countAndDescribe(['Sports', 'Cooking'])); // works since arrays have length

// function extractAndConvert(obj: object, key: string) {
//     return obj[key]; ERROR - obj is not guaranteed to have key property
// }

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U
) {
    return obj[key];
}

//// GENERIC CLASSES

class DataStorage<T extends string | number | boolean> {
    // extends string | number | boolean -> limit class to primitive types only since objects don't work

    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) == -1) {
            // BUG fix - but method still broken for objects
            return;
        }
        this.data.splice(this.data.indexOf(item), 1); // BUG - removes the last element when using objects - indexOf returns -1
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'James' });
// objStorage.addItem({ name: 'Manu' });
// objStorage.removeItem({ name: 'James' }); // here we are passing a new object - a new address not present in array
// console.log(objStorage.getItems()); // ERROR - prints [{name: 'James'}]
// // OBJECTS ARE REFERENCE TYPES
// const myObj = {name: 'Brian'};
// objStorage.addItem(myObj);
// objStorage.removeItem(myObj); // works fine - same reference

//// GENERIC UTILITY TYPES

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

// Partial
function createCourseGoal(
    title: string,
    description: string,
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // Partial - makes all properties optional
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    // return courseGoal; ERROR - courseGoal is still a Partial<CourseGoal> so casting is needed
    return courseGoal as CourseGoal;
}

// Readonly
const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('James'); ERROR - Readonly prevents altering values
