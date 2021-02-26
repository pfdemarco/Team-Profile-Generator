
const { TestScheduler } = require('../jest.config');
const Intern = require('../src/Intern');

test('can set name', () => {
    const name  = "Shelby Carpenter";
    const intern = new Intern(name, "" , "", "");

    expect(intern.name).toBe("Shelby Carpenter"); 
});

test('can set id', () => {
    const id  = 556688;
    const intern = new Intern("", id , "", "");

    expect(intern.id).toBe(556688); 
});

test('can set an email', () => {
    const email  = "pfdemarco@hotmail.com";
    const intern = new Intern("", "" , email,"");

    expect(intern.email).toBe("pfdemarco@hotmail.com"); 
});

test('can set an school number', () => {
    const school  = "Perdue";
    const intern = new Intern("", "" , "", school);

    expect(intern.school).toBe("Perdue"); 
});

test('can set Role', () => {
  const intern = new Intern(); 

    expect(intern.getRole()).toBe('Intern');
})