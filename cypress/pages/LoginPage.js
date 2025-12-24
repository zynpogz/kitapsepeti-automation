class LoginPage {
    elements = {
        openAccountPanel: () =>
            cy.get('a[href="#header-member-panel-322"][data-toggle="drawer"]').first(),

        emailInput: () =>
            cy.get('input[type="email"]').filter(':visible').first(),

        passwordInput: () =>
            cy.get('input[type="password"]').filter(':visible').first(),

        submitBtn: () => cy.get('#login-btn-322').should('be.visible'),
    };

    visit() {
        cy.visit('/');
        cy.acceptCookies();
    }

    login(email, password) {
        this.elements.openAccountPanel().click();
        this.elements.emailInput().clear().type(email, { log: false });
        this.elements.passwordInput().clear().type(password, { log: false });
        this.elements.submitBtn().click();
    }
}

export default new LoginPage();
