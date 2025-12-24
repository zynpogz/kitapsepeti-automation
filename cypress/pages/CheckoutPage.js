class CheckoutPage {
    elements = {
        buyBtn: () =>
            cy.contains('a,button', /Satın Al|Alışverişi Tamamla|Ödemeye Geç/i, { timeout: 15000 })
                .should('be.visible')
                .first(),

        guestCheckoutBtn: () =>
            cy.contains('a,button', /Üye Olmadan|Misafir|Devam Et/i, { timeout: 15000 })
                .should('be.visible')
                .first(),

        addressTitle: () =>
            cy.contains(/Adres|Teslimat/i, { timeout: 15000 }).should('be.visible'),
    };

    clickBuy() {
        this.elements.buyBtn().click({ force: true });
    }

    goGuestCheckout() {
        this.elements.guestCheckoutBtn().click({ force: true });
    }
}

export default new CheckoutPage();
