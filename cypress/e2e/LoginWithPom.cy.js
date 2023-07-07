// import Login from "../PageObject/LoginPage";
import Login from "../PageObject/LoginPage2";
describe("pom",()=>{
    //General approach
    it('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[Placeholder='Password']").type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');
    })

    //with page object model
    it.only('LoginTest',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/");
       
        const ln=new Login();
        ln.setUserName("Admin");
        ln.setPassword("admin123");
        ln.clickSubmit();
        ln.veriyLogin();
    })
  })