"use strict";
var _a;
const ErrorBag = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!',
    12: 'Twelve!',
};
function addStuff(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = addStuff('Jim', 'Jones');
result.split('');
const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: { title: 'CEO', description: 'My own company' },
};
console.log(fetchedUserData.job.title);
console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'defaultValue';
