import SearchPage from '../pages/SearchPage';

describe('US02 - Urun Arama', () => {

    it('Pozitif - Urun adi ile arama yapilabilmeli', () => {
        SearchPage.visitHome();

        // Arama alanı var mı
        cy.get('input[type="search"]').should('be.visible');

        SearchPage.searchProduct('roman');

        // Arama sayfası açıldı mı
        cy.url().should('include', 'arama');

        // En az 1 ürün geldi mi
        cy.get('.product-item')
            .should('have.length.greaterThan', 0);
    });

});
