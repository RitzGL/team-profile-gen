// Employee class properties:
    // name
    // id
    // email
    // getName()
    // getId()
    // getEmail()
    // getRole()

class Employee {
    constructor(name,id,email){
        let nameIsValid = typeof name === "string" && name != undefined && name != "";
        let idIsValid = typeof id === "number" && id != undefined;
        let emailIsValid = typeof email === "string" && email != undefined;
        if(!nameIsValid){
            throw "Error! Name cannot be empty, undefined or null!"
        }
        if(!idIsValid){
            throw "Error! Id must be a number, and defined!"
        }
        if(!emailIsValid){
            throw "Error! Email must be a string and defined!"
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;