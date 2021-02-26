const { TestScheduler } = require('../jest.config');
const Manager = require('../src/Manager');

test('can set an office number', () => {
    const officeNumber  = 8675309;
    const manager = new Manager("", "" , "", officeNumber);

    expect(manager.officeNumber).toBe(8675309); 
});

test('can set Role', () => {

    
    const manager = new Manager(); 

    expect(manager.getRole()).toBe('Manager');
})