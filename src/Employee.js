class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email=email;
  }

  getName() {
    return this.name;
  };

  getID() {
    return this.id;
  };

  getEmail() {
    return this.email;
  };

  getRole () {
    return "Employee";//should this use the child class that is calling it?
  }

}

module.exports = Employee;

//The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.