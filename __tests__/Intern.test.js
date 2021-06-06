const Intern = require("../lib/Intern.js")

describe(`Intern Constructor`, ()=>{
    it('throws an error when school is not a string or empty', ()=>{
        expect(()=>{
            new Intern("Maurizio",1,"ritz@email.com",2)
        }).toThrow("Error! School must be a string and defined!")
    })

    it(`returns an object with the passed arguments`, ()=>{

        new Intern("Maurizio",1,"email","notre dame");
            
        expect.objectContaining(
            {
                name: "Maurizio",
                id: 1,
                email:"email",
                school: "notre dame"
            }
        );
    })
})

describe(`Intern Methods`, ()=>{
    it(`getName returns name property of the isntance`, ()=>{
        let intern = new Intern("Maurizio",1,"email","notre dame")
        expect(intern.getName()).toBe("Maurizio");
    })

    it(`getId returns id property of the isntance`, ()=>{
        let intern = new Intern("Maurizio",1,"email","notre dame")
        expect(intern.getId()).toBe(1);
    })

    it(`getEmail returns email property of the isntance`, ()=>{
        let intern = new Intern("Maurizio",1,"email","notre dame")
        expect(intern.getEmail()).toBe("email");
    })

    // These newly bound methods required the Engineer classs to be edited
    it(`getGitHubName returns username property of the isntance`, ()=>{
        let intern = new Intern("Maurizio",1,"email","notre dame")
        expect(intern.getSchool()).toBe("notre dame");
    })

    it(`getRole returns 'Intern'`, ()=>{
        let intern = new Intern("Maurizio",1,"email","notre dame")
        expect(intern.getRole()).toBe("Intern");
    })
})