const inq = require ("inquirer");
const fs = require("fs");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const Manager = require("./src/Manager");



//prompt for the employee
function newEmployee() {
  inq.prompt([
    {
      type: 'list',
      name: "memberType",
      message:"What type of employee are you adding?",
      choices: ['Manager', 'Engineer', 'Intern', 'None']//can i call this from external functions 
    }
  ])
  .then((userInput) => {
    console.log(userInput);
    //figure out which choice they made
    switch (userInput.memberType){
      case 'Manager'://promt for input ?
      
      case 'Engineer'://prompt for input
        promptEngineer()
        break;
      case 'Intern'://prompt for input

      case 'None'://run a finishing function?

    }
  });
    
}

function promptManager() {
  inq.prompt([
    {
      type:'input',
      name:"name",
      message:"Enter Manager Name:",
    },
    {
      type:'input',
      name:"id",
      message:"Enter Manager ID:",
    },
    {
      type:'input',
      name:"email",
      message:"Enter Manager Email:",
    },
    {
      type:'input',
      name:"officeNum",
      message:"Enter Manager Office #:",
    },
  ])
  .then((userInput) => {
    const manager = new Manager(userInput.name,userInput.id,userInput.email,userInput.officeNum);
    console.log(manager);//thjis gives you teh entire json object
    newEmployee();//this takes you back to teh main question
  })
}

function promptEngineer() {
  inq.prompt([
    {
      type:'input',
      name:"name",
      message:"Enter Engineer Name:",
    },
    {
      type:'input',
      name:"id",
      message:"Enter Engineer ID:",
    },
    {
      type:'input',
      name:"email",
      message:"Enter Engineer Email:",
    },
    {
      type:'input',
      name:"githubUN",
      message:"Enter Engineer GitHub Username:",
    },
  ])
  .then((userInput) => {
    const engineer = new Engineer(userInput.name,userInput.id,userInput.email,userInput.githubUN);
    console.log(engineer);//thjis gives you teh entire json object
    newEmployee();//this takes you back to teh main question
  })
}

function promptIntern() {
  inq.prompt([
    {
      type:'input',
      name:"name",
      message:"Enter Intern Name:",
    },
    {
      type:'input',
      name:"id",
      message:"Enter Intern ID:",
    },
    {
      type:'input',
      name:"email",
      message:"Enter Intern Email:",
    },
    {
      type:'input',
      name:"githubUN",
      message:"Enter Intern School:",
    },
  ])
  .then((userInput) => {
    const Intern = new Intern(userInput.name,userInput.id,userInput.email,userInput.school);
    console.log(intern);//thjis gives you teh entire json object
    newEmployee();//this takes you back to teh main question
  })
}

newEmployee();

//{

//  type: 'input',
//  name: 'name',
//  message: 'Please enter Engineers name',
//},


// The application must include Employee, Manager, Engineer, and Intern classes. The tests for these classes (in the _tests_ directory) must ALL pass.
// The first class is an Employee parent class with the following properties and methods:


// name


// id


// email


// getName()


// getId()


// getEmail()


// getRole()—returns 'Employee'


// The other three classes will extend Employee.
// In addition to Employee's properties and methods, Manager will also have the following:


// officeNumber


// getRole()—overridden to return 'Manager'


// In addition to Employee's properties and methods, Engineer will also have the following:


// github—GitHub username


// getGithub()


// getRole()—overridden to return 'Engineer'


// In addition to Employee's properties and methods, Intern will also have the following:


// school


// getSchool()


// getRole()—overridden to return 'Intern'


// Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.

// Grading Requirements
// This homework is graded based on the following criteria:

// Deliverables: 15%


// A sample HTML file generated using the application must be submitted.


// Your GitHub repository containing your application code.



// Walkthrough Video: 32%


// A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.


// The walkthrough video must show all four tests passing from the command line.


// The walkthrough video must demonstrate how a user would invoke the application from the command line.


// The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.


// The walkthrough video must demonstrate a generated HTML file that matches the user input.



// Technical Acceptance Criteria: 40%


// Satisfies all of the preceding acceptance criteria plus the following:


// Uses the Inquirer package.


// Uses the Jest package for a suite of unit tests.


// The application must have Employee, Manager, Engineer, and Intern classes.





// Repository Quality: 13%


// Repository has a unique name.


// Repository follows best practices for file structure and naming conventions.


// Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.


// Repository contains multiple descriptive commit messages.


// Repository contains a high-quality readme with description and a link to a walkthrough video.



// Review
// You are required to submit the following for review:


// A walkthrough video that demonstrates the functionality of the application and passing tests.


// A sample HTML file generated using your application.


// The URL of the GitHub repository, with a unique name and a readme describing the project.