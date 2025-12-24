import ProductPage from '../pages/ProductPage';

describe('US03 - Ürün Detay ve Sepete Ekleme', () => {
    it('Pozitif - Ürün sepete eklenebilmeli', () => {
        cy.visit('/');
        cy.acceptCookies();

        ProductPage.openFirstProduct();
        ProductPage.addToCart();

        cy.contains(/Sepete eklendi|Sepet/i, { timeout: 10000 }).should('exist');
    });

    it('Negatif - Sepete Ekle butonu görünür olmalı', () => {
        cy.visit('/');
        cy.acceptCookies();

        ProductPage.openFirstProduct();
        ProductPage.elements.addToCartBtn().should('be.visible');
    });
});
