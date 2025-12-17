import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';

describe('US04 - Sepet Yonetimi', () => {
    it('Pozitif - Sepette urun adedi artirilabilmeli', () => {
        cy.visit('/');
        cy.contains('Tümünü Kabul Et').click({ force: true });

        // Ürün sepete eklensin
        ProductPage.openFirstProduct();
        ProductPage.addToCart();
        cy.contains('Sepete Git').click({ force: true });

        // Sepette adet artır
        CartPage.increaseQuantity();

        // Sepet boş değil
        CartPage.elements.cartItem().should('exist');
    });
});
