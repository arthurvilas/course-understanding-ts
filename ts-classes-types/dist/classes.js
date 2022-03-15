"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
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
accounting.describe();
accounting.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, admins, location) {
        super(id, 'IT');
        this.admins = admins;
        this.location = location;
    }
    addEmployee(employee) {
        if (employee === 'Dumb Charlie') {
            return;
        }
        this.employees.push(employee);
    }
    get getLocation() {
        return this.location;
    }
    set setLocation(location) {
        if (location) {
            this.location = location;
        }
        else {
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
console.log(itdep.getLocation);
itdep.setLocation = '2nd floor';
console.log(itdep.getLocation);
ITDepartment.logSmileyFace();
class Vehicle {
    constructor(id, numberOfWheels) {
        this.id = id;
        this.numberOfWheels = numberOfWheels;
        this.id = id;
        this.numberOfWheels = numberOfWheels;
    }
}
class Car extends Vehicle {
    constructor(id, numberOfWheels) {
        super(id, numberOfWheels);
    }
    hasWheels() {
        return true;
    }
    describe() {
        console.log('A common vehicle for humans');
    }
    get getNumberOfWheels() {
        return this.numberOfWheels;
    }
    set setNumberOfWheels(n) {
        this.numberOfWheels = n;
    }
}
const myCar = new Car('123', 4);
myCar.describe();
console.log(myCar.getNumberOfWheels);
myCar.setNumberOfWheels = 6;
console.log(myCar.getNumberOfWheels);
class Singleton {
    constructor(data) {
        this.data = data;
    }
    static getInstance(data) {
        if (this.instance) {
            return this.instance;
        }
        else {
            return new Singleton(data);
        }
    }
    get getData() {
        return this.data;
    }
}
