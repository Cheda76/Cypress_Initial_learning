describe('mysuite',()=>{
    it('Captures screemsjpts and Videos',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot("homepage"); 
        cy.wait(5000)

        //screen shot of specific
        cy.get("img[title='Your Store']").screenshot('logo');


    })
    it.only('Captures screemsjpts and Videos',()=>{
        cy.visit('https://demo.opencart.com/');
        //screenshot only the failure part:
        // we have to run test in  the command prompt or
        // by using CL tool and then only screen shot will automatically capture by cypress
        // automatically capture screenshot & video on failure -happen only when execute through CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text','Tablets'); //intentionally made to fail



         

    })
})