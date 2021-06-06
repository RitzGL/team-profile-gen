const { it } = require("@jest/globals")
const Engineer = require("../lib/Engineer.js")

describe(`Engineer`, ()=>{
    it(`throws an error if github property is not a string`, ()=>{
        
        expect(()=>{
            
            new Engineer("Maurizio",1,"email",1);
        
        }).toThrow("Error! Username property must be defined, and a string!");
    
    })
})