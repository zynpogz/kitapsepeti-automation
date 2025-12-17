import CheckoutPage from '../pages/CheckoutPage';

describe('US06 - Misafir Olarak Satin Alma Akisi', () => {
    it('Pozitif - Uye olmadan satin alma adimina gecilebilmeli', () => {
        cy.visit('/');
        cy.contains('Tümünü Kabul Et').click({ force: true });

        // Ürün seç
        cy.get('.product-item').first().click({ force: true });

        // Sepete ekle
        cy.contains('Sepete Ekle').click({ force: true });
        cy.contains('Sepete Git').click({ force: true });

        // Satın al
        CheckoutPage.clickBuy();

        // Üye olmadan devam et görünmeli
        CheckoutPage.guestCheckoutShouldBeVisible();

        // Üye olmadan devam et
        CheckoutPage.clickGuestCheckout();

        // Adres sayfası açılmalı
        CheckoutPage.addressPageShouldBeOpened();
    });
});
