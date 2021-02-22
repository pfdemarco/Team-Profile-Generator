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