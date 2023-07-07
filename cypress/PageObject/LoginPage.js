//Method1
class Login
{
    setUserName(username)
    {
        cy.get("input[placeholder='Username']").type(username);
    }

    setPassword(password)
    {
        cy.get("input[Placeholder='Password']").type(password);
    }

    clickSubmit()
    {
        cy.get('.oxd-button').click();
    }

    veriyLogin()
    {
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text','Dashboard');
    }
}

export default Login;