const person: {
    name: string;
    age: number;
    hobbies: string[]; // ARRAY EXAMPLE
    role: [number, string]; // TUPLE EXAMPLE -> array with exactly 2 items - first number then string
} = {
    name: 'James',
    age: 22,
    hobbies: ['Series', 'Computers'],
    role: [2, 'author'],
};

person.role.push('admin'); // TS allows this! - length not enforced
// person.role = [0, 'admin', 'user']; ERROR - length is enforced
// person.role[1] = 10; ERROR - second argument of defined tuple must be string

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase()); // string methods accessible
    // console.log(hobby.map()); ERROR
}

let favoriteActivities: string[]; // array of strings only
favoriteActivities = ['Series', 'Football'];

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    ADMIN = 5,
    READ_ONLY,
    AUTHOR,
}

console.log(Role.READ_ONLY); // returns 6 !!

const employee = {
    name: 'John',
    age: 22,
    sections: ['Hardware', 'Freezers'],
    role: Role.READ_ONLY,
};

let anything: any; // anything can be of any type
let something: any[]; // something has to be an array of something
something = [1, 'pizza'];
