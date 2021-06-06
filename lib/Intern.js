// import Employee superclass
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        let schoolIsValid = typeof school === "string" && school != "";
        if(!schoolIsValid){
            throw "Error! School must be a string and defined!"
        }
        // New property bound to instance
        this.school = school;
    }
    // New method is bound to isntance
    getSchool(){
        return this.school;
    }
    // Method is overrident
    getRole(){
        return "Intern";
    }
}

// Export Intern subclass
module.exports = Intern;