
const { TestScheduler } = require('../jest.config');
const Intern = require('../src/Intern');

test('can set an school number', () => {
    const school  = "University of NH";
    const intern = new Intern("", "" , "", school);

    expect(intern.school).toBe("University of NH"); 
});

test('can set Role', () => {

    
    const intern = new Intern(); 

    expect(intern.getRole()).toBe('Intern');
})