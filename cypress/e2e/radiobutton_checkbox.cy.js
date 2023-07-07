describe("check ui element ", () => {
    it("checking radio element", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("input#male").should('be.visible')
        cy.get("input#female").should("be.visible")
       
        //selecting radio button
        cy.get("input#male").check().should('be.checked')
        cy.get('input#female').should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get('input#male').should('not.be.checked')
        cy.get("input.form-control.mr-sm-2").type("File input practice")
    })

    it.only("checking checkboxes", () =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // cy.get('label.form-check-label').check().should('be.checked')
        //selecting single
        cy.get("input#wednesday").check().should('be.checked')

        //selecting multiple
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').last().uncheck().should('not.be.checked')
        
    })
})