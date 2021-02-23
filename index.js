const inq = require ("inquirer");
const fs = require("fs");

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