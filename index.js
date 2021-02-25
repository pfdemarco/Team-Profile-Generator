const inq = require ("inquirer");
const fs = require("fs");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const Manager = require("./src/Manager");

//create array of objects for man, eng, int cards
const objData = {
  manData: [],
  engData: [],
  intData: [],
};

//prompt for the employee
//instructions say ask for the manager first its first in teh list you can add any number of man, eng, int
function newEmployee() {
  inq.prompt([
    {
      type: 'list',
      name: "memberType",
      message:"What type of employee are you adding?",
      choices: ['Manager', 'Engineer', 'Intern', 'None']
    }
  ])
  .then((userInput) => {
    console.log(userInput);
    //figure out which choice they made
    switch (userInput.memberType){//always use the name: as the thing we want to switch on
      case 'Manager'://promt for manager info
        promptManager()
        break;
      case 'Engineer'://prompt for enginerr info
        promptEngineer()
        break;
      case 'Intern'://prompt for intern info
        promptIntern()
        break;
      case 'None'://fin`
      makeHTMLFile();
        break;//make th html file here because we are done
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
      message:"Enter Manager Office number:",
    },
  ])
  .then((userInput) => {
    const manager = new Manager(userInput.name,userInput.id,userInput.email,userInput.officeNum);
    console.log(manager);//this gives you the entire json object
    objData.manData.push(manager);
    newEmployee();//this takes you back to the main question
  });
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
    console.log(engineer);//this gives you the entire json object
    objData.engData.push(engineer);
    newEmployee();//this takes you back to the main question
  });
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
      name:"school",
      message:"Enter Intern School:",
    },
  ])
  .then((userInput) => {
    const intern = new Intern(userInput.name,userInput.id,userInput.email,userInput.school);
    console.log(intern);//this gives you the entire json object
    objData.intData.push(intern);
    newEmployee();//this takes you back to the main question
  });
}

const createHTML = () =>
  // create the html page after the user is done entering in team info
  //i like bulma 
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <title>The Dream Team</title>
  </head>
  
  <body>
    <section class="hero is-small is-info mb-3">
      <div class="hero-body">
        <h1 class="title has-text-centered has-text-grey-darker has-text">
          The Dream Team
        </h1>
      </div>
    </section>
  
  
    <div class="columns is-centered has-text-centered">
      <!-- MANAGER -->
      <div class="column is-two-thirds has-text-centered is-centered">
        <div class="card is-one-third has-text-centered ">
          ${createManagerCollection()}
        </div>
      </div>
    </div>
      <!-- ENGINEER -->
    <div class="columns has-text-centered is-centered">
      <div class="column is-one-third">
        ${createEngineerCollection()}
      </div>
  
      <!-- INTERN -->
      <div class="column is-one-third">
        <div class="card is-one-third has-text-centered ">
          ${createInternCollection()}
        </div>
      </div>
    </div>
  
  </body>
  
  </html>`

  // make the file in the root directory as main.html
const makeHTMLFile = () => {
  fs.writeFile('main.html', createHTML(), (err) => {
    err ? console.log(err, "Something went wrong :(") : console.log('Team created - check main.html to see the finished product. ')
  })
}

//manager card creation based on array object
function createManagerCard(manager) {
  //console.log(manager.officeNumber);
  //console.log(manager.officeNum);this returns undefined WHY!>!>!?!?!?!?!?!
  //console.log(manager);
  return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content has-background-success-light">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Manager <i class="fas fa-briefcase"></i></p>
        <p class="subtitle is-6">Name: ${manager.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${manager.id}</p>
      <p>Email: <a target="_blank" href="mailto:${manager.email}">${manager.email}</a></p>
      <p>Office Number: ${manager.officeNumber}</p>
    </div>
  </div>
  </div>`
}

function createManagerCollection(){
  let managerCollection = "";
  objData.manData.forEach(manager => {
    managerCollection += createManagerCard(manager);
  })
  return managerCollection;
}

//engineer card creation based on array object
function createEngineerCard(engineer) {
  return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content has-background-success-light">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Engineer <i class="fas fa-drafting-compass"></i></p>
        <p class="subtitle is-6">Name: ${engineer.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${engineer.id}</p>
      <p>Email: <a target="_blank" href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p>Github username: <a target="_blank" href="https://github.com/${engineer.githubUN}">${engineer.githubUN}</a></p>
    </div>
  </div>
  </div>`
}

function createEngineerCollection(){
  let engineerCollection = "";
  objData.engData.forEach(engineer => {
    engineerCollection += createEngineerCard(engineer);
  })
  return engineerCollection;
}

//intern card creation based on array object
function createInternCard(intern) {
  return `<div class="card is-one-third has-text-centered ">
   
  <div class="card-content has-background-success-light">
    <div class="media">
      <div class="media-left">
      </div>
      <div class="media-content">
        <p class="title is-4">Intern <i class="fas fa-user-graduate"></i></p>
        <p class="subtitle is-6">Name: ${intern.name}</p>
      </div>
    </div>
  
    <div class="content">
      <p>Employee ID: ${intern.id}</p>
      <p>Email: <a target="_blank" href="mailto:${intern.email}">${intern.email}</a></p>
      <p>School Name: ${intern.school}</p>
    </div>
  </div>
  </div>`
}

function createInternCollection(){
  let internCollection = "";
  objData.intData.forEach(intern => {
    internCollection += createInternCard(intern);
  })
  return internCollection;
}

newEmployee();













// function makeHTML(employeeRole, ){
//   return `
//     <html>
//       <head>
//         <meta charset="UTF-8">
//         <meta name="description" content="Team profile generator. Make a html page based on cmd line input">
//         <meta name="keywords" content="Team card builder">
//         <meta name="author" content="Patrick F Demarco">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Team Profile Generator</title>
//         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

//       </head>
//       <body>
//         <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
//           <div class="card-header">Header</div>
//             <div class="card-body">
//               <h5 class="card-title">Secondary card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//             </div>
//         </div>

//         <!--bootstrap popper and javascript-->
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>    
//       </body>
//     </html>
//   `
// };















// {
//   type: "input"
//   name: "email",
//   message: "Enter  Email",
//   validate: function (email) {
//       valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
//       if (valid) {
//           return true;
//       } else {
//           console.log("Please enter a valid email")
//           return false;
//       }
//   }
// },

















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