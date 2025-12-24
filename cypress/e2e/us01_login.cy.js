import LoginPage from '../pages/LoginPage';

describe('US01 - User Login', () => {
    it('Pozitif - Geçerli bilgilerle giriş yapılabilmeli', () => {
        LoginPage.visit();
        LoginPage.openLogin();
        LoginPage.login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'));

        // Basit doğrulama (profil/çıkış vb. görünsün)
        cy.contains(/Çıkış|Hesabım/i, { timeout: 10000 }).should('exist');
    });

    it('Negatif - Yanlış şifre ile giriş yapılmamalı', () => {
        LoginPage.visit();
        LoginPage.openLogin();
        LoginPage.login(Cypress.env('USER_EMAIL'), 'yanlisSifre123');

        cy.contains(/hatalı|yanlış|geçersiz/i, { timeout: 10000 }).should('exist');
    });
});
