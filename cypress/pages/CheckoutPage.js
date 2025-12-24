class CheckoutPage {
    buyButton() {
        return cy.contains('button, a', /Satın Al|Satin Al/i).filter(':visible').first();
    }

    clickBuy() {
        this.buyButton().click({ force: true });
    }
}

export default new CheckoutPage();
