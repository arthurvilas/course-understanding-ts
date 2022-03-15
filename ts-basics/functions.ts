// TS infers correct return type
// add(n1: number, n2: number): number
function add(n1: number, n2: number) {
    return n1 + n2;
}

// printResult(num: number): void
function printResult(num: number) {
    console.log('Result: ' + num);
}

// ERROR - a function whose declared type is neither 'void' nor 'any' must return a value
// function printResult2(num: number): undefined {
//     console.log('Result: ' + num);
// }

function printResult2(num: number): undefined {
    console.log('Result: ' + num);
    // return undefined;
    // OR
    return;
}

// let combineValues; // TYPE ANY
// combineValues = add; // valid
// combineValues = 5; // valid

// let combineValues: Function; // TYPE FUNCTION
// combineValues = add; // valid
// combineValues = printResult; // valid
// combineValues = 5; // ERROR

let combineValues: (a: number, b: number) => number;
combineValues = add; // valid - satisfies perfectly
// combineValues = printResult; // ERROR - printResult is of type (num: number) => void

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const res = n1 + n2;
    cb(res);
}

addAndHandle(10, 20, (result) => {
    console.log(result);
    return 3; // callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
});
