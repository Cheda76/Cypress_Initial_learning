describe('My First Test', () => {
    it('verify title-positive', () => {

    //write the steps
    // launching the application
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        //veriyfied titile (asserstion)
        cy.title().should('eq','OrangeHRM')
    })

    it('verify title-negative test', () => {

        //write the steps
        // launching the application
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            //veriyfied titile (asserstion)
            cy.title().should('eq','OrangeHRM123')
        })



    
  })