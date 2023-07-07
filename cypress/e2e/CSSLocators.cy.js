// const cypress = require('cypress')
describe("CSSlocator", () =>{
    it('csslocators',() =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#search_query_top').type("T-Shirts") // used id &tag is optional
        cy.get("[name='submit_search").click()
        cy.get('.lighter').contains("T-Shirts")//Assertion
    })
})