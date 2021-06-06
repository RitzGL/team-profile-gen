// import super class
const Employee = require("./Employee");

class Engineer extends Employee {
    
    constructor(name,id,email,username){
        // call parent class constructor
        super(name,id,email);
        // check new property's validity
        let usernameIsValid = typeof username === "string" && username != undefined;
        if(!usernameIsValid){
            throw "Error! Username property must be defined, and a string!"
        }
        // bind new property to this class
        this.username = username;
    }
    // method is bound to this class' instance
    getGitHubName(){
        return this.username;
    }
    // method get overriden here
    getRole(){
        return "Engineer";
    }
}

// export subclass
module.exports = Engineer;