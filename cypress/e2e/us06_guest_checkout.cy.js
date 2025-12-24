import ProductPage from '../pages/ProductPage';
import CheckoutPage from '../pages/CheckoutPage';

describe('US06 - Guest Checkout', () => {
    it('Pozitif - Üye olmadan satın alma adımına geçilebilmeli', () => {
        cy.visit('/');
        cy.acceptCookies();

        ProductPage.openFirstProduct();
        ProductPage.addToCart();
        ProductPage.goToCart();

        CheckoutPage.clickBuy();
        CheckoutPage.goGuestCheckout();

        CheckoutPage.elements.addressTitle().should('be.visible');
    });
});
