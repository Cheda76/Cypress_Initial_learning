describe("MyTestSuite",()=>{
  //Direct access  
it.skip('FixturesDemoTest', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/');
    cy.fixture('orangehrm.json').then((data)=>{
        cy.get("input[placeholder='Username']").type(data.username);
        cy.get("input[placeholder='Password']").type(data.password);
        cy.get("button[type='submit']").click();
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text',data.expected);

    })
    
})
// let userdata;
// before(()=>{
//     cy.fixture("orangehrm").then((data)=>{
//         userdata=data;
//     })
// })
//Access through Hook - for multipme it blocks
// it('FixtureDemoTest',() =>{
//     cy.visit('https://opensource-demo.orangehrmlive.com/');
//     cy.get("input[placeholder='Password']").type(userdata.password);
//     cy.get("input[placeholder='Username']").type(userdata.username);
//     cy.get("button[type='submit']").click();
//     cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
//     .should('have.text',userdata.expected);

//     })

    it.only('trying multiple wrong crendintial ',()=>{
        cy.fixture("orangehrm2.json").then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);  
                cy.get("button[type='submit']").click();


                if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                    .should('have.text',userdata.expected); 

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should('have.text',userdata.expected);
                }
            })
        })
    })
})

