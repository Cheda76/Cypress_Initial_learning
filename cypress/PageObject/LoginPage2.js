//Method2
class Login
{
    txtUserName="input[placeholder='Username']";
    txtPassword="input[Placeholder='Password']";
    btnSubmit="button[type='submit']";
    lblmsg=".oxd-topbar-header-breadcrumb > .oxd-text";
    setUserName(username)
    {
        cy.get(this.txtUserName).type(username);
    }

    setPassword(password)
    {
        cy.get(this.txtPassword).type(password);
    }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click();
    }

    veriyLogin()
    {
        cy.get(this.lblmsg).should('have.text','Dashboard');
    }
}

export default Login;