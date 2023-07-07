// go 
describe('mysuite',()=>{
    it('NavigationTest',()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq','Your Store'); //Home page

        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text','Cameras');//camara
        cy.go('back');//cy.go(-1)
        cy.title().should('eq','Your Store'); //Home page


        cy.go('forward'); //cy.go(1) // again go back to camara page
        cy.get("div[id='content'] h2").should('have.text','Cameras');

        cy.reload(); // reload the page
    })


})