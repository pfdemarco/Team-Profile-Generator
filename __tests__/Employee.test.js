const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee');

test('Can set and retrieve employee name', () => {
    const name = "x";
    const employee = new Employee(name);
    expect(employee.getName()).toEqual(name);
});

test('Can set and retrieve employee email', () => {
    const email = "x@gmail.com";
    const employee = new Employee("x", 1234, email);
    expect(employee.getEmail()).toEqual("x@gmail.com");
});

test('Can set and retrieve employee id', () => {
    const id = 1234;
    const employee = new Employee("x", id, "lol@gmail.com");
    expect(employee.getId()).toEqual(1234);
});