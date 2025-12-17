import LoginPage from '../pages/LoginPage';

describe('User Login', () => {
    it('Pozitif - Gecerli bilgilerle giris yapilabilmeli', () => {
        LoginPage.visitLogin();
        LoginPage.login('test@mail.com', 'Test1234');

        cy.url().should('not.eq', 'https://www.kitapsepeti.com/');
    });

    it('Negatif - Yanlis sifre ile giris yapilamamali', () => {
        LoginPage.visitLogin();
        LoginPage.login('test@mail.com', 'YanlisSifre123');

        // Hata mesajı veya login başarısızlığı kontrolü
        cy.contains('hatalı', { matchCase: false }).should('exist');
    });
});
