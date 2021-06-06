// Intern class properties
    // All of employee properties, plus:
        // school
        // getSchool()
        // getRole() - returns 'Intern'

const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        let schoolIsValid = typeof school === "string" && school != "";
        if(!schoolIsValid){
            throw "Error! School must be a string and defined!"
        }
        this.school = school;
    }
    
    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern;