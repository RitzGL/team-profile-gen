// Engineer class properties
    // All of Employee properties, plus:
        // github - GH username
        // getGithub() - returns username
        // getRole() - returns 'Engineer'

const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(name,id,email,username){
        super(name,id,email);
        let usernameIsValid = typeof username === "string" && username != undefined;
        if(!usernameIsValid){
            throw "Error! Username property must be defined, and a string!"
        }
    }

}

module.exports = Engineer;