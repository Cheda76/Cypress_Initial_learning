describe ('alerst',()=>{
    it('js alert',()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsAlert()"]').click()

        cy.on('window:alert',(t)=>{
            expect(t).to.contains('I am a JS Alert');
        
        })

    })

    it.only('js alert',()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
        cy.get('button[onclick="jsConfirm()"]').click()

        // cy.on('window:alert',(t)=>{
        //     expect(t).to.contains('I am a JS Alert');
        
        // })
         
        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })
        //cypress autoamtically closed alert window by using ok button-default
        cy.get('#result').should('have.text','You clicked: Ok')

    })
})