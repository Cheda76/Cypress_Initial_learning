//hooks:
//before
//after
//beforeEach
//afterEach
//tags:  only and skip
describe('MytestSuite',()=>{
    before(()=>{
        cy.log("**** Launching app**** ");
    })

    after(()=>{
        cy.log("****** Close Appp *****");
    })

    beforeEach(()=>{
        cy.log("*** login *****");
    })

    afterEach(()=>{
        cy.log("*******  logout ******");
    })

    it('seach',()=>{
        cy.log("****** searching *******");
    })
    it('advanced search',()=>{
        cy.log("**** Advaced Searching ******");
        

    })
    it('listing products',()=>{
        cy.log('***** Listing products *******');

    })
})