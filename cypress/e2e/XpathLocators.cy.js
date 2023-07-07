
describe("Xpath locators", () =>{
    it('find no of products',() =>{
        cy.visit('http://automationpractice.com')
        cy.xpath ("//ul[@id='homefeatured']/li").should('have.length',7)

    })

    it('chained xpath',() =>{
        cy.visit('http://automationpractice.com')
        cy.xpath ("//ul[@id='homefeatured']").xpath("./li").should('have.length',7)

    })
})