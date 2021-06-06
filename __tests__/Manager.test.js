const Manager = require("../lib/Manager.js")

describe(`Manager Constructor`, ()=>{
    it('throws an error when officeNumber is not a number or undefined', ()=>{
        expect(()=>{
            new Manager("Maurizio",1,"ritz@email.com","2")
        }).toThrow("Error! Office must be a number and defined!")
    })

    it(`returns an object with the passed arguments`, ()=>{

        new Manager("Maurizio",1,"email",1);
            
        expect.objectContaining(
            {
                name: "Maurizio",
                id: 1,
                email:"email",
                officeNumber: 1
            }
        );
    })
})

describe(`Manager Methods`, ()=>{
    it(`getName returns name property of the isntance`, ()=>{
        let manager = new Manager("Maurizio",1,"email",1)
        expect(manager.getName()).toBe("Maurizio");
    })

    it(`getId returns id property of the isntance`, ()=>{
        let manager = new Manager("Maurizio",1,"email",1)
        expect(manager.getId()).toBe(1);
    })

    it(`getEmail returns email property of the isntance`, ()=>{
        let manager = new Manager("Maurizio",1,"email",1)
        expect(manager.getEmail()).toBe("email");
    })

    // These newly bound methods required the Manager classs to be edited
    it(`getOfficeNumber returns officeNumber property of the isntance`, ()=>{
        let manager = new Manager("Maurizio",1,"email",1)
        expect(manager.getOfficeNumber()).toBe(1);
    })

    it(`getRole returns 'Manager'`, ()=>{
        let manager = new Manager("Maurizio",1,"email",1)
        expect(manager.getRole()).toBe("Manager");
    })
})