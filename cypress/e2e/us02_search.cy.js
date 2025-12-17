import SearchPage from '../pages/SearchPage';

describe('US02 - Urun Arama', () => {
    it('Pozitif - Gecerli urun adi ile arama yapilabilmeli', () => {
        SearchPage.visitHome();

        SearchPage.searchProduct('roman');

        // Arama sonuç sayfası açıldı mı
        cy.url().should('include', 'arama');

        // Sayfa boş da olabilir ama crash olmamalı
        cy.get('body').should('be.visible');
    });
});
