const { it } = require("@jest/globals")
const Engineer = require("../lib/Engineer.js")

describe(`Engineer Properties`, ()=>{
    it(`throws an error if github property is not a string`, ()=>{
        
        expect(()=>{
            
            new Engineer("Maurizio",1,"email",1);
        
        }).toThrow("Error! Username property must be defined, and a string!");
    
    })
})

describe(`Engineer Methods`, ()=>{
    it(`getName returns name property of the isntance`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getName()).toBe("Maurizio");
    })

    it(`getId returns id property of the isntance`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getId()).toBe(1);
    })

    it(`getEmail returns email property of the isntance`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getEmail()).toBe("email");
    })

    it(`getGitHubName returns username property of the isntance`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getGitHubName()).toBe("ritzgl");
    })

    it(`getRole returns 'Engineer'`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getRole()).toBe("Engineer");
    })

})