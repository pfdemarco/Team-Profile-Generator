const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const inq = require ("inquirer");
const fs = require("fs");

class Employee {
  constructor (name, id, email) {
    this.name = name;
    this.id = id;
    this.email=email;
  }

  getName() {

  };

  getID() {

  };

  getEmail() {

  };

  getRole () {
    return Employee;
  }

}

//The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole()—returns 'Employee'
// The other three classes will extend Employee.