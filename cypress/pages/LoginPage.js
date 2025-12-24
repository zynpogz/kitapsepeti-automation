class LoginPage {
    headerLoginBtn() {
        return cy.contains('a, button', 'Giriş Yap').filter(':visible').first();
    }

    emailInput() {
        return cy.get('input[type="email"], input[name*="email"]').filter(':visible').first();
    }

    passwordInput() {
        return cy.get('input[type="password"]').filter(':visible').first();
    }

    submitBtn() {
        return cy.get('form:visible').first().contains('button, input', /Giriş Yap/i);
    }

    visit() {
        cy.visit('/');
        cy.acceptCookies();
    }

    openLogin() {
        this.headerLoginBtn().click({ force: true });
    }

    login(email, password) {
        this.emailInput().clear().type(email, { log: false });
        this.passwordInput().clear().type(password, { log: false });
        this.submitBtn().click({ force: true });
    }
}

export default new LoginPage();
