import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('US05 - Ödeme', () => {
    it('Negatif - Eksik bilgilerle ödeme yapılmamalı', () => {
        cy.visit('/');
        cy.acceptCookies();

        ProductPage.openFirstProduct();
        ProductPage.addToCart();
        ProductPage.goToCart();

        CheckoutPage.clickBuy();

        // Ödeme sayfasına geçmemeli (url kontrol)
        cy.url().should('not.include', 'payment');
    });
});
