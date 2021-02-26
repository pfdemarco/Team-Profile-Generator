const { TestScheduler } = require('../jest.config');
const Manager = require('../src/Manager');

test('can set name', () => {
    const name  = "Mr. Lino Avoca";
    const manager = new Manager(name, "" , "", "");

    expect(manager.name).toBe("Mr. Lino Avoca"); 
});

test('can set id', () => {
    const id  = 112244;
    const manager = new Manager("", id , "", "");

    expect(manager.id).toBe(112244); 
});

test('can set an email', () => {
    const email  = "pfdemarco@hotmail.com";
    const manager = new Manager("", "" , email,"");

    expect(manager.email).toBe("pfdemarco@hotmail.com"); 
});

test('can set an office number', () => {
    const officeNumber  = 8675309;
    const manager = new Manager("", "" , "", officeNumber);

    expect(manager.officeNumber).toBe(8675309); 
});

test('can set Role', () => {

    
    const manager = new Manager(); 

    expect(manager.getRole()).toBe('Manager');
})