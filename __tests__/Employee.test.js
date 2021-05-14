const Employee = require("../lib/Employee.js")

describe(`Employee`, ()=>{
    it(`throws an error when given no parameters`, ()=>{

        expect(()=>{

            new Employee()

        }).toThrow(`Error! No parameters passed to constructor!`)
        
    })

    it(`throws an error when given 1 parameter`, ()=>{

        expect((name)=>{

            new Employee(name)

        }).toThrow(`Error! Additional parameters required!`)

    })
})