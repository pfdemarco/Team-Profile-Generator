const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test("Sets employee info and uses functions from parent class", () => {
    const name = "x";
    const id = 1234;
    const email = "x@gmail.com";
    const github = "x";
    const engineer = new Engineer("x", 1234, "x@gmail.com", "x");
    expect(engineer.getName()).toEqual(name);
});

test("Sets and receives github username", () => {
    const github = "x";
    const engineer = new Engineer("x", 1234, "x@gmail.com", "x");
    expect(engineer.getGithub()).toEqual(github);
});