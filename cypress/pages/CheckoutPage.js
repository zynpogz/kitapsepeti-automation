class CheckoutPage {
    elements = {
        buyButton: () => cy.contains('Satın Al'),
        guestCheckoutButton: () => cy.contains('Üye Olmadan Devam Et'),
        addressTitle: () => cy.contains('Adres Bilgileri'),
    };

    clickBuy() {
        this.elements.buyButton().click({ force: true });
    }

    guestCheckoutShouldBeVisible() {
        this.elements.guestCheckoutButton().should('be.visible');
    }

    clickGuestCheckout() {
        this.elements.guestCheckoutButton().click({ force: true });
    }

    addressPageShouldBeOpened() {
        this.elements.addressTitle().should('exist');
    }
}

export default new CheckoutPage();
