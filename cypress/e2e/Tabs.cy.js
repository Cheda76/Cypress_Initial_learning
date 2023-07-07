describe("haldle tabs", () =>{
    it('Approace1', ()=>{
        cy.visit("https://www.shmoop.com/study-guides/literature/beowulf/beow")
        cy.get("main[id='maincontent'] p a:nth-child(1)")
        .invoke('removeAttr','target').click()//removing the displaying in new page since it not able to accept by the cypress
        cy.url().should('include','https://www.shmoop.com/study-guides/literature/beowulf/shield-sheafson')
        cy.wait(5000)
        cy.go('back')// go back to  parent
    })
})