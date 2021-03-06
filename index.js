const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const buildHTML = require('./lib/helper/profile-gen')
// get the type of employee to create from user
async function getEmployeeType(){
    let employeeType = await inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Choose to add engineer, intern or manager: ',
            choices: ["Engineer","Intern","Manager",],
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
            type: 'number',
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
            type: 'number',
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
            type: 'number',
            name: 'id',
            message: 'Enter manager\'s id: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager\'s email:',
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: 'Enter manager\'s office number: ',
            when: function (answers) {
                return answers;
            },
        },   
    ])
    return managerInfo;
}

async function callAgain(){


    let recursion = await inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another Employee?",
            name: "callAgain",
            choices: ["Yes","No"],
        },
    ])

    return recursion;
}

// populate array based on employee type
async function getEmployees(employees){
    // get employee type
    let empArray = [...employees];
    let type = await getEmployeeType();
    
    switch(type.employeeType){
        case "Engineer":
            try {
                let engineer = await getEngineerInfo();
                let engineerObj = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
                empArray.push(engineerObj);
                let recursion = await callAgain();
                if(recursion.callAgain === "Yes"){
                    return await getEmployees(empArray);
                }
            } catch (error) {
                console.error(error);
            }
            break;

        case "Intern":
            try {
                let intern = await getInternInfo();
                let internObj = new Intern(intern.name, intern.id, intern.email, intern.school);
                empArray.push(internObj);
                let recursion = await callAgain();
                if(recursion.callAgain === "Yes"){
                    return await getEmployees(empArray);
                }
            } catch (error) {
                console.error(error);
            }
            break;

        case "Manager":
            try {
                let manager = await getManagerInfo();
                let managerObj = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
                empArray.push(managerObj);
                let recursion = await callAgain();
                if(recursion.callAgain === "Yes"){
                   return await getEmployees(empArray);
                }             
            } catch (error) {
                console.error(error);
            }
            break;

        default:
            console.error("Class not found!");
    }
    // console.log(empArray);
    return empArray;
}

async function main(){
    let asyncEmployees = [];
    let employees = await getEmployees(asyncEmployees);
    
    buildHTML(employees);
}

main();