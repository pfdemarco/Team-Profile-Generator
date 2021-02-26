const { TestScheduler } = require('../jest.config');
const Employee = require('../src/Employee');

test('can set an employee name', () => {
    const name  = 'emp';
    const employee = new Employee(name, "", "");

    expect(employee.name).toBe('emp');
});

test('can set an employee id', () => {
    const id = 1;
    const employee = new Employee("", id, ""); 
    expect(employee.getID()).toBe(1);
})

test('can set employee email', () => {
    const email = 'emp@gmail.com';
    const employee = new Employee("", "" , email);
    
    expect(employee.getEmail()).toBe('emp@gmail.com');
})