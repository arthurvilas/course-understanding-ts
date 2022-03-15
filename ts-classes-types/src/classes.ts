class Department {
    // MODIFIERS CAN BE ADDED TO CONSTRUCTOR - NO NEED TO DEFINE OR ASSIGN CONSTRUCTOR PROPERTIES (Shorthand Initialization)
    // private readonly id: string; - readonly means property should NOT CHANGE
    // private name: string;

    // private employees: string[] = []; with PRIVATE, classes that inherit from Department won't be able to access the property
    protected employees: string[] = [];

    constructor(protected readonly id: string, private name: string) {
        // MODIFIERS CAN BE ADDED TO CONSTRUCTOR - NO NEED TO DEFINE OR ASSIGN CONSTRUCTOR PROPERTIES (Shorthand Initialization)
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        // TS now expects an object of type Department to call this method
        // console.log('Department: ' + name); ERROR - would look for 'name' inside the function or outside the class in the global scope
        console.log(`Department (${this.id}): ${this.name}`); // to refer to a class property or method from inside a class, use 'this'
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department('1234', 'Accounting');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

// accounting.employees[2] = 'Anna'; // we DO NOT want this to happen - there should be only one approach to add employees
// so we add the 'private' modifier to employees property

accounting.describe();
accounting.printEmployeeInformation();

// const accountingCopy = { describe: accounting.describe };
// accountingCopy.describe(); ERROR - accountingCopy does not qualify as a Department object - missing 'name'

//// INHERITANCE

class ITDepartment extends Department {
    // admins: string[];
    constructor(
        id: string,
        public admins: string[],
        protected location: string
    ) {
        super(id, 'IT');
        // this.admins = admins;
    }

    // Overwridden method
    addEmployee(employee: string) {
        if (employee === 'Dumb Charlie') {
            return;
        }
        this.employees.push(employee);
    }

    get getLocation() {
        return this.location;
    }

    set setLocation(location: string) {
        if (location) {
            this.location = location;
        } else {
            throw new Error('Please provide a valid location!');
        }
    }

    static logSmileyFace() {
        console.log(':)');
    }
}

const itdep = new ITDepartment('1234', ['Max'], '1st floor');

itdep.addEmployee('James');
itdep.addEmployee('Jane');

itdep.describe();

// GETTERS AND SETTERS ARE TREATED AS PROPERTIES - NOT METHODS

console.log(itdep.getLocation);
itdep.setLocation = '2nd floor';
console.log(itdep.getLocation);

ITDepartment.logSmileyFace(); // static method - no need to instanciate the class

//// ABSTRACT CLASSES

abstract class Vehicle {
    constructor(
        protected readonly id: string,
        protected numberOfWheels: number
    ) {
        this.id = id;
        this.numberOfWheels = numberOfWheels;
    }

    abstract hasWheels(): boolean;
    abstract describe(this: Vehicle): void;
}

class Car extends Vehicle {
    constructor(id: string, numberOfWheels: number) {
        super(id, numberOfWheels);
    }

    hasWheels(): boolean {
        return true;
    }

    describe(this: Vehicle): void {
        console.log('A common vehicle for humans');
    }

    get getNumberOfWheels() {
        return this.numberOfWheels;
    }

    set setNumberOfWheels(n: number) {
        this.numberOfWheels = n;
    }
}

const myCar = new Car('123', 4);

myCar.describe();
console.log(myCar.getNumberOfWheels);
myCar.setNumberOfWheels = 6;
console.log(myCar.getNumberOfWheels);

//// SINGLETON PATTERN

class Singleton {
    private static instance: Singleton;
    private data: string;

    private constructor(data: string) {
        this.data = data;
    }

    static getInstance(data: string) {
        if (this.instance) {
            return this.instance;
        } else {
            return new Singleton(data);
        }
    }

    get getData() {
        return this.data;
    }
}
