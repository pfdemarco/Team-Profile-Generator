const Employee = require("./Employee");

class Manager extends Employee{//dont forget this need to extends to the parent then use super to inherit the properties from there

  constructor(name, id, email, officeNumber){
    super(name,id,email)
    this.officeNumber=officeNumber;
  }
  getRole(){
    return "Manager";
  };

}

const x = new Manager(this.name, this.id,this.email,this.officeNumber)
console.log(x.getName());

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'