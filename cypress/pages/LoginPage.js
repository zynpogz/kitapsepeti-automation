class LoginPage {
    elements = {
        emailInput: () => cy.get('input#header-email'),
        passwordInput: () => cy.get('input#header-password'),
        loginButton: () => cy.contains('Giriş Yap'),
    };

    visitLogin() {
        cy.visit('/');

        // Login popup'ı aç
        cy.get('a[href*="login"], a[href*="uye"]')
            .first()
            .click({ force: true });
    }

    login(email, password) {
        // Popup görünür olmasa bile yaz
        this.elements.emailInput().type(email, { force: true });
        this.elements.passwordInput().type(password, { force: true });
        this.elements.loginButton().click({ force: true });
    }
}

export default new LoginPage();
