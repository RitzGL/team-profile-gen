const inquirer = require('inquirer');

const managerQuestions = [
    
    {
        type: 'input',
        name: 'name',
        message: 'Enter manager\'s name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter manager\'s id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter manager\'s email:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter manager\'s office number: ',
        when: function (answers) {
            return answers;
        },
    },   
];

// choosing which kind of employee to create 
let employeeType = [
    {
        type: 'list',
        name: 'employeeType',
        message: 'Select employee type: ',
        choices: ["Engineer", "Intern"],
    },
];

// engineer class questions
const engineerQuestions = [ 
    {
        type: 'input',
        name: 'name',
        message: 'Enter engineer\'s name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter engineer\'s id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter engineer\'s email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter intern\'s school: ',
        when: function (answers) {
            return answers;
        },
    },
];

const internQuestions = [ 
    {
        type: 'input',
        name: 'name',
        message: 'Enter intern\'s name: ',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter intern\'s id: ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter intern\'s email:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter intern\'s email: ',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter engineer\'s github: ',
        when: function (answers) {
            return answers;
        },
    },
];


//   need to inquirer.prompt here
// START

//   Enter Manager's Name, Id, email and Office Number

// PROMPT 

    // Choose engineer
        // Enter name, id, email, GitHub username
        // return to menu

    // Choose intern
        // Enter name, id, email, school
        // return to menu

    // Generate report
        // Application closes
        // html is generated

// END