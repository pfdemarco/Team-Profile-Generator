const { TestScheduler } = require('../jest.config');
const Engineer = require('../src/Engineer');

test('can set name', () => {
    const name  = "Dr. Anton Phibes";
    const engineer = new Engineer(name, "" , "", "");

    expect(engineer.name).toBe("Dr. Anton Phibes"); 
});

test('can set id', () => {
    const id  = 666;
    const engineer = new Engineer("", id , "", "");

    expect(engineer.id).toBe(666); 
});

test('can set an email', () => {
    const email  = "pfdemarco@hotmail.com";
    const engineer = new Engineer("", "" , email,"");

    expect(engineer.email).toBe("pfdemarco@hotmail.com"); 
});

test('can set a github user name ', () => {
    const githubUN  = "eng";
    const engineer = new Engineer("", "" , "", githubUN);

    expect(engineer.githubUN).toBe("eng"); 
});

test('can set Role', () => {
  const engineer = new Engineer(); 

    expect(engineer.getRole()).toBe('Engineer');
})