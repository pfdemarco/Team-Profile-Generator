class Manager{
  constructor(officeNumber){
    this.officeNumber=officeNumber;
  }
  getRole(role){
    return role;
  };
}

module.exports = Manager;

// In addition to Employee's properties and methods, Manager will also have the following:
// officeNumber
// getRole()—overridden to return 'Manager'