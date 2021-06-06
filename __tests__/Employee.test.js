const Employee = require("../lib/Employee.js")

describe(`Employee Constructor`, ()=>{
    
    it(`throws an error when name is empty string`, ()=>{
        
        expect(()=>{
            new Employee("", 1, "email");
        }).toThrow(`Error! Name cannot be empty, undefined or null!`)

    })

    it(`throws an error when name is null`, ()=>{
        
        expect(()=>{
            new Employee(null);
        }).toThrow(`Error! Name cannot be empty, undefined or null!`)

    })

    it(`throws an error when id is not a number`, ()=>{
        
        expect(()=>{
            new Employee("Maurizio","1","email");
        }).toThrow(`Error! Id must be a number, and defined!`)

    })

    it(`throws an error when email is not a string`, ()=>{
        
        expect(()=>{
            new Employee("Maurizio",1,1);
        }).toThrow(`Error! Email must be a string and defined!`)

    })

    it(`returns an object with the passed arguments`, ()=>{

        new Employee("Maurizio",1,"email");
            
        expect.objectContaining(
            {
                name: "Maurizio",
                id: 1,
                email:"email"
            }
        );
    })
    
})

describe(`Employee Methods`, ()=>{

    it(`getName method returns the 'name' property of the instance`,()=>{
        let employee = new Employee("Maurizio",1,"ritz@email.com");
        expect(employee.getName()).toBe("Maurizio");
    })

    it(`getId method returns the 'id' property of the instance`,()=>{
        let employee = new Employee("Maurizio",1,"ritz@email.com");
        expect(employee.getId()).toBe(1);
    })

    it(`getEmail method returns the 'email' property of the instance`,()=>{
        let employee = new Employee("Maurizio",1,"ritz@email.com");
        expect(employee.getEmail()).toBe("ritz@email.com");
    })

    it(`getRole method returns 'Employee'`,()=>{
        let employee = new Employee("Maurizio",1,"ritz@email.com");
        expect(employee.getRole()).toBe("Employee");
    })

})