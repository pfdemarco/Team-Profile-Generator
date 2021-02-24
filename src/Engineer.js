const Employee = require("./Employee");

class Engineer extends Employee{
  
  constructor(name, id, email,githubUN){
    super(name, id, email)
    this.githubUN=githubUN;
  }

  getGitHub() {
    return this.githubUN;
  };

  getRole() {//polymorphism
    return "Engineer";
  };

}
const x = new Engineer(this.name,this.id,this.email,this.githubUN)
console.log(x.getName());//

module.exports = Engineer;


//In addition to Employee's properties and methods, Engineer will also have the following:
//github—GitHub username
//getGithub()
//getRole()—overridden to return 'Engineer'