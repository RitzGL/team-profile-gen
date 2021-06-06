// Importing Employee super class
const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        let isOfficeValid = typeof officeNumber === "number" && officeNumber != undefined;
        if(!isOfficeValid){
            throw "Error! Office must be a number and defined!"
        }
        // New property bound to instance
        this.officeNumber = officeNumber;
    }
    // New method is bound to instance
    getOfficeNumber(){
        return this.officeNumber;
    }
    // Method is overriden
    getRole(){
        return "Manager";
    }
}
// Exporting Manager subclass
module.exports = Manager;