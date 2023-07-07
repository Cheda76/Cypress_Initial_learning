// click on link using label
// overwriting existing contain() command
// re-usuable custom command

describe('Custom commands',()=>{

    // direct approach:
    // it.only("handling links",()=>{
    //     cy.visit('https://demo.nopcommerce.com/');
    //     cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
    //     cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    // })

    it("handling links",()=>{
        cy.visit('https://demo.nopcommerce.com/');
        //direct- without using custom command
        // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

        //using custom command
        cy.clicklink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })
    it('overwriting existing command', ()=>{
        cy.visit('https://demo.nopcommerce.com/');
        cy.clicklink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch');
    })

    it.only("Login command",()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.clicklink('Log in'); // custom command 
        cy.Loginapp('testing@gmail.com','test123'); // before that do register on actual website
        cy.get('.ico-account').should('have.text', 'My account');

    })
}) 
