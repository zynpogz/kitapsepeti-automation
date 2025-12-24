import LoginPage from '../pages/LoginPage';

describe('US01 - User Login', () => {
    let email;
    let password;

    before(() => {
        email = Cypress.env('USER_EMAIL');
        password = Cypress.env('USER_PASSWORD');

        expect(email, 'USER_EMAIL env tanımlı olmalı').to.be.a('string').and.not.be.empty;
        expect(password, 'USER_PASSWORD env tanımlı olmalı').to.be.a('string').and.not.be.empty;
    });

    beforeEach(() => {
        LoginPage.visit();
    });

    it('Pozitif - Geçerli bilgilerle giriş yapılabilmeli', () => {
        LoginPage.login(email, password);
        cy.contains(/çıkış|logout|hesabım/i, { timeout: 15000 }).should('be.visible');
    });

    it('Negatif - Yanlış şifre ile giriş yapılmamalı', () => {
        LoginPage.login(email, 'YANLIS_SIFRE_12345');
        cy.contains(/hatalı|yanlış|geçersiz|şifre/i, { timeout: 15000 }).should('be.visible');
    });
});
