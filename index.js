const inquirer = require('inquirer');

const employeeQuestions = [
    {
      type: 'input',
      name: 'list',
      message: 'Select employee type: ',
      choices: ["Engineer", "Manger", "Inter"],
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter employee name: ',
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter employee id: ',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter employee email:',
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