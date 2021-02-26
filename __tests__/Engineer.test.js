const { TestScheduler } = require('../jest.config');
const Engineer = require('../src/Engineer');

test('can set a github user name ', () => {
    const githubUN  = "eng";
    const engineer = new Engineer("", "" , "", githubUN);

    expect(engineer.githubUN).toBe("eng"); 
});

test('can set Role', () => {

    
    const engineer = new Engineer(); 

    expect(engineer.getRole()).toBe('Engineer');
})