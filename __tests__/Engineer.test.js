const { it } = require("@jest/globals")
const Engineer = require("../lib/Engineer.js")

describe(`Engineer Constructor`, ()=>{
    it(`throws an error if github property is not a string`, ()=>{
        expect(()=>{
            new Engineer("Maurizio",1,"email",1);
        }).toThrow("Error! Username property must be defined, and a string!");

    })
    it(`returns an object with the passed arguments`, ()=>{

        new Engineer("Maurizio",1,"email","ritzgl");
            
        expect.objectContaining(
            {
                name: "Maurizio",
                id: 1,
                email:"email",
                username: "ritzgl"
            }
        );
    })
})

describe(`Engineer Methods`, ()=>{
    // These methods, inherited from parent class pass automatically
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

    

    // These newly bound methods required the Engineer classs to be edited
    it(`getGitHubName returns username property of the isntance`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getGitHubName()).toBe("ritzgl");
    })

    it(`getRole returns 'Engineer'`, ()=>{
        let engineer = new Engineer("Maurizio",1,"email","ritzgl")
        expect(engineer.getRole()).toBe("Engineer");
    })

})