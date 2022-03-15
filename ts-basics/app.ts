let userInput: unknown;
let userPassword: any;
userInput = 5;
userInput = 'hi';

let userName: string;
// userName = userInput; ERROR - Type 'unknown' is not assignable to type 'string'
userName = userPassword; // valid - any type disables type checking

// unknown is more restricted than any - need checking first
if (typeof userInput === 'string') {
    userName = userInput; // valid
}

// never return type - function never returns anything
function generateError(message: string, code: number): never {
    throw {
        message,
        error: code,
    };
}

const result = generateError('An error ocurred', 500);
