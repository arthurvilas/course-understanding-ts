// INTERSECTION BETWEEN OBJECTS
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// if employee and admin were interfaces, we could
// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee; // ElevatedEmployee intersection between objects

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};

// INTERSECTION BETWEEN TYPES

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
// Universal is assumed to be of type number !!!! - intersection between types

// TYPE GUARDS - check if a property or method have a certain characteristic before using it

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        // TYPE GUARDING
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name; ' + emp.name);
    // console.log('Privileges: ' + emp.privileges); ERROR - TS does not know if emp has 'privileges' property
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Privileges: ' + emp.startDate);
    }
}

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();

const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive(); // exists in both types in Vehicle
    // vehicle.loadCargo(); ERROR - TS doesn't know if Vehicle has loadCargo()

    if (vehicle instanceof Truck) {
        vehicle.loadCargo(100);
    }
    // OR
    // if ('loadCargo' in vehicle) {
    //     vehicle.loadCargo(100);
    // }
}

useVehicle(v1);
useVehicle(v2);

// DISCRIMINATED UNIONS

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    // if ('flyingSpeed' in animal) {
    //     console.log('Moving with speed: ' + animal.flyingSpeed);
    // }

    // OR

    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

const paragraph = document.querySelector('p');
// TS knows that paragraph: HTMLParagraphElement | null

const exactParagraph = document.getElementById('message-output');
// TS knows that exactParagraph: HTMLElement | null   -> less specific
// TS does not dive into the HTML to see the element's type

// const userInputElement = document.getElementById('user-input');
// userInputElement: HTMLElement | null;

// userInputElement.value = 'hi there'; ERROR - Object is possibly 'null'
// HTMLElement does not contain a 'value' property - HTMLInputElement (more specific child class) does
// can be solved with type casting:

// TYPE CASTING

const userInputElement = <HTMLInputElement>(
    document.getElementById('user-input')
);
// OR
