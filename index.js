const inquirer = require('inquirer');

// get the type of employee to create from user
async function getEmployeeType(){
    let employeeType = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Choose to add engineer, intern, manager or build report: ',
            choices: ["Engineer","Intern","Manager","Build Report"],
        },
    ]);
    return employeeType;
}

async function getEngineerInfo(){
    let engineerInfo = await inquirer.prompt([ 
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
            name: 'github',
            message: 'Enter engineer\'s github username: ',
            when: function (answers) {
                return answers;
            },
        },
    ]);
    return engineerInfo;
}

async function getInternInfo(){
    let internInfo = await inquirer.prompt([ 
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
            name: 'school',
            message: 'Enter intern\'s school: ',
            when: function (answers) {
                return answers;
            },
        },
    ]);
    return internInfo;
}

async function getManagerInfo(){
    let managerInfo = await inquirer.prompt([
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
    ])
    return managerInfo;
}

async function main(){

    // get employee type
    let type = await getEmployeeType();
    let employees = [];
    // invoke methods depending on what returns from getEmployeeType
    switch(type.employeeType){
        case "Engineer":
            let engineer = await getEngineerInfo();
            // let engineerObj = new Engineer(engineer.name,
            // engineer.id,engineer.email,engineer.github)
            // employees.push(engineerObj)
            employees.push(engineer);
            break;
        case "Intern":
            let intern = await getInternInfo();
            employees.push(intern);
            break;
        case "Manager":
            let manager = await getManagerInfo();
            employees.push(manager);
            break;
        default:
            console.error("Class not found!");
    }
    console.log(employees);
}

main();
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