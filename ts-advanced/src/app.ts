interface ErrorContainer {
    [prop: string]: string; // exact properties count and names is not known, only their types and value types

    // id: string; // we can stil add predefined properties - only if they follow rules above
    // id: number; ERROR - must be of type string
}

const ErrorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',

    12: 'Twelve!', // would work because 12 can be converted to string
    // twelve: 12, ERROR - type number not assignable to type string
};

// FUNCTION OVERLOADS

type NumOrStr = number | string;

function addStuff(a: number, b: number): number;
function addStuff(a: string, b: string): string;
function addStuff(a: NumOrStr, b: NumOrStr) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

const result = addStuff('Jim', 'Jones');
result.split(''); // split method not accessible - TS does not know return type will be string
// solved with function overloads !

// OPTIONAL CHAINING AND NULLISH COALESCING

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
};

console.log(fetchedUserData.job.title); // if job property did not exist, runtime error
console.log(fetchedUserData.job && fetchedUserData.job.title); // JS way of preventing error
console.log(fetchedUserData?.job?.title); // Optional Chaining in TS - shortcircuits to undefined if any of the properties are not accesible

const userInput = '';
// const storedData = userInput || 'defaultValue';  // '' is falsy, therefore default is used
const storedData = userInput ?? 'defaultValue'; // userInput is neither null or undefined, so keep original value
