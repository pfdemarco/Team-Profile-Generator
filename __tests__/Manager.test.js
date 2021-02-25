const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test("Sets employee info and uses functions from parent class", () => {
    const name = "x";
    const id = 1234;
    const email = "x@gmail.com";
    const officeNumber = 303;
    const manager = new Manager("x", 1234, "x@gmail.com", 303);
    expect(manager.getName()).toEqual(name);
});

test("Sets and receives office number", () => {
    const officeNumber = 303;
    const manager = new Manager("x", 1234, "x@gmail.com", 303);
    expect(manager.getOfficeNumber()).toEqual(officeNumber);
});