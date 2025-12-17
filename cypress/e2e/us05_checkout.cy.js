import CheckoutPage from '../pages/CheckoutPage';

describe('US05 - Odeme ve Siparis Onayi', () => {
    it('Negatif - Eksik bilgilerle odeme yapilamamali', () => {
        cy.visit('/');
        cy.contains('Tümünü Kabul Et').click({ force: true });

        cy.get('.product-item').first().click({ force: true });
        cy.contains('Sepete Ekle').click({ force: true });
        cy.contains('Sepete Git').click({ force: true });

        CheckoutPage.clickBuy();

        // Negatif kontrol: ödeme adımına geçilmedi
        CheckoutPage.guestCheckoutShouldBeVisible();
    });
});
