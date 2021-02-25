const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test("Sets employee info and uses functions from parent class", () => {
    const name = "Tixm";
    const id = 1234;
    const email = "x@gmail.com";
    const school = "hvcc";
    const intern = new Intern("x", 1234, "x@gmail.com", "hvcc");
    expect(intern.getName()).toEqual(name);
});

test("Sets and receives school name", () => {
    const school = "hvcc";
    const intern = new Intern("x", 1234, "x@gmail.com", "hvcc");
    expect(intern.getSchool()).toEqual(school);
});