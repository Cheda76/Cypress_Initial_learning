describe('handle dropdowns', () =>{
    it.skip('dropdown with select', () =>{
        cy.visit('https://www.zoho.com/commerce/free-demo.html')
        cy.get("#zcf_address_country").select('India').should('have.value','India')// check value in select tag
    })

    it('dropdown without select', () =>{
        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get("#select2-billing_country-container").click()
        cy.get('.select2-search__field').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container').should('have.text','Italy')// check the value italy is there or not in other than selelct tag
    })

    //auto sugention dropdown
    it.only('dropdown without select', () =>{
        cy.visit('https://www.google.com')
        cy.get("#APjFqb").type('canva')
        cy.wait(3000)
        cy.get(".wM6W7d > span").each( ($el, index, $list)=>{
            if ($el.text() === 'canva app')
            {
                cy.wrap($el).click()
            }
        })
        
    })
})