import ProductPage from '../pages/ProductPage';

describe('US03 - Urun Detay ve Sepete Ekleme', () => {
    it('Pozitif - Urun detaya gidilip sepete eklenebilmeli', () => {
        cy.visit('/');
        cy.contains('Tümünü Kabul Et').click({ force: true });

        ProductPage.openFirstProduct();
        ProductPage.addToCart();

        ProductPage.elements.successPopup().should('exist');
    });
});
